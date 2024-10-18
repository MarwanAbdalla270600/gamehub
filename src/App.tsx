import NavBar from "./components/Navbar";

function App() {
  return (
    <div>
      <header className="w-full bg-gray-400">
        <NavBar></NavBar>
      </header>
      <div className="flex">
        <div id="aside" className="bg-blue-300 w-60">
          aside
        </div>
        <div id="main" className="flex-1 bg-red-400">
          main
        </div>
      </div>
    </div>
  );
}

export default App;
