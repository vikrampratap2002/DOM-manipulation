let count = 1;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");
const errorMsg = document.getElementById("error");



incrementBtn.addEventListener("click", function(){
    count++;
    countDisplay.innerText = count;
    errorMsg.innerText = "";
     decrementBtn.disabled = false;
    clearBtn.style.display = "inline";
});

decrementBtn.addEventListener("click", function(){
    
    if(count === 0){
        errorMsg.textContent = "Error: Cannot go below 0";
         decrementBtn.disabled = true;
        return;
    }
    count--;
    countDisplay.innerText = count;
    errorMsg.innerText = "";

    if(count === 0){
         decrementBtn.disabled = true;
        clearBtn.style.display = "none";
        errorMsg.textContent = "Error: Cannot go below 0";
    }
});

clearBtn.addEventListener("click", function(){
    count = 0;
    countDisplay.innerText = count;
     decrementBtn.disabled = true;
    errorMsg.innerText = "Error: Cannot go below 0";
    clearBtn.style.display = "none";
})