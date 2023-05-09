// let mypromise = new Promise (function (acceptfunction , rejectfunction) {
//     let connection = false ; 
//     if (connection ===true) {
//         acceptfunction('Connection Esatblished') ;
//     }
//     else {
//         rejectfunction('connection rejected') ;
//     }
// }) ; 
// console.log(mypromise) ; 
// mypromise.then (
//     (resolvervalue) => console.log(`${resolvervalue}`) ,
//     (rejectedvalue) => console.log(`${rejectedvalue}`) 

// ) ; 
// const mypromise = new Promise ((acceptfunction , rejectfunction) =>{
//     let employees = ['osama' , 'ali' , 'omar']  ;
//     if (employees.length ===4) {
//         acceptfunction(employees);
//     }
//     else {
//         rejectfunction(Error('the number of employees are not 4') );
//     }
// }) ;
// mypromise
// .then((resolved)=> {
//     resolved.length = 2 ;
//     return resolved ;
// })
// .then ((resolved) => {
//     resolved.length = 1 ;
//     return resolved ; 
// })
// .then((resolved)=>{
//     console.log(`the choosen one is ${resolved}`);
// })
// .catch((rejected) => console.log(rejected));

// const myfirstpromise = new Promise((res , rej) => {
//     setTimeout(() => {
//         rej ('im the first promise') ; 
//     }, 1000);
// }) ;
// const mysecondpromise = new Promise((res , rej) => {
//     setTimeout(() => {
//         res ('im the second promise') ; 
//     }, 1000);
// }) ;
// const mythirdpromise = new Promise((res , rej) => {
//     setTimeout(() => {
//         rej ('im the third promise') ; 
//     }, 2000);
// }) ;

// Promise.race([myfirstpromise , mysecondpromise , mythirdpromise]).then(
//     (resolvedValues) => console.log(resolvedValues) ,

// ).catch (
//     (rejectedvalues) => console.log(`rejected : ${rejectedvalues}`) 
// )
// function getdata () {
//     return new Promise ((res , rej) => {
//         let users = [] ;
//         if (users.length >0) {
//             res('users Found!') ;
//         } else {
//             rej('no User Found !') ; 
//         }
//     })
// }
// getdata().then(
//     (resolvedValue) => console.log(resolvedValue) ,
// ).catch (
//     (rejectedValues) => console.log(rejectedValues)
// )
// async function getdate() {
//     let users = [] ; 
//     if (users.length > 0 ) {
//         return 'Users Found' ; 
//     }else {
//         throw new Error ('User Not Found!') ; 
//     }
// }
// console.log(getdate()) ;

// getdate().then (
//     (resolvedvalue) => console.log(resolvedvalue) ,
//     (rejectedValue) => console.log(rejectedValue)
// );

// const mypromise = new Promise((res , rej) => {
//     let u = [] ; 
//     setTimeout(() => {
//         if (u.length >0) {
//             res ('I have users')
//         }
//         else {
//             rej (Error('i dont have users'))
//         }
//     }, 3000);
// })
// async function getdate () { 
//     console.log('sssss') ; 
//     console.log(await mypromise.catch((err)=> err));
//     console.log('lllll') ; 
// }
// getdate() ;



// const posts = [
//     {title : 'Post One ' , body : 'this is post one'} ,
//     {title : 'Post two ' , body : 'this is post two'} 

// ]  ; 
// function getpost () {
//     setTimeout(() => {
//         let output = '' ; 
//         posts.forEach((post) => {
//             output = output + `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output ; 
//     }, 2000);
// }
// getpost() ; 
// const mypromise = new Promise((res , rej) => {
//     let students = [] ; 
//     if (students.length > 0){
//         res('Student NumberIs Greater Than 0 ')
//     }else {
//         rej(Error('Student Number Is 0') ); 
//     }
// })
// async function getpromise() {
//     console.log(await mypromise.catch((rejectedValue)=> rejectedValue)) ;
// }
// getpromise() ;

// let price = '' ;
// console.log(price ?? 200) ; 

// let job = 'manager' ; 
// let salary = 0 ;
// switch (job) {
//     case 'manager': {
//         salary = 8000 ; 
//         console.log(`The Salary Of The Manager Is ${salary}$` ) ; 
//         console.log('------------------------------') ; 
//         break ;
//     }
//     case 'IT' :
//         case 'Support' : {
//             salary =6000 ; 
//             console.log(`The Salary Of the IT and Support is ${salary}$` ) ;
//             break ;
//         }
//         case 'Developer' : 
//         case 'Designer' : {
//             salary = 7000 ; 
//             console.log(`The Salary Of The Designer And Developer Is ${salary}$`) ; 
//             break ; 
//         }
//         default : {
//             salary =4000  ;
//             console.log(`The Salary Of Other Jobs Is ${salary}$`) ; 
//             break ; 
//         }


// }
// let myfriends = ['osama' , 'ali' , 'mohammed' , 'khalid'] ; 
// console.log(myfriends[1]) ; 
// myfriends.unshift('Abdullah') ; 
// console.log(myfriends) ; 
// (myfriends.push('Ahmed Ali')) ; 
// console.log(myfriends) ; 
// myfriends.pop()  ;
// console.log(myfriends) ; 
// myfriends.unshift('Omar' ) ; 
// console.log(myfriends) ;    
// myfriends.shift() ;
// console.log(myfriends) ; 
// let schoolfriends = ['osama' , 'mohammed ', 'ali' , 'omar'] ; 
// let unifriends = ['Khalid' , 'Ahmed' , 'Jamal'] ; 
// let allfriends = schoolfriends.concat(unifriends) ; 
// console.log(allfriends) ; 
// console.log(allfriends.join('|')) ; 
// let products = ['pen' , 'mouse' , 'keyboard' , 'monitor' ,3,3,2,1] ;
// for (let i = 0 ; i< products.length ; i++) {
//     if (products[i]=== 'monitor') {
//         break ; 
//     }
//     console.log(products[i]) ; 
// }
// let onlystring = ['Ahmed' , 'Osama' , 'Khalid',32 , 'Omar' , 32] ; 
// for (let j = 0 ; j<products.length ; j++) {
//     if (typeof onlystring[j] === 'number') {
//         continue ; 
//     }
//     console.log(onlystring[j])
// }

// let products = ['Mobile' , 'Computer' , 'GPU' , 'CPU' , 'Monitors'] ; 
// let colors = ['Red' , 'Green' , 'Blue'] ; 
// let showcount = 4 ; 
// document.write(`<h1>We Have ${showcount} Products </h1>`) ; 
// for (let i = 0 ; i < showcount+1 ; i++) {
//     document.write(`<div>`) ; 
//     document.write(`<p> Product ${i+1}: ${products[i]} </p>`)
//     document.write(`<p>${colors.join(' ')}</p>`)
//     document.write('#'.repeat(12)) ; 
//     document.write(`</div>`) ; 
// }
// example of show titles

// async function showtitle() {
//     new Promise ((resolved , rejected)=> {
//         document.getElementById('title1').style.visibility = 'visible' ; 
//         resolved () ;
//     })
//    await new Promise((resolved , rejected)=> {
//     setTimeout(() => {
//         document.getElementById('title2').style.visibility = 'visible' ; 
//         resolved () ;
//     }, 1000);
//    })
//    await new Promise ((resolved , rejected) => {
//     setTimeout(() => {
//         document.getElementById('title3').style.visibility = 'visible' ; 
//         resolved () ;
//     }, 1000);
//    }) 
//    await new Promise ((resolved , rejected)=> {
//     setTimeout(() => {
//         document.getElementById('title4').style.visibility = 'visible' ; 
//         resolved () ; 
//     }, 1000);
//    })
// }
// showtitle () ;

//end of title example

// start of forecast example
// function GetWeather() {
//     return new Promise ((res , rej)=> {
//         setTimeout(() => {
//             let APIS = [232 , 4 ,4 ,4] ; 
//             if (APIS.length >3)
//             {
//                 res('wi') ; 
//             }else{
//                 rej('Invalid Api')
//             }
        
//         }, 3000);
//     })
// }
// function GetWeatherIcon (weather) {
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             switch(weather) {
//                 case weather = 'Sunny' :
//                     res('Sunny Today') ; 
//                     break ; 
            
//                 case weather = 'Cloudy' :
//                     res('Cloudy Today') ; 
//                     break ; 
            
//                 case weather = 'Rainy' :
//                     res('Rainy Today') ; 
//                     break ; 
//                     default :
//                     rej('No Icon Found') ; 
//             }
            
//         }, 100);
//     })
// }
// function onsuccess (success) {
//     console.log(`successed : ${success}`)
// }
// function onFail (fail) {
//     console.log(`Filed: ${fail}`) ; 
// }
// GetWeather()
// .then(GetWeatherIcon)
// .then(onsuccess)
// .catch(onFail);

//end of forecast Example

//start of fun example

// function fun1 () {
//     return new Promise((res , rej)=> {
//         setTimeout(() => {
//             res('Resolved') // its just the result so you dont want the result printed alone 
//         }, 1000);
//     })
// }
// function fun2 () {
//     return new Promise((res , rej)=> {
//        res('Nice')
//     })
// }
// function onsuccess (data) {
// console.log(`Success : ${data}`) ;
// }
// function OnError (err) {
//     console.log(`Error : ${err}`) ;
//     }

//     fun1()
//     .then(fun2)
//     .then(onsuccess) 
//     .catch(OnError) 
//end of fun example

//start of api example 
// async function getdata  () {
//     const data = await fetch() ; 
//     const result = await data.json() ; 
//     console.log(result.properties.periods[1].shortForecast)

        
// }
// start of example with async and await 
// function get() {
//     return new Promise ((res , rej) => {
//         setTimeout(() => {
//             res(onsuccess()) ;
          
//         }, 2000);
//     })  
// }
// function onsuccess () { 
//     return new Promise((res,rej)=> {
//         res('Resolved1')
//     })
// }

// async function start() {
//     try{
//         const result = await get() ;
//         console.log(`Success : ${result}`) ; 
//     }catch(error){
//         console.log(`Error : ${error}`) ; 
//     }
// }
// start() ; 
//end of example of async and await ; 
// const url = 
// // 'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10'

// async function getdata () {
//     const response = await fetch (url) ; 
//     const res = await response.json() ; 
//     console.log(res); 
// }
// getdata() ;
//end of example 


//fetch API examples
// const myJsonObjectFromServer = '{"Username" : "Abdullah" , "Age" : 21}' ; 
// console.log(typeof myJsonObjectFromServer) ; 
// console.log(myJsonObjectFromServer) ; 
// const myobject = JSON.parse(myJsonObjectFromServer) ; 
// console.log(typeof myobject) ; 
// console.log(myobject) ; 
// myobject["Username"] = "Ahmed" ; 
// myobject["Age"] = 22 ; 
// const myJsonObjectToServer = JSON.stringify(myobject) ; 
// console.log(typeof myJsonObjectToServer) ; 
// console.log(myJsonObjectToServer) ;  

// Api fetch exaMPLE
// let myrequest = new XMLHttpRequest() ; 
// myrequest.open("GET" , "https://api.github.com/users/elzerowebschool/repos") ;
// myrequest.send() ;  
// myrequest.onreadystatechange = function () { // create function 
//     if (this.readyState ===4 && this.status ===200) {
//         let jsdata = JSON.parse(this.responseText) ;  //transform it to object 
//         for (let i = 0 ; i <jsdata.length ; i++) {
//             let div = document.createElement("div") ; 
//             let reponame = document.createTextNode(jsdata[i].full_name) ; 
//             div.appendChild(reponame) ; 
//             document.body.appendChild(div) ; 
//         }
//     }
//     console.log(myrequest);
// }

//End Of Api example...

// function getsum (...numbers) {
// let result = 0 ; 
// for (let i = 0 ; i< numbers.length ; i++) {
//     result = result + numbers[i] ;
// }
// return result ; 
// }
// console.log(getsum(2,3,4,3,2,2,2,2,2,2,1)) ; 

// function examples 2
// function UserProfile(UserName = 'Unknown' , Age = 'Unknown' , Nationality = 'Unknown' , showSkills = 'no' , ...skills ) {
//     document.write(`<div>`)
//     document.write(`<p> UserName: ${UserName}</p>`)
//     document.write(`<p> Age: ${Age}</p>`)
//     document.write(`<p> Nationality : ${Nationality}</p>`)
//     if (showSkills === 'yes') {
//         if (skills.length > 0) {
//             document.write(`<p> Skills :${skills.join(" | ")} </p>`)
           
//         }else {
//             document.write(`<p>Skills : No Skills Found </p>`)

//         }
//     }
//     else {
//         document.write(`<p> Skills :User Hide His Skills </p>`)

//     }
//     document.write(`</div>`)

// }
// UserProfile('Ahmed' , 32  , 'Libyan' , 'yes' , "playtennis" , 'play' , 'Listen To Music' ) ; 

//END OF FUNCTION 2 EXAMPLE



