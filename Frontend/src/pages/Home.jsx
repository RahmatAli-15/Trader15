import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIUrl, handleError, handleSuccess } from '../utils';
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css';
import ExpenseTable from './ExpenseTable';
import ExpenseDetails from './ExpenseDetails'; 
import ExpenseForm from './ExpenseForm';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [incomeAmt, setIncomeAmt] = useState(0);
    const [expenseAmt, setExpenseAmt] = useState(0);
    const [error, setError] = useState(null); // New state for managing errors
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    useEffect(() => {
        const amounts = expenses.map(item => item.amount);
        const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
        const exp = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1;
        setIncomeAmt(income);
        setExpenseAmt(exp);
    }, [expenses]);

    const deleteExpens = async (id) => {
        try {
            const url = `${APIUrl}/expenses/${id}`;
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                },
                method: "DELETE"
            };
            const response = await fetch(url, headers);
            if (response.status === 403) {
                localStorage.removeItem('token');
                navigate('/login');
                return;
            }
            const result = await response.json();
            handleSuccess(result?.message);
            setExpenses(result.data);
        } catch (err) {
            console.error(err); // Log the error
            if (!toast.isActive("delete-error")) { // Prevent multiple toasts
                toast.error('Error deleting expense: ' + err.message, { toastId: "delete-error" });
            }
            setError(err.message); // Update error state
        }
    };

    const fetchExpenses = async () => {
        try {
            const url = `${APIUrl}/expenses`;
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            };
            const response = await fetch(url, headers);
            if (response.status === 403) {
                localStorage.removeItem('token');
                navigate('/login');
                return;
            }
            const result = await response.json();
            setExpenses(result.data);
        } catch (err) {
            console.error(err); // Log the error
            if (!toast.isActive("fetch-error")) { // Prevent multiple toasts
                toast.error('Error fetching expenses: ' + err.message, { toastId: "fetch-error" });
            }
            setError(err.message); // Update error state
        }
    };

    const addTransaction = async (data) => {
        try {
            const url = `${APIUrl}/expenses`;
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            };
            const response = await fetch(url, headers);
            if (response.status === 403) {
                localStorage.removeItem('token');
                navigate('/login');
                return;
            }
            const result = await response.json();
            handleSuccess(result?.message);
            setExpenses(result.data);
        } catch (err) {
            console.error(err); // Log the error
            if (!toast.isActive("post-error")) { // Prevent multiple toasts
                toast.error('Error adding transaction: ' + err.message, { toastId: "post-error" });
            }
            setError(err.message); // Update error state
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    const totalProfit = expenses.reduce((sum, expense) => sum + (expense.profit || 0), 0);
    const totalLoss = expenses.reduce((sum, expense) => sum + (expense.loss || 0), 0);
    const netProfit = totalProfit - totalLoss;

    return (
        <div>
            {/* ToastContainer for displaying notifications */}
            <ToastContainer />

            {/* Navbar */}
            <div className="navbar bg-gray-900 text-white p-4">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-extrabold">
                        Welcome, {loggedInUser}
                    </h1>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 shadow-md"
                    >
                        Logout
                    </button>
                </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-5 font-extrabold text-center tracking-wide text-white hover:scale-105 transform transition-all duration-300">
                Unlock Your Full Trading Potential
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text hover:from-yellow-500 hover:to-pink-600 transition duration-300 ease-in-out">
                    {" "} TradePort
                </span>
            </h1>
            {/* Pass profit, loss, and net profit to ExpenseDetails component */}
            <ExpenseDetails
                totalProfit={totalProfit}
                totalLoss={totalLoss}
                netProfit={netProfit}
            />
            <ExpenseForm addTransaction={addTransaction} />
            <ExpenseTable expenses={expenses} deleteExpens={deleteExpens} />
        </div>
    );
}

export default Home;
