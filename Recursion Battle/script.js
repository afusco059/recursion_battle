//#region Hero and enemies
var enemies = [
{
  "Name" : "Skeleton King",
  "Enemy Type" : " Super Undead Boss",
  "Special Ability" : "Undead Control",
  "Hit Points" : 500.0,
  "Power" : 300.0,
  "Dodge" : 100.0,
  "Armor" : 250.0,
 }, 
{
"Name" : "Skeleton Knight",
"Enemy Type" : "Greater Undead",
"Special Ability" : "Charge",
"Hit Points" : 200.0,
 "Power" : 150.0,
 "Dodge" : 0.0,
 "Armor" : 100.0,
}, 
{
    "Name" : "Wolf",
    "Enemy Type" : "Wildlife",
    "Special Ability" : "Tracking",
    "Hit Points" : 100.0,
    "Power" : 50.0,
    "Dodge" : 150.0,
    "Armor" : 50.0,
    }, 
{
"Name" : "Lower Skeleton",
"Enemy Type" : "Undead",
"Special Ability" : "Reasseble",
"Hit Points" : 75.0,
"Power" : 50.0,
"Dodge" : 10.0,
"Armor" : 25.0,
}, 
{
    "Name" : "Sewer Rat",
    "Enemy Type" : "Random Wildlife",
    "Special Ability" : "Sharp teeth",
    "Hit Points" : 50.0, 
    "Power" : 20.0,
    "Dodge" : 50.0,
    "Armor" : 10.0
},

]

var heros = [
{
    "Name" : "Arthur",
    "Hero Type" : "Human King",
    "Special Ability" : "Excalibur",
    "Hit Points" : 250.0, 
   "Power" : 200.0,
    "Dodge" : 200.0,
    "Armor" : 200.0
},
{
    "Name" : "Roland",
    "Hero Type" : "Elven Mage",
    "Special Ability" : "Nuclear magic",
    "Hit Points" : 150.0, 
   "Power" : 600.0,
    "Dodge" : 75.0,
    "Armor" : 100.0
},
    
]
console.log(enemies[0]["Hit Points"])
//#endregion
var heroMultiplier = Math.floor(Math.random() * 10 + 1);

var enemyMultiplier = Math.floor(Math.random() * 5 + 1);

console.log(heroMultiplier)

console.log(enemyMultiplier)

function startFunction(){
    if(heroMultiplier <=5 ){
        console.log(heros[1]["Name"])
    }else{
        console.log(heros[0]["Name"])
    };
    if(enemyMultiplier = 1){
        console.log(enemies[0]["Name"])
    }else if(enemyMultiplier = 2 ){
        console.log(enemies[1]["Name"])
    }else if(enemyMultiplier = 3){
        console.log(enemies[2]["Name"])
    }else if(enemyMultiplier = 4){
        console.log(enemies[3]["Name"])
    }else{
        console.log(enemies[4]["Name"])
    }

}



