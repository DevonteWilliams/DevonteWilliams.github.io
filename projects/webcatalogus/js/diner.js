

const resultElement1 = document.querySelector(".result");


function fetchData(url) {
    fetch(url)
    .then(myData => myData.json())
    .then(myJsonData => showData(myJsonData));
    
} 

function showData(myJsonData) {
    for (let i = 0; i < myJsonData.length; i++) {
        const element = myJsonData[i];
        const card = createCard(element);
        resultElement1.innerHTML += card;
        
    }


}



function createCard(element) {
    
    const card = `

    <div class="col-4">
      <div class="card rounded-0">
        <img src="${element.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
        </div>
      </div>
    </div>
  
    `;
    
    return card;
}