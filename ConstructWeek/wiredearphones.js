

var giftItem = [
    {
        discount : "Save 71%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_300x.png?v=1633152280",
        // cartButton : "cart",
        p: "4.8"+" "+"(844 reviews)",
        product_name :"boAt Airdopes 131",
        price:" 1099",
        colours : "6 Colour Available"
    },
    {
        discount : "Save 70%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c3d0fbbd-9479-4351-bf04-91136da2ae91_300x.png?v=1625046259",
        // cartButton : "cart",
        p: "4.81"+" "+"(845 reviews)",
        product_name : "boAt Rockerz 235 V2",
        price: " 869",
        colours : "6 Colour Available"
    },

    {
        discount : "Save 50%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d642ebc5-2e7d-4450-bffc-03cc157b7d6f_300x.png?v=1625046491",
        // cartButton : "cart",
        p: "4.1"+" "+"(800 reviews)",
        product_name : "boAt Storm",
        price: " 2499",
        colours : "6 Colour Available"
    },

    {
        discount : "Save 61%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mint--orange_300x.png?v=1634371640",
        // cartButton : "cart",
        p: "3.8"+" "+"(444 reviews)",
        product_name : "boAt BassHeads 100",
        price: " 349 ",
        colours : "6 Colour Available"
    },

    {
        discount : "Save 40%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_300x.png?v=1625046386",
        // cartButton : "cart",
        p: "5.8"+" "+"(944 reviews)",
        product_name : "BOAT Airdopes 121 v2",
        price: " 1099",
        colours : "6 Colour Available"
    },

    {
        discount : "Save 71%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_300x.png?v=1633152280",
        // cartButton : "cart",
        p: "4.8"+" "+"(844 reviews)",
        product_name :"boAt Airdopes 131",
        price:" 1099",
        colours : "6 Colour Available"
    },
    {
        discount : "Save 70%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c3d0fbbd-9479-4351-bf04-91136da2ae91_300x.png?v=1625046259",
        // cartButton : "cart",
        p: "4.81"+" "+"(845 reviews)",
        product_name : "boAt Rockerz 235 V2",
        price: " 869",
        colours : "6 Colour Available"
    },

    {
        discount : "Save 50%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d642ebc5-2e7d-4450-bffc-03cc157b7d6f_300x.png?v=1625046491",
        // cartButton : "cart",
        p: "4.1"+" "+"(800 reviews)",
        product_name : "boAt Storm",
        price: " 2499",
        colours : "6 Colour Available"
    },

    {
        discount : "Save 61%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mint--orange_300x.png?v=1634371640",
        // cartButton : "cart",
        p: "3.8"+" "+"(444 reviews)",
        product_name : "boAt BassHeads 100",
        price: " 349 ",
        colours : "6 Colour Available"
    },

    {
        discount : "Save 40%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_300x.png?v=1625046386",
        // cartButton : "cart",
        p: "5.8"+" "+"(944 reviews)",
        product_name : "BOAT Airdopes 121 v2",
        price: " 1099",
        colours : "6 Colour Available"
    },
    {
        discount : "Save 61%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mint--orange_300x.png?v=1634371640",
        // cartButton : "cart",
        p: "3.8"+" "+"(444 reviews)",
        product_name : "boAt BassHeads 100",
        price: " 349 ",
        colours : "6 Colour Available"
    },

    {
        discount : "Save 40%",
        product_img : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_300x.png?v=1625046386",
        // cartButton : "cart",
        p: "5.8"+" "+"(944 reviews)",
        product_name : "BOAT Airdopes 121 v2",
        price: " 1099",
        colours : "6 Colour Available"
    },
  
 
    
]

 var cart = JSON.parse(localStorage.getItem("Cart")) || [] ;

 var Sort  = document.querySelector("#sort")  //sorting tag selection

 displayData(giftItem)

     function displayData(data){
         document.querySelector("#card_div").innerHTML = null
           data.forEach(function(elem){


        var div1 = document.createElement("div");
        div1.id = "img_div"
    
    
        var div2 = document.createElement("div")
        div2.id = "box_div"
    
        var discount_tag = document.createElement("p");
        discount_tag.id = "dis"
    
        var pro_img = document.createElement("img");
        pro_img.addEventListener("click" , newImgFun)
         pro_img.id = "main_img"
        
        // var priceAndCartDiv = document.createElement("div")
        // priceAndCartDiv.id = "addAndPrice"
        var cart_btn = document.createElement("button");
        cart_btn.id = "add"
        cart_btn.innerText="ADD +"
        cart_btn.style.border = "1px solid red"
        cart_btn.addEventListener("click", function(){
            addToCart(elem)
          } )
    
        var para = document.createElement("p");
        para.id = "offer"
        
    
        var pro_name = document.createElement("p")
        pro_name.id = "name"
        
        var price = document.createElement("p");
        price.style.color = "red"
    
       
        var colour = document.createElement("p");
         

        
    // value assigning part start
    
        discount_tag.innerText = elem.discount; 
    
        pro_img.src =  elem.product_img;
       
        para.innerText = elem.p;
    
        pro_name.innerText = elem.product_name;
    
        price.innerText =elem.price+" "+"₹";
        
        colour.innerText = elem.colours;
        

// ************Append Section *****************

        // priceAndCartDiv.append( price ,cart_btn)
        div2.append( cart_btn, para, pro_name, price,colour)
        div1.append( discount_tag,pro_img, div2)
        document.querySelector("#card_div").append(div1)
        
    
     })
}
 
//*********************************************************************************/
// this is  add button code

function addToCart(elem){
   cart.push(elem)
   localStorage.setItem("Cart",JSON.stringify(cart))
     
}

//*********************************************************************************/


//*********************************************************************************/
// this is sidenav  code

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  //*********************************************************************************/

 //*********************************************************************************/
// this is price low to high sort code
 
function sortTheData(){
     var value = Sort.value;
    
         if (value == "Low to high" ){
  
              giftItem.sort(function (p,q){
        return Number.parseInt(p.price) - Number.parseInt(q.price)
       
   })
    displayData(giftItem)
 
}
 else if (value == "High to low"){
         giftItem.sort(function (p,q){
            return Number.parseInt(q.price) - Number.parseInt(p.price)
       })
       displayData(giftItem)
    }
    
else if (value == "A-Z"){
        giftItem.sort(function (a,b){
         
                if (a.product_name<b.product_name){
                    return -1;
                }else{
                    return 1;
                }
                return 0;
              
        })
        displayData(giftItem)
    }
    else if (value == "Z-A"){
        giftItem.sort(function (a,b){
         
            if (a.product_name<b.product_name){
                return 1;
            }else{
                return -1;
            }
            return 0;
          
    })
    displayData(giftItem)
    }
    else if (value == "best Selling" ){
        // console.log(giftItem)
        giftItem.sort(function(a , b){
            return Number.parseInt(b.p) - Number.parseInt(a.p) 
        })
       displayData(giftItem)
    }

    // dummy cretion because I dont have information about date of product

    else if (value == "date new to old" ){
        // console.log(giftItem)
        giftItem.sort(function(a , b){
            return Number.parseInt(b.p) - Number.parseInt(a.p) 
        })
       displayData(giftItem)
    }
    else if (value == "date old to new" ){
        // console.log(giftItem)
        giftItem.sort(function(a , b){
            return Number.parseInt(a.p) - Number.parseInt(b.p) 
        })
       displayData(giftItem)
    }
}
  
    Sort.addEventListener("change",sortTheData)

 
 function newImgFun(pro_img){
   
      pro_img.src =  "https://www.boat-lifestyle.com/products/airdopes-131" 
 }    
 displayData(giftItem)