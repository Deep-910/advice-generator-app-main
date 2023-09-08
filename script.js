// Variables

const setupData=()=> {
    const btn = document.getElementById("btn");
    const adviceNum = document.getElementById("advice-number");
    const adviceText = document.querySelector(".advice-text");

    return {
        btn: btn,
        adviceNum: adviceNum,
        adviceText: adviceText
    };
}

const data = setupData();

// Eventlistener for  button
data.btn.addEventListener("click", () => {
    showQuote();
});

const API_URL = 'https://api.adviceslip.com/advice';

// showQuote function to show random quote from API
function showQuote(){
    fetch( API_URL)

    .then(response => response.json())
    .then(apiData => {
        data.adviceNum.textContent = apiData.slip.id;
        data.adviceText.textContent = apiData.slip.advice;
    })
    .catch(function (error) {
        alert(`Error ${error}`);
    });
}