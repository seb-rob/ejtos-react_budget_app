import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if (newBudget > 20000){
            alert("budget cannot exceed £20000")
            return;
        }
        if(newBudget < budget){
            alert("cannot reduce the budget value lower than the spending")
            return
        }
        dispatch({
            type: "SET_BUDGET",
            payload: newBudget
        })
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" min={budget} step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
