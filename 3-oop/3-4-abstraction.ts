{
    type CoffeeCup ={
        shots: number;
        hsMilk: boolean;
    }
    interface CoffeeMaker {
        makeCoffee(shots:number): CoffeeCup;
    }
    interface CommercialCoffeeMaker {
        makeCoffee(shots:number): CoffeeCup;
        fillCoffeeBeans(beans:number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans:number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }
        clean() {
            console.log('clean machine');
        }

        private grindBeans (shots: number) {
            console.log(shots);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }
        private prehea() {
            console.log('heating');
        }
        private extract (shots:number) {
            console.log(`Pulling ${shots} shots.....`);
            return {
                shots,
                hsMilk: false
            };
        }
        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.prehea();
            return this.extract(shots);
        }
    }
    
    const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(32);
    maker.makeCoffee(2);
    console.log(maker);
    
    const maker3:CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    maker3.fillCoffeeBeans(32);
    maker3.makeCoffee(2);
    maker3.clean();
    console.log(maker3);
}