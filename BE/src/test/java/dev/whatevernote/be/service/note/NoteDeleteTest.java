package dev.whatevernote.be.service.note;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import dev.whatevernote.be.exception.ErrorCodeAndMessages;
import dev.whatevernote.be.exception.not_found.NotFoundNoteException;
import dev.whatevernote.be.repository.CardRepository;
import dev.whatevernote.be.repository.ContentRepository;
import dev.whatevernote.be.repository.NoteRepository;
import dev.whatevernote.be.service.InitIntegrationTest;
import dev.whatevernote.be.service.NoteService;
import dev.whatevernote.be.service.domain.Card;
import dev.whatevernote.be.service.domain.Content;
import dev.whatevernote.be.service.domain.Note;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

@DisplayName("통합 테스트 : Note 삭제")
class NoteDeleteTest extends InitIntegrationTest {

	@Autowired
	private NoteService noteService;

	@Autowired
	private NoteRepository noteRepository;

	@Autowired
	private CardRepository cardRepository;

	@Autowired
	private ContentRepository contentRepository;

	@Nested
	@DisplayName("노트를 삭제할 때")
	class DeleteTest {

		@Nested
		@DisplayName("정상적인 요청이라면")
		class NormalDeleteTest {

			@DisplayName("주어진 ID의 노트를 삭제 상태로 바꾼다.")
			@Test
			void soft_delete_note(){
			    //given
				List<Note> notes = noteRepository.findAllByMemberIdOrderBySeq(MEMBER_ID);
				int deleteNoteId = notes.get(notes.size()-1).getId();
				int numberOfNote = notes.size();

				//when
				noteService.delete(deleteNoteId, MEMBER_ID);
				Optional<Note> note = noteRepository.findById(deleteNoteId);
				List<Note> afterDelete = noteRepository.findAllByMemberIdOrderBySeq(MEMBER_ID);

				//then
				assertThat(note).isEmpty();
				assertThat(afterDelete).hasSize(numberOfNote-1);
				assertThatThrownBy(() -> noteService.findById(deleteNoteId, MEMBER_ID))
					.isInstanceOf(NotFoundNoteException.class)
					.hasMessageContaining(ErrorCodeAndMessages.E404_NOT_FOUND_NOTE.getMessage());
			}

			@DisplayName("주어진 ID의 노트에 해당하는 카드, 컨텐트를 모두 삭제 상태로 바꾼다.")
			@Test
			void soft_delete_note_and_card_and_content(){
				//given
				List<Note> notes = noteRepository.findAllByMemberIdOrderBySeq(MEMBER_ID);
				int deleteNoteId = notes.get(0).getId();
				List<Card> cards = cardRepository.findAllByNoteIdOrderBySeq(deleteNoteId);
				List<Content> contents = new ArrayList<>();
				for (Card card : cards) {
					contents.addAll(contentRepository.findAllByCardIdOrderBySeqAsc(card.getId()));
				}

				int numberOfNote = notes.size();

				//when
				noteService.delete(deleteNoteId, MEMBER_ID);
				Optional<Note> note = noteRepository.findById(deleteNoteId);
				List<Note> notesAfterDelete = noteRepository.findAllByMemberIdOrderBySeq(MEMBER_ID);

				//then
				// note
				assertThat(note).isEmpty();
				assertThat(notesAfterDelete).hasSize(numberOfNote-1);
				assertThatThrownBy(() -> noteService.findById(deleteNoteId, MEMBER_ID))
					.isInstanceOf(NotFoundNoteException.class)
					.hasMessageContaining(ErrorCodeAndMessages.E404_NOT_FOUND_NOTE.getMessage());

				// card
				for (Card card:cards) {
					assertThat(cardRepository.findById(card.getId())).isEmpty();
				}

				// content
				for (Content content : contents) {
					assertThat(contentRepository.findById(content.getId())).isEmpty();
				}


			}
		}
	}



}
