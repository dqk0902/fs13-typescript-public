"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Branch = void 0;
class Branch {
    constructor(name) {
        this.name = name;
        this.customers = [];
    }
    getName() {
        return this.name;
    }
    getCustomers() {
        return this.customers;
    }
    addCustomer(customer) {
        const haveCustomer = this.customers.includes(customer);
        if (!haveCustomer)
            this.customers.push(customer);
        return haveCustomer;
    }
    addCustomerTransaction(id, amount) {
        let customer = this.customers.find((customer) => customer.getId() === id);
        if (!customer)
            return false;
        return customer.addTransaction(amount);
    }
    findCustomer(customerId) {
        const customer = this.customers.find((customer) => customer.getId() === customerId);
        return customer ?? null;
    }
}
exports.Branch = Branch;
