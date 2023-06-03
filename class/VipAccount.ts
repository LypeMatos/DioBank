import { Account } from "./DioAccount";


export class VipAccount extends Account{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            if(value <= 0){
                console.log("Informe um valor maior que R$ 0,00 para depositar.");
            }else {
                let newBalance: number = value + 10;
                this.balance += newBalance;                
                console.log(`Você depositou R$ ${newBalance} em sua conta. Seu saldo agora é de R$ ${this.balance}`);
            }            
        }else{
            console.log("Você não possui uma conta.");
        }
    }
}