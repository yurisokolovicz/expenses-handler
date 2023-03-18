import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
    const [isEditing, setIsEditing] = useState(false);

    const SaveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString() // to create a random number as id of the event.
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
};

export default NewExpense;
