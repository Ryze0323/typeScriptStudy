{
    type CoffeeCup ={
        shots: number;
        hsMilk: boolean;
    }

    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT: number = 7;
        coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
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
    
    const maker = new CoffeeMaker(32);
    console.log(maker);

    const maker3 = CoffeeMaker.makeMachine(32);
    console.log(maker3);
    // coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
    // const coffee = makeCoffee(2);
    // console.log(coffee);
}