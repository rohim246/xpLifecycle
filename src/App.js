import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="container">
      <Experience title="React Lifecycle" />
      <Counter title="React Counter App" />
      <Calculator title="React XY Calculator App" />
    </div>
  );
}

export default App;
