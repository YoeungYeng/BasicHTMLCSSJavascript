
let sub = document.getElementById("decrement");
let reset = document.getElementById("equal");
let sum = document.getElementById("increament");
let counter = document.getElementById("gg");
let count = 0;

sub.onclick = () =>{
    count--;
    counter.textContent = count;
}
reset.onclick = () =>{
    count = 0;
    counter.textContent = count;
}
sum.onclick = () =>{
    count++;
    counter.textContent = count;
}