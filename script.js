
let lastMemory = prompt("Was the last time you ate cake for a birthday celebration?");
if (lastMemory == "yes") { 
  document.write("I LOVE BIRTHDAY CAKE!");
}  else if (lastMemory == "no") {
  document.write("I still hope it was delicious!");
}


function rateMyPage(){
    let rating = prompt("What would you rate my page? 1-5");
    for (let i = 0 < rating; i++){
        document.write("<img scr='moon.jpeg' alt='bright full moon' />");
    }
}