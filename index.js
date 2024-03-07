
// fetch data
document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
       handleDisplay(data)})
    .catch(error => console.error("Error fetching JSON data:", error));
});

// display Data Function
const handleDisplay = (data)=>{
const cardId = document.getElementById("cards");
data.forEach(el => {
    const div = document.createElement("div");
    const titleWords = el.Title.split(" ");
    const firstWord = titleWords.length > 0 ? titleWords[0] : "";
    const secondWord = titleWords.length > 1 ? titleWords[1] : "";
    const thirdWord = titleWords.length > 2 ? titleWords[2] : "";
    const fourthWord = titleWords.length > 3 ? titleWords[3] : "";
    const fiveWord = titleWords.length > 4 ? titleWords[4] : "";
    div.className = "card";
    const image = document.createElement("img");
    image.src = el.image;
    console.log(image);
    
    image.loading = "lazy";
   div.style.background = `url('${image.src}') center/cover no-repeat`;

    div.innerHTML = `
 

     <div class="card-header">
    <h5 class="card-title">
    <span>${firstWord}</span>
    <span>${secondWord}</span>
    <span>${thirdWord}</span>
    <span>${fourthWord}</span>
    <span>${fiveWord}</span>
        </h5> </div>
    
   <div class="hoverItem">
    <h2 class="hoverTitle"> <span>${firstWord}</span>
    <span>${secondWord}</span>
    <span>${thirdWord}</span>
    <span>${fourthWord}</span>
    <span>${fiveWord}</span></h2>
    <p class="hoverDsc">${el.Description}</p>
    </div>
    

    
    `;
    cardId.appendChild(div)
  
});
}

