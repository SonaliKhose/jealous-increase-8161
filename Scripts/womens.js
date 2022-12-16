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
          "http://sc04.alicdn.com/kf/H350e4805dce345958c764e1257e1e1c01.jpg",
        name: " T-shirt",
        brand:"Bling Bling",
        price: "1170",
        strikedoffprice: "2599",
      },
      {
        id:2,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIsOEdRApXWlVfaWizgnr1KTVLxME9AfvQA&usqp=CAU",
        name: "T-shirt ",
        brand:"Bling Bling",
        price: 699,
        strikedoffprice: 999,
      },
      {
        id:3,
        image_url:"https://i.pinimg.com/474x/d6/67/41/d66741ca7364486105787b46f395be7e.jpg",
        name:"Fashion",
        brand:"Bling Bling",
        price: 945,
        strikedoffprice: 2099,
      },
      {
        id:4,
        image_url:
          "https://i.pinimg.com/originals/71/38/16/713816e24cb2931ef3b7b184f33b7d76.jpg",
        name: "Mon topos",
        brand:"Bling Bling",
        price: 399,
        strikedoffprice: 799,
      },
      {
        id:5,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-ZVAPD0s9nzfTWV0qoXFjXRwqCFWo2qGRg&usqp=CAU",
        name: "Jackyyy",
        brand:"Bling Bling",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:6,
        image_url:
          "https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2022/02/24230927/relaxed-callen-crop-dback-1.jpg?resize=700%2C962&ssl=1 ",
        name: " Branded Jeans ",
        brand:"Bling Bling",
        price: 1440,
        strikedoffprice: 3199,
      },
      {
        id:7,
        image_url:
          " https://i.pinimg.com/736x/57/20/2d/57202dad1a320d8e3050db5ce9a98e17.jpg",
        name: " T-shirt ",
        brand:"Bling Bling",
        price: 1999,
        strikedoffprice: 3199,
      },
      {
        id:8,
        image_url:
          "https://i.pinimg.com/474x/da/cf/5d/dacf5d5fbaa356d22ab61ec16d0d3c06.jpg",
        name: "Kurti",
        brand:"Bling Bling",
        price: 769,
        strikedoffprice: 1099,
      },
      {
        id:9,
        image_url:
          "https://i.pinimg.com/474x/b6/60/dd/b660ddcaed359f3071ac797e8cf7ca61.jpg",
        name: "Kurti ",
        brand:"Aura",
        price: 1299,
        strikedoffprice: 1440,
      },
      {
        id:10,
        image_url:
          "https://i.pinimg.com/474x/5d/3d/5f/5d3d5fe0b0c91cb37ab16c011c0f1818.jpg ",
        name: "Saree",
        brand:"Aura",
        price: 699,
        strikedoffprice: 999,
      },
      {
        id:11,
        image_url:
          " https://img3.junaroad.com/uiproducts/18465763/pri_175_p-1660281486.jpg",
        name: "Kurti ",
        brand:"Aura",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:12,
        image_url:
          "https://3.bp.blogspot.com/-2DIt75PxK6M/XHwGanhS6SI/AAAAAAAAJt4/VEQFr6zEK1Q4M_-pCuE-paj0yCMmTQFkACLcBGAs/s1600/kurtis%2Bmade%2Bfrom%2Bold%2Bsilk%2Bsarees%2B%252846%2529-horz.jpg",
        name: "Kurti ",
        brand:"Aura",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:13,
        image_url:
          " https://www.fabfunda.com/blog/wp-content/uploads/2021/07/Nauvari-Sarees.jpg",
        name: "Saree ",
        brand:"Aura",
        price: 599,
        strikedoffprice: 999,
      },
      {
        id:14,
        image_url:
          "https://i.pinimg.com/originals/5e/88/b6/5e88b647285d95594afe4e3d2d6815a0.jpg",
        name: "Saree",
        brand:"Aura",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:15,
        image_url:
          "https://stylesatlife.com/wp-content/uploads/2015/12/types-of-sarees-15.jpg.webp",
        name: "Saree ",
        brand:"Aura",
        price: 9999,
        strikedoffprice: 12000,
      },
      {
        id:16,
        image_url:
          "https://images.herzindagi.info/image/2022/Feb/different-Sarees-for-women.jpg",
        name: " Saree",
        brand:"Savvy Chic",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:17,
        image_url:
          "https://rukminim1.flixcart.com/image/612/612/xif0q/jean/j/m/7/30-513320-v-mart-original-imaghyjf7znnun4m.jpeg?q=70",
        name: "Jeans  ",
        brand:"Savvy Chic",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:18,
        image_url:
          "https://womensbeautyoffers.com/wp-content/uploads/2019/06/Womens-Blue-Jeans-500-Rupay.png",
        name: "Jeans ",
        brand:"Savvy Chic",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:19,
        image_url:
          "https://rukminim1.flixcart.com/image/612/612/xif0q/jean/c/h/n/32-kttladiesjeans852-kotty-original-imagyt4gcnfcybjn-bb.jpeg?q=70 ",
        name: "Jeans",
        brand:"Savvy Chic",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:20,
        image_url:
          "https://assets.ajio.com/medias/sys_master/root/20211027/7Znh/61789fceaeb2690110abb955/znx_clothing_multicoloured_floral_print_wrap_top.jpg",
        name: " Top ",
        brand:"Savvy Chic",
        price: 3499,
        strikedoffprice: 4999,
      },
      {
        id:21,
        image_url:
          "https://assets.ajio.com/medias/sys_master/root/20211208/K3sR/61afb5bfaeb2690110feff1c/mayra_white_floral_print_round-neck_top.jpg ",
        name: "Top ",
        brand:"Savvy Chic",
        price: 749,
        strikedoffprice: 1499,
      },
      {
        id:22,
        image_url:
          "https://rukminim1.flixcart.com/image/612/612/xif0q/top/6/u/g/s-mt363-oomph-original-imag72ethajpzhad-bb.jpeg?q=70",
        name: " Top ",
        brand:"Savvy Chic",
        price: 1149,
        strikedoffprice: 2299,
      },
      {
        id:23,
        image_url:
          "https://rukminim1.flixcart.com/image/612/612/kdhphu80/top/c/e/8/3xl-mt258-oomph-original-imafudxhqhchmtjm.jpeg?q=70",
        name: "Top ",
        brand:"Savvy Chic",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:24,
        image_url:
          " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10TV999Uzi5hgU4_wTIXtK6ZFGAPs3b0QXt-hbD8022GsTXvljWkxK1IkAhy0ZNE7E7g&usqp=CAU ",
        name: " Top  ",
        brand:"Savvy Chic",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:25,
        image_url:
          " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LYsOi36Xxtl_d8ColKR4CZk1lzF8qpU3ntnYw8rWgfr1aHWFNBUjAJ7Ed9377UY-HLk&usqp=CAU",
        name: "Top ",
        brand:"Contemporary",
        price: 3499,
        strikedoffprice: 4999,
      },
      {
        id:26,
        image_url:
          "https://images.meesho.com/images/products/87836704/bodsr_256.webp",
        name: "T-shirt   ",
        brand:"Contemporary",
        price: 3499,
        strikedoffprice: 4999,
      },
      {
        id:28,
        image_url:
          " https://i.pinimg.com/564x/92/4b/18/924b182697892fc80dac7b68746db277.jpg ",
        name: "T-shirt ",
        brand:"Contemporary",
        price: 1399,
        strikedoffprice: 2799,
      },
      {
        id:29,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMKhMgjFstU5qk99pBquMJP27XzRTR_dkJMpPPrYozgLzWiAkPSnt4buVmnidQnyVkaU&usqp=CAU ",
        name: "T-shirt",
        brand:"Contemporary",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:30,
        image_url:
          "https://cdn.shopify.com/s/files/1/0273/9568/6472/products/a-girl-has-no-name_black_women_front_800x.jpg?v=1604648235",
        name: "T-shirt",
        brand:"Contemporary",
        price: 3919,
        strikedoffprice: 5599,
      },
      {
        id:31,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp8X7M8tw5u9x3YpkFIndVlJZnI4TPieMcPIYWIQkCZvyON-VoAbrhE4M3-RQ7XFV6H0U&usqp=CAU",
        name: "T-shirt",
        brand:"Contemporary",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:32,
        image_url:
          "https://fcity.in/images/products/82146213/jfjba_512.jpg",
        name: "T-shirt",
        brand:"Contemporary",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:33,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr5SzJEVwbH3pv7IXu-OZ66vN4AHc_Ie2Lug&usqp=CAU",
        name: "T-shirt",
        brand:"Contemporary",
        price: 7599,
        strikedoffprice: 9999,
      },
      {
        id:34,
        image_url:
          "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T347A386PA4306PT17X39Y88D1019089794W17274H16583/views/1,width=378,height=378,appearanceId=386,backgroundColor=F2F2F2/heart-letter-k-name-initials-spelling-love-gift.jpg",
        name: "T-shirt",
        brand:"Closet Confidante",
        price: 909,
        strikedoffprice: 1299,
      },
      {
        id:35,
        image_url:
          "https://stylesatlife.com/wp-content/uploads/2021/07/Womens-Minnie-Mouse-T-Shirt.jpg.webp",
        name: "T-shirt",
        brand:"Closet Confidante",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:36,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1V11ygpCd2lSR97ljCl09CvvCJUISNKM-ZYEYSM1HujFmI4eWy0pAWg1_KQtf_Ygw8lk&usqp=CAU",
        name: "T-shirt",
        brand:"Closet Confidante",
        price: 1749,
        strikedoffprice: 2499,
      },
      {
        id:37,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxWZ1HZDUNp1rmSKftgiaqZEAvfwMcbZAUazCUiT3Y3grWpd90yeoAD7MX3ZAdz3LKCU&usqp=CAU",
        name: "T-shirt",
        brand:"Closet Confidante",
        price: 1079,
        strikedoffprice: 1799,
      },
      {
        id:38,
        image_url:"https://i.pinimg.com/474x/d6/67/41/d66741ca7364486105787b46f395be7e.jpg",
        name:"Fashion",
        brand:"Closet Confidante",
        price: 945,
        strikedoffprice: 2099,
      },
      {
        id:40,
        image_url:
          "https://i.pinimg.com/originals/71/38/16/713816e24cb2931ef3b7b184f33b7d76.jpg",
        name: "Mon topos",
        brand:"Broadway's Closet",
        price: 399,
        strikedoffprice: 799,
      },
      {
        id:41,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-ZVAPD0s9nzfTWV0qoXFjXRwqCFWo2qGRg&usqp=CAU",
        name: "Jacket",
        brand:"Broadway's Closet",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:42,
        image_url:
          "https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2022/02/24230927/relaxed-callen-crop-dback-1.jpg?resize=700%2C962&ssl=1 ",
        name: " Branded Jeans ",
        brand:"Broadway's Closet",
        price: 1440,
        strikedoffprice: 3199,
      },
      {
        id:43,
        image_url:
          "https://i.pinimg.com/474x/da/cf/5d/dacf5d5fbaa356d22ab61ec16d0d3c06.jpg",
        name: "Kurti",
        brand:"Broadway's Closet",
        price: 769,
        strikedoffprice: 1099,
      },
      {
        id:44,
        image_url:
          "https://i.pinimg.com/474x/b6/60/dd/b660ddcaed359f3071ac797e8cf7ca61.jpg",
        name: "Kurti ",
        brand:"Broadway's Closet",
        price: 1299,
        strikedoffprice: 1440,
      },
      {
        id:45,
        image_url:
          "https://i.pinimg.com/474x/5d/3d/5f/5d3d5fe0b0c91cb37ab16c011c0f1818.jpg ",
        name: "Saree",
        brand:"Broadway's Closet",
        price: 699,
        strikedoffprice: 999,
      },
      {
        id:46,
        image_url:
          " https://img3.junaroad.com/uiproducts/18465763/pri_175_p-1660281486.jpg",
        name: "Kurti ",
        brand:"All that Glitters",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:47,
        image_url:
          "https://3.bp.blogspot.com/-2DIt75PxK6M/XHwGanhS6SI/AAAAAAAAJt4/VEQFr6zEK1Q4M_-pCuE-paj0yCMmTQFkACLcBGAs/s1600/kurtis%2Bmade%2Bfrom%2Bold%2Bsilk%2Bsarees%2B%252846%2529-horz.jpg",
        name: "Kurti ",
        brand:"All that Glitters",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:48,
        image_url:
          " https://www.fabfunda.com/blog/wp-content/uploads/2021/07/Nauvari-Sarees.jpg",
        name: "Saree ",
        brand:"All that Glitters",
        price: 599,
        strikedoffprice: 999,
      },
      {
        id:49,
        image_url:
          "https://i.pinimg.com/originals/5e/88/b6/5e88b647285d95594afe4e3d2d6815a0.jpg",
        name: "Saree",
        brand:"All that Glitters",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:50,
        image_url:
          "https://stylesatlife.com/wp-content/uploads/2015/12/types-of-sarees-15.jpg.webp",
        name: "Saree ",
        brand:"All that Glitters",
        price: 9999,
        strikedoffprice: 12000,
      },
      {
        id:51,
        image_url:
          "https://images.herzindagi.info/image/2022/Feb/different-Sarees-for-women.jpg",
        name: " Saree",
        brand:"All that Glitters",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:52,
        image_url:
          "https://rukminim1.flixcart.com/image/612/612/xif0q/jean/j/m/7/30-513320-v-mart-original-imaghyjf7znnun4m.jpeg?q=70",
        name: "Jeans  ",
        brand:"All that Glitters",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:53,
        image_url:
          "https://womensbeautyoffers.com/wp-content/uploads/2019/06/Womens-Blue-Jeans-500-Rupay.png",
        name: "Jeans ",
        brand:"All that Glitters",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:54,
        image_url:
          "https://i.pinimg.com/originals/5e/88/b6/5e88b647285d95594afe4e3d2d6815a0.jpg",
        name: "Saree",
        brand:"All that Glitters",
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
       
        let cart_data=JSON.parse(localStorage.getItem("womenscart"));

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
          localStorage.setItem("womenscart",JSON.stringify(cart_data));
          alert("Product successfully added in Basket!!!")
        }
       
      })
  
      card.append(image_url,name,brand,price,strikedoffprice,button);
      
      parent.append(card);
      
  })