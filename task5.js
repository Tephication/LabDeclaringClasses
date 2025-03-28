export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = Number(level);
    this.exper = 0;
    this.experup = 30;
  }
  
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  
  levelUp() {
    this.level +=1 ;
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUpexp(puntos){
    this.exper += puntos;
    console.log(`${this.name} won ${puntos} puntos de experiencia!`);
    if (this.exper >= this.experup) {
      this.levelUp();
    }

  }

}
const player1 = new Player("Grog", 4);
//const player2 = new Player("Tara", 6);
player1.info();  
player1.levelUp(); 
player1.levelUpexp(12); 
player1.levelUpexp(40); 
//player2.info();
