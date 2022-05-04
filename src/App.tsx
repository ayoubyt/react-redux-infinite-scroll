import "./styles.css";
import { HeaderSection } from "./containers/header-section/index";
import MainSection from "./containers/main-section";

export default function App() {
  return (
    <div className="App">
      <HeaderSection />
      <MainSection />
    </div>
  );
}
