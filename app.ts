import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { VipAccount } from "./class/VipAccount";

//PEOPLE
const peopleAccount: PeopleAccount = new PeopleAccount(12, "Felipe", 1);

console.log("Nome do usuário: ", peopleAccount.getName());
console.log("Número da conta: ", peopleAccount.getAccountNumber());
peopleAccount.deposit(5000);
console.log("Seu saldo atual é de: R$", peopleAccount.getBalance());
peopleAccount.withdraw(1500);
console.log("Seu saldo atual é de: R$", peopleAccount.getBalance());

//VIP
const vipAccount: VipAccount = new VipAccount("João", 2);

vipAccount.deposit(6000);
console.log("Seu saldo atual é de: R$", vipAccount.getBalance());
vipAccount.withdraw(2000);
console.log("Seu saldo atual é de: R$", vipAccount.getBalance());

//COMPANY
const companyAccount: CompanyAccount = new CompanyAccount("Dio", 44563);

companyAccount.deposit(200);
companyAccount.getLoan(500);
console.log("Seu saldo atual é de: R$", companyAccount.getBalance());