import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
    const SaveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() // to create a random number as id of the event.
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
