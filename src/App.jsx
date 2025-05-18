import { useState } from 'react';
import Toppinglist from './Toppinglist';
import Total from './Total'
import Summary from './Summary'

function App() {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  return (
    <>
      <div className='p-2 flex flex-col justify-between w-full '>
        <h1 className='mb-4'>Select Topping</h1>
        <Toppinglist
          selectedToppings={selectedToppings}
          setSelectedToppings={setSelectedToppings}
          disabled={showSummary}
        />
        <hr className='p-2 mt-4'/>
        <Total selectedToppings={selectedToppings} />
        <div className='flex justify-around mt-4'>
          <button className='btn btn-active btn-info' onClick={() => setShowSummary(true)}>Check Out</button>
          <button className='btn btn-active btn-error' onClick={() => {
            setSelectedToppings([]);
            setShowSummary(false)
          }}>Reset
          </button>
        </div>
      </div>
      {showSummary && <Summary selectedToppings={selectedToppings} />}

    </>
  )
}

export default App
