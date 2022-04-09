export default class Pokemon{
    constructor(pokemon){
        this.pokemon = pokemon;
    }
    sayHello(){
        console.log(`Mi pokemon [${this.pokemon}] te saluda!!!`);
    }
}