const $imageMemoBtn = document.querySelector('.image-memo-btn'); // 거래내역 메모 버튼
const $imageMemoModal = document.querySelector('.image-memo'); // 이미지 메모장 모달

const imageMemoBtnClick = function() {
    $imageMemoModal.classList.remove('hidden'); // 모달 노출
    document.body.style.overflow = 'hidden'; // 뒷 배경 스크롤 방지
};
$imageMemoBtn.addEventListener('click', imageMemoBtnClick); // 메모 버튼 동작 추가
