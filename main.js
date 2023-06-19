const componentsArray = document.querySelectorAll(".summary-component");

let counter = 0;
const mainScore = 76;

async function loadJSONData(){
    const response = await fetch('./data.json');
    const names = await response.json();

    // I added an i variable as a helper for the loop to link the correct data with an individual component
    let i = 0;
    for(const component of componentsArray){
        component.children[0].children[1].innerHTML = names[i].category;
        component.children[1].children[0].innerHTML = names[i].score;
        component.children[0].children[0].setAttribute("src", names[i].icon);
        i++;
    }
}

//this function calls itself with an offset proportional to the ratio between the counter that is written to the element and it's objective
//in this instance the objective is 76 as stated in the mainScore global variable
//I guess if this was an actual website the score after the quiz or whatever would be stored in some variable so I didn't put it into HTML element
function scoreIncrementation(){
    let incrementationSpeed = counter / mainScore;

    document.querySelector(".result-circle>h2").innerHTML = counter;
    counter++;

    if(counter <= mainScore)
        setTimeout("scoreIncrementation()", incrementationSpeed*65);
}

window.onload = function main(){
    scoreIncrementation();
    loadJSONData();
}