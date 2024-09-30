import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <div className="flex-grow"></div>
      <Footer/>
    </div>
  )
}

export default App;