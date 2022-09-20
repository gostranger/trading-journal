import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import CardContainer from "./Component/Container/CardContainer";
import Card from "./Component/Container/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer>
        <Card cardSubtitle={"Total Number of Open Trades."} cardTitle={"20"} />
      </CardContainer>
      <Footer />
    </div>
  );
}

export default App;
