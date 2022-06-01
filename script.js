const res = document.getElementById("result");


function calculate(value){

    const calculatedValue = eval(value || null);

    if (isNaN(calculatedValue)) {
        res.value = "Can't divide 0 with 0";
        setTimeout(() => {
            res.value ="";
        }, 1300);
    } else{
        res.value = calculatedValue;
    }

}


// Displays entered value on screen.
function liveScreen(enteredValue){

    if (!res.value){
        res.value = "";
    }
    res.value += enteredValue;
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
    e.preventDefault();
}

function eraseNum() {

   let res1 = res.value 
    let res2 = res1.slice(0, -1);

    document.getElementById("result").value= res2
}