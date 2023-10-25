const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'First Expense',
        amount: 12.99,
        date: new Date().toISOString(),
    },
    {
        id: 'e2',
        title: 'Second Expense',
        amount: 15.99,
        date: new Date().toISOString(),
    },
];

// /expenses => shared layout
import { Outlet } from '@remix-run/react';
import expensesStyles from '~/styles/expenses.css';
import ExpensesList from '~/components/expenses/ExpensesList';



export default function ExpensesLayout() {
    return (
    <>
    <Outlet />
    <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
    </main>
    </>
    );
}

export function links() {
    return [{ rel: 'stylesheet', href: expensesStyles }];
  }