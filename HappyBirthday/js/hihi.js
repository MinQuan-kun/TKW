"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  window.location.href = "suprise.html";
}
function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Real ?",
    "Ơ thiệt à ?",
    "Đù",
    "Phải bạn tôi không vậy ?",
    "Bạn này lớn rồi :((",
    "Thôi giả bộ bấm cho bạn vui đi :)",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

//Sự kiện thay đổi ảnh
function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}


const openVideoButton = document.getElementById('openVideoButton');
const videoModal = document.getElementById('videoModal');        
const overlay = document.getElementById('overlay');
const videoPlayer = document.getElementById('videoPlayer');
const message = document.getElementById('message');

// Hàm mở video pop-up
openVideoButton.addEventListener('click', function() {
videoModal.style.display = 'block';
overlay.style.display = 'block';
message.style.display = 'none';  // Ẩn thông báo nếu có
videoPlayer.play();
        });

// Đóng video pop-up và hiển thị thông báo khi video kết thúc
videoPlayer.addEventListener('ended', function() {
videoModal.style.display = 'none';
overlay.style.display = 'none';
message.style.display = 'block';  // Hiển thị thông báo
});

 // Đóng video khi nhấp vào overlay
overlay.addEventListener('click', function() {
videoModal.style.display = 'none';
overlay.style.display = 'none';
videoPlayer.pause();
videoPlayer.currentTime = 0;  // Đưa video về đầu
});