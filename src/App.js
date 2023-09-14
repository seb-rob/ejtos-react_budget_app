import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from "./components/Remaining";
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';


import { AppProvider } from './context/AppContext';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {/* Add Budget component here under */} 
                    {/* // Budget component */}
                    <div className='col-sm'>
                        <Budget />
                    </div>       

                    {/* Add Remaining component here under */} 
                    {/* //Remaining component */}
                    <div className='col-sm'>
                        <Remaining />
                    </div>       

                    {/* Add ExpenseTotal component here under */} 
                    {/* //ExpenseTotal component */}
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>  

                    {/* Currency  */}
                    <div className='col-sm'>
                        <Currency />
                    </div>            
                </div>
                <div className="row mt-3">
                    <ExpenseList />
                </div>
                <div className="row mt-3">
                    <ExpenseItem />
                </div>
                <div className="row mt-3">
                    <AllocationForm />
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
