import React from 'react'
import PlanCard from './components/planCard'

function MonthlyBilling() {
    const plans = [
        {icon:'test', title:'test', price:10.00}
    ];
  return (
    <div>
        {
        plans.map(plan => {
            
        })
        }
    </div>
  )
}

export default MonthlyBilling