import React from 'react'
import toppings from './data'

function Toppinglist({ selectedToppings, setSelectedToppings, disabled }) {

  const handleChange = (topping) => {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter(t => t !== topping));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  return (
    <div className='flex flex-col justify-between gap-3'>
      {toppings.map((topping) => (
        <div key={topping.name} className='flex gap-3'>
          <input type="checkbox" className='checkbox checkbox-success' 
          disabled={disabled}
          checked={selectedToppings.includes(topping)}
            onChange={() => handleChange(topping)} />
          {topping.name} - ฿{topping.price.toFixed(2)}
        </div>
      ))}
    </div>
  )
}

export default Toppinglist