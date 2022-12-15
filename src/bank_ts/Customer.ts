import { Transaction } from "./Transaction";

export class Customer {
  private name: string;
  private id: string;
  private transactions: Transaction[];

  constructor(name: string) {
    this.name = name;
    this.id = String(Math.floor(Math.random() * 1000));
    this.transactions = [];
  }

  getName(): string {
    return this.name;
  }

  getId(): string {
    return this.id;
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getBalance(): number {
    return this.transactions.reduce((a, b) => a + b.amount, 0);
  }

  addTransaction(amount: number): boolean {
    if (amount > 0) {
      const transaction: Transaction = {
        amount: amount,
        date: new Date(),
      };
      this.transactions.push(transaction);
      return true;
    }
    return false;
  }
}
