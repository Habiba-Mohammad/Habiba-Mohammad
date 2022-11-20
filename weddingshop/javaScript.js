let carts = document.getElementsByClassName("cart2")
let btns = document.getElementsByTagName("button")
let dressBtns=document.getElementsByClassName("dress")
let shoeBtns=document.getElementsByClassName('shoes')
let AcsBtns=document.getElementsByClassName("Acs")
console.log(shoeBtns)
let dressProducts=[
  {name:'france dress',
    tag:"1",
    price:200,
    inCart:0,
  },
  {
    name:'italy dress',
    tag:"2",
    price:300,
    inCart:0
  },
  {
    name:'turkey dress',
    tag:"3",
    price:150,
    inCart:0
  },
  {
    name:'syrian dress',
    tag:"4",
    price:100,
    inCart:0
  }
]
let shoeProducts=[
  {name:'france shoes',
  tag:"1",
  price:100,
  inCart:0},
  {name:'italy shoes',
  tag:"2",
  price:120,
  inCart:0}
]
let AcsProducts=[
  {name:'weddingCrown',
  tag:"1",
  price:20,
  inCart:0},
  {name:'weddingPin',
  tag:"2",
  price:10,
  inCart:0}
]////////////////////////////////////////////////////////////////
function onloadCarsNumber(){
    let productNumber=localStorage.getItem('cartNumber')
    document.querySelector("h1 span").textContent=productNumber
  }
///////////////////////
for (let i = 0; i < dressBtns.length; i++) {
    let doneButton = dressBtns[i]
    doneButton.addEventListener('click', function () {
      doneButton.className = 'added';
      doneButton.innerHTML='Add more'
      cartNumbers(dressProducts[i])
 totalCost1(dressProducts[i])
  
    })
  }
  //////////////////////////////
  for (let i = 0; i < shoeBtns.length; i++) {
    let doneButton = shoeBtns[i]
    doneButton.addEventListener('click', function () {
      doneButton.className = 'added';
      doneButton.innerHTML='Add more'
      cartNumbers(shoeProducts[i])
      totalCost2(shoeProducts[i])
    })
    
  
  }
  ////////////////////////
  for (let i = 0; i < AcsBtns.length; i++) {
    let doneButton = AcsBtns[i]
    doneButton.addEventListener('click', function () {
      doneButton.className = 'added';
      doneButton.innerHTML='Add more'
      cartNumbers(AcsProducts[i])
      totalCost3(AcsProducts[i])
  
    })
  }
  let list =[]
function totalCost1(product1){
  list.push(product1.price)
const num= 0;
const sum = list.reduce(
  (firstEL, secondEL) => firstEL + secondEL,
  num

);
localStorage.setItem('total of dresses',sum)

}
function totalCost2(product1){
    list.push(product1.price)
  const num= 0;
  const sum = list.reduce(
    (firstEL, secondEL) => firstEL + secondEL,
    num
  
  );
  localStorage.setItem('total of shoes',sum)
  
  }
  function totalCost3(product1){
    list.push(product1.price)
  const num= 0;
  const sum = list.reduce(
    (firstEL, secondEL) => firstEL + secondEL,
    num
  
  );
  localStorage.setItem('totalof Acs',sum)
  }
  function cartNumbers(product){

    let productNumber=localStorage.getItem('cartNumber')

productNumber=parseInt(productNumber)

if (productNumber){
localStorage.setItem('cartNumber',productNumber+1)
document.querySelector("h1 span").textContent=productNumber+1
}

else{
  localStorage.setItem('cartNumber',1)
document.querySelector("h1 span").textContent=1}
}
//////////////////////////////////////////////////////////////////////////////////
function displayCart(){
  if ((window.location.href).match('myCart') ){
  console.log(888)
    //document.getElementsByClassName('items')[0].innerHTML+=`${num+1})  ${x[i]['name']} <br>`;
    document.getElementById('cost1').innerHTML=localStorage.getItem('totalof Acs')
    document.getElementById('cost2').innerHTML=localStorage.getItem('total of shoes')
    document.getElementById('cost3').innerHTML=localStorage.getItem('total of dresses')
    document.getElementById('cost4').innerHTML= parseInt(localStorage.getItem('totalof Acs'))+parseInt( localStorage.getItem('total of shoes'))+parseInt( localStorage.getItem('total of dresses'))
  }}

  
  displayCart()
  onloadCarsNumber()