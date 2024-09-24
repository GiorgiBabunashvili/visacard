import { useReducer } from "react";
import UserForm from "./components/Form";
import CardBackView from "./components/VisaCard/back";
import CardFrontView from "./components/VisaCard/Front";
import { visaCardReducer } from "./state/Reducer/VisaCard";
import { visaCardState } from "./state/State/VisaCard";

function App() {
  const [stateVisaCard, dispatchVisaCard] = useReducer(
    visaCardReducer,
    visaCardState
  );

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {stateVisaCard.cardView === "Front" && (
        <CardFrontView state={stateVisaCard} />
      )}
      {stateVisaCard.cardView === "Back" && (
        <CardBackView state={stateVisaCard} />
      )}
      <UserForm dispatch={dispatchVisaCard} />
    </div>
  );
}

export default App;
