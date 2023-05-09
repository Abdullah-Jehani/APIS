// console.dir(document) ; 
// console.log(document.domain) ; 
// console.log(document.title) ;
// document.title = 123 ;  
// console.log(document.title)  ;
// console.log(document.URL)  ;
// console.log(document.all) ; 
// document.all[9].textContent = 'hello ' ; 
// var item = document.getElementsByClassName('list-group-item') ; 
// console.log(item) ; 
// console.log(item[0]) ; 
// item[1].textContent = 'hello 2' ; 
// item[0].textContent = 'hello 1' ; 
// item[0].style.background= 'red' ;  
// for (var i = 0 ; i<item.length ; i++)
// {    item[i].style.fontWeight = 'bold' ; 
//     item[i].style.background = 'yellow' ; 

// }
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)') ; 

// for (var i = 0 ; i<odd.length ; i++) {
//     odd[i].style.color = 'red' ; 
//     even[i].style.color = 'blue' ; 
// }

// var input = document.querySelector('input[type="submit"]') ; 
// input.value = 'hello' ; 

// var items1 = document.querySelector('.items-lists') ; 
// console.log(items1.children[3]) ; 
// items1.style.paddingRight = '210px' ;
// console.log(items1.nextElementSibling) ; 
// console.log(items1.previousElementSibling) ;


// newdiv = document.createElement('div') ; 
// console.log(newdiv);
// newdiv.className = 'divition' ; 
// var newdivtext = document.createTextNode('sss') ; 
// newdiv.appendChild(newdivtext);
// var container = document.querySelector('header .container') ; 
// var h1 = document.querySelector('header h1') ; 
// container.insertBefore(newdiv,h1); 
// newdiv.style.color = 'red' ;
// var button = document.getElementById('but').addEventListener('mouseup',onsubmit) ; 
// function onsubmit (event) {
//     console.log('buttonclicked') ; 
//     console.log(event.target.className);
//     // console.log(event);
// console.log(event.clientY) ; 
// console.log('event type :'+event.type);

// }
// var box = document.getElementById('enter') ; 
// box.addEventListener('mousemove' , runEvent)  ;
// function runEvent (event) {
//     console.log('Event Type :'+event.type) ; 
//     var out = document.getElementById('output') ; 
//     out.innerHTML = '<h3>OffsetX: ' + event.offsetX + '</h3> <h3>OffsetY: ' +event.offsetY + '</h3>' ; 

// } 

// var in1 = document.getElementById('txt1') ;
// in1.addEventListener('blur',runEvent) ;
// function runEvent (event) {
//     console.log('eventType:' + event.type) ;
//     // var out = document.getElementById('output') ;
//     // out.innerHTML = '<h3>'+event.target.value+'</h3>' 
// }
// var pick = document.querySelector('.my-form') ; 
// pick.addEventListener('submit', runEvent) ; 
// function runEvent (event) {
//     event.preventDefault() ; 
//      console.log('event type : '+ event.type) ;
// }

var form = document.getElementById('addForm') ; 
var itemlist = document.getElementById('list') ; 

form.addEventListener('submit' , onsubmit);
itemlist.addEventListener('click' , removeitem) ;
function onsubmit (event) {
    event.preventDefault() ; 
    var newitem = document.getElementById('txt').value ;
    var li = document.createElement('li');
    li.className = 'item-list' ;
    li.appendChild(document.createTextNode(newitem)) ;
    console.log(1) ;
    var deletebtn = document.createElement('button') ; 
     deletebtn.style.background= 'rgb(218, 4, 4)';
    deletebtn.style.padding = '5px 8px';
    deletebtn.style.border = 'none';
    deletebtn.style.color= 'white';

    deletebtn.appendChild(document.createTextNode('X')) ; 
    itemlist.appendChild(li);
    li.appendChild(deletebtn);
    document.getElementById('txt').value = '';
}
function removeitem(event) {
    if (event.target.classList.contains('btu'))
    {
        if(confirm('Are You Sure?')){
            var li1 = event.target.parentElement ; 
            itemlist.removeChild(li1);
        }
    }
}
var search = document.getElementById('search') ;
search.addEventListener('keyup' , filteritems) ;
function filteritems(event) {
    var text = event.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li') ; 
    Array.from(items).forEach(function(item1){
        var itemname = item1.firstChild.textContent ; 
        if(itemname.toLowerCase().indexOf(text)!= -1)
        {
            item1.style.display = 'flex' ; 
        
        } else {
            item1.style.display = 'none' ; 

        }
    })
}