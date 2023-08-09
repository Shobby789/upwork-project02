const getItems = async () => {
  try {
    await fetch("/api", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("images", data);
        console.log(data.data);
      });
  } catch (error) {
    console.log(error);
  }
};

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

setInterval(first, 3000);
setInterval(second, 6000);
setInterval(third, 12000);
setInterval(fourth, 18000);
