import { useState } from "react";
import UserForm from "./components/Form";
import CardBackView from "./components/VisaCard/back";
import CardFrontView from "./components/VisaCard/Front";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardMM, setCardMM] = useState("");
  const [cardYY, setCardYY] = useState("");

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <CardFrontView
        cardNumber={cardNumber}
        cardHolder={cardHolder}
        cardMM={cardMM}
        cardYY={cardYY}
      />
      <CardBackView />
      <UserForm
        cardNumberHandler={setCardNumber}
        cardHolderHandler={setCardHolder}
        cardMMHandler={setCardMM}
        cardYYHandler={setCardYY}
      />
    </div>
  );
}

export default App;
