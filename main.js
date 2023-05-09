// const name = 'ahmed' ; 
// const age = 30 ; 
// const iscool = false ;
// const salary = null ; 
// const nationality = undefined ; 
// let x ; 

// // console.log(typeof name) ; 
// // console.log(typeof age) ; 
// // console.log(typeof iscool) ; 
// // console.log(typeof salary) ; 
// // console.log(typeof nationality) ; 
// // console.log(typeof x) ; 
// // console.log(`My name is ${name} and im ${age}`) ; 
// const s = 'technology, Computers, IT, Code' ; 
// console.log(s.split(', '));
// const fruits = ['Apple' , 'Orange' , 'Strawberty'] ;
// console.log(fruits)  ; 
// console.log(Array.isArray(fruits));
// fruits.push('mango') ;
// console.log(fruits) ;
// fruits.unshift('bear') ; // bear , apple , orange , strawberry , mango // 
// console.log(fruits) ; 
// console.log(fruits[1]);
// console.log(fruits.indexOf('Orange')) ;
// console.log(fruits) ; 
// fruits.pop() ; 
// console.log(fruits) ; 




// const person = {
//     FirstName:'Osama' , 
//     LastName : 'Ali' , 
//     Age : 32 , 
//     Hobbies: ['VideoGames' , 'Playing FootBall' , 'Music'] ,
//     Address: {
//         Street: '50 Main.st',
//         City: 'bostun',
//         State: 'California'
//     }
// }
// console.log(person) ;
// console.log(person.FirstName) ;
// console.log(person.LastName) ;
// console.log(person.Age);
// console.log(person.Hobbies);
// console.log(person.Hobbies[1]);
// console.log(person.Hobbies.indexOf('Music'));
// console.log(person.Address) ; 
// console.log(person.Address.Street);
// person.email = "OsamaAli@gmail.com" ; 
// console.log(person) ;




// const todo = [
//     {
//         id:1 ,
//         Name: 'Take Out Trash',
//         isdone:true
//     } ,

//     {
//         id:2 ,
//         Name: 'Meeting With My Friends',
//         isdone:false
//     } ,
//     {
//         id:3 , 
//         Name : 'Appoiment With My Doctor',
//         isdone: false

//     }
// ]
// console.log(todo[2].isdone) ; 
// const todojson = JSON.stringify(todo) ; 
// console.log(todojson);

// const todotext = todo.map(function(todonames){
//     return todonames.Name ; 
// })
// console.log(todotext) ;

// const filtering = todo.filter(function(getfilter){
//     return getfilter.id ===1;
// }).map (function(xx) {
//     return xx.Name ; 
// })
// console.log(filtering) ; 

// class Person {
//     constructor (firstname , lastname , dob)
//     {
//         this.firstname = firstname ; 
//         this.lastname  = lastname ; 
//         this.dob = new Date (dob) ;
//     }
//     GetFullName () {
//         return `${this.firstname} ${this.lastname}` ; 
//     }
//     GetDateOfBirth () {
//         return this.dob.getFullYear() ;
//     }
//     getage() {
//         return 2023 - this.GetDateOfBirth();
//     }
// }
// const person1 = new Person ('ahmed' , 'osama' , '3-9-1999') ; 
// console.log(person1.getage()) ;



// Dom
//single selector
// console.log(document.getElementById('my-form')) ;  // id
// console.log(document.querySelector('h1')) ; // by class id tag type . .. . 
//multiple selector 

// const myform = document.querySelector('#my-form') ; 
// const nameinput = document.querySelector('#name') ; 
// const emailinput = document.querySelector('#email') ;
// const msg = document.querySelector('.msg') ; 

// myform.addEventListener('submit',onsubmit) ;
// function onsubmit(x) {
//   x.preventDefault() ; 
//   if(nameinput.value === '' || emailinput.value === '')
//   {
//     msg.classList.add('error') ; 
//     msg.innerHTML = 'Please Enter UserName And Email !' ; 
//   }
//   else
//   {
        
//   }
// }
const company = [
  {name : 'company one' , category:'finance' , start : 2023 , end: 2010} ,
  {name : 'company two' , category:'finance' , start : 2023 , end: 2010} ,
  {name : 'company three' , category:'finance' , start : 1970 , end: 2010} ,
  {name : 'company four' , category:'finance' , start : 1970 , end: 2010} ,
  {name : 'company five' , category:'finance' , start : 1970 , end: 2010} ,
  {name : 'company six' , category:'Retail' , start : 2000 , end: 2010} ,
  {name : 'company seven' , category:'finance' , start : 2000 , end: 2010} ,


]
const ages = [33,22,11,22,33,44,3,22,1] ; 
company.forEach(function(com){
  console.log(com.name) ; 
}) 
const ageDrink = ages.filter(function(com){
  if (com>21){
    return true ; 
  }
})
console.log(ageDrink);
const Retail = company.filter(function(com){
  if (com.category === 'Retail'){
    return true ; 
  }
})
console.log(Retail) ;

const retail = company.filter(com => com.category==='Retail') ;
console.log(retail) ;
const eight = company.filter(com=> (com.start >=1980 && com.start<=1989) ) ; 
console.log(eight);
const lsat = company.filter(com=> (com.end - com.start>= 10));
console.log(lsat) ; 
const testMap = company.map(function(com){
  return `${com.name}:[${com.start}-${com.end}]`;
})
console.log(testMap);
const age1 = ages.map(ages=> Math.sqrt(ages))
.map(ages=> ages*2) ; 
console.log(age1) ; 
const sortedcompany = company.sort(function(c1 , c2) {
 return c1.start  - c2.start ; 
})
console.log(sortedcompany) ;

const sortedAges = ages.sort(function (c1 , c2){
  if (c1 > c2){
    return 1 ; 
  }
  else {
    return -1 ; 
  }
})
console.log(sortedAges) ; 
const sortage = ages.sort(function(a , b) {
  return b-a ;
});
console.log(sortage);
const totalyears = company.reduce(function(total , com) {
  return total + (com.end - com.start) ; 
},0)
console.log(totalyears) ; 
const totalages = ages.reduce(function(total , com) {
  return total + com ; 
})
console.log(totalages);