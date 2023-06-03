import { Account } from "./DioAccount";

export class CompanyAccount extends Account{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (value: number): void => {
        if(this.validateStatus()){
            this.balance += value;
            console.log(`Você pegou um empréstimo no valor de R$ ${value}. Esse valor foi adicionado a sua conta.`);
        }else {
            console.log("Você não possui uma conta.");
        }      
    }
}