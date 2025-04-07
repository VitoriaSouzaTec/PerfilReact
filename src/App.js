import "./styles.css";
import Header from "./componets/Header";
import SectionJogos from "./componets/SectionJogos";
import SectionCanais from "./componets/SectionCanais";
import RedesSociais from "./componets/RedesSociais";

export default function App() {
  return (
    <div className="App">
      <Header />
      <SectionJogos />
      <SectionCanais />
      <RedesSociais />
    </div>
  );
}
