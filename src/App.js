import Expenses from "./components/Expenses";
import bulba from './bulba.PNG';
import'./App.css'

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className='WholePage'>
      <h2>Bulbasaur best boi.</h2>
      <h2>Charmander sucks.</h2>
      <img src = {bulba} alt='best boi' width = '325' height = '400'></img>
      {/*can use components as custom HTML elements*/}
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
