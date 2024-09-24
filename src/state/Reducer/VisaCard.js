import { visaCardState } from "../State/VisaCard";

export function visaCardReducer(state, action) {
  switch (action.type) {
    case "changeCardNumber":
      return { ...state, cardNumber: action.value };

    case "changeCardHolder":
      return { ...state, cardHolder: action.value };

    case "changeCardMM":
      return { ...state, cardMM: action.value };

    case "changeCardYY":
      return { ...state, cardYY: action.value };

    case "changeCardCVV":
      return { ...state, cardCVV: action.value };

    case "changeCardView":
      return { ...state, cardView: action.value };
    case "reset":
      return visaCardState;

    default:
      break;
  }
}
