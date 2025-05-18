import React from 'react'

function Summary({ selectedToppings }) {
  const total = selectedToppings.reduce((sum, item) => sum + item.price, 0)
  return (
    <div className='p-2 flex flex-col gap-4'>
      <h2><strong>Summary :</strong></h2>
      <ul>
        {selectedToppings.map((item, index) => (
          <li key={index}>{item.name} - ฿{item.price.toFixed(2)}</li>
        ))}
      </ul>
      <strong>Total: ฿{total.toFixed(2)}</strong>
    </div>
  )
}

export default Summary