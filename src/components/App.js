// import necessary dependencies
import "../styles/App.css";
import Header from "./Header.js";
import AlbumsList from "./AlbumsList";

// defined the JSX structure of the App component
function App() {
  return (
    <div className="App">
      <Header />
      <AlbumsList />
    </div>
  );
}

export default App;
