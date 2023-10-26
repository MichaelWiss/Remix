// /expenses/analysis
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

import ExpensesStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';

export default function ExpensesAnalysisPage() {
    return (
    <main>
            <Chart expenses={DUMMY_EXPENSES }/>
            <ExpensesStatistics expenses={DUMMY_EXPENSES }/>
    </main>
    );
}