

   var Collection_data=[
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_540x.png?v=1612338251",

    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rectangle271_540x.png?v=1612338387"
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_540x.png?v=1612338356"
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear_1000x.jpg?v=1648546494"
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_540x.png?v=1612338436"
    },

    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Collections_5baef8f1-a67a-40a5-a537-4258c6caae6a_540x.png?v=1622452897"
    },

    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/New-Category-Banners_with-Trebal_09_1000x.png?v=1615033153"
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bence-boros-253214-unsplash_600x.jpg?v=1648545875"
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-limited-edition_540x.png?v=1612338560"
    },
    {
     img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_600x.png?v=1624859990"
    },
    {
    img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_1000x.png?v=1626094103"
    }

   
 ]


Collection_data.map(function (elem){
var div=document.createElement("div");  //<div></div>
var image=document.createElement("img");

image.src=elem.img;
 div.append(image);
 document.querySelector("#Outer").append(div)

 


})

