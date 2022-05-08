



 var cart = JSON.parse(localStorage.getItem("Cart")) || [] ;

 displayData(cart)

     function displayData(data){
        
        //  document.querySelector("#card_div").innerHTML = null;
           data.forEach(function(elem , index){


        var div1 = document.createElement("div");
        div1.id = "img_div"
    
    
        var div2 = document.createElement("div")
        div2.id = "box_div"
    
        var discount_tag = document.createElement("p");
        discount_tag.id = "dis"
    
        var pro_img = document.createElement("img");
        
         pro_img.id = "main_img"
        
        // var priceAndCartDiv = document.createElement("div")
        // priceAndCartDiv.id = "addAndPrice"
        var cart_btn = document.createElement("button");
        cart_btn.id = "add"
        cart_btn.innerText="DELETE"
        cart_btn.style.border = "1px solid red"
        cart_btn.addEventListener("click", function(){
            deleteCart(elem,index)
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

function deleteCart(elem , index){
//  event.target.parentNode.remove()

 event.target.parentNode.parentNode.remove() 
// cart.splice(index , 1)
// localStorage.setItem("Cart" , JSON.stringify(cart))
 
}