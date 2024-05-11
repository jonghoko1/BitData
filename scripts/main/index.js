// 화면 스크롤
const $scrollSections = document.querySelectorAll(".scroll-section .section-item-template");
var curSection = 0;
var isPlayAnimation = false;
// 스크롤 이벤트
const scrollEvent = function (e) {
    stopScroll(e);
    if (!isPlayAnimation) { // 애니메이션이 재생 중이 아닐 경우
        if (e.deltaY < 0 && curSection - 1 >= 0) { // 위로 스크롤 시
            scrollUpAnimation();
        } else if (e.deltaY > 0 && curSection + 1 < $scrollSections.length) { // 아래로 스크롤시
            scrollDownAnimation();
        }
    }
}
// 스크롤 방지
const stopScroll = function (e) {
    e.preventDefault();
}
// 위로 스크롤시 애니메이션
const scrollUpAnimation = function () {
    isPlayAnimation = true;
    setTimeout(function () { isPlayAnimation = false }, 1000)

    let fadeOutSection = $scrollSections[curSection];
    let fadeInSection = $scrollSections[--curSection];

    fadeOutSection.classList.add("hidden");
    fadeInSection.classList.remove("hidden");
}
// 아래로 스크롤시 애니메이션
const scrollDownAnimation = function () {
    isPlayAnimation = true;
    setTimeout(function () { isPlayAnimation = false }, 1000)

    let fadeOutSection = $scrollSections[curSection];
    let fadeInSection = $scrollSections[++curSection];

    fadeOutSection.classList.add("hidden");
    fadeInSection.classList.remove("hidden"); 
}
// 스크롤 이벤트 등록
window.addEventListener("wheel", scrollEvent, { passive: false });