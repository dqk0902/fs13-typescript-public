import { Customer } from "./Customer";

export class Branch {
  private customers: Customer[];
  constructor(private name: string) {
    this.customers = [];
  }

  getName(): string {
    return this.name;
  }
  getCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(customer: Customer): boolean {
    const haveCustomer = this.customers.includes(customer);
    if (!haveCustomer) this.customers.push(customer);
    return haveCustomer;
  }

  addCustomerTransaction(id: string, amount: number): boolean {
    let customer = this.customers.find((customer) => customer.getId() === id);
    if (!customer) return false;
    return customer.addTransaction(amount);
  }
  findCustomer(customerId: string): Customer | null {
    const customer = this.customers.find(
      (customer) => customer.getId() === customerId
    );
    return customer ?? null;
  }
}
