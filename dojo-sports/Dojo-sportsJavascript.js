function hide(element) {
    element.remove();
}


var count =314
var countElement = document.querySelector("#count")


console.log(countElement);

function add1(){
    count++;
    countElement.innerText = count + " " ;
    console.log(count)
}



var count2 = 159
var countElement2 = document.querySelector("#count2")

console.log(countElement2);

function add2(){
    count2++;
    countElement2.innerText = count2 + " " ;
    console.log(count22)
}
////////////////////////////////////////////////////////////////
let counter = document.querySelector(".bodyy4");
let counts =13;
let interval = setInterval(() => {
    counts--;
    if(counts ==1){
        clearInterval(interval);
    }
    counter.innerHTML = "." + counts + " seconds remaining";
    
}, 1000);

alert('The Ninjas have won!' )