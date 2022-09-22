
const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const requestUrl = "https://dog.ceo/api/breeds/image/random";

async function fetchRandom() {
  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    image.src = data.message;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener('click', () => {
    fetchRandom();
})
