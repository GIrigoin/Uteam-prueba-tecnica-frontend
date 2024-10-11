import Cards from "./components/Cards";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gradient-to-b from-red-600 to-red-900 min-h-screen">
      <Navbar />
      <Cards />
      <Form />
    </div>
  );
}

export default App;
