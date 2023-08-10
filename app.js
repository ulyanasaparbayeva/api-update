
/*
const jokeTextElement = document.getElementById('joke-text');
const getJokeButton = document.getElementById('get-joke-btn');

getJokeButton.addEventListener('click', fetchJoke);

async function fetchJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();

    const jokeCard = document.createElement('div');
    jokeCard.classList.add('joke-card');

    const typeElement = document.createElement('p');
    typeElement.textContent = `Type: ${data.type}`;
    jokeCard.appendChild(typeElement);

    const setupElement = document.createElement('p');
    setupElement.textContent = `Setup: ${data.setup}`;
    jokeCard.appendChild(setupElement);

    const punchlineElement = document.createElement('p');
    punchlineElement.textContent = `Punchline: ${data.punchline}`;
    jokeCard.appendChild(punchlineElement);

    const idElement = document.createElement('p');
    idElement.textContent = `Id: ${data.id}`;
    jokeCard.appendChild(idElement);

    jokeTextElement.innerHTML = '';
    jokeTextElement.appendChild(jokeCard);
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}

 */

/*
document.getElementById('get-joke-btn').addEventListener('click', fetchJoke);

fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => response.json())
  .then(data => createProductGrid(data))
  .catch(error => console.error('Error fetching data:', error));


function createProductGrid(joke) {
  const productListElement = document.getElementById('product-list');

    const jokeCard = document.createElement('div');
  jokeCard.classList.add('joke-card');
  jokeCard.style.borderRadius = '8px';


  const jokeType  = document.createElement('span');
  jokeType.textContent = `Type: $${joke.type}`;
  jokeType.appendChild(jokeType);

  const jokeSetup = document.createElement('h3');
  jokeSetup.textContent = `Setup: ${joke.setup}` ;
  jokeSetup.appendChild(jokeSetup);



  const jokePunchline = document.createElement('p');
  jokePunchline.textContent = `Punchline: ${joke.punchline}`;
  jokeCard.appendChild(jokePunchline);



  const jokeId = document.createElement('h5');
  jokeId.textContent = `ID: ${joke.id}`;
  jokeCard.appendChild(jokeId);






  productListElement.innerHTML = '';
    productListElement.appendChild(jokeCard);
}





 */
const jokeGroupElement = document.querySelector('.joke-group');
const jokeTypeElement = document.getElementById('joke-type');
const jokeSetupElement = document.getElementById('joke-setup');
const jokePunchlineElement = document.getElementById('joke-punchline');
const jokeIdElement = document.getElementById('joke-id');
const getJokeButton = document.getElementById('get-joke-btn');

getJokeButton.addEventListener('click', fetchJoke);

async function fetchJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const jokeData = await response.json();




    jokeGroupElement.style.display = 'block';
    jokeTypeElement.textContent = jokeData.type;
    jokeSetupElement.textContent = jokeData.setup;
    jokePunchlineElement.textContent = jokeData.punchline;
    jokeIdElement.textContent = jokeData.id;

    jokeGroupElement.style.display = 'block'; //
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}
