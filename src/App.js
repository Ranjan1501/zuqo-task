import "./App.css";
import HamburgerMenu from "./Components/Hamburger";
import Header from "./Components/Header";
import UsersList from "./Components/UsersList";
import { ErrorBoundary } from "./ErrorHandling/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <UsersList />
      </ErrorBoundary>
      <ErrorBoundary>
        <HamburgerMenu />
      </ErrorBoundary>
    </div>
  );
}

export default App;
