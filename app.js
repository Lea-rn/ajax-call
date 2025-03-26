const button = document.querySelector(".btn") ; 
const pragraphe = document.querySelector(".pr")
const title = document.querySelector(".title")


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





const request = new XMLHttpRequest()


request.open("GET" , "https://restcountries.com/v2/name/portugal")
request.send() ; 

request.addEventListener("load",function(){
    const data = JSON.parse(this.responseText)
    console.log(data[0])
})
