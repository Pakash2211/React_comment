import "./styles.css";
import { Show } from "./show";
import { data } from "./data";
export default function App() {
  return (
    <div className="App">
      <Show {...data} />
    </div>
  );
}
