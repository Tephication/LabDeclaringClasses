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
      this.exper = 0;
    }

  }

}

class Group {
  constructor(){
    this.members = [];
  }

  addMember(member){
    this.members.push(member);
    console.log(`${member.name} es parte del grupo`);    
  }

  removeMember(delmember) {
    let existingMembers = [];
    
    for(let i=0; i< this.members.length; i++){
      if(this.members[i] !== delmember){
        existingMembers.push(this.members[i]);
      }
    }
    this.members = existingMembers;
    console.log(`${delmember.name} se fue del grupo`);     
  }

  listMembers(){
    console.log(this.members);  
  }
}



const player1 = new Player("Grog", 4);
//const player2 = new Player("Tara", 6);

const player3 = new Player("Sara", 5);
const player4 = new Player("Consuelo", 2);
const player5 = new Player("Helman", 3);
const player6 = new Player("Stephanie", 4);
const player7 = new Player("Keyla", 1);
const player8 = new Player("Donna", 2);
const player9 = new Player("Saturio", 1);

player1.info();  
player1.levelUp(); 
player1.levelUpexp(12); 
player1.levelUpexp(40); 
//player2.info();

const group1 = new Group();
group1.addMember(player3);
group1.addMember(player4);
group1.addMember(player5);
group1.addMember(player6);
group1.addMember(player7);
group1.addMember(player8);
group1.addMember(player9);

group1.listMembers();

group1.removeMember(player9);
group1.listMembers();


