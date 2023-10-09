var index = 0;

function title() {
  var titleTop = document.querySelector(".navbar .title");
  var arrTitle = [
    "YOU CAN PAY WITH CRYPTOCURRENCIES!",
    "FREE SHIPPING ON ALL ORDERS OVER $75",
    "NEWS: DELIVERY TO THE DOOR IS ACTIVE!",
  ];

  titleTop.classList.add("title_top");

  setTimeout(function () {
    titleTop.innerHTML = arrTitle[index];
    index++;

    if (index >= arrTitle.length) {
      index = 0;
    }

    titleTop.classList.remove("title_top");
  }, 1000);
}

setInterval(title, 3000);

//menu ẩn left
var login = document.querySelector(".login");
var register = document.querySelector(".register");
var heartLeft = document.querySelector(".heart_left");
var userLeft = document.querySelector(".user_left");
var shoppingLeft = document.querySelector(".shopping_left");
var myHeart1 = document.querySelector(".my_heart-1");
var myShopping1 = document.querySelector(".my_shopping-1");
var panelTopTitle = document.querySelector(".panel-top-title");
var accountAreaFormWrapper = document.querySelector(
  ".account-area-form-wrapper"
);

function register_menu() {
  register.classList.remove("add");
  login.classList.add("add");
  myHeart1.classList.add("add");
  myShopping1.classList.add("add");
  panelTopTitle.style.display = "flex";
  accountAreaFormWrapper.style.display = "flex";
}
function signIn_menu() {
  register.classList.add("add");
  myShopping1.classList.add("add");
  myHeart1.classList.add("add");
  setTimeout(function () {
    login.classList.remove("add");
  }, 50);
  panelTopTitle.style.display = "flex";
  accountAreaFormWrapper.style.display = "flex";
}
heartLeft.addEventListener("click", function () {
  register.classList.add("add");
  login.classList.add("add");
  myShopping1.classList.add("add");
  myHeart1.classList.remove("add");
  panelTopTitle.style.display = "none";
  accountAreaFormWrapper.style.display = "none";
});
shoppingLeft.addEventListener("click", function () {
  register.classList.add("add");
  login.classList.add("add");
  myHeart1.classList.add("add");
  myShopping1.classList.remove("add");
  panelTopTitle.style.display = "none";
  accountAreaFormWrapper.style.display = "none";
});
//menu ẩn top
var heartTop = document.querySelector(".heart_top");
var myHeart = document.querySelector(".my_heart");
var refreshTop = document.querySelector(".refresh_top");
var shoppingTop = document.querySelector(".shopping_top");
var myShopping = document.querySelector(".my_shopping");
heartTop.addEventListener("click", function () {
  myHeart.classList.remove("add_1");
  myShopping.classList.add("add_1");
});
refreshTop.addEventListener("click", function () {
  myHeart.classList.add("add_1");
  myShopping.classList.add("add_1");
});
shoppingTop.addEventListener("click", function () {
  myShopping.classList.remove("add_1");
  myHeart.classList.add("add_1");
});

//ẩn hiện menu ẩn
var user = document.querySelector(".user");
var closeLeft = document.querySelector(".close_left");
var closeTop = document.querySelector(".close_top");
var closeSearch = document.querySelector(".close_search");
var menuLeft = document.querySelector(".menu_left");
var menuTop = document.querySelector(".menu_top");
var heart = document.querySelector(".heart");
var shopping = document.querySelector(".shopping");
var search = document.querySelector(".search");
var mySearch = document.querySelector(".my_search");
var menuReponsive = document.querySelector(".oppenMenu");

//menu reponsive
menuReponsive.addEventListener("click", function () {
  menuLeft.style.transform = "translateX(0)";
  menuLeft.style.opacity = "1";
});

user.addEventListener("click", function () {
  menuLeft.style.transform = "translateX(0)";
  menuLeft.style.opacity = "1";
  panelTopTitle.style.display = "flex";
  accountAreaFormWrapper.style.display = "flex";
  myHeart1.classList.add("add");
  myShopping1.classList.add("add");
  setTimeout(function () {
    login.classList.remove("add");
  }, 50);
});
heart.addEventListener("click", function () {
  menuTop.style.transform = "translateX(0)";
  menuTop.style.opacity = "1";
  setTimeout(function () {
    myShopping.classList.add("add_1");
    myHeart.classList.remove("add_1");
  }, 50);
});
shopping.addEventListener("click", function () {
  menuTop.style.transform = "translateX(0)";
  menuTop.style.opacity = "1";
  setTimeout(function () {
    myShopping.classList.remove("add_1");
    myHeart.classList.add("add_1");
  }, 50);
});
search.addEventListener("click", function () {
  mySearch.style.transform = "translateX(0)";
  mySearch.style.opacity = "1";
});

closeLeft.addEventListener("click", function () {
  menuLeft.style.transform = "translateX(-550px)";
  menuLeft.style.opacity = "0";
  register.classList.add("add");
  login.classList.add("add");
});
closeTop.addEventListener("click", function () {
  menuTop.style.transform = "translateX(550px)";
  menuTop.style.opacity = "0";
  myShopping.classList.add("add_1");
  myHeart.classList.add("add_1");
});
closeSearch.addEventListener("click", function () {
  mySearch.style.transform = "translateY(-300px)";
  mySearch.style.opacity = "0";
});

//hàm cuộn trang về đầu
var homeClick = document.querySelector(".my_home_click");
homeClick.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//hàm zoom card

//chức năng chuyển ảnh khi click

//số thứ tự
var indexZoom = 0;
var image_zoom = document.querySelector(".show_product_card-1 .image");
function image_zoomCard(number) {
  var side = -450 * number + "px";
  indexZoom = number;
  image_zoom.style.transform = "translateX(" + side + ")";
}
//next,prev
function next_prev() {
  var next = document.querySelector(".my_next");
  var prev = document.querySelector(".my_prev");
  var image_zoom_1 = document.querySelectorAll(
    ".show_product_card-1 .image img"
  );
  next.addEventListener("click", function () {
    if (indexZoom < image_zoom_1.length - 1) {
      indexZoom++;
      image_zoom.style.transform =
        "translateX(" + -450 * indexZoom + "px" + ")";
    }
  });
  prev.addEventListener("click", function () {
    if (indexZoom > 0) {
      indexZoom--;
      image_zoom.style.transform =
        "translateX(" + -450 * indexZoom + "px" + ")";
    }
    console.log(indexZoom);
  });
  var closeZoom = document.querySelector(".close_zoom");
  closeZoom.addEventListener("click", function () {
    indexZoom = 0;
    image_zoomCard(indexZoom);
  });
  console.log(indexZoom);
}

//thoát zoomCard
var containerZoomCard = document.querySelector(".container_show_product_card");
var containerZoomCard1 = document.querySelector(".show_product_card");
var closeZoom = document.querySelector(".close_zoom");
closeZoom.addEventListener("click", function () {
  containerZoomCard.style.opacity = "0";
  containerZoomCard.style.pointerEvents = "none";
  containerZoomCard1.style.transform = "rotateY(89deg)";
});
function openZoom() {
  containerZoomCard.style.opacity = "1";
  containerZoomCard.style.pointerEvents = "initial";
  containerZoomCard1.style.transform = "rotateX(0deg)";
}
//doi thong tin been trong card zoom
function openZoomCard(number) {
  //ảnh cardZoom
  indexZoom = 0;
  var image = document.querySelectorAll(".show_product_card-1 .image img");
  var imageChild = document.querySelectorAll(
    ".show_product_card-1 .image_child img"
  );
  // thông tin
  var title = document.querySelector(".show_product_card-2 .title");
  var price = document.querySelector(".show_product_card-2 .price");
  //class tình trạng tồn kho
  var status = document.querySelector(".show_product_card-2 .status");
  var button = document.querySelector(".show_product_card-2 a");
  if (number == 1) {
    title.innerHTML = "The Air Scoop-Neck Tee";
    price.innerHTML = "$95.00";
    status.innerHTML = "OUT OF STOCK";
    button.innerHTML = "Read more";
    status.style.background = "red";
    status.style.color = "white";
    // đổi ảnh
    image[0].src = "../public/img/product/1.webp";
    image[1].src = "../public/img/product/1-1.webp";
    image[2].src = "../public/img/product/1-2.webp";
    image[3].src = "../public/img/product/1-3.webp";
    image[4].style.display = "none";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/1.webp";
    imageChild[1].src = "../public/img/product/1-1.webp";
    imageChild[2].src = "../public/img/product/1-2.webp";
    imageChild[3].src = "../public/img/product/1-3.webp";
    imageChild[4].style.display = "none";
    openZoom();
  }
  if (number == 2) {
    title.innerHTML = "Beaded double necklace";
    price.innerHTML = "$240.00";
    status.innerHTML = "1 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/2.webp";
    image[1].src = "../public/img/product/2-1.webp";
    image[2].src = "../public/img/product/2-2.webp";
    image[3].src = "../public/img/product/2-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/2-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/2.webp";
    imageChild[1].src = "../public/img/product/2-1.webp";
    imageChild[2].src = "../public/img/product/2-2.webp";
    imageChild[3].src = "../public/img/product/2-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/2-4.webp";
    openZoom();
  }
  if (number == 3) {
    title.innerHTML = "Twisted hoop earrings";
    price.innerHTML = "$144.00";
    status.innerHTML = "9 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/3.webp";
    image[1].src = "../public/img/product/3-1.webp";
    image[2].src = "../public/img/product/3-2.webp";
    image[3].src = "../public/img/product/3-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/3-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/3.webp";
    imageChild[1].src = "../public/img/product/3-1.webp";
    imageChild[2].src = "../public/img/product/3-2.webp";
    imageChild[3].src = "../public/img/product/3-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/3-4.webp";
    openZoom();
  }
  if (number == 4) {
    title.innerHTML = "Hoop pendant earrings";
    price.innerHTML = "$144.00";
    status.innerHTML = "11 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/4.webp";
    image[1].src = "../public/img/product/4-1.webp";
    image[2].src = "../public/img/product/4-2.webp";
    image[3].src = "../public/img/product/4-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/4-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/4.webp";
    imageChild[1].src = "../public/img/product/4-1.webp";
    imageChild[2].src = "../public/img/product/4-2.webp";
    imageChild[3].src = "../public/img/product/4-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/4-4.webp";
    openZoom();
  }
  if (number == 5) {
    title.innerHTML = "Embossed hoop earrings";
    price.innerHTML = "$144.00";
    status.innerHTML = "9 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/5.webp";
    image[1].src = "../public/img/product/5-1.webp";
    image[2].src = "../public/img/product/5-2.webp";
    image[3].src = "../public/img/product/5-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/5-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/5.webp";
    imageChild[1].src = "../public/img/product/5-1.webp";
    imageChild[2].src = "../public/img/product/5-2.webp";
    imageChild[3].src = "../public/img/product/5-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/5-4.webp";
    openZoom();
  }
  if (number == 6) {
    title.innerHTML = "Embossed hoop earrings";
    price.innerHTML = "$18.00 – $32.00";
    status.innerHTML = "439 IN STOCK (CAN BE BACKORDERED)";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Select options";
    image[0].src = "../public/img/product/6.webp";
    image[1].src = "../public/img/product/6-1.webp";
    image[2].src = "../public/img/product/6-2.webp";
    image[3].src = "../public/img/product/6-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/6-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/6.webp";
    imageChild[1].src = "../public/img/product/6-1.webp";
    imageChild[2].src = "../public/img/product/6-2.webp";
    imageChild[3].src = "../public/img/product/6-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/6-4.webp";
    openZoom();
  }
  if (number == 7) {
    title.innerHTML = "Rhinestone crystal earring";
    price.innerHTML = "$68.00";
    status.innerHTML = "14 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/7.webp";
    image[1].src = "../public/img/product/7-1.webp";
    image[2].src = "../public/img/product/7-2.webp";
    image[3].src = "../public/img/product/7-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/7-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/7.webp";
    imageChild[1].src = "../public/img/product/7-1.webp";
    imageChild[2].src = "../public/img/product/7-2.webp";
    imageChild[3].src = "../public/img/product/7-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/7-4.webp";
    openZoom();
  }
  if (number == 8) {
    title.innerHTML = "Embossed hoop earrings";
    price.innerHTML = "$68.00";
    status.innerHTML = "25 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/8.webp";
    image[1].src = "../public/img/product/8-1.webp";
    image[2].src = "../public/img/product/8-2.webp";
    image[3].src = "../public/img/product/8-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/8-4.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/8.webp";
    imageChild[1].src = "../public/img/product/8-1.webp";
    imageChild[2].src = "../public/img/product/8-2.webp";
    imageChild[3].src = "../public/img/product/8-3.webp";
    image[4].src = "../public/img/product/8-4.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/8-4.webp";
    openZoom();
  }
  if (number == 9) {
    title.innerHTML = "Link chain necklace";
    price.innerHTML = "$59.00 - $39.00";
    status.innerHTML = "25 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/9.webp";
    image[1].src = "../public/img/product/9-1.webp";
    image[2].src = "../public/img/product/9-2.webp";
    image[3].src = "../public/img/product/9-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/9-4.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/9.webp";
    imageChild[1].src = "../public/img/product/9-1.webp";
    imageChild[2].src = "../public/img/product/9-2.webp";
    imageChild[3].src = "../public/img/product/9-3.webp";
    image[4].src = "../public/img/product/9-4.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/9-4.webp";
    openZoom();
  }
  if (number == 10) {
    title.innerHTML = "Flower crystal ring";
    price.innerHTML = "$18.00 – $20.00";
    status.innerHTML = "490 IN STOCK (CAN BE BACKORDERED)";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/10.webp";
    image[1].src = "../public/img/product/10-1.webp";
    image[2].src = "../public/img/product/10-2.webp";
    image[3].src = "../public/img/product/10-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/10-4.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/10.webp";
    imageChild[1].src = "../public/img/product/10-1.webp";
    imageChild[2].src = "../public/img/product/10-2.webp";
    imageChild[3].src = "../public/img/product/10-3.webp";
    image[4].src = "../public/img/product/10-4.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/10-4.webp";
    openZoom();
  }
  if (number == 11) {
    title.innerHTML = "Simple Product";
    price.innerHTML = "$189.00";
    status.innerHTML = "449 IN STOCK (CAN BE BACKORDERED)";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/11.webp";
    image[1].src = "../public/img/product/11-1.webp";
    image[2].src = "../public/img/product/11-2.webp";
    image[3].src = "../public/img/product/11-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/11-2.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/11.webp";
    imageChild[1].src = "../public/img/product/11-1.webp";
    imageChild[2].src = "../public/img/product/11-2.webp";
    imageChild[3].src = "../public/img/product/11-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/11-2.webp";
    openZoom();
  }
  if (number == 11.1) {
    title.innerHTML = "blue heart necklace";
    price.innerHTML = "$65.00 – $189.00";
    status.innerHTML = "500 IN STOCK (CAN BE BACKORDERED)";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/11-1.webp";
    image[1].src = "../public/img/product/11-2.webp";
    image[2].src = "../public/img/product/11-2.webp";
    image[3].src = "../public/img/product/11-3.webp";
    image[4].style.display = "none";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/11-1.webp";
    imageChild[1].src = "../public/img/product/11-2.webp";
    imageChild[2].src = "../public/img/product/11-3.webp";
    imageChild[3].src = "../public/img/product/11-3.webp";
    imageChild[4].style.display = "none";
    openZoom();
  }
  if (number == 12) {
    title.innerHTML = "Mesh flower earrings";
    price.innerHTML = "$30.00 – $40.00";
    status.innerHTML = "488 IN STOCK (CAN BE BACKORDERED)";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/12.webp";
    image[1].src = "../public/img/product/12-1.webp";
    image[2].src = "../public/img/product/12-2.webp";
    image[3].src = "../public/img/product/12-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/12-2.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/12.webp";
    imageChild[1].src = "../public/img/product/12-1.webp";
    imageChild[2].src = "../public/img/product/12-2.webp";
    imageChild[3].src = "../public/img/product/12-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/12-2.webp";
    openZoom();
  }
  if (number == 13) {
    title.innerHTML = "Faceted crystal hoop earrings";
    price.innerHTML = "$22.00";
    status.innerHTML = "488 IN STOCK (CAN BE BACKORDERED)";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    button.innerHTML = "Add to cart";
    image[0].src = "../public/img/product/13.webp";
    image[1].src = "../public/img/product/13-1.webp";
    image[2].src = "../public/img/product/13-2.webp";
    image[3].src = "../public/img/product/13-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/13-4.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/13.webp";
    imageChild[1].src = "../public/img/product/13-1.webp";
    imageChild[2].src = "../public/img/product/13-2.webp";
    imageChild[3].src = "../public/img/product/13-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/13-4.webp";
    openZoom();
  }
}
next_prev();

// slide phần Deals of the Week

var productCardEndow = document.querySelector(
  ".featured_Deals-child--2 .featured_Deals-child--2-card .product_card"
);
var indexEndow = 1;
function nextEndow() {
  productCardEndow.style.transform = "translateX(-287px)";
  indexEndow = 2;
}
function prevEndow() {
  indexEndow = 1;
  productCardEndow.style.transform = "translateX(0px)";
}
function autoSlideEndow() {
  console.log(indexEndow);
  setInterval(function () {
    if (indexEndow % 2 != 0) {
      console.log(indexEndow);
      productCardEndow.style.transform = "translateX(-287px)";
    } else {
      console.log(indexEndow);
      productCardEndow.style.transform = "translateX(0px)";
    }
    indexEndow++;
  }, 5000);
}
autoSlideEndow();

//đồng hồ đếm ngược
function updateCountdown() {
  const now = new Date();
  const targetTime = new Date();

  // Đặt thời gian đích là 5:00:00 sáng
  targetTime.setHours(2, 0, 0, 0);

  // Nếu hiện tại đã vượt qua thời gian đích, đặt thời gian đích cho ngày hôm sau
  if (now > targetTime) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  // Tính toán thời gian còn lại từ hiện tại đến thời gian đích
  let timeDiff = targetTime - now;

  // Tính toán số ngày, giờ, phút và giây từ thời gian còn lại
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Hiển thị đồng hồ đếm ngược
  document.getElementById("days").textContent = formatTime(days);
  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateCountdown, 1000); // Cập nhật đồng hồ đếm ngược mỗi giây
updateCountdown(); // Khởi tạo đồng hồ đếm ngược

// style menu khi cuộn trang
var menu = document.querySelector(".container_menu");
var banner = document.querySelector(".my_banner");

window.addEventListener("scroll", function () {
  // Kiểm tra vị trí cuộn
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Thêm hoặc xoá class tùy thuộc vào vị trí cuộn
  if (scrollPosition > 0) {
    menu.style.transform = "translateY(-48px)";
    menu.style.position = "fixed";
    banner.style.paddingTop = "5rem";
    console.log("hi");
  } else {
    menu.style.transform = "translateY(0px)";
  }
});
//instagram
function instagram() {
  var index = 1;
  var slide = document.querySelector(".instagram > div:nth-child(2)");
  setInterval(function () {
    if (index % 2 == 0) {
      slide.style.transform = "translateX(-215px)";
    } else {
      slide.style.transform = "translateX(0px)";
    }
    index++;
  }, 5000);
}
instagram();

//chuyển tab khi nhấn sản phẩm
function productDetails(number) {
  var image = document.querySelectorAll(".product_details > div .image img");
  var imageChild = document.querySelectorAll(
    ".product_details > div .image_child img"
  );
  // thông tin
  var title = document.querySelector(".product_details .name_product");
  var title1 = document.querySelector(".product_details .name_product_1");
  var price = document.querySelector(".product_details .price");
  //class tình trạng tồn kho
  var status = document.querySelector(".product_details .status");
  if (number == 1) {
    title.innerHTML = "The Air Scoop-Neck Tee";
    title1.innerHTML = "The Air Scoop-Neck Tee";
    price.innerHTML = "$95.00";
    status.innerHTML = "OUT OF STOCK";
    status.style.width = "90px";
    status.style.background = "red";
    status.style.color = "white";
    // đổi ảnh
    image[0].src = "../public/img/product/1.webp";
    image[1].src = "../public/img/product/1-1.webp";
    image[2].src = "../public/img/product/1-2.webp";
    image[3].src = "../public/img/product/1-3.webp";
    image[4].style.display = "none";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/1.webp";
    imageChild[1].src = "../public/img/product/1-1.webp";
    imageChild[2].src = "../public/img/product/1-2.webp";
    imageChild[3].src = "../public/img/product/1-3.webp";
    imageChild[4].style.display = "none";
  }
  if (number == 2) {
    title.innerHTML = "Beaded double necklace";
    title1.innerHTML = "Beaded double necklace";
    price.innerHTML = "$240.00";
    status.innerHTML = "1 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/2.webp";
    image[1].src = "../public/img/product/2-1.webp";
    image[2].src = "../public/img/product/2-2.webp";
    image[3].src = "../public/img/product/2-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/2-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/2.webp";
    imageChild[1].src = "../public/img/product/2-1.webp";
    imageChild[2].src = "../public/img/product/2-2.webp";
    imageChild[3].src = "../public/img/product/2-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/2-4.webp";
  }
  if (number == 3) {
    title.innerHTML = "Twisted hoop earrings";
    title1.innerHTML = "Twisted hoop earrings";
    price.innerHTML = "$144.00";
    status.innerHTML = "9 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/3.webp";
    image[1].src = "../public/img/product/3-1.webp";
    image[2].src = "../public/img/product/3-2.webp";
    image[3].src = "../public/img/product/3-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/3-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/3.webp";
    imageChild[1].src = "../public/img/product/3-1.webp";
    imageChild[2].src = "../public/img/product/3-2.webp";
    imageChild[3].src = "../public/img/product/3-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/3-4.webp";
  }
  if (number == 4) {
    title.innerHTML = "Hoop pendant earrings";
    title1.innerHTML = "Hoop pendant earrings";
    price.innerHTML = "$144.00";
    status.innerHTML = "11 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/4.webp";
    image[1].src = "../public/img/product/4-1.webp";
    image[2].src = "../public/img/product/4-2.webp";
    image[3].src = "../public/img/product/4-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/4-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/4.webp";
    imageChild[1].src = "../public/img/product/4-1.webp";
    imageChild[2].src = "../public/img/product/4-2.webp";
    imageChild[3].src = "../public/img/product/4-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/4-4.webp";
  }
  if (number == 5) {
    title.innerHTML = "Embossed hoop earrings";
    title1.innerHTML = "Embossed hoop earrings";
    price.innerHTML = "$144.00";
    status.innerHTML = "9 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/5.webp";
    image[1].src = "../public/img/product/5-1.webp";
    image[2].src = "../public/img/product/5-2.webp";
    image[3].src = "../public/img/product/5-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/5-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/5.webp";
    imageChild[1].src = "../public/img/product/5-1.webp";
    imageChild[2].src = "../public/img/product/5-2.webp";
    imageChild[3].src = "../public/img/product/5-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/5-4.webp";
  }
  if (number == 6) {
    title.innerHTML = "Embossed hoop earrings";
    title1.innerHTML = "Embossed hoop earrings";
    price.innerHTML = "$18.00 – $32.00";
    status.innerHTML = "439 IN STOCK (CAN BE BACKORDERED)";
    status.style.width = "250px";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/6.webp";
    image[1].src = "../public/img/product/6-1.webp";
    image[2].src = "../public/img/product/6-2.webp";
    image[3].src = "../public/img/product/6-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/6-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/6.webp";
    imageChild[1].src = "../public/img/product/6-1.webp";
    imageChild[2].src = "../public/img/product/6-2.webp";
    imageChild[3].src = "../public/img/product/6-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/6-4.webp";
  }
  if (number == 7) {
    title.innerHTML = "Rhinestone crystal earring";
    title1.innerHTML = "Rhinestone crystal earring";
    price.innerHTML = "$68.00";
    status.innerHTML = "14 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/7.webp";
    image[1].src = "../public/img/product/7-1.webp";
    image[2].src = "../public/img/product/7-2.webp";
    image[3].src = "../public/img/product/7-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/7-4.webp";
    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/7.webp";
    imageChild[1].src = "../public/img/product/7-1.webp";
    imageChild[2].src = "../public/img/product/7-2.webp";
    imageChild[3].src = "../public/img/product/7-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/7-4.webp";
  }
  if (number == 8) {
    title.innerHTML = "Embossed hoop earrings";
    title1.innerHTML = "Embossed hoop earrings";
    price.innerHTML = "$68.00";
    status.innerHTML = "25 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/8.webp";
    image[1].src = "../public/img/product/8-1.webp";
    image[2].src = "../public/img/product/8-2.webp";
    image[3].src = "../public/img/product/8-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/8-4.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/8.webp";
    imageChild[1].src = "../public/img/product/8-1.webp";
    imageChild[2].src = "../public/img/product/8-2.webp";
    imageChild[3].src = "../public/img/product/8-3.webp";
    image[4].src = "../public/img/product/8-4.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/8-4.webp";
  }
  if (number == 9) {
    title.innerHTML = "Link chain necklace";
    title1.innerHTML = "Link chain necklace";
    price.innerHTML = "$59.00 - $39.00";
    status.innerHTML = "25 IN STOCK";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/9.webp";
    image[1].src = "../public/img/product/9-1.webp";
    image[2].src = "../public/img/product/9-2.webp";
    image[3].src = "../public/img/product/9-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/9-4.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/9.webp";
    imageChild[1].src = "../public/img/product/9-1.webp";
    imageChild[2].src = "../public/img/product/9-2.webp";
    imageChild[3].src = "../public/img/product/9-3.webp";
    image[4].src = "../public/img/product/9-4.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/9-4.webp";
  }
  if (number == 10) {
    title.innerHTML = "Flower crystal ring";
    title1.innerHTML = "Flower crystal ring";
    price.innerHTML = "$18.00 – $20.00";
    status.innerHTML = "490 IN STOCK (CAN BE BACKORDERED)";
    status.style.background = "#f5f4ee";
    status.style.width = "250px";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/10.webp";
    image[1].src = "../public/img/product/10-1.webp";
    image[2].src = "../public/img/product/10-2.webp";
    image[3].src = "../public/img/product/10-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/10-4.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/10.webp";
    imageChild[1].src = "../public/img/product/10-1.webp";
    imageChild[2].src = "../public/img/product/10-2.webp";
    imageChild[3].src = "../public/img/product/10-3.webp";
    image[4].src = "../public/img/product/10-4.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/10-4.webp";
  }
  if (number == 11) {
    title.innerHTML = "Simple Product";
    title1.innerHTML = "Simple Product";
    price.innerHTML = "$189.00";
    status.innerHTML = "449 IN STOCK (CAN BE BACKORDERED)";
    status.style.width = "250px";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/11.webp";
    image[1].src = "../public/img/product/11-1.webp";
    image[2].src = "../public/img/product/11-2.webp";
    image[3].src = "../public/img/product/11-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/11-2.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/11.webp";
    imageChild[1].src = "../public/img/product/11-1.webp";
    imageChild[2].src = "../public/img/product/11-2.webp";
    imageChild[3].src = "../public/img/product/11-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/11-2.webp";
  }
  if (number == 11.1) {
    title.innerHTML = "blue heart necklace";
    title1.innerHTML = "blue heart necklace";
    price.innerHTML = "$65.00 – $189.00";
    status.innerHTML = "500 IN STOCK (CAN BE BACKORDERED)";
    status.style.width = "250px";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/11-1.webp";
    image[1].src = "../public/img/product/11-2.webp";
    image[2].src = "../public/img/product/11-2.webp";
    image[3].src = "../public/img/product/11-3.webp";
    image[4].style.display = "none";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/11-1.webp";
    imageChild[1].src = "../public/img/product/11-2.webp";
    imageChild[2].src = "../public/img/product/11-3.webp";
    imageChild[3].src = "../public/img/product/11-3.webp";
    imageChild[4].style.display = "none";
  }
  if (number == 12) {
    title.innerHTML = "Mesh flower earrings";
    title1.innerHTML = "Mesh flower earrings";
    price.innerHTML = "$30.00 – $40.00";
    status.innerHTML = "488 IN STOCK (CAN BE BACKORDERED)";
    status.style.width = "250px";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/12.webp";
    image[1].src = "../public/img/product/12-1.webp";
    image[2].src = "../public/img/product/12-2.webp";
    image[3].src = "../public/img/product/12-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/12-2.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/12.webp";
    imageChild[1].src = "../public/img/product/12-1.webp";
    imageChild[2].src = "../public/img/product/12-2.webp";
    imageChild[3].src = "../public/img/product/12-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/12-2.webp";
  }
  if (number == 13) {
    title.innerHTML = "Faceted crystal hoop earrings";
    title1.innerHTML = "Faceted crystal hoop earrings";
    price.innerHTML = "$22.00";
    status.innerHTML = "488 IN STOCK (CAN BE BACKORDERED)";
    status.style.width = "250px";
    status.style.background = "#f5f4ee";
    status.style.color = "#7d7d7d";
    image[0].src = "../public/img/product/13.webp";
    image[1].src = "../public/img/product/13-1.webp";
    image[2].src = "../public/img/product/13-2.webp";
    image[3].src = "../public/img/product/13-3.webp";
    image[4].style.display = "block";
    image[4].src = "../public/img/product/13-4.webp";

    //đổi ảnh imageChild
    imageChild[0].src = "../public/img/product/13.webp";
    imageChild[1].src = "../public/img/product/13-1.webp";
    imageChild[2].src = "../public/img/product/13-2.webp";
    imageChild[3].src = "../public/img/product/13-3.webp";
    imageChild[4].style.display = "block";
    imageChild[4].src = "../public/img/product/13-4.webp";
  }
}

