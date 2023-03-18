import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const ModificationsHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        // data is an object and filteredYear is a string, we need to convert data in string
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={ModificationsHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items2={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
