
const advice = document.getElementById('advice');
const advice_id = document.getElementById('advice-id');
const button = document.getElementById('new-advice-button');

const updateDOM = (data) => {
    advice_id.innerText = data.slip.id; 
    advice.innerText = data.slip.advice; 
}

const getAdvice = () => {
// fetch the JSON data
  fetch('https://api.adviceslip.com/advice',{ cache: "no-store" })
  .then((response) => {
    if(!response.ok) return console.log('Oops! Something went wrong.');
  
    return response.json();
  }).then((data) => {
    console.log(data);
    updateDOM(data);
  });
}

button.addEventListener('click', ()=> {
    getAdvice();
    button.blur();
});

getAdvice();

