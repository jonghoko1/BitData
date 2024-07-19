const $faqs = document.querySelectorAll('.faq'); // 자주 묻는 질문 목록


for (const faq of $faqs) { 
    const $expandArrowBtn = faq.querySelector('.expand-arrow-btn'); // 확장 버튼
    
    $expandArrowBtn.addEventListener('click', expandAnswer); // 답변 영역 확장 기능 추가
}


function expandAnswer() { // 답변 영역 확장
    const $expandArrowBtnImg = this.querySelector('img');
    const $answerBlock = this.closest('.faq').querySelector('.answer-block');

    $expandArrowBtnImg.src = '../../resources/img/button/triangle-up.png'; // 이미지 변경
    $answerBlock.classList.remove('hidden'); // 답변 영역 확장

    this.removeEventListener('click', expandAnswer); // 답변 영역 확장 이벤트 삭제
    this.addEventListener('click', collapseAnswer); // 답변 영역 축소 이벤트 추가
}

function collapseAnswer() { // 답변 영역 축소
    const $expandArrowBtnImg = this.querySelector('img');
    const $answerBlock = this.closest('.faq').querySelector('.answer-block');

    $expandArrowBtnImg.src = '../../resources/img/button/triangle-down.png'; // 이미지 변경
    $answerBlock.classList.add('hidden'); // 답변 영역 숨김
    
    this.removeEventListener('click', collapseAnswer); // 답변 영역 축소 이벤트 삭제
    this.addEventListener('click', expandAnswer); // 답변 영역 확장 이벤트 추가
}