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
          "https://5.imimg.com/data5/EQ/EH/VJ/SELLER-99991114/mens-t-shirt-500x500.jpg",
        name: " T-shirt",
        brand:"USB",
        price: "1170",
        strikedoffprice: "2599",
      },
      {
        id:2,
        image_url:
          "https://www.rupaonlinestore.com/media/catalog/product/cache/afbb16c06c4bb2ef3e3e5209a73260e6/1/0/1021-1.jpg",
        name: "T-shirt ",
        brand:"USB",
        price: 699,
        strikedoffprice: 999,
      },
      {
        id:3,
        image_url:"https://m.media-amazon.com/images/I/71equfCZugS._UL1500_.jpg",
        name:"T-shirt",
        brand:"USB",
        price: 945,
        strikedoffprice: 2099,
      },
      {
        id:4,
        image_url:
          "https://m.media-amazon.com/images/I/717jeARAQkL._UL1500_.jpg",
        name: "T-shirt",
        brand:"USB",
        price: 399,
        strikedoffprice: 799,
      },
      {
        id:5,
        image_url:
          "https://m.media-amazon.com/images/I/71pRtS5mKFL._UL1200_.jpg",
        name: "Jacket",
        brand:"Riverside",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:6,
        image_url:
          "https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2022/02/24230927/relaxed-callen-crop-dback-1.jpg?resize=700%2C962&ssl=1 ",
        name: "  Jeans ",
        brand:"Lee",
        price: 1440,
        strikedoffprice: 3199,
      },
      {
        id:7,
        image_url:
          " https://m.media-amazon.com/images/I/61EkBaffjUL._UX569_.jpg",
        name: " T-shirt ",
        brand:"Fila",
        price: 1999,
        strikedoffprice: 3199,
      },
      {
        id:8,
       image_url:
          "https://m.media-amazon.com/images/I/41ti6x8Kn3L.jpg",
        name: "Jacket",
        brand:"Riverside",
        price: 769,
        strikedoffprice: 1099,
      },
      {
        id:9,
        image_url:
          "https://img.joomcdn.net/4427e31460aa4c5e53d6d6d27e2bc4b0cb7dbad5_original.jpeg",
        name: "Jacket ",
        brand:"Riverside",
        price: 1299,
        strikedoffprice: 1440,
      },
      {
        id:10,
        image_url:
          "https://img1.exportersindia.com/product_images/bc-full/2020/4/6948333/mens-winter-jacket-1586596696-5367842.jpeg",
        name: "Jacket",
        brand:"Riverside",
        price: 699,
        strikedoffprice: 999,
      },
      {
        id:11,
        image_url:
          "https://lazyenvironmentalist.com/wp-content/uploads/Taylor-Stitch-Sustainable-Clothing-Brand-Men.jpg ",
        name: "Jacket",
        brand:"Riverside",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:12,
        image_url:
          "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1klkNKbSYBuNjSspiq6xNzpXaA%2FBrand-Winter-Jacket-Men-Clothes-Casual-Stand-Collar-Hooded-Collar-Fashion-Winter-Coat-Men-Parka-Outerwear.jpg",
        name: "Jacket",
        brand:"Riverside",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:13,
        image_url:
          "https://cf.shopee.com.my/file/8de4941d7bb89711364c46cb77d20cc8",
        name: "Jacket",
        brand:"Riverside",
        price: 599,
        strikedoffprice: 999,
      },
      {
        id:14,
        image_url:
          "https://img.joomcdn.net/a9bd4d72881d862de710ff743d251261c5f406b0_original.jpeg",
        name: "Jacket",
        brand:"Riverside",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:15,
        image_url:
          "https://m.media-amazon.com/images/I/41WuWBnVa5L.jpg",
        name: " Jacket",
        brand:"Riverside",
        price: 9999,
        strikedoffprice: 12000,
      },
      {
        id:16,
        image_url:
          "https://image.made-in-china.com/202f0j00pruqdLYaOhok/Famous-Brand-Jacket-Coat-Shirt-Tshirt-Tee-L-v-Monogram-Print-Jacket-Replica-Wholesale-Market-Designer-Women-Men-Man-Clothing-Luxury-Coat-Jackets.jpg",
        name: " Jacket",
        brand:"Riverside",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:17,
        image_url:
          "https://m.media-amazon.com/images/I/61lVj4vBjrL._UX569_.jpg",
        name: "Jeans  ",
        brand:"Rare Rabit",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:18,
        image_url:
          "https://img0.junaroad.com/uiproducts/18046021/zoom_1-1634898603.jpg",
        name: "Jeans ",
        brand:"Rare Rabit",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:19,
        image_url:
          "https://5.imimg.com/data5/SELLER/Default/2022/8/YU/DZ/KU/124684702/mens-big-size-jeans-1000x1000.jpeg",
        name: "Jeans",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:20,
        image_url:
          "https://m.media-amazon.com/images/I/7140vZ9d5EL._UY550_.jpg",
        name: " Shirt ",
        brand:"Blackberry",
        price: 3499,
        strikedoffprice: 4999,
      },
      {
        id:21,
        image_url:
          "https://m.media-amazon.com/images/I/71tGj-vrIjL._UY550_.jpg",
        name: "Shirt ",
        brand:"Blackberry",
        price: 749,
        strikedoffprice: 1499,
      },
      {
        id:22,
        image_url:
          "https://sepiastories.in/wp-content/uploads/2021/02/CALISTOHandblockPrintedCottonShirtBurgundyPreOrder03.jpeg",
        name: " Shirt",
        brand:"Blackberry",
        price: 1149,
        strikedoffprice: 2299,
      },
      {
        id:23,
        image_url:
          "https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/i/k/ikat-printed-cotton-shirt-in-black-v1-mre38.jpg",
        name: "Shirt",
        brand:"Allen Solly ",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:24,
        image_url:
          "https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/2104/9881/New-Autumn-Fashion-Brand-Men-Clothes-Slim-Fit-Men-Long-Sleeve-Shirt-Men-Plaid-Cotton-Casual__15044.1569933891.jpg?c=2 ",
        name: "Shirt ",
        brand:"Allen Solly ",
        brand:"",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:25,
        image_url:
          " https://images.squarespace-cdn.com/content/v1/547a3834e4b053a861c4874e/1624219205079-2MV5PECBTTNFHIIYC8SX/Sustainably+Chic+%7C+Sustainable+Fashion+Blog+%7C+Sustainable+and+Ethical+Clothing+Brands+for+Men.jpg?format=1000w",
        name: "Shirt",
        price: 3499,
        strikedoffprice: 4999,
      },
      {
        id:26,
        image_url:
          "https://cdn.pixelbin.io/v2/holy-bread-55da3c/DeQLpM/wrkr/t.resize(h:600,w:510)/data/gas/16-09-2022/410345613_0200_1.jpg",
        name: "T-shirt   ",
        brand:"Fila",
        price: 3499,
        strikedoffprice: 4999,
      },
      {
        id:27,
        image_url:
          " https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16651862/2021/12/30/0cc7259d-4c6a-4598-8fac-afa9007bd3a31640878331690MenGreenLongSleevesCottonPrintedTshirts1.jpg",
        name: "T-shirt ",
        brand:"Fila",
        price: 1399,
        strikedoffprice: 2799,
      },
      {
        id:28,
        image_url:
          "https://i.pinimg.com/736x/1e/1f/ba/1e1fbadb1bdba9efd097d701ac2fd644.jpg ",
        name: "T-shirt",
        brand:"Fila",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:29,
        image_url:
          "https://barcelonaclub.in/wp-content/uploads/2022/10/005A1375-520x743.jpg",
        name: "T-shirt",
        brand:"Roadster",
        price: 3919,
        strikedoffprice: 5599,
      },
      {
        id:30,
        image_url:
          "https://www.wyo.in/pub/media/mf_webp/jpg/media/catalog/product/cache/718154c3aff62b1ad64160986aa81112/g/r/grey_camo_t-shirt.webp",
        name: "T-shirt",
        brand:"Fila",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:31,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5P-2gCbqMe_dr4MvaEfWQTco0Nry4yihgxb_wU2T1PYSctq-9A5rcOikvWzyCj3jJrpU&usqp=CAU",
        name: "T-shirt",
        brand:"Roadster",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:32,
        image_url:
          "https://m.media-amazon.com/images/I/41x+zshHJfL.jpg",
        name: "T-shirt",
        brand:"Roadster",
        price: 7599,
        strikedoffprice: 9999,
      },
      {
        id:33,
        image_url:
          "https://www.beyoung.in/api/cache/catalog/products/plain_new_update_images_2_5_2022/rose_pink_plain_t-shirt_men_base_30_5_2022_400x400.jpg",
        name: "T-shirt",
        brand:"Roadster",
        price: 909,
        strikedoffprice: 1299,
      },
      {
        id:34,
        image_url:
          "http://cdn.shopify.com/s/files/1/0365/5892/9965/products/Muselot_shalfsleevet-shirtsformeninwhitecolor-frontpose.jpg?v=1625176293",
        name: "T-shirt",
        brand:"Roadster",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:35,
        image_url:
          "https://assets.ajio.com/medias/sys_master/root/20220121/8pKF/61ea5b4baeb2695cdd24612b/-473Wx593H-461592493-multi-MODEL.jpg",
        name: "T-shirt",
        brand:"Roadster",
        price: 1749,
        strikedoffprice: 2499,
      },
      {
        id:36,
        image_url:
          "https://assets.ajio.com/medias/sys_master/root/20220121/DwGv/61ea58afaeb2695cdd2436ee/-473Wx593H-461575169-maroon-MODEL.jpg",
        name: "T-shirt",
        brand:"Roadster",
        price: 1079,
        strikedoffprice: 1799,
      },
      {
        id:37,
        image_url:"https://cdn.shopify.com/s/files/1/0274/0086/3853/products/IMG_3970.jpg?v=1666070318",
        name:"Shirt",
        brand:"Allen Solly ",
        price: 945,
        strikedoffprice: 2099,
      },
      {
        id:38,
        image_url:
          "https://cdn.shopify.com/s/files/1/0274/0086/3853/products/IMG_7382.jpg?v=1655277649",
        name: "Shirt",
        brand:"Allen Solly ",
        price: 399,
        strikedoffprice: 799,
      },
      {
        id:39,
        image_url:
          "https://5.imimg.com/data5/SELLER/Default/2022/7/TN/BW/CF/157166947/aj-shirt-06-lo-front-250x250.jpg",
        name: "Shirt",
        brand:"Allen Solly ",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:40,
        image_url:
          "https://mcrshopping.com/img/product/EIt2dWDKxEqhwKmn.jpg",
        name: " Shirt ",
        brand:"Allen Solly ",
        price: 1440,
        strikedoffprice: 3199,
      },
      {
        id:41,
        image_url:
          "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300911019GREY_1_1024x1024.jpg?v=1667581490",
        name: "Jeans",
        brand:"Pepe jeans",
        price: 769,
        strikedoffprice: 1099,
      },
      {
        id:42,
        image_url:
          "https://5.imimg.com/data5/SELLER/Default/2022/6/NU/CA/CF/94419818/men-ripped-skinny-jeans-250x250.jpg",
        name: "Jeans ",
        brand:"Pepe jeans",
        price: 1299,
        strikedoffprice: 1440,
      },
      {
        id:43,
        image_url:
          "https://m.media-amazon.com/images/I/71tjalewEpL._UL1500_.jpg",
        name: "Jeans",
        brand:"Pepe jeans",
        price: 699,
        strikedoffprice: 999,
      },
      {
        id:44,
        image_url:
          "https://i.pinimg.com/originals/7d/5a/e5/7d5ae56b2fbe7f86a2f604efe818aa33.jpg ",
        name: "Jeans",
        brand:"Pepe jeans",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
        id:45,
        image_url:
          "https://stylesatlife.com/wp-content/uploads/2016/12/Outdoor-men%E2%80%99s-jeans-19.jpg",
        name: "Jeans",
        price: 1620,
        brand:"Pepe jeans",
        strikedoffprice: 3599,
      },
      {
        id:46,
        image_url:
          "https://cdn.shopify.com/s/files/1/0608/7874/9892/products/7rvWe3eDL-MJK-02BBHW-052FLAME-ORANGE-_281_29_c28f25a7-8c6e-4605-898f-036f5b2c8c63_540x.jpg?v=1656681963",
        name: " Jacket",
        brand:"Pathfinders Fashion",
        price: 599,
        strikedoffprice: 999,
      },
      {
        id:48,
        image_url:
          "https://rukminim1.flixcart.com/image/612/612/xif0q/jacket/g/h/b/m-no-hhmjks035-ol-hubberholme-original-imaggjyh7xnfzrr7.jpeg?q=70",
        name: "Jacket",
        brand:"Pathfinders Fashion",
        price: 1575,
        strikedoffprice: 3499,
      },
      {
        id:49,
        image_url:
          "https://static.cilory.com/566787-large_default/army-green-faux-leather-jacket.jpg.webp",
        name: "Jacket",
        brand:"Pathfinders Fashion",
        price: 9999,
        strikedoffprice: 12000,
      },
      {
        id:50,
        image_url:
          "https://www.angeljackets.com/eu/product_images/x/615/Mens_Everhart_Black_Leather_Jacket__31781_thumb.jpg",
        name: "Jacket",
        brand:"Pathfinders Fashion",
        price: 779,
        strikedoffprice: 1299,
      },
      {
        id:51,
        image_url:
          "https://cdn.anscommerce.com/image/tr:e-sharpen-01,h-416,w-314,cm-pad_resize/data/celio-india/31-aug-2021/7888355_2.jpg",
        name: "Jeans  ",
        brand:"Levi's",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:52,
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucwhtLI1kwxH1zUMIClmiKSeqtFddWguiRQ&usqp=CAU",
        name: "Jeans ",
        brand:"Levi's",
        price: 1019,
        strikedoffprice: 1699,
      },
      {
        id:53,
        image_url:
          "https://assets.ajio.com/medias/sys_master/root/20210715/6gOh/60ef5fb3f997ddb31227af6b/campus_sutra_light_blue_light-wash__relaxed_jeans.jpg",
          name:"Jeans",
          brand:"Levi's",
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
       
        let cart_data=JSON.parse(localStorage.getItem("menscart"));

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
          localStorage.setItem("menscart",JSON.stringify(cart_data));
          alert("Product successfully added in Basket!!!")
        }
       
       
      
       
      })
  
      card.append(image_url,name,brand,price,strikedoffprice,button);
      
      parent.append(card);
      
  })