class Creature {
    static number = 0; //статическая переменная для подсчета количества объектов класса
    id;
    constructor(name, healthPoint, damage){
        Creature.number++;
        this.id = Creature.number;
        this.name = name;
        this.healthPoint = healthPoint;
        this.damage = damage;
    }
    idGet(){
        return this.id;
    }
    defeat(){
        console.log(`${this.name} уничтожено!`); 
    }

}

class Player extends Creature {
    #lvl;
    lvlGet(){
        return this.#lvl;
    }
    constructor(name, healthPoint, damage, lvl){
        super(name, healthPoint, damage);
        this.#lvl = lvl;
    }
    
    attack(other){
        other.healthPoint -=this.damage;
        if(other.healthPoint <= 0) {
            other.defeat();
            this.#lvl++;
            return true;
        }
        else return false;
    }
}

class Enemy extends Creature {
    constructor(name, healthPoint, damage){
        super(name, healthPoint, damage);
    }
    attack(other){
        other.healthPoint -=this.damage;
        if(other.healthPoint <= 0) {
            other.defeat();
            return true;
        }
        else return false;
    }
}


let player = new Player('Spider Man', 100, 15, 1);
let enemy = new Enemy('Goblin', 90, 12);

console.log('Game Starts');
console.log(`Мы создали 2х игроков: ${player.name} и ${enemy.name}. Сейчас между ними начнется игра!`);

do {
    player.attack(enemy); //
    enemy.attack(player);
    
} while(player.healthPoint > 0 && enemy.healthPoint > 0);
if(player.healthPoint > enemy.healthPoint) {
    console.log(`Победитель ${player.name}!`);
}
else if(player.healthPoint < enemy.healthPoint) {
    console.log(`Победитель ${enemy.name}!`);
}
