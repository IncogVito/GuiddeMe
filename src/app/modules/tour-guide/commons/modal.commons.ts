import {DialogDecisionData} from "../../shared/components/dialog-decision-primary/dialog-decision-primary.component";
import {NO_MESSAGE, YES_MESSAGE} from "./general.commons";

export const ENABLING_QUIZ_QUESTION_MESSAGE = '<p>W wybranej trasie jest dostępny quiz. Czy chcesz go włączyć?</p>' +
  '<span class="u-fs-08 text-center">Quiz można włączyć lub wyłączyć w każdej chwili</span>';
export const ENABLING_QUIZ_TITLE = 'Dostępny quiz';

export const DISABLE_QUIZ_QUESTION_MESSAGE = '<p>Czy na pewno chcesz wyłączyć quiz?</p>';
export const DISABLE_QUIZ_TITLE = 'Wyłączanie quizu';

export const ENABLE_QUIZ_DATA: DialogDecisionData = {
  headerTitle: ENABLING_QUIZ_TITLE,
  htmlText: ENABLING_QUIZ_QUESTION_MESSAGE,
  rejectButtonLabel: NO_MESSAGE,
  acceptButtonLabel: YES_MESSAGE
}

export const DISABLE_QUIZ_CONFIRMATION: DialogDecisionData = {
  headerTitle: DISABLE_QUIZ_TITLE,
  htmlText: DISABLE_QUIZ_QUESTION_MESSAGE,
  rejectButtonLabel: NO_MESSAGE,
  acceptButtonLabel: YES_MESSAGE

}

export const META_MODAL_TITLE = 'Meta!';
export const META_MODAL_TEXT = 'Brawo, zakończyłeś trasę';
export const META_MODAL_BUTTON_LABEL = 'Do Menu';

export const createModalFinishedData = (tourTitle: string): DialogDecisionData => {
  return {
    headerTitle: META_MODAL_TITLE,
    htmlText: `${META_MODAL_TEXT} ${tourTitle}`,
    acceptButtonLabel: META_MODAL_BUTTON_LABEL,
  }
}
