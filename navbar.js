function displaycart(arr) {
  document.querySelector(".middle-sec").textContent = "";
  arr.map(function (elm, index) {
    var div_dl = document.createElement("div");
    div_dl.setAttribute("class", "details");

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", elm.image_url);
    div1.append(img);
    var p = document.createElement("p");

    p.textContent = elm.name;
    div2.append(p);
    div3.setAttribute("class", "cencel");
    var i = document.createElement("i");

    i.setAttribute("class", "fa-solid fa-trash-can");

    i.style.color = "red";

    div3.append(i);

    div_dl.append(div1, div2, div3);
    var hr = document.createElement("hr");
    hr.setAttribute("class", "hori");
    var div_quan = document.createElement("div");

    div_quan.setAttribute("class", "quan");

    var select = document.createElement("select");
    select.setAttribute("id", "quantity");
    var op1 = document.createElement("option");
    op1.setAttribute("value", "");
    op1.textContent = "quantity :";
    var span = document.createElement("span");
    span.textContent = 1;
    span.setAttribute("class", "acutal_quantity");
    op1.append(span);
    var op2 = document.createElement("option");
    op2.setAttribute("value", "1");
    op2.textContent = "1";
    var op3 = document.createElement("option");
    op3.setAttribute("value", "2");
    op3.textContent = "2";
    var op4 = document.createElement("option");
    op4.setAttribute("value", "3");
    op4.textContent = "3";
    select.append(op1, op2, op3, op4);
    var p2 = document.createElement("p");
    p.setAttribute("class", "total-price-same");
    p2.textContent = "₹" + elm.price;

    div_quan.append(select, p2);

    var div_pro = document.createElement("div");
    div_pro.setAttribute("id", "product-details");
    div_pro.append(div_dl, hr, div_quan);
    document.querySelector(".middle-sec").append(div_pro);

    i.addEventListener("click", function () {
      deleteItem(index);
    });
  });
}

function deleteItem(index) {
  cart_items.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(cart_items));
  displaycart(cart_items);
  pricecount(cart_items);
  document.querySelector(".total-item").textContent = cart_items.length;
  if (cart_items.length > 0) {
    document.querySelector(".middle-sec").classList.remove(".middle-sec1");
    document.querySelector(".after").classList.remove("afterr");
    document.querySelector(".cart-empty").classList.add("cart-empty1");
    document.querySelector(".coupon").classList.remove("coupon1");
    document.querySelector(".price-details").classList.remove("price-details1");
    document.querySelector(".after").textContent = cart_items.length;
  } else {
    document.querySelector(".after").classList.add("afterr");
    document.querySelector(".middle-sec").classList.add(".middle-sec1");
    document.querySelector(".cart-empty").classList.remove("cart-empty1");
    document.querySelector(".coupon").classList.add("coupon1");
    document.querySelector(".price-details").classList.add("price-details1");
  }
}

// count all prices

function pricecount(arr) {
  var total = arr.reduce(function (acc, cur) {
    return acc + cur.price;
  }, 0);
  document.querySelector(".total-price").textContent = total;

  if (total > 5000) {
    document.querySelector(".disscount").textContent = (total * 0.1).toFixed(0);
    document.querySelector(".payble").textContent =
      total - (total * 0.1).toFixed(0);
    document.querySelector(".grand-total").textContent =
      total - (total * 0.1).toFixed(0);
  } else {
    document.querySelector(".disscount").textContent = 0;
    document.querySelector(".payble").textContent = total;
    document.querySelector(".grand-total").textContent = total;
  }
}

document.querySelector(".coupon-apply").addEventListener("click", getdisscount);

function getdisscount() {
  var total = cart_items.reduce(function (acc, cur) {
    return acc + cur.price;
  }, 0);
  var code = document.querySelector("#coupon-code").value;

  if (code === "masai30") {
    document.querySelector(".disscount").textContent = (total * 0.3).toFixed(0);
    document.querySelector(".payble").textContent = (total * 0.7).toFixed(0);
    document.querySelector(".grand-total").textContent = (total * 0.7).toFixed(
      0
    );
    document.querySelector("#coupon-code").value = "";
  } else if (code === "masai20") {
    document.querySelector(".disscount").textContent = (total * 0.2).toFixed(0);
    document.querySelector(".payble").textContent = (total * 0.8).toFixed(0);
    document.querySelector(".grand-total").textContent = (total * 0.8).toFixed(
      0
    );
    document.querySelector("#coupon-code").value = "";
  } else {
    document.querySelector("#coupon-code").value = "invalid code";
  }
}

// take data from local storege
var cart_items = JSON.parse(localStorage.getItem("items")) || [];

if (cart_items.length > 0) {
  document.querySelector(".middle-sec").classList.remove(".middle-sec1");
  document.querySelector(".cart-empty").classList.add("cart-empty1");
  document.querySelector(".coupon").classList.remove("coupon1");
  document.querySelector(".price-details").classList.remove("price-details1");
  document.querySelector(".after").textContent = cart_items.length;
  document.querySelector(".total-item").textContent = cart_items.length;
  displaycart(cart_items);
  pricecount(cart_items);
} else {
  document.querySelector(".after").classList.add("afterr");
  document.querySelector(".middle-sec").classList.add(".middle-sec1");
  document.querySelector(".cart-empty").classList.remove("cart-empty1");
  document.querySelector(".coupon").classList.add("coupon1");
  document.querySelector(".price-details").classList.add("price-details1");
}

function addiintols(elm) {
  document.querySelector(".after").classList.remove("afterr");

  var id = elm.id;
  var bool = false;
  cart_items.map(function (el) {
    if (id === el.id) {
      bool = true;
    }
  });
  if (!bool) {
    cart_items.push(elm);
    document.querySelector(".after").textContent = cart_items.length;
    document.querySelector(".total-item").textContent = cart_items.length;
    localStorage.setItem("items", JSON.stringify(cart_items));
    document.querySelector(".middle-sec").classList.remove(".middle-sec1");
    document.querySelector(".cart-empty").classList.add("cart-empty1");
    document.querySelector(".coupon").classList.remove("coupon1");
    document.querySelector(".price-details").classList.remove("price-details1");
    displaycart(cart_items);
    pricecount(cart_items);
  }
}
var userData = JSON.parse(localStorage.getItem("user-data"));

userData.map(function (el) {
  if (el.hasOwnProperty("value")) {
    document.getElementById("button1").textContent = el.name;
  }
});
