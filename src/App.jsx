
import './App.css';
import Accounts from './components/Accounts/Accounts';
import Balance from './components/Balance/Balance';
function App() {
  return (
    <div className="App">
      <div className='contianer'>

      <div className='Accounts'>
        <h1>Accounts</h1>
        <Accounts/>
      </div>
      <div className='divider'></div>
      <div className='Balance'>
        <h1>Balances</h1>
        <Balance/>
      </div>
      </div>
     
    </div>
  );
}

export default App;
