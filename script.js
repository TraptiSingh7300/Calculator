let currentDisplay='';
document.querySelector('#result').value=currentDisplay;

function appendValue(value){
    currentDisplay += value;
    document.querySelector('#result').value=currentDisplay;
}

function clearAll(){
    currentDisplay = '';
    document.querySelector('#result').value=currentDisplay;
}

function total() {
    try {
        let result = eval(currentDisplay);
        currentDisplay = result.toString();
        document.querySelector('#result').value = currentDisplay;
    } catch (error) {
        document.querySelector('#result').value = "Error";
        currentDisplay = '';
    }
}

function backspace() {
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#result').value = currentDisplay;
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        // Numbers and decimal
        appendValue(key);
    } else if (["+", "-", "*", "/", "%"].includes(key)) {
        // Operators
        appendValue(key);
    } else if (key === "Enter" || key === "=") {
        // Calculate total
        total();
    } else if (key === "Backspace") {
        // Delete last character
        backspace();
    } else if (key === "Escape" || key === "Delete") {
        // Clear all
        clearAll();
    }
});