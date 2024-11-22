const UserModel = require("../Models/User");

// Function to add a transaction
const addTransaction = async (req, res) => {
    const { _id } = req.user;
    const expenseData = req.body;
    console.log(_id, expenseData);

    try {
        const userData = await UserModel.findByIdAndUpdate(
            _id,
            { $push: { expenses: expenseData } },
            { new: true }
        );
        
        res.status(200).json({
            message: "Trade added successfully",
            success: true,
            data: userData?.expenses
        });
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message,
            success: false
        });
    }
};

// Function to get all transactions
const getAllTransactions = async (req, res) => {
    const { _id } = req.user;
    console.log(_id);

    try {
        const userData = await UserModel.findById(_id).select('expenses');
        
        res.status(200).json({
            message: "Fetched Trades successfully",
            success: true,
            data: userData?.expenses
        });
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message,
            success: false
        });
    }
};

// Function to delete a transaction by expense ID
const deleteTransaction = async (req, res) => {
    const { _id } = req.user;
    const expenseId = req.params.expenseId;

    try {
        const userData = await UserModel.findByIdAndUpdate(
            _id,
            { $pull: { expenses: { _id: expenseId } } },
            { new: true }
        );
        
        res.status(200).json({
            message: "Trade deleted successfully",
            success: true,
            data: userData?.expenses
        });
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message,
            success: false
        });
    }
};

module.exports = {
    addTransaction,
    getAllTransactions,
    deleteTransaction
};
