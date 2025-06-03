// TO START A JAVASCRIPT DOCUMENT, FIRST THING IS TO GIVE ALL THE ONES YOU AFFECT A VARIABLE NAME, THEN USE THE DOM

// GRAB THEM ALL
let text = document.querySelector(".txt");
let adviceID = document.querySelector(".adv");
let quoteText = document.querySelector(".quo");
let button = document.querySelector(".glow");
let loading = document.querySelector(".loading");

// TO FETCH AN API FROM EXTERNAL SOURCES, YOU DO A FUNCTION
// ASYNC MARKS A FUNCTION AS ASYNCHRONOUS, IT MEANS THE FUNCTION WILL ALWAYS RETURN A PROMISE. AWAIT CAN ONLY BE USED INSIDE AN ASYCHRONOUS FUNCTION. IT "PAUSES" THAT FUNCTION EXECUTION UNTIL THE PROMISE IS RESOLVED.
//

let adviceData = async () => {
  let api = await fetch("https://api.adviceslip.com/advice");

  loading.classList.add("hidden");
  let convertedData = await api.json();
  adviceID.textContent = `A D V I C E #${convertedData.slip.id}`;
  quoteText.textContent = `"${convertedData.slip.advice}"`;
};
// adviceData();

button.addEventListener("click", () => {
  location.reload();
});
setTimeout(() => {
  adviceData();
}, 1000);
