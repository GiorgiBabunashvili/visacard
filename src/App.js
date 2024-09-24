import { useState } from "react";
import UserForm from "./components/Form";
import CardBackView from "./components/VisaCard/back";
import CardFrontView from "./components/VisaCard/Front";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardMM, setCardMM] = useState("");
  const [cardYY, setCardYY] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  const [cardView, setCardView] = useState("Front");

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {cardView === "Front" && <CardFrontView />}
      {cardView === "Back" && <CardBackView />}
      <UserForm />
    </div>
  );
}

export default App;
