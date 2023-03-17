import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2023, 1, 14)
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28)
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2020, 3, 12)
        }
    ];

    const addExpenseHandler = expense => {
        console.log('In App.js');
        console.log(expense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;

// In the example above, the parent App component is passing an array of objects called "expenses" to the child component Expenses, using the "items" property:

// <Expenses items={expenses} />

// The Expenses child component receives the props as an object in its props parameter. To access the data inside the props object, the code is using dot notation to access the properties of the items object passed by the parent component.
