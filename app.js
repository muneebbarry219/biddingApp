// console.log("testing");
var fetchData = localStorage.getItem("userAmount");
if (fetchData) {
    var availableAmount = JSON.parse(fetchData);
}
else {
    availableAmount = 1000;
};

// var availableAmount = 1000;

var initialAmountEl = document.getElementById("yourAmount");
document.getElementById("yourAmount").innerHTML = `: ${availableAmount}`;

var userValEl = document.getElementById("userVal");

var userAmountEl = document.getElementById("userAmount");

var userDiceEl = document.getElementById("user_dice");
var compDiceEl = document.getElementById("comp_dice");

var btnEl = document.getElementById("plybtn");

var message2El = document.getElementById("message2");

var message1El = document.getElementById("message1");


function reset() {
    availableAmount = 1000;

    var amountInStr = JSON.stringify(availableAmount);
    localStorage.setItem("userAmount", amountInStr);

    initialAmountEl.innerHTML = ` : ${availableAmount}`;
};

function clearForm() {
    document.getElementById("userVal").value = "";
    document.getElementById("userVal").focus();
    document.getElementById("userAmount").value = "";
};

function getDiceVal() {
    if (userValEl.value >= 1
        && userValEl.value <= 6) {
        return true;
    }
    else {
        return false;
    };
};

function getAmountVal() {
    if (userAmountEl.value >= 1 && userAmountEl.value <= availableAmount) {
        return true;
    }
    else {
        return false;
    };
};

function genrateDice() {
    return Math.ceil(Math.random() * 5);
};

function bidResult(diceVal) {
    if (diceVal == Number(userValEl.value)) {
        return true;
    }
    else {
        return false;
    };
};

function playGame() {


    if (getDiceVal()) {
        if (getAmountVal()) {

            // var fetchData = localStorage.getItem("userAmount");
            // var availableAmount = JSON.parse(fetchData);

            var dice = genrateDice();


            var userDiceUrl = `./images/${userValEl.value}.png`;
            var compDiceUrl = `./images/${dice}.png`;

            userDiceEl.src = userDiceUrl;
            compDiceEl.src = compDiceUrl;

            if (bidResult(dice)) {
                availableAmount = availableAmount +
                    Number(userAmountEl.value);
                initialAmountEl.innerHTML = ` : ${availableAmount}`;

                message1El.innerHTML = "Congratulations! number matched, amount added.";
                message2El.innerHTML = "Congratulations! number matched,amount added.";

                setTimeout(() => {
                    message1El.innerHTML = "";
                    message2El.innerHTML = "";
                }, 2000);

                clearForm();

                var amountInStr = JSON.stringify(availableAmount);
                if (amountInStr) {
                    localStorage.setItem("userAmount", amountInStr);
                };

            }
            else {
                availableAmount = availableAmount -
                    Number(userAmountEl.value);
                initialAmountEl.innerHTML = ` : ${availableAmount}`;

                message1El.innerHTML = "Oops unlucky! Try again.";
                message2El.innerHTML = "Oops unlucky! Try again.";

                setTimeout(() => {
                    message1El.innerHTML = "";
                    message2El.innerHTML = "";
                }, 2000);

                clearForm();

                var amountInStr = JSON.stringify(availableAmount);
                if (amountInStr) {
                    localStorage.setItem("userAmount", amountInStr);
                };

                if (availableAmount < 1) {

                    btnEl.disabled = true;

                    message1El.innerHTML = "Game over!";
                    message2El.innerHTML = "Game over!";

                };


            };

        }
        else {
            message1El.innerHTML = "Please enter correct amount!";
            message2El.innerHTML = "Please enter correct amount!";

            setTimeout(() => {
                message1El.innerHTML = "";
                message2El.innerHTML = "";
            }, 2000);

            clearForm();

        };
    }
    else {

        message1El.innerHTML = "Please enter correct dice value!";
        message2El.innerHTML = "Please enter correct dice value!";

        setTimeout(() => {
            message1El.innerHTML = "";
            message2El.innerHTML = "";
        }, 2000);

        clearForm();
    };
};










