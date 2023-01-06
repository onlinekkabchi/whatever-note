package dev.whatevernote.be.web.controller;

import dev.whatevernote.be.common.BaseResponse;
import dev.whatevernote.be.service.CardService;
import dev.whatevernote.be.service.dto.request.CardRequestDto;
import dev.whatevernote.be.service.dto.response.CardDetailResponseDto;
import dev.whatevernote.be.service.dto.response.CardResponseDto;
import dev.whatevernote.be.service.dto.response.CardResponseDtos;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/note/{noteId}/card")
public class CardController {

	private final CardService cardService;

	public CardController(CardService cardService) {
		this.cardService = cardService;
	}

	@PostMapping
	public BaseResponse<CardResponseDto> create(@RequestBody final CardRequestDto cardRequestDto, @PathVariable final Integer noteId) {
		CardResponseDto cardResponseDto = cardService.create(cardRequestDto, noteId);
		return new BaseResponse("code", "message", cardResponseDto);
	}

	@GetMapping("/{cardId}")
	public BaseResponse<CardDetailResponseDto> findById(@PathVariable final Integer noteId, @PathVariable final Long cardId) {
		CardDetailResponseDto cardDetailResponseDto = cardService.findById(noteId, cardId);
		return new BaseResponse("code", "message", cardDetailResponseDto);
	}

	@GetMapping
	public BaseResponse<CardResponseDtos> findAll(final Pageable pageable, @PathVariable final Integer noteId) {
		CardResponseDtos cardResponseDtos = cardService.findAll(pageable, noteId);
		return new BaseResponse("code", "message", cardResponseDtos);
	}

	@PutMapping("/{cardId}")
	public BaseResponse<CardResponseDto> update(@PathVariable final Integer noteId,
		@PathVariable final Long cardId, @RequestBody final CardRequestDto cardRequestDto) {
		return new BaseResponse("code", "message",
			cardService.update(noteId, cardId, cardRequestDto));
	}

	@DeleteMapping("/{cardId}")
	public BaseResponse<Void> delete(@PathVariable final Long cardId) {
		cardService.delete(cardId);
		return new BaseResponse("code", "message", null);
	}

}
