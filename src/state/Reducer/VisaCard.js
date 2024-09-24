import { visaCardState } from "../State/VisaCard";

export function visaCardReducer(state, action) {
  switch (action.type) {
    case "changeCardNumber":
      return;

    case "changeCardHolder":
      return;

    case "changeCardMM":
      return;

    case "changeCardYY":
      return;

    case "changeCardCVV":
      return;

    case "reset":
      return visaCardState;

    default:
      break;
  }
}
