// take new address 
var first_check = JSON.parse(localStorage.getItem("address")) || [];

if(first_check.length < 1){
    document.querySelector(".overlay").classList.add("overlay-show");
    document.querySelector(".new-address").classList.add("new-address-show");
}
document.getElementById("addres").addEventListener("click", showwindow);

function showwindow(){
    document.querySelector(".overlay").classList.add("overlay-show");
    document.querySelector(".new-address").classList.add("new-address-show");
}

document.querySelector(".close").addEventListener("click", hidewindow)
document.querySelector(".overlay").addEventListener("click",hidewindow)

function hidewindow(){
    document.querySelector(".overlay").classList.remove("overlay-show");
    document.querySelector(".new-address").classList.remove("new-address-show");
}


// adddrese printing 
    var addres_data = JSON.parse(localStorage.getItem("address")) || [];

    display();

    function display(){
        addres_data.map(function(elm){
var name = elm.name;
var number = elm.number;
var email = elm.email;
var pin = elm.pin
var house   = elm.house;
var area = elm.area;

var p1 = document.createElement("p");
p1.textContent =name;

var p2 = document.createElement("p")
p2.textContent = house

var p3 = document.createElement("p");
p3.textContent = area;

var p4 = document.createElement("p");
p4.textContent  = pin;

var p5 = document.createElement("p");
p4.textContent = number
var p6 = document.createElement("p");
p6.textContent = email

var div1 = document.createElement("div");
 div1.setAttribute("class","deliver_here") 
var p7 = document.createElement("p");
p7.textContent = "Deliver here"
p7.style.fontSize= "15px"
p7.style.color = "white";
var i = document.createElement("i");
i.setAttribute("class" , "fa-solid fa-arrow-right fa-xl")
i.style.color ="white";
div1.append(p7,i);
var div  = document.createElement("div");
div.setAttribute("class","already_address")

div.append(p1,p2,p3,p4,p5,p6,div1)

document.querySelector(".addreses").append(div)
div1.addEventListener("click", gopayment)

        })
    }

// redirect usser on payment page 

function gopayment(){
    window.location.href = 'payment.html'
}



   document.querySelector("#ship_address").addEventListener("click", filladdress);
   var address= [];

   function filladdress(){
      var name  =document.getElementById("name").value;
      var number = document.getElementById("number").value;
      var email = document.getElementById("email").value
    var area = document.getElementById("area").value;
    var house = document.getElementById("house").value;
    var pin = document.getElementById("pin").value;
    if(name ==="" || pin === "" || number.length > 10){
alert("please fill the correct details")
return ;
    }
    var add_obj = {name:name,number:number,email:email,area:area,house:house,pin:pin}
    address.push(add_obj);
    localStorage.setItem("address",JSON.stringify(address))
    window.location.href = "payment.html"
    

  
   }