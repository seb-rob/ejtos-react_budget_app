import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button className="btn btn-success" onClick={event=> increaseAllocation(props.name)}>
            <BsFillPatchPlusFill size="35px" />
        </button></td>
        <td><button className="btn btn-success" onClick={event=> decreaseAllocation(props.name)}>
            <BsFillPatchMinusFill size="35px" />
        </button></td>
        <td><TiDelete size='60px' className="btn btn-success" onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
