package dev.whatevernote.be.service.card;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;

import dev.whatevernote.be.exception.ErrorCodeAndMessages;
import dev.whatevernote.be.exception.not_found.NotFoundCardException;
import dev.whatevernote.be.repository.CardRepository;
import dev.whatevernote.be.repository.ContentRepository;
import dev.whatevernote.be.service.CardService;
import dev.whatevernote.be.service.InitIntegrationTest;
import dev.whatevernote.be.service.domain.Card;
import dev.whatevernote.be.service.domain.Content;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

@DisplayName("통합 테스트 : Card 삭제")
class CardDeleteTest extends InitIntegrationTest {

	private static final int NOTE_ID_1 = 1;

	@Autowired
	private CardService cardService;

	@Autowired
	private CardRepository cardRepository;

	@Autowired
	private ContentRepository contentRepository;

	@Nested
	@DisplayName("카드를 삭제할 때")
	class DeleteTest {

		@Nested
		@DisplayName("정상적인 요청이라면")
		class NormalDeleteTest {

			@DisplayName("주어진 ID의 카드를 삭제 상태로 바꾼다.")
			@Test
			void soft_delete_card(){
			    //given
				List<Card> cards = cardRepository.findAllByNoteIdOrderBySeq(NOTE_ID_1);
				int numberOfCard = cards.size();
				long deleteCardId = 2;

			    //when
				cardService.delete(NOTE_ID_1, deleteCardId, MEMBER_ID);
				Optional<Card> card = cardRepository.findById(deleteCardId);
				List<Card> afterDelete = cardRepository.findAllByNoteIdOrderBySeq(NOTE_ID_1);

				//then
				assertThat(card).isEmpty();
				assertThat(afterDelete).hasSize(numberOfCard-1);
				assertThatThrownBy(() -> cardService.findById(NOTE_ID_1, deleteCardId, MEMBER_ID))
					.isInstanceOf(NotFoundCardException.class)
					.hasMessageContaining(ErrorCodeAndMessages.E404_NOT_FOUND_CARD.getMessage());

			}

			@DisplayName("주어진 ID의 카드에 해당하는 컨텐트를 모두 삭제 상태로 바꾼다.")
			@Test
			void soft_delete_card_and_content(){
				//given
				long deleteCardId = 2;
				List<Card> cards = cardRepository.findAllByNoteIdOrderBySeq(NOTE_ID_1);
				int numberOfCard = cards.size();

				//when
				cardService.delete(NOTE_ID_1, deleteCardId, MEMBER_ID);
				Optional<Card> card = cardRepository.findById(deleteCardId);
				List<Card> afterDelete = cardRepository.findAllByNoteIdOrderBySeq(NOTE_ID_1);
				List<Content> afterDeleteContents = contentRepository.findAllByCardIdOrderBySeqAsc(deleteCardId);

				//then

				// card
				assertThat(card).isEmpty();
				assertThat(afterDelete).hasSize(numberOfCard-1);
				assertThatThrownBy(() -> cardService.findById(NOTE_ID_1, deleteCardId, MEMBER_ID))
					.isInstanceOf(NotFoundCardException.class)
					.hasMessageContaining(ErrorCodeAndMessages.E404_NOT_FOUND_CARD.getMessage());

				// content
				assertThat(afterDeleteContents).isEmpty();
			}
		}
	}

}
