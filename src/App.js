import './App.css';
import { useState } from 'react';

function App() {

  const [fruits, setFruits] = useState(
    [
      { name: "banana", color: "yellow", price: 2 },
      { name: "cherry", color: "red", price: 3 },
      { name: "strawberry", color: "red", price: 4 },
    ]
  );

  function filterRedFruits(array) {

    const filter = fruits.filter((array) =>  array.color === 'red')

    return setFruits(filter)

  } 

  const frutas = fruits.map((fruits) => {

    return (
      <li>
        {fruits.name}
      </li>
    )

  })

  const totalPrice = fruits.reduce((acc, valorAtual) => acc + valorAtual.price ,0)
    
  return (

    <div className="App">
      <header className="App-header">
        <div className='Box'>
          <span>Preço Total = {totalPrice}</span>
          <span>{frutas}</span>
          <button onClick={filterRedFruits} >Mostrar Frutas Vermelhas</button>
        </div>
      </header>
    </div>

  );

}

export default App;
