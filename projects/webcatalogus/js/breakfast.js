


const resultElement1 = document.querySelector(".result");


function fetchData1(url) {
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



const resultElement2 = document.querySelector(".result");


function fetchData2(url) {
    fetch(url)
    .then(myData => myData.json())
    .then(myJsonData => showData(myJsonData));
    
} 

function showData(myJsonData) {
    for (let i = 0; i < myJsonData.length; i++) {
        const element = myJsonData[i];
        const card = createCard(element);
        resultElement2.innerHTML += card;
        
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



const resultElement3 = document.querySelector(".result");


function fetchData3(url) {
    fetch(url)
    .then(myData => myData.json())
    .then(myJsonData => showData(myJsonData));
    
} 

function showData(myJsonData) {
    for (let i = 0; i < myJsonData.length; i++) {
        const element = myJsonData[i];
        const card = createCard(element);
        resultElement3.innerHTML += card;
        
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

{/* <div class = 'col-4'> */}
{/* <div class="card"> */}
    // <img class="card-img-top" src="${element.imageUrl}" alt="Title">
        // <div class="card-body">
            // <h4 class="card-title">${element.title}</h4>
            // <p class="card-text">${element.description}</p>
        //  </div>
// </div>

// </div
