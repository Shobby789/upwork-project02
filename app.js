var img = document.getElementById("img");

var slides = [
  "nature_scene_2.jpg",
  "nature_scene_3.jpg",
  " nature_scene_4.jpg",
  "nature_scene_5.jpg",
  "nature_scene_6.jpg",
  "nature_scene_7.jpg",
  "nature_scene_8.jpg",
  "nature_scene_1.jpg",
];

var Start = 0;

function slider() {
  if (Start < slides.length) {
    Start = Start + 1;
  } else {
    Start = 1;
  }
  console.log(img);
  img.innerHTML = "<img src=" + slides[Start - 1] + ">";
}

var img = document.getElementById("img");

var slides = [
  "nature_scene_2.jpg",
  "nature_scene_3.jpg",
  "nature_scene_4.jpg",
  "nature_scene_5.jpg",
  "nature_scene_6.jpg",
  "nature_scene_7.jpg",
  "nature_scene_8.jpg",
  "nature_scene_1.jpg",
];

var Start = 0;

function slider() {
  if (Start < slides.length) {
    Start = Start + 1;
  } else {
    Start = 1;
  }
  console.log(img);
  img.innerHTML = "<img src=" + slides[Start - 1] + ">";
}
setInterval(slider, 2000);
