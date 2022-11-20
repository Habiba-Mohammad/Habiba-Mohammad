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
let pricsList=[2]
// هنا بلف على الأزرار كلها وبقوبه لما اضغط 
for (let i = 0; i < dressBtns.length; i++) {
  let doneButton = dressBtns[i]

  doneButton.addEventListener('click', function () {
    doneButton.className = 'added';
    doneButton.innerHTML='Add more'
    cartNumbers(dressProducts[i])
 totalCost(dressProducts[i])

  })
}
//////////////////////////////////////////
for (let i = 0; i < shoeBtns.length; i++) {
  let doneButton = shoeBtns[i]
  doneButton.addEventListener('click', function () {
    doneButton.className = 'added';
    doneButton.innerHTML='Add more'
    cartNumbers(shoeProducts[i])
 totalCost(shoeProducts[i])
  })
  

}


///////////////////////////////////////
for (let i = 0; i < AcsBtns.length; i++) {
  let doneButton = AcsBtns[i]
  doneButton.addEventListener('click', function () {
    doneButton.className = 'added';
    doneButton.innerHTML='Add more'
    cartNumbers(AcsProducts[i])
  totalCost(AcsProducts[i])
  localStorage.setItem('allprice',totalCost(AcsProducts[i]))
//  generalCost(AcsProducts[i])


  })
}
localStorage.getItem('allprice')

//////////////////////////////////////////////////////////////////////////////////////////////


  //////////////////////////
  function onloadCarsNumber(){
    let productNumber=localStorage.getItem('cartNumber')
    document.querySelector("h1 span").textContent=productNumber
  }
  function cartNumbers(product){

    let productNumber=localStorage.getItem('cartNumber')

productNumber=parseInt(productNumber)

if (productNumber){
localStorage.setItem('cartNumber',productNumber+1)
document.querySelector("h1 span").textContent=productNumber+1
setItems(product)
}

else{
  localStorage.setItem('cartNumber',1)
document.querySelector("h1 span").textContent=1}
}

//////////////////////////////////////////////////////////////
// items 
////////dress
let dressList=[]
let list2=[]
let list3=[]
function setItems(product){
  let cartItem=localStorage.getItem('productCart');
  list2.push(cartItem)
  dressProducts.inCart=1;
  shoeProducts.inCart=1;
  AcsProducts.inCart=1;
  list3.push(product)
  console.log(list3)
  //cartItem=JSON.parse(cartItem)
  ///console.log(list2)
dressList.push(product)
let stringify=JSON.stringify(dressList)
localStorage.setItem('list',stringify)

  if (cartItem!=null){
   product.inCart+=1}
else{
    product.inCart=1;
    cartItem={
      [product.tag]:product
    }
  }

  cartItem={
[product.tag]:product
  }
  //////////////////// العناصر كلها بتظهر ك استرينج في اللوكل ستورج فقط 
  localStorage.setItem('productCart',JSON.stringify(cartItem))
  localStorage.setItem('list',JSON.stringify(list3))
let getItem =localStorage.getItem('list')
let b=JSON.parse(getItem)
for(let i=0;i<list3.length;i++){
  let sum1=parseInt(b[i].price)
  let sum2=parseInt(b[i+1].price)
console.log(b[i].name)

}
//console.log(list2)

}
//////////////////////////////// total cost 
let list =[]
function totalCost(product1){
  list.push(product1.price)
const num= 0;
const sum = list.reduce(
  (firstEL, secondEL) => firstEL + secondEL,
  num

);
localStorage.setItem('total',sum)

}

console.log(list)

///////////////////
function displayCart(){
  
  if (window.location.href === "http://127.0.0.1:5500/myCart.html"){
  let y=localStorage.getItem('list')
  let x= JSON.parse(y)
  console.log(x)
  for(let i=0;i<x.length;i++){
    let num=i
  document.getElementsByClassName('items')[0].innerHTML+=`${num+1})  ${x[i]['name']} <br>`;
  document.getElementById('cost').innerHTML=localStorage.getItem('total')

//let button=document.createElement('button').textContent='delete'
//let inButton=document.getElementsByClassName('items').appendChild(button)
//console.log(inButton)
  }
}
}


displayCart()
onloadCarsNumber()
