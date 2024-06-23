function combineAndSum(...numbers) {
    return new Promise((resolve, reject) => {
        if (numbers.some(isNaN)) {
            reject(new Error("All arguments must be numbers"));
        } else {
            const numbersArray = [...numbers]; // Spread operator to create an array of numbers
            const sum = numbersArray.reduce((acc, num) => acc + num, 0); // Sum all numbers in the array
            resolve({ numbersArray, sum });
        }
    });
}

function processNumbers() {
    const input = document.getElementById("numbersInput").value;
    const numberStrings = input.split(","); // Split input by commas
    const numbers = numberStrings.map(str => parseFloat(str.trim())); // Convert strings to numbers

    combineAndSum(...numbers)
        .then(result => {
            document.getElementById("result").textContent = "Array: "+result.numbersArray +", Sum: "+result.sum;
        })
        .catch(error => {
            document.getElementById("result").textContent = "Error: "+error.message;
        });
}