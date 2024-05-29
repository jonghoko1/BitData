// 화면 스크롤
const $scrollSection = document.querySelector(".scroll-section");
const $scrollSectionItems = document.querySelectorAll(".scroll-section .section-item");
var curSectionIndex = 0;
var curScrollSectionHeight = 0;
var isPlayAnimation = false;
const animationPlayTime = 2000;
// 스크롤 이벤트
function scrollEvent(e) {
    stopScroll(e);
    if (!isPlayAnimation) { // 애니메이션이 재생 중이 아닐 경우
        if (e.deltaY < 0 && curSectionIndex - 1 >= 0) { // 위로 스크롤 시
            scrollAnimationStart(scrollUpAnimation);
        } else if (e.deltaY > 0 && curSectionIndex + 1 < $scrollSectionItems.length) { // 아래로 스크롤시
            scrollAnimationStart(scrollDownAnimation);
        }
    }
}
// 스크롤 방지
function stopScroll(e) {
    e.preventDefault();
}
// 스크롤 애니메이션 재생
function scrollAnimationStart(animation, index) {
    isPlayAnimation = true;
    setTimeout(function () { isPlayAnimation = false }, animationPlayTime);
    if (index == undefined) {
        animation();
    } else {
        animation(index);
    }

    updatePaginationBtn();
}
// 위로 스크롤시 애니메이션
function scrollUpAnimation() {
    curSectionIndex--;
    const $screenHeight = window.innerHeight; // 화면의 높이
    $scrollSection.style.transform = `translateY(${curScrollSectionHeight += $screenHeight}px)`;
}
// 아래로 스크롤시 애니메이션
function scrollDownAnimation() {
    curSectionIndex++;
    const $screenHeight = window.innerHeight; // 화면의 높이
    $scrollSection.style.transform = `translateY(${curScrollSectionHeight -= $screenHeight}px)`;
}
function indexOfScrollAnimation(index) {
    let difference = curSectionIndex - index;
    curSectionIndex = index;
    const $screenHeight = window.innerHeight; // 화면의 높이
    $scrollSection.style.transform = `translateY(${curScrollSectionHeight += $screenHeight * difference}px)`;
}
// pagination
const $paginationBtn = document.querySelectorAll(".pagination button");
// pagination 버튼 활성화 상태 업데이트
function updatePaginationBtn() {
    for (btn of $paginationBtn) {
        btn.classList.remove("active");
    }
    $paginationBtn[curSectionIndex].classList.add("active");
}
// pagination 클릭 했을 때
function clickPaginationBtn(index) {
    if (index != curSectionIndex) { // 위로 이동
        scrollAnimationStart(indexOfScrollAnimation, index);
    }
}

// Main
// 스크롤 이벤트 등록
window.addEventListener("wheel", scrollEvent, { passive: false });
updatePaginationBtn();