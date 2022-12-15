"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor(name) {
        this.name = name;
        this.branches = [];
    }
    addBranch(branch) {
        if (this.checkBranch(branch)) {
            return false;
        }
        this.branches.push(branch);
        return true;
    }
    addCustomer(branch, customer) {
        if (this.checkBranch(branch)) {
            branch.addCustomer(customer);
            return true;
        }
        else {
            return false;
        }
    }
    addCustomerTransaction(branch, id, amount) {
        if (branch.addCustomerTransaction(id, amount))
            return true;
        return false;
    }
    findBranchByName(branchName) {
        let matchedBranches = [];
        this.branches.forEach((branch) => {
            if (branch.getName() === branchName) {
                matchedBranches.push(branch);
            }
        });
        return matchedBranches.length > 0 ? matchedBranches : null;
    }
    checkBranch(branch) {
        if (this.branches.includes(branch))
            return true;
        return false;
    }
    listCustomers(branch, showTransactions) {
        if (showTransactions) {
            this.branches.forEach((branch) => {
                branch.getCustomers().forEach((customer) => {
                    console.log("Customer Name", customer.getName());
                    console.log("Customer Id", customer.getId());
                    console.log("Customer Transactions", customer.getTransactions());
                });
            });
        }
        return this.checkBranch(branch);
    }
}
exports.Bank = Bank;
