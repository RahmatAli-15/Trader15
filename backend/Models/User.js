const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    expenses: [
        {
            currencyPair: {
                type: String,
                required: true
            },
            strategyUsed: {
                type: String, // e.g., 'RSI', 'EMA Crossover'
                required: true
            },
            buyOrSell: {  // Replaced totalTimeOfTrade with buyOrSell
                type: String,
                enum: ['buy', 'sell'],  // Ensures only 'buy' or 'sell' are valid values
                required: true
            },
            target: {
                    type: Number, // e.g., 0.5 means 0.5% stop loss
                    required: true
                },
                stoploss: {
                    type: Number, // e.g., 0.5 means 0.5% stop loss
                    required: true
                },
                forexSession: {
                    type: String,
                    enum: ['London', 'New York', 'Tokyo', 'Sydney'], // Restricts to these session options
                    required: true
                },
                profit: {
                    type: Number, // Represents profit amount
                    default: 0
                },
                loss: {
                    type: Number, // Represents loss amount
                    default: 0
                },

                createdAt: {
                    type: Date,
                    default: Date.now
                },
            }
    ]
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
