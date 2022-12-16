let cart_itemsmens=JSON.parse(localStorage.getItem("menscart"))||[];
    let total=document.querySelector("#cart-total");
    let sum=0;
      cart_itemsmens.forEach(function(el,index){
        sum=sum+Number(el.price);
      })
      total.textContent=sum;
    cart_itemsmens.forEach(function(el,index){
      
    let parent=document.querySelector("#cart-container1")
    let card=document.createElement("div");

    let image_url=document.createElement("img");
    image_url.setAttribute("src",el.image_url)
    image_url.textContent=el.image_url;

    let name=document.createElement("h3");
    name.textContent=el.name;

    let price=document.createElement("p");
    price.textContent=el.price;

    let strikedoffprice=document.createElement("p");
    strikedoffprice .textContent=el.strikedoffprice;

    let quantity=document.createElement("span");
    quantity.textContent="1";

    let add=document.createElement("button");
    add.textContent="+";
    add.addEventListener("click",function(){
      el[1]++;
      localStorage.setItem("cart_items",JSON.stringify(cart_items));
      quantity.textContent++;
    })
    
    
    
    let rem=document.createElement("button");
    rem.textContent="-";
    rem.addEventListener("click",function(){
      if(quantity<=1){
        cart_items.splice(i,1);
        localStorage.setItem("cart_items",JSON.stringify(cart_items));
        window.location.reload();
      }
      else{
        el[1]--;
        localStorage.setItem("cart_items",JSON.stringify(cart_items));
        quantity.textContent--;
      }
    })
   
    card.append(image_url,name,price,strikedoffprice,add,quantity,rem);
    
    parent.append(card);
    
})