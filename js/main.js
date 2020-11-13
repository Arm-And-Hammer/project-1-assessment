/*----- constants -----*/

/*----- app's state (variables) -----*/
let total;

/*----- cached element references -----*/
let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#minus");
let num = document.querySelector("#numbers");
let totalNumber = document.querySelector("span");
/*----- event listeners -----*/
addButton.addEventListener("click", handleAdd);
subtractButton.addEventListener("click", handleSubtract);

/*----- functions -----*/
function init(){
    total = 0;
    render();
}

function render(){
    if (total >= 0) {
        totalNumber.innerHTML = `
        <span>${total}</span>
        `
      } else {
        totalNumber.innerHTML = `
        <span class="red">${total}</span>
        `
      }
}

function handleAdd() {
    let numbers = parseInt(num.value);
    total += ( + num.value)
    render();
  }
function handleSubtract(){
    let numbers = parseInt(num.value);
    total += ( - num.value)
    render();
}
init();


