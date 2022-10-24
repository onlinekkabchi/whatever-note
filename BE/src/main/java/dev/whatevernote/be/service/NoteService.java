package dev.whatevernote.be.service;

import dev.whatevernote.be.repository.NoteRepository;
import dev.whatevernote.be.service.domain.Note;
import dev.whatevernote.be.service.dto.request.NoteRequestDto;
import dev.whatevernote.be.service.dto.response.NoteResponseDto;
import dev.whatevernote.be.service.dto.response.NoteResponseDtos;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class NoteService {

	private static final Logger logger = LoggerFactory.getLogger(NoteService.class);
	private static final int DEFAULT_RANGE = 1_000;
	private static final String NOT_FOUNT_NOTE_ID = "존재하지 않는 ID 입니다.";

	private final NoteRepository noteRepository;

	public NoteService(NoteRepository noteRepository) {
		this.noteRepository = noteRepository;
	}

	@Transactional(readOnly = true)
	public NoteResponseDto findById(final Integer noteId) {
		Note note = noteRepository.findById(noteId)
			.orElseThrow(() -> new IllegalArgumentException(NOT_FOUNT_NOTE_ID));
		return NoteResponseDto.from(note);
	}

	@Transactional
	public NoteResponseDto create(NoteRequestDto noteRequestDto) {
		noteRequestDto = editSeq(noteRequestDto);
		final Note savedNote = noteRepository.save(Note.from(noteRequestDto));
		logger.debug("[CREATE Note] ID = {}, SEQ = {}", savedNote.getId(), savedNote.getSeq());
		return NoteResponseDto.from(savedNote);
	}

	@Transactional(readOnly = true)
	public NoteResponseDtos findAll(Pageable pageable) {
		Slice<Note> notes = noteRepository.findAllByOrderBySeq(pageable);
		return NoteResponseDtos.from(notes);
	}

	@Transactional
	public NoteResponseDto update(Integer updateNoteId, NoteRequestDto noteRequestDto) {
		Note note = noteRepository.findById(updateNoteId)
			.orElseThrow(() -> new IllegalArgumentException(NOT_FOUNT_NOTE_ID));
		logger.debug("현재 노트의 Seq={}", note.getSeq());

		if (noteRequestDto.getTitle() != null) {
			note.updateTitle(noteRequestDto.getTitle());
		} else {
			List<Note> notes = noteRepository.findAllByOrderBySeq();
			logger.debug("이전 노트의 개수 = {}, 현재 NoteRequestDto의 Seq ={}", notes.indexOf(note), noteRequestDto.getSeq());
			if (notes.indexOf(note) != noteRequestDto.getSeq()) {
				note.updateSeq(editSeq(noteRequestDto));
			}
		}
		return NoteResponseDto.from(note);
	}

	private NoteRequestDto editSeq(NoteRequestDto noteRequestDto) {
		Integer noteDtoSeq = noteRequestDto.getSeq();
		if (noteDtoSeq == null || noteDtoSeq == 0) {
			return getNoteRequestDtoWithFirstSeq(noteRequestDto);
		}
		return getNoteRequestDto(noteRequestDto);
	}

	private NoteRequestDto getNoteRequestDtoWithFirstSeq(NoteRequestDto noteRequestDto) {
		String noteDtoTitle = noteRequestDto.getTitle();
		Optional<Note> note = noteRepository.findFirstByOrderBySeq();
		return note.map(value -> new NoteRequestDto(value.getSeq() / 2, noteDtoTitle))
			.orElseGet(() -> new NoteRequestDto(DEFAULT_RANGE, noteDtoTitle));
	}

	private NoteRequestDto getNoteRequestDto(NoteRequestDto noteRequestDto) {
		Integer noteDtoSeq = noteRequestDto.getSeq();
		List<Note> notes = noteRepository.findAllByOrderBySeq();
		if (notes.isEmpty()) {
			return new NoteRequestDto(DEFAULT_RANGE, noteRequestDto.getTitle());
		}

		if (notes.size() > noteDtoSeq){
			Integer seq = notes.get(noteDtoSeq).getSeq();
			Integer preSeq = notes.get(noteDtoSeq -1).getSeq();
			logger.debug("seq={}, preSeq={}, updateSeq={}", seq, preSeq, (seq+preSeq)/2);
			return new NoteRequestDto((seq + preSeq) / 2, noteRequestDto.getTitle());
		}

		return new NoteRequestDto((notes.size() + 1) * DEFAULT_RANGE, noteRequestDto.getTitle());
	}
}
