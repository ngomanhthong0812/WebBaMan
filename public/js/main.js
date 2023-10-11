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

// //chuyển tab khi nhấn sản phẩm
// function productDetails(number) {
//   var image = document.querySelectorAll(".product_details > div .image img");
//   var imageChild = document.querySelectorAll(
//     ".product_details > div .image_child img"
//   );
//   // thông tin
//   var title = document.querySelector(".product_details .name_product");
//   var title1 = document.querySelector(".product_details .name_product_1");
//   var price = document.querySelector(".product_details .price");
//   //class tình trạng tồn kho
//   var status = document.querySelector(".product_details .status");
//   if (number == 1) {
//     title.innerHTML = "The Air Scoop-Neck Tee";
//     title1.innerHTML = "The Air Scoop-Neck Tee";
//     price.innerHTML = "$95.00";
//     status.innerHTML = "OUT OF STOCK";
//     status.style.background = "red";
//     status.style.color = "white";
//     // đổi ảnh
//     image[0].src = "../public/img/product/1.webp";
//     image[1].src = "../public/img/product/1-1.webp";
//     image[2].src = "../public/img/product/1-2.webp";
//     image[3].src = "../public/img/product/1-3.webp";
//     image[4].style.display = "none";
//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/1.webp";
//     imageChild[1].src = "../public/img/product/1-1.webp";
//     imageChild[2].src = "../public/img/product/1-2.webp";
//     imageChild[3].src = "../public/img/product/1-3.webp";
//     imageChild[4].style.display = "none";
//   }
//   if (number == 2) {
//     title.innerHTML = "Beaded double necklace";
//     title1.innerHTML = "Beaded double necklace";
//     price.innerHTML = "$240.00";
//     status.innerHTML = "1 IN STOCK";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/2.webp";
//     image[1].src = "../public/img/product/2-1.webp";
//     image[2].src = "../public/img/product/2-2.webp";
//     image[3].src = "../public/img/product/2-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/2-4.webp";
//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/2.webp";
//     imageChild[1].src = "../public/img/product/2-1.webp";
//     imageChild[2].src = "../public/img/product/2-2.webp";
//     imageChild[3].src = "../public/img/product/2-3.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/2-4.webp";
//   }
//   if (number == 3) {
//     title.innerHTML = "Twisted hoop earrings";
//     title1.innerHTML = "Twisted hoop earrings";
//     price.innerHTML = "$144.00";
//     status.innerHTML = "9 IN STOCK";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/3.webp";
//     image[1].src = "../public/img/product/3-1.webp";
//     image[2].src = "../public/img/product/3-2.webp";
//     image[3].src = "../public/img/product/3-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/3-4.webp";
//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/3.webp";
//     imageChild[1].src = "../public/img/product/3-1.webp";
//     imageChild[2].src = "../public/img/product/3-2.webp";
//     imageChild[3].src = "../public/img/product/3-3.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/3-4.webp";
//   }
//   if (number == 4) {
//     title.innerHTML = "Hoop pendant earrings";
//     title1.innerHTML = "Hoop pendant earrings";
//     price.innerHTML = "$144.00";
//     status.innerHTML = "11 IN STOCK";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/4.webp";
//     image[1].src = "../public/img/product/4-1.webp";
//     image[2].src = "../public/img/product/4-2.webp";
//     image[3].src = "../public/img/product/4-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/4-4.webp";
//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/4.webp";
//     imageChild[1].src = "../public/img/product/4-1.webp";
//     imageChild[2].src = "../public/img/product/4-2.webp";
//     imageChild[3].src = "../public/img/product/4-3.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/4-4.webp";
//   }
//   if (number == 5) {
//     title.innerHTML = "Embossed hoop earrings";
//     title1.innerHTML = "Embossed hoop earrings";
//     price.innerHTML = "$144.00";
//     status.innerHTML = "9 IN STOCK";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/5.webp";
//     image[1].src = "../public/img/product/5-1.webp";
//     image[2].src = "../public/img/product/5-2.webp";
//     image[3].src = "../public/img/product/5-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/5-4.webp";
//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/5.webp";
//     imageChild[1].src = "../public/img/product/5-1.webp";
//     imageChild[2].src = "../public/img/product/5-2.webp";
//     imageChild[3].src = "../public/img/product/5-3.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/5-4.webp";
//   }
//   if (number == 6) {
//     title.innerHTML = "Embossed hoop earrings";
//     title1.innerHTML = "Embossed hoop earrings";
//     price.innerHTML = "$18.00 – $32.00";
//     status.innerHTML = "439 IN STOCK (CAN BE BACKORDERED)";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/6.webp";
//     image[1].src = "../public/img/product/6-1.webp";
//     image[2].src = "../public/img/product/6-2.webp";
//     image[3].src = "../public/img/product/6-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/6-4.webp";
//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/6.webp";
//     imageChild[1].src = "../public/img/product/6-1.webp";
//     imageChild[2].src = "../public/img/product/6-2.webp";
//     imageChild[3].src = "../public/img/product/6-3.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/6-4.webp";
//   }
//   if (number == 7) {
//     title.innerHTML = "Rhinestone crystal earring";
//     title1.innerHTML = "Rhinestone crystal earring";
//     price.innerHTML = "$68.00";
//     status.innerHTML = "14 IN STOCK";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/7.webp";
//     image[1].src = "../public/img/product/7-1.webp";
//     image[2].src = "../public/img/product/7-2.webp";
//     image[3].src = "../public/img/product/7-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/7-4.webp";
//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/7.webp";
//     imageChild[1].src = "../public/img/product/7-1.webp";
//     imageChild[2].src = "../public/img/product/7-2.webp";
//     imageChild[3].src = "../public/img/product/7-3.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/7-4.webp";
//   }
//   if (number == 8) {
//     title.innerHTML = "Embossed hoop earrings";
//     title1.innerHTML = "Embossed hoop earrings";
//     price.innerHTML = "$68.00";
//     status.innerHTML = "25 IN STOCK";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/8.webp";
//     image[1].src = "../public/img/product/8-1.webp";
//     image[2].src = "../public/img/product/8-2.webp";
//     image[3].src = "../public/img/product/8-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/8-4.webp";

//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/8.webp";
//     imageChild[1].src = "../public/img/product/8-1.webp";
//     imageChild[2].src = "../public/img/product/8-2.webp";
//     imageChild[3].src = "../public/img/product/8-3.webp";
//     image[4].src = "../public/img/product/8-4.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/8-4.webp";
//   }
//   if (number == 9) {
//     title.innerHTML = "Link chain necklace";
//     title1.innerHTML = "Link chain necklace";
//     price.innerHTML = "$59.00 - $39.00";
//     status.innerHTML = "25 IN STOCK";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/9.webp";
//     image[1].src = "../public/img/product/9-1.webp";
//     image[2].src = "../public/img/product/9-2.webp";
//     image[3].src = "../public/img/product/9-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/9-4.webp";

//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/9.webp";
//     imageChild[1].src = "../public/img/product/9-1.webp";
//     imageChild[2].src = "../public/img/product/9-2.webp";
//     imageChild[3].src = "../public/img/product/9-3.webp";
//     image[4].src = "../public/img/product/9-4.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/9-4.webp";
//   }
//   if (number == 10) {
//     title.innerHTML = "Flower crystal ring";
//     title1.innerHTML = "Flower crystal ring";
//     price.innerHTML = "$18.00 – $20.00";
//     status.innerHTML = "490 IN STOCK (CAN BE BACKORDERED)";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/10.webp";
//     image[1].src = "../public/img/product/10-1.webp";
//     image[2].src = "../public/img/product/10-2.webp";
//     image[3].src = "../public/img/product/10-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/10-4.webp";

//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/10.webp";
//     imageChild[1].src = "../public/img/product/10-1.webp";
//     imageChild[2].src = "../public/img/product/10-2.webp";
//     imageChild[3].src = "../public/img/product/10-3.webp";
//     image[4].src = "../public/img/product/10-4.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/10-4.webp";
//   }
//   if (number == 11) {
//     title.innerHTML = "Simple Product";
//     title1.innerHTML = "Simple Product";
//     price.innerHTML = "$189.00";
//     status.innerHTML = "449 IN STOCK (CAN BE BACKORDERED)";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/11.webp";
//     image[1].src = "../public/img/product/11-1.webp";
//     image[2].src = "../public/img/product/11-2.webp";
//     image[3].src = "../public/img/product/11-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/11-2.webp";

//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/11.webp";
//     imageChild[1].src = "../public/img/product/11-1.webp";
//     imageChild[2].src = "../public/img/product/11-2.webp";
//     imageChild[3].src = "../public/img/product/11-3.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/11-2.webp";
//   }
//   if (number == 11.1) {
//     title.innerHTML = "blue heart necklace";
//     title1.innerHTML = "blue heart necklace";
//     price.innerHTML = "$65.00 – $189.00";
//     status.innerHTML = "500 IN STOCK (CAN BE BACKORDERED)";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/11-1.webp";
//     image[1].src = "../public/img/product/11-2.webp";
//     image[2].src = "../public/img/product/11-2.webp";
//     image[3].src = "../public/img/product/11-3.webp";
//     image[4].style.display = "none";

//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/11-1.webp";
//     imageChild[1].src = "../public/img/product/11-2.webp";
//     imageChild[2].src = "../public/img/product/11-3.webp";
//     imageChild[3].src = "../public/img/product/11-3.webp";
//     imageChild[4].style.display = "none";
//   }
//   if (number == 12) {
//     title.innerHTML = "Mesh flower earrings";
//     title1.innerHTML = "Mesh flower earrings";
//     price.innerHTML = "$30.00 – $40.00";
//     status.innerHTML = "488 IN STOCK (CAN BE BACKORDERED)";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/12.webp";
//     image[1].src = "../public/img/product/12-1.webp";
//     image[2].src = "../public/img/product/12-2.webp";
//     image[3].src = "../public/img/product/12-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/12-2.webp";

//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/12.webp";
//     imageChild[1].src = "../public/img/product/12-1.webp";
//     imageChild[2].src = "../public/img/product/12-2.webp";
//     imageChild[3].src = "../public/img/product/12-3.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/12-2.webp";
//   }
//   if (number == 13) {
//     title.innerHTML = "Faceted crystal hoop earrings";
//     title1.innerHTML = "Faceted crystal hoop earrings";
//     price.innerHTML = "$22.00";
//     status.innerHTML = "488 IN STOCK (CAN BE BACKORDERED)";
//     status.style.background = "#f5f4ee";
//     status.style.color = "#7d7d7d";
//     image[0].src = "../public/img/product/13.webp";
//     image[1].src = "../public/img/product/13-1.webp";
//     image[2].src = "../public/img/product/13-2.webp";
//     image[3].src = "../public/img/product/13-3.webp";
//     image[4].style.display = "block";
//     image[4].src = "../public/img/product/13-4.webp";

//     //đổi ảnh imageChild
//     imageChild[0].src = "../public/img/product/13.webp";
//     imageChild[1].src = "../public/img/product/13-1.webp";
//     imageChild[2].src = "../public/img/product/13-2.webp";
//     imageChild[3].src = "../public/img/product/13-3.webp";
//     imageChild[4].style.display = "block";
//     imageChild[4].src = "../public/img/product/13-4.webp";
//   }
// }
var productId = null;

function productDetails(number) {
  // Lấy thông tin từ file json
  fetch("../public/js/product_detail.json")
    .then((Response) => Response.json())
    .then((data) => {
      productId = data.find((product) => product.id === number);

      // Lưu thông tin sản phẩm vào localStorage
      localStorage.setItem("productId", JSON.stringify(productId));

      // Gọi hàm để cập nhật hình ảnh
      updateImages();
    })
    .catch((error) => console.error("Fetch error:", error));
}

function updateImages() {
  // Gán các đường dẫn ảnh từ productId vào các phần tử hình ảnh
  var imageDetail = document.querySelectorAll(
    ".product_details > div .image_child img"
  );

  if (productId) {
    imageDetail[0].src = productId.img;
    imageDetail[1].src = productId.img_1;
    imageDetail[2].src = productId.img_2;
    imageDetail[3].src = productId.img_3;
    imageDetail[4].src = productId.img_2;
  }
}

function checkLocalStorage() {
  var storedProduct = localStorage.getItem("productId");
  console.log("storedProduct in checkLocalStorage:", storedProduct);

  if (storedProduct) {
    productId = JSON.parse(storedProduct);
    updateImages();
  }
}

document.addEventListener("DOMContentLoaded", checkLocalStorage);
