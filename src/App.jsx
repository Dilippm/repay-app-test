import "./App.css";
import Accounts from "./components/Accounts/Accounts";
import Balance from "./components/Balance/Balance";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Accounts">
          <Accounts />
        </div>
        <div className="divider"></div>
        <div className="Balance">
          <Balance />
        </div>
      </div>
    </div>
  );
}

export default App;
