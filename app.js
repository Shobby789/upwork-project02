function first() {
  document.getElementById("leftSlider").src = "./images/2.jpg";
  document.getElementById("slideImage").src = "./images/girl-2.jpg";
}

function second() {
  document.getElementById("leftSlider").src = "./images/3.jpg";
  document.getElementById("slideImage").src = "./images/girl-3.jpg";
}

function third() {
  document.getElementById("leftSlider").src = "./images/4.jpg";
  document.getElementById("slideImage").src = "./images/girl-4.jpg";
}

function fourth() {
  document.getElementById("leftSlider").src = "./images/1.jpg";
  document.getElementById("slideImage").src = "./images/girl-1.jpg";
}
// setInterval(first, 3000);
// setInterval(second, 6000);
// setInterval(third, 12000);
// setInterval(fourth, 18000);

const serverImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtnbEFrnCD7nzIn3Na069EoiRxzHgDXSSug&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAyBCCtRAuTx5HM_Z672F45i3l_EoiSTw8BBAuqUQoHDji9kffZQUe5Gmo5woXfYtoV8&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGelHqF1z6ZbVqKWcjB5vHrdEF561Wqq1Lvob8i-LHLv1UEWO8ByGU85ZkSVVvvHOTD8&usqp=CAU",
  "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp",
];

function changeImages() {
  localStorage.setItem("images", JSON.stringify(serverImages));
  const imageUrls = JSON.parse(localStorage.getItem("images"));

  let count = 0;
  setInterval(() => {
    document.getElementById("rightImageSlider").src = imageUrls[count];
    document.getElementById("leftSlider").src = imageUrls[count];
    count++;
    if (count > 3) {
      count = 0;
    }
  }, 3500);
}
