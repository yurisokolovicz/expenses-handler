import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const ModificationsHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        // data is an object and filteredYear is a string, we need to convert data in string
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found!</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={ModificationsHandler} />
                {expensesContent}
            </Card>
        </div>
    );
};

export default Expenses;
