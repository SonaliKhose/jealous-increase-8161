let container=document.querySelector(".womenscart-container");

let cart_datawomen=JSON.parse(localStorage.getItem("womenscart")) ;


if(cart_datawomen===null){
  cart_datawomen=[];
}

displayData(cart_datawomen);


function displayData(data){
let totalPrice=0;
  data.forEach(function(element){
    totalPrice+=Number(element.price);
  })
  let res=document.querySelector("span");
  res.textContent=totalPrice;
  container.innerHTML=null;

  data.forEach((el,index)=>{
  let card=document.createElement("div");

  let image=document.createElement("img");
  image.setAttribute("src",el.image_url)
  image.setAttribute("src",el.image_url);

  let name=document.createElement("h1");
      name.textContent=el.name;

      let brand=document.createElement("h3");
      brand.textContent="Brand=> "+el.brand;
  
      let price=document.createElement("h3");
     price.textContent="Price with Discount!! : $"+el.price;
     price.style.color="red"

  
      let strikedoffprice=document.createElement("h3");
      strikedoffprice .textContent="Price without Discount-- : $"+el.strikedoffprice;
  
      let button=document.createElement("button");
      button.textContent="Buy Now";
      button.style.padding="10px 16px";
      button.style.margin="5px"
      button.style.fontSize="18px"
      button.style.cursor="pointer";
      button.style.color="red";
      button.style.backgroundColor="yellow";
      button.style.fontWeight="bold";
      button.style.borderRadius="7px";

      button.addEventListener("click",function(){
        window.location.assign("./cartdetails.html")
        
      })






      Delete=document.createElement("button");
      Delete.textContent="Remove from Basket"
      
      Delete.style.padding="10px 16px";
      Delete.style.margin="5px"
      Delete.style.fontSize="18px"
      Delete.style.cursor="pointer";
      Delete.style.color="blue";
      Delete.style.backgroundColor="pink";
      Delete.style.fontWeight="bold";
      Delete.style.borderRadius="7px";
      Delete.addEventListener("click",function(){
        deleteData(index);
      });
     

      card.append(image,name,brand,price,strikedoffprice,button,Delete);
      container.append(card);
});

}


function deleteData(index){
  cart_datawomen=cart_datawomen.filter(function(el,i){
    return i!==index;
  });
 
  displayData(cart_datawomen)
  localStorage.setItem("womenscart",JSON.stringify(cart_datawomen))
}


//mens
