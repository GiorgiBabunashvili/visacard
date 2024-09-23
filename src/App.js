import CardBackView from "./components/VisaCard/back";
import CardFrontView from "./components/VisaCard/Front";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <CardFrontView />
      <CardBackView />
    </div>
  );
}

export default App;
