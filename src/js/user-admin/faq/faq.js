const $faqs = document.querySelectorAll('.faq'); // 자주 묻는 질문 목록
const $exitBtn = document.querySelector('.exit-btn'); // [탈퇴하기] 버튼

const $exitModal = document.querySelector('.exit'); // 회원 탈퇴 모달
const $exitModalCloseBtn = document.querySelector('.exit .close-btn'); // 닫기 버튼
const $exitModalFrm = document.querySelector('.exit .exit-reason-frm'); // 탈퇴 사유 폼
const $exitModalExitReason = document.querySelector('#exit-reason'); // 탈퇴 사유
const $exitModalSubmitBtn = document.querySelector('.exit .submit-exit-btn'); // [회원 탈퇴] 버튼


for (const faq of $faqs) { 
    const $expandArrowBtn = faq.querySelector('.expand-arrow-btn'); // 확장 버튼
    
    $expandArrowBtn.addEventListener('click', expandAnswer); // 답변 영역 확장 기능 추가
}

$exitBtn.addEventListener('click', openExitModal);

$exitModalCloseBtn.addEventListener('click', closeExitModal);

$exitModalExitReason.addEventListener('input', inputExitReason);

$exitModalSubmitBtn.addEventListener('click', (event) => {
    if (!$exitModalSubmitBtn.classList.contains('active')) { // 비활성화 상태시
        event.preventDefault(); // 기본 동작 방지
    }
});

$exitModalFrm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitEixt();
});

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

function openExitModal() {
    document.body.style.overflow = 'hidden'; // 뒷 배경 스크롤 방지
    $exitModal.classList.remove('hidden');
}

function closeExitModal() {
    document.body.style.overflow = 'auto'; // 뒷 배경 스크롤 가능
    $exitModal.classList.add('hidden');
    // 모달 초기화
    $exitModalExitReason.value = ""; // 탈퇴 사유 입력란 초기화
    $exitModalSubmitBtn.classList.remove('active'); // [회원 탈퇴] 버튼 비활성화
}

function inputExitReason() {
    if ($exitModalExitReason.value == "") {
        $exitModalSubmitBtn.classList.remove('active');
    } else {
        $exitModalSubmitBtn.classList.add('active');
    }
}

function submitEixt() {
    window.location.href = 'exit-done.html';
}