const componentsArray = document.querySelectorAll(".summary-component");

async function loadData(){
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


loadData();