{
    type CoffeeCup ={
        shots: number;
        hsMilk: boolean;
    }

    // private
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans:number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup{
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hsMilk: false
            };
        }
    }
    
    const maker = CoffeeMaker.makeMachine(32);
    console.log(maker);
    
    const maker3 = CoffeeMaker.makeMachine(32);
    console.log(maker3);

    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        private interanlAge = 4;
        get age() : number{
            return this.interanlAge;
        }
        set age(num:number) {
            this.interanlAge = num;
        }
        constructor(private firstName:string, private lastName: string){
        }
    }
}