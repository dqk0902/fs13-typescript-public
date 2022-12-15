"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(name) {
        this.name = name;
        this.id = String(Math.floor(Math.random() * 1000));
        this.transactions = [];
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTransactions() {
        return this.transactions;
    }
    getBalance() {
        return this.transactions.reduce((a, b) => a + b.amount, 0);
    }
    addTransaction(amount) {
        if (amount > 0) {
            const transaction = {
                amount: amount,
                date: new Date(),
            };
            this.transactions.push(transaction);
            return true;
        }
        return false;
    }
}
exports.Customer = Customer;
