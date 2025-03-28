const button = document.querySelector(".btn");
const pragraphe = document.querySelector(".pr");
const title = document.querySelector(".title");
const cardContainer = document.querySelector(".card-container");

//// synchronous :::

// button.addEventListener("click",function(){
//     alert("set text")
//     pragraphe.textContent = "hello there"
// })

////// asynchronous ::::

// button.addEventListener("click",function(){
//     setTimeout(function(){
//       pragraphe.textContent = "hello there"
//     },5000)
//     setTimeout(function(){
//         title.textContent = "welcome"
//     },3000)
// })

//// local (user) ====> request (talab) ===> api ==> server .........      ===> | database
///////                                         response <======

// const getCountry = function (country) {
//   const request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//          <div class="country-card">
//            <img height="200px" src="${data.flag}" alt="">
//          <div class="card-info">
//              <h2>${data.name}</h2>
//              <h4>${data.region}</h4>
//              <p> 🧑‍🤝‍🧑 ${data.population} M people</p>
//              <p>🗣️ ${data.languages[0].name}</p>
//              <p>💰 ${data.currencies[0].code}</p>
//       </div>
//         </div>

//         `;
//     cardContainer.insertAdjacentHTML("afterbegin", html);
//   });
// };

// getCountry("sudan");

// getCountry("germany");

// getCountry("italia");
// getCountry("tunisia");

////// get country and her neighbors ::::

const RenderCountry = function (data ,  className ="") {
  const html = `
         <div class="country-card ${className}">
           <img height="200px" src="${data.flag}" alt="">
         <div class="card-info">
             <h2>${data.name}</h2>
             <h4>${data.region}</h4>
             <p> 🧑‍🤝‍🧑 ${data.population} M people</p>
             <p>🗣️ ${data.languages[0].name}</p> 
             <p>💰 ${data.currencies[0].code}</p>
      </div>
        </div>

        `;
  cardContainer.insertAdjacentHTML("afterbegin", html);
};

// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();

//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     RenderCountry(data); ///// get country ...

//     ////// get neighbor

//     const neighbor = data.borders?.[0];   //// AND  
//     console.log(neighbor);

//     if (!neighbor) return ; 


//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       RenderCountry(data2 ,"neighbor");
//     });
//   });
// };

// getCountryAndNeighbor("france");


///// with try await   ..... ::: 


const getCountryAndNeighbor = async function  (country){
try {
const response = await fetch(`https://restcountries.com/v2/name/${country}`)
const [data] = await response.json() ;
console.log(data)
RenderCountry(data)

///// get neighbor :: 
const neighbor = data.borders[0]
console.log(neighbor)
const response2 = await fetch(`https://restcountries.com/v2/alpha/${neighbor}`)
const data2 = await response2.json()
RenderCountry (data2 , "neighbor")


} catch (err){
 console.log("country not found please check again")
}
}


getCountryAndNeighbor("tunisia")