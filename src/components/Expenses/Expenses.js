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

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={ModificationsHandler} />
                {props.items.map(expense => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
