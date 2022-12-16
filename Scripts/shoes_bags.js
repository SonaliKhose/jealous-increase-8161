let div=document.getElementById("slideshow");

let img_arr=[
    "https://cdn4.vectorstock.com/i/1000x1000/25/88/super-sale-cosmetics-banner-for-shopping-season-vector-24002588.jpg",
    "https://img.freepik.com/premium-psd/chocolate-color-watch-product-web-banner-design_154386-62.jpg",
    "https://i.pinimg.com/originals/c8/c8/f6/c8c8f6a67b4f3402de8c43739a158683.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/011/320/988/small/big-sale-banner-design-with-podium-gradient-background-social-media-post-product-advertisement-design-special-discount-design-vector.jpg"
];

let index=0;

function slide(){
    div.setAttribute("src",img_arr[index]);
    index++;
    if(index>=img_arr.length){
        index=0;
    }
}

setInterval("slide()",5000);
let cart_data=[];
let productData = [
      {
        id:1,
        image_url:
          "https://www.shutterstock.com/image-photo/new-shoes-on-white-background-260nw-91078661.jpg",
        name: "SHOES",
        brand:"Fashion steps",
        price: "1170",
        strikedoffprice: "2599",
      },
      {
        id:2,
        image_url:
          "https://cdn.shopify.com/s/files/1/0555/8658/6685/products/HKGH480013N2_0_1024x1024.jpg?v=1669719159",
        name:"BAG",
        brand:"Bag corner",
        price: 699,
        strikedoffprice: 999,
      },
      {
        id:3,
        image_url:"https://previews.123rf.com/images/ginasanders/ginasanders1407/ginasanders140700167/29722729-ladies-shoes-and-men-s-shoes-symbol-photo-for-partnership-and-equality.jpg",
        name:" SHOES",
        brand:"Fashion steps",
        price: 945,
        strikedoffprice: 2099,
      },
      {
        id:4,
        image_url:
          "https://m.media-amazon.com/images/I/81hZC0co35L._UY500_.jpg",
          name:"BAG",
          brand:"Bag corner",
        price: 399,
        strikedoffprice: 799,
      },
      {
        id:5,
        image_url:
          "https://www.athleticshoereview.com/images/MensvsWomensShoe.jpg",
        name: " SHOES",
        brand:"Fashion steps",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:6,
        image_url:
          "https://rukminim1.flixcart.com/image/832/832/kwnv6a80/sling-bag/o/0/5/sling-bag-for-ladies-and-girls-casual-travel-side-bag-for-original-imag9a9k2ymanyah.jpeg?q=70",
          name:"BAG",
          brand:"Bag corner",
        price: 1440,
        strikedoffprice: 3199,
      },
      {
        id:7,
        image_url:
          "https://www.shutterstock.com/image-photo/two-pairs-men-women-shoes-260nw-96952577.jpg",
        name:" SHOES",
        brand:"Fashion steps",
        price: 1999,
        strikedoffprice: 3199,
      },
      {
        id:8,
        image_url:
          "https://m.media-amazon.com/images/I/41He+gEb06L.jpg",
          name:"BAG",
          brand:"Bag corner",
        price: 769,
        strikedoffprice: 1099,
      },
      {
        id:9,
        image_url:
          "https://thumbs.dreamstime.com/z/men-s-red-high-heel-womens-shoes-white-background-fashion-men-s-shoes-red-high-heel-women-s-shoes-wooden-background-101336193.jpg",
        name: "SHOES",
        brand:"Fashion steps",
        price: 1299,
        strikedoffprice: 1440,
      },
      {
        id:10,
        image_url:
          "https://cdn.shopclues.com/images1/thumbnails/115710/320/320/152843448-115710346-1635867686.jpg",
          name:"BAG",
          brand:"Bag corner",
        price: 699,
        strikedoffprice: 999,
      },
      {
        id:11,
        image_url:
          "https://thumbs.dreamstime.com/z/red-fashion-women-shoes-handbag-over-white-29172078.jpg",
        name: "SHOES",
        brand:"Fashion steps",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:12,
        image_url:
          "https://img.joomcdn.net/f996a4102d005037b3234dc7bc74861dd1802c87_original.jpeg",
          name:"BAG",
          brand:"Bag corner",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:13,
        image_url:
          "https://previews.123rf.com/images/ginasanders/ginasanders1408/ginasanders140800042/30361180-ladies-shoes-and-men-s-shoes-symbol-photo-for-partnership-and-equality.jpg",
        name: "SHOES",
        brand:"Fashion steps",
        price: 599,
        strikedoffprice: 999,
      },
      {
        id:14,
        image_url:
          "https://cf.shopee.ph/file/171aa67dd710e5e8af040de3c97772ba",
          name:"BAG",
          brand:"Bag corner",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:15,
        image_url:
          "https://www.shutterstock.com/image-photo/man-woman-shoes-isolated-on-260nw-306564512.jpg",
        name:"SHOES",
        brand:"Fashion steps",
        price: 9999,
        strikedoffprice: 12000,
      },
      {
        id:16,
        image_url:
          "https://img.joomcdn.net/ace7943f125f6580fff9a12da22ec1ccde237abd_original.jpeg",
          name:"BAG",
          brand:"Bag corner",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:17,
        image_url:
          "https://www.shutterstock.com/image-photo/new-shoes-on-white-background-260nw-91078661.jpg",
        name: "SHOES",
        brand:"New Kicks",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:18,
        image_url:
          "https://cf.shopee.com.my/file/265c09c0f3a5e75e0751cfa5265c8cee",
          name:"BAG",
          brand:"Bag corner",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:19,
        image_url:
          "https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-0424-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024",
          name: "SHOES",
          brand:"New Kicks",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:20,
        image_url:
          "https://m.media-amazon.com/images/I/71+hiJhPN9L._AC_SL1500_.jpg",
          name:"BAG",
          brand:"Bag corner",
        price: 3499,
        strikedoffprice: 4999,
      },
      {
        id:21,
        image_url:
          "https://www.shutterstock.com/image-photo/man-woman-shoes-isolated-on-260nw-369795977.jpg",
          name: "SHOES",
          brand:"New Kicks",
        price: 749,
        strikedoffprice: 1499,
      },
      {
        id:22,
        image_url:
          "https://image.made-in-china.com/202f0j00lQOGaSoIHAui/Aji-Classical-PU-Leather-Crossbody-Shoulder-Bags-Chain-Shoulder-Strap-High-Quality-Bags-Ladies.jpg",
          name:"BAG",
          brand:"Bag corner",
        price: 1149,
        strikedoffprice: 2299,
      },
      {
        id:23,
        image_url:
          "http://photos.demandstudios.com/getty/article/99/116/177412297.jpg",
       
         name: "SHOES",
        brand:"New Kicks",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:24,
        image_url:
          "https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://ae01.alicdn.com/kf/Hda4f71fee9d249cd8902df82b979e74ek/Newest-women-bag-Shoulder-Bags-Crossbody-Bags-For-Women-Cute-Chain-black-Handbag-fashion-bags-women.jpg",
          name:"BAG",
          brand:"Bag corner",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:25,
        image_url:
          "https://www.shutterstock.com/image-photo/luxury-mans-shoes-pink-womens-260nw-228756697.jpg ",
          name: "SHOES",
          brand:"New Kicks",
        price: 3499,
        strikedoffprice: 4999,
      },
      {
        id:26,
        image_url:
          "https://s.alicdn.com/@sc04/kf/Hbb7201102e1d4d579561c1c270f5e049p.jpg_300x300.jpg",
          name:"BAG",
          brand:"Bag corner",
        price: 3499,
        strikedoffprice: 4999,
      },
      {
        id:27,
        image_url:
          "https://www.shutterstock.com/image-photo/high-heels-different-colors-womens-260nw-111559139.jpg",
          name: "SHOES",
          brand:"New Kicks",
        price: 1399,
        strikedoffprice: 2799,
      },
      {
        id:28,
        image_url:
          "https://lh3.googleusercontent.com/JWE6yO96SlBzzaswVMcdV2muVLO7C-6npJMX5L-Q2wdGXlxyCcT31JhZF8vsxeOUDQJONSkmmzGBDjBFbYIEPDLYSx408SO_V9j9Tf3Q=w500-rw",
          name:"BAG",
          brand:"Bag corner",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:29,
        image_url:
          "https://media.istockphoto.com/id/509922881/photo/legs-in-pink-platform-high-heels-pumps.jpg?s=1024x1024&w=is&k=20&c=3RgwZlr1KLLuX8I1YGQ_hcJ-L6WE3cuJjhSVl16EPGM=",
          name: "SHOES",
          brand:"New Kicks",
        price: 3919,
        strikedoffprice: 5599,
      },
      {
        id:30,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb33M7h6U48k3aL7IzHqljjN00qZCaRXCH_g&usqp=CAU",
          name:"BAG",
          brand:"Bag corner",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:31,
        image_url:
          "https://m.media-amazon.com/images/I/81a44Ppx5XL._AC_UL1500_.jpg",
        name: "SHOES",
        brand:"Classy shoes",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:32,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_h7r41fcNjj_c4QDNwwQy4Cltd4MMrAUlw&usqp=CAU",
          name:"BAG",
          brand:"Bag corner",
        price: 7599,
        strikedoffprice: 9999,
      },
      {
        id:33,
        image_url:
          "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/057A0204-1.jpg?v=1670325676",
          name: "SHOES",
          brand:"Classy shoes",
        price: 909,
        strikedoffprice: 1299,
      },
      {
        id:34,
        image_url:
          "https://rukminim1.flixcart.com/image/832/832/k5cs87k0/sling-bag/8/a/j/girls-pu-leather-casual-awt-6-sling-bag-acewood-original-imafzfdhyyn9xsnw.jpeg?q=70",
        name: "BAG",
        brand:"Classy Bags",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:35,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfbD2Hh-gjOHRZmXmgTRjSa7k2pBn31j_zA&usqp=CAU",
          name: "SHOES",
          brand:"Classy shoes",
        price: 1749,
        strikedoffprice: 2499,
      },
      {
        id:36,
        image_url:
          "https://m.media-amazon.com/images/I/71i2U2wyBxL._UL1500_.jpg",
          name: "BAG",
          brand:"Classy Bags",
        price: 1079,
        strikedoffprice: 1799,
      },
      {
        id:37,
        image_url:"https://img.huffingtonpost.com/asset/623dc3711e00002b411b117a.png?cache=e4qV4jXa2X&ops=scalefit_720_noupscale",
        name: "SHOES",
        brand:"Classy shoes",
        price: 945,
        strikedoffprice: 2099,
      },
      {
        id:38,
        image_url:
          "https://sc04.alicdn.com/kf/Hede3a054c3b64196979f46b01b671dddk.jpg",
          name: "BAG",
          brand:"Classy Bags",
        price: 399,
        strikedoffprice: 799,
      },
      {
        id:39,
        image_url:
          "https://img.huffingtonpost.com/asset/623dc5be2300004886138423.png?ops=scalefit_960_noupscale",
          name: "SHOES",
          brand:"Classy shoes",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:40,
        image_url:
          "http://sc04.alicdn.com/kf/He2157ebf112a4026ba1933347313e97es.jpg",
          name: "BAG",
          brand:"Classy Bags",
        price: 1440,
        strikedoffprice: 3199,
      },
      {
        id:41,
        image_url:
          "https://www.sepkicks.com/uploads/Nike_Air_Max_Shoes/Air_Max_87/Air_Max_1_Ultra_Flyknit/Nike_Air_Max_1_Ultra_Flyknit_OG_Men_Women_Running_Shoes_White_Pure_Platinum_Grey_University_Red_843384-101.jpg",
          name: "SHOES",
          brand:"Classy shoes",
        price: 769,
        strikedoffprice: 1099,
      },
      {
        id:42,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZwpvMxn-iO4lsOg7yvO1KU9HNQX-aYyXZB10KQ9YDseuH1NfgrbA-YdyHwi0SnqjbA4&usqp=CAU",
          name: "BAG",
          brand:"Classy Bags",
        price: 1299,
        strikedoffprice: 1440,
      },
      {
        id:43,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4-MPRXkc8IJjUfQuR7EnI8MGU_xH1VEz1BqiIM9dBXAjc_Ttmd2-WNBmHM4KEZo8cls&usqp=CAU",
          name: "SHOES",
          brand:"Classy shoes",
        price: 699,
        strikedoffprice: 999,
      },
      {
        id:44,
        image_url:
          "https://m.media-amazon.com/images/I/51+dfSJULwL.jpg",
          name: "BAG",
          brand:"Classy Bags",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:45,
        image_url:
          "https://img.joomcdn.net/c1c5f402a8fbff27336dcc1b302b7bcd9ccfed6d_original.jpeg",
          name: "SHOES",
          brand:"Classy shoes",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:46,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxBic-oec_eKU5qTApu6wTzpantk8U0V0dedQZGRhouD9d62Wkqcnt_Qy6QbkuMkE4TA&usqp=CAU",
          name: "BAG",
          brand:"Classy Bags",
        price: 599,
        strikedoffprice: 999,
      },
      {
        id:47,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvo0f_zE2C_aqGG71w-u69mJn1SJlpFW3h-A&usqp=CAU",
          name: "SHOES",
          brand:"Classy shoes",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:48,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJAYK2U8-3zdpmOXAAc5D_vwXFspxOnZlJzLc7swfrzss6e_PcWPafAF0gqcLkGFPKaU&usqp=CAU",
          name: "BAG",
          brand:"Classy Bags",
        price: 9999,
        strikedoffprice: 12000,
      },
      {
        id:49,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eBL50U4k8Q7Tfr3ZPB-5-b3abfzbVYpThVYS4lBGAaMRwYh-qgv_n3lDfix4zM8yWq0&usqp=CAU",
          name: "SHOES",
          brand:"Classy shoes",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:50,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5XoZm2K7SGrfxARebvimO8qlXqasMtUofIsw4R3PY-ikkqXmzqGbvKciHrltwcRkdG8&usqp=CAU",
          name: "BAG",
          brand:"Classy Bags",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:51,
        image_url:
          "https://images.saymedia-content.com/.image/t_share/MTc2MjQ0MzIyNTYyNjE0Njk3/womens-shoes-that-men-can-wear.jpg",
          name: "SHOES",
          brand:"Classy shoes",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:52,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8XD5ZL9kXbFedhmTZbIxHpaUoii6uY4JwhfhPvghjc0Swb9sw12jLiAi5fGrzp4hPTw&usqp=CAU",
          name: "BAG",
          brand:"Classy Bags",
        price: 1575,
        strikedoffprice: 3499,
      },
    ];
    

//Display on dom
productData.forEach(function(el,index){
  
    let parent=document.querySelector("#product-container")
    
      let card=document.createElement("div");
  
      let image_url=document.createElement("img");
      image_url.setAttribute("src",el.image_url)
      image_url.textContent=el.image_url;
  
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
      button.textContent="Add To Basket";
      button.style.padding="10px 16px";
      button.style.margin="5px"
      button.style.fontSize="18px"
      button.style.cursor="pointer";
      button.style.color="red";
      button.style.backgroundColor="yellow";
      button.style.fontWeight="bold";
      button.style.borderRadius="7px";

      button.addEventListener("click",function(index){
       
        let cart_data=JSON.parse(localStorage.getItem("shoes_bagscart"));

        if(cart_data===null) cart_data=[];

        let isAlreadyInCart=false;
        for(let i=0;i<cart_data.length;i++){
          if(cart_data[i].id===el.id){
            isAlreadyInCart=true;
            break;
          }
        }
        if(isAlreadyInCart===true){
          alert("Product is already in Basket!!!")
        }
        else{
          cart_data.push({...el,quantity:1});      
          localStorage.setItem("shoes_bagscart",JSON.stringify(cart_data));
          alert("Product successfully added in Basket!!!")
        }
       
       
      })
  
      card.append(image_url,name,brand,price,strikedoffprice,button);
      
      parent.append(card);
  })