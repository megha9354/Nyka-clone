window.addEventListener("load", function () {
  displaydata(productData);
});

function handleprice() {
  var selected = document.querySelector("#selected").value;
  if (selected == "lth") {
    productData.sort(function (a, b) {
      return a.price - b.price;
    });
    displaydata(productData);
  }
  if (selected == "htl") {
    productData.sort(function (a, b) {
      return b.price - a.price;
    });
    displaydata(productData);
  }
}
function handlerate() {
  var selected = document.querySelector("#selected1").value;
  if (selected == "lth") {
    productData.sort(function (a, b) {
      return a.rating - b.rating;
    });
    displaydata(productData);
  }
  if (selected == "htl") {
    productData.sort(function (a, b) {
      return b.rating - a.rating;
    });
    displaydata(productData);
  }
}
var productData = [
  {
    id: 4,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/9/1937bb078928795834.jpg",
    name: "Bombay Shaving Company Charcoal Facial Starter Kit",
    price: 706,
    rating: 4,
  },
  {
    id: 5,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/4/1/41f5989BOMBA00000050_1.jpg",
    name: "Bombay Shaving Company Beard Color for Men with Henna &",
    img1: "https://images-static.nykaa.com/media/catalog/product/a/0/a0002f68904330600119_apr1.jpg",
    img2: "https://images-static.nykaa.com/media/catalog/product/a/0/a0002f68904330600119_apr2.jpg",
    img3: "https://images-static.nykaa.com/media/catalog/product/a/0/a0002f68904330600119_apr4.jpg",
    img4: "https://images-static.nykaa.com/media/catalog/product/a/0/a0002f68904330600119_apr5.jpg",
    price: 500,
    rating: 4,
  },
  {
    id: 6,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/f/df07d4fBOMBA00000045_1.jpg",
    name: "Bombay Shaving Company Beard Trimmer with USB",
    price: 1199,
    rating: 4,
  },
  {
    id: 7,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/9/59fb2f68904330600232_apr1.jpg",
    name: "Bombay Shaving Company Sensitive Shaving Foam",
    price: 275,
    rating: 5,
  },
  {
    id: 8,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/6/667a113797776127320_1.jpg",
    name: "Bombay Shaving Company Post-Shave Balm",
    price: 395,
    rating: 5,
  },
  {
    id: 9,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/d/7d58dfaNYNYKBC001291_1.jpg",
    name: "Bombay Shaving Company Veleno Perfume - Woody &",
    price: 596,
    rating: 4,
  },
  {
    id: 10,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/3/3304b4e655172771458_1.jpg",
    name: "Bombay Shaving Company Beard Care Starter Gift Kit",
    price: 995,
    rating: 3,
  },
  {
    id: 11,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/1/817d3ce8904330605343_1.jpg",
    name: "Bombay Shaving Company 5-in-1 Brightening Cream",
    price: 245,
    rating: 2,
  },
  {
    id: 12,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/8/f8aacaeBOMBA00000054_2.jpg",
    name: "Bombay Shaving Company Back Hair Removal And Body Razor",
    price: 200,
    rating: 1,
  },
  {
    id: 13,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/7/b7f22848904330602359_5.jpg",
    name: "Bombay Shaving Company Turmeric And Sandalwood",
    price: 295,
    rating: 4,
  },
  {
    id: 14,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/9/197ac5378928795810_1pr.jpg",
    name: "Bombay Shaving Company Beard Shaper Tool With Comb For Men (...",
    price: 195,
    rating: 4,
  },
  {
    id: 15,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/9/2919c58bomba00000073.jpg",
    name: "Bombay Shaving Company Beard Trimming And Skin Care Kit",
    price: 1999,
    rating: 5,
  },
  {
    id: 16,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/7/a7d9270655172771762_1.jpg",
    name: "Bombay Shaving Company Charcoal Face Wash - 10X",
    price: 248,
    rating: 4,
  },
  {
    id: 17,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/d/dd3eeee78928796046_1.jpg",
    name: "Bombay Shaving Company Beardinator 3 Step Beard",
    price: 839,
    rating: 5,
  },
  {
    id: 18,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/5/655172771830.jpg",
    name: "Bombay Shaving Company Charcoal Peel Off Mask",
    price: 229,
    rating: 5,
  },
  {
    id: 19,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/8/c8fac53bomba00000008_1pr.jpg",
    name: "Bombay Shaving Company Defender For Her 3-in-1",
    price: 984,
    rating: 4,
  },
  {
    id: 20,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/3/1354c538904330600461_1pr.jpg",
    name: "Bombay Shaving Company Coffee Face Wash",
    price: 249,
    rating: 2,
  },
  {
    id: 21,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/0/e0793eanykbscom00001__1_.jpg",
    name: "Bombay Shaving Company Beard Growth Oil (Pack Of 2)",
    price: 295,
    rating: 4,
  },
  {
    id: 22,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/5/655172771090ans_1_.jpg",
    name: "Bombay Shaving Company Exfoliating Bath Soaps 4x1",
    price: 799,
    rating: 5,
  },
  {
    id: 23,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/n/y/nykbscom00019.jpg",
    name: "Bombay Shaving Company His & Her - Basic Shaving Combo",
    price: 299,
    rating: 1,
  },
  {
    id: 24,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/0/803fba68904330604186%20(1).jpg",
    name: "Bombay Shaving Company Mini Charcoal Facial Kit",
    price: 900,
    rating: 4,
  },
  {
    id: 25,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/8/f84dc53655172771106_1pr.jpg",
    name: "Bombay Shaving Company Activated Charcoal Bath Soap",
    price: 374,
    rating: 4,
  },
  {
    id: 26,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/4/c4b35d2BOMBA00000124.jpg",
    name: "Bombay Shaving Company Charcoal Face Wash (Pack Of 2)",
    price: 1199,
    rating: 5,
  },
  {
    id: 27,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/5/655172771120_1a.jpg",
    name: "Bombay Shaving Company Menthol Refreshing Bath Soap",
    price: 449,
    rating: 5,
  },
  {
    id: 27,
    image_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/5/655172771120_1a.jpg",
    name: "Bombay Shaving Company Menthol Refreshing Bath Soap",
    price: 449,
    rating: 5,
  },
];

function displaydata(productData) {
  document.querySelector("#container").innerHTML = "";
  productData.map(function (elem) {
    var box = document.createElement("div");
    var img = document.createElement("img");
    var anchor = document.createElement("a");
    anchor.setAttribute("href", "nyoad.html");
    img.src = elem.image_url;
    anchor.append(img);
    var name = document.createElement("h5");
    name.innerText = elem.name;
    var price = document.createElement("p");
    price.innerText = "MRP" + ": " + elem.price;
    var rating = document.createElement("p");
    rating.innerText = "Rating" + "-" + elem.rating;
    var btn = document.createElement("button");
    btn.innerText = "Add to Bag";
    btn.addEventListener("click", function () {
      addtocart(elem);
    });
    box.append(anchor, name, price, rating, btn);
    document.querySelector("#container").append(box);
  });
}
document.getElementById("list").textContent = "(" + productData.length + ")";

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

function addtocart(elm) {
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
    displaycart(cart_items);
    pricecount(cart_items);
    document.querySelector(".after").textContent = cart_items.length;
    document.querySelector(".total-item").textContent = cart_items.length;
    localStorage.setItem("items", JSON.stringify(cart_items));
    document.querySelector(".middle-sec").classList.remove(".middle-sec1");
    document.querySelector(".cart-empty").classList.add("cart-empty1");
    document.querySelector(".coupon").classList.remove("coupon1");
    document.querySelector(".price-details").classList.remove("price-details1");
  }
}
