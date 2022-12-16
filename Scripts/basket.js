let womens=document.querySelector(".cart-container");
let WomensCartData=JSON.parse(localStorage.getItem("cart"));

if(WomensCartData==null){
  WomensCartData=[];
}

displayData(WomensCartData);

function displayData(data){
  womens.innerHTML=null;

  let totalPrice=0;
    
  data.forEach((element)=>{
    totalPrice+=Number(element.price);
  })
//Cart total price
  let res=document.querySelector("#cart-total");
  res.textContent=totalPrice;

  let card=document.createElement("div");

  let image=document.createElement("img");
  image.setAttribute()
}