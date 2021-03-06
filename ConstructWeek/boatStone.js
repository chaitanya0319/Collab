
var CollectionImg=[
    {
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200f_main3_600x.png?v=1632893559"
    }
]

var collectionData=[
    {
        name:"boAT Stone 1200F",
        type:"BLUETOOTH SPEAKERS",
        stars:"***** 5 (1 reviews)",
        price:"2,459",
        reward:"Get 20% cashback upto Rs.500 using Pay with Rewards",
        reward2:"Or 3 interest-free payments of ₹ 983 with Zest",
        buttton: "Addtocart",
        img:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/warranty_usp_1_year_mob_4f12766a-7207-406a-a081-7669cf75a5be.png?v=1649579577"

    }
]


CollectionImg.map(function (elem){
   var div=document.createElement("div");  //<div></div>
   var image=document.createElement("img");
   image.src=elem.img;
    div.append(image);
    document.querySelector("#container").append(div)

   
})

collectionData.map(function (elem){
    var box=document.createElement("div");

    var Data_name=document.createElement("h1");
    Data_name.innerText=elem.name;

    var Data_Type=document.createElement("h2");
    Data_Type.innerText=elem.type;

    var Data_stars=document.createElement("h3");
    Data_stars.innerText=elem.stars;

    var Data_price=document.createElement("h3");
    Data_price.innerText=elem.price;

    var Data_reward=document.createElement("h4");
    Data_reward.innerText=elem.reward;

    var Data_reward1=document.createElement("h4");
    Data_reward1.innerText=elem.reward2;

    var button=document.createElement("button");
    button.innerText="Add To Cart";

    button.addEventListener("click",function(){
        Addtocart(elem)
    })

    var warimg=document.createElement("img");
    warimg.src=elem.img;



    box.append(Data_name,Data_Type,Data_stars,Data_price,Data_reward,Data_reward1,button,warimg);
    
    document.querySelector("#container").append(box);
    localStorage.setItem("collectiondata",JSON.stringify(collectionData));

    let cartLSdata=JSON.parse(localStorage.getItem("collection-cart"))|| [];
    function Addtocart(elem){
    cartLSdata.push(elem);
   localStorage.setItem("collection-cart",JSON.stringify(cartLSdata));
   alert("Product added successfully");
   console.log(cartLSdata);
}

})

 