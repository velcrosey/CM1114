const myarray = [],
      userInput = document.querySelector("#users");

document.querySelector("#btn").addEventListener("click", (e) => {
  e.preventDefault();
  myarray.push(...userInput.value.split(",").map(s => s.trim()));
  
  console.log(myarray);
});