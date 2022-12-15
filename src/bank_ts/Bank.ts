import { Branch } from "./Branch";
import { Customer } from "./Customer";

export class Bank {
  branches: Branch[];
  constructor(private name: string) {
    this.branches = [];
  }

  addBranch(branch: Branch): boolean {
    if (this.checkBranch(branch)) {
      return false;
    }
    this.branches.push(branch);

    return true;
  }
  addCustomer(branch: Branch, customer: Customer): boolean {
    if (this.checkBranch(branch)) {
      branch.addCustomer(customer);
      return true;
    } else {
      return false;
    }
  }

  addCustomerTransaction(branch: Branch, id: string, amount: number): boolean {
    if (branch.addCustomerTransaction(id, amount)) return true;
    return false;
  }

  findBranchByName(branchName: string): Branch[] | null {
    let matchedBranches: Branch[] = [];
    this.branches.forEach((branch) => {
      if (branch.getName() === branchName) {
        matchedBranches.push(branch);
      }
    });
    return matchedBranches.length > 0 ? matchedBranches : null;
  }

  checkBranch(branch: Branch): boolean {
    if (this.branches.includes(branch)) return true;
    return false;
  }

  listCustomers(branch: Branch, showTransactions: boolean): boolean {
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
