import React from 'react'

function Total({ selectedToppings }) {
  const total = selectedToppings.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <strong>Total</strong> ฿{total.toFixed(2)}
    </div>
  )
}

export default Total