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

setInterval("slide()",5000)