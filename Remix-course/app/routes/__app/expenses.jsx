
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { FaPlus, FaDownload } from 'react-icons/fa';
import ExpensesList from '~/components/expenses/ExpensesList';
import { getExpenses } from '../../data/expenses.server';



export default function ExpensesLayout() {
    const expenses = useLoaderData();
    console.log(expenses);


    return (
    <>
    <Outlet />
    <main>
        <section id="expenses-actions">
            <Link to="add">
                <FaPlus />
                <span>Add Expense</span>
            </Link>
                <a href="/expenses/raw"></a>
                <FaDownload />
                <span>Load Raw Data</span>
        </section>
        <ExpensesList expenses={} />
    </main>
    </>
    );
}

export async function loader({}) {
    const expenses = await getExpenses(expenses);
    return expenses;
}

