export abstract class Account {
    private name: string
    private accountNumber: number
    protected balance: number
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = 0;
    }

    getName = (): string => {
        return this.name;
    }

    getAccountNumber = (): number => {
        return this.accountNumber;
    }
 
    deposit = (value: number): void => {
        if(this.validateStatus()){
            if(value <= 0){
                console.log("Informe um valor maior que R$ 0,00 para depositar.");
            }else {
                this.balance += value;                
                console.log(`Você depositou R$ ${value} em sua conta. Seu saldo agora é de R$ ${this.balance}`);
            }            
        }else{
            console.log("Você não possui uma conta.");
        }
    }

    withdraw = (value: number): void => {
        if(this.validateStatus()){
            if(value <= 0){
                console.log("Informe um valor maior que R$ 0,00 para sacar.");
            }else if (this.balance < 0 || value > this.balance){
                console.log("Você não tem saldo suficiente para sacar.");
            }else {
                this.balance -= value;                
                console.log(`Você sacou R$ ${value} da sua conta. Seu saldo agora é de R$ ${this.balance}`);
            }
        }else {
            console.log("Você não possui uma conta.");
        }
    }

    getBalance = (): number => {
        return this.balance;
    }

    validateStatus = (): boolean => {
        if(this.status){
            return this.status;
        }

        return false;
    }
}