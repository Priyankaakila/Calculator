const displayScreen = document.getElementById('display');

function appendToDisplay(input){
    displayScreen.value += input;
}

function clearDisplay(){
    displayScreen.value='';
}

function calculate(){
    try{
        displayScreen.value=eval(displayScreen.value);
    }
    catch{
        displayScreen.value="Error";
    }
}

function del(){
    displayScreen.value = displayScreen.value.slice(0,-1);
}