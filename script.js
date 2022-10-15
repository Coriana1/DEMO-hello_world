

function greetUser(){
    let greetUser = prompt("Heyyy, What is your name?");
    document.write("Hi" + greetUser + "I hope you enjoy my page");
    return greetUser;
}


let lastMemory = prompt("Was the last time you ate cake for a birthday celebration?");
if (lastMemory == "yes") { 
  document.write("I LOVE BIRTHDAY CAKE!");
}  else if (lastMemory == "no") {
  document.write("I still hope it was delicious!");
}
