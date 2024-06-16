// field
// 거래내역 페이지
const $imageMemoBtn = document.querySelector('.image-memo-btn'); // 거래내역 메모 버튼
// 이미지 메모장 모달
const $imageMemoModal = document.querySelector('.image-memo'); // 이미지 메모장 모달
const $imageMemoModalBody = document.querySelector('.image-memo .modal-body'); // 모달 바디
const $imageMemoModalFooter = document.querySelector('.image-memo .modal-footer'); // 모달 푸터
const $imageMemoModalCloseBtn = document.querySelector('.image-memo .close-btn'); // 닫기 버튼
const $imageMemoModalViewBtn = document.querySelectorAll('.image-memo .view-btn'); // 보기 버튼
const $imageMemoModalDeleteBtn = document.querySelectorAll('.image-memo .delete-btn'); // 삭제 버튼
const $imageMemoModalUploadBtn = document.querySelector('.image-memo .upload-btn'); // 업로드 버튼
// 이미지 크게 보기 모달
const $imageMemoViewModal = document.querySelector('.image-memo-view'); // 이미지 크게 보기 모달
const $imageMemoViewModalCloseBtn = document.querySelector('.image-memo-view .close-btn'); // 닫기 버튼

// method
// 거래내역
const imageMemoBtnClick = function() { // 메모 버튼 클릭시
    $imageMemoModal.classList.remove('hidden'); // 모달 노출
    document.body.style.overflow = 'hidden'; // 뒷 배경 스크롤 방지
};
// 이미지 메모장 모달
const imageMemoModalCloseBtnClick = function() { // 닫기 버튼 클릭시
    $imageMemoModal.classList.add('hidden'); // 모달 노출
    document.body.style.overflow = 'auto'; // 뒷 배경 스크롤 방지
}
const imageMemoModalViewBtnClick = function() { // 보기 버튼 클릭시
    $imageMemoViewModal.classList.remove('hidden');
}
const imageMemoModalDeleteBtnClick = function(event) {

    if (confirm('메모를 삭제하시겠습니까?')) {
        const $imageCard = event.target.closest('.image-card');
        $imageCard.remove();
        if (document.querySelector('.image-memo .button-box') === null) {
            const $uploadBtn = document.createElement('div');
            $uploadBtn.classList.add('button-box');
            $uploadBtn.innerHTML = `
                <button type="button" class="upload-btn">업로드</button>
            `;
            $imageMemoModalBody.insertBefore($uploadBtn, $imageMemoModalFooter);
        }
    }
}
// 이미지 크게 보기 모달
const imageMemoModalViewBtnCloseBtnClick = function() { // 보기 버튼 클릭시
    $imageMemoViewModal.classList.add('hidden');
}

// main
// 거래내역
$imageMemoBtn.addEventListener('click', imageMemoBtnClick); // 메모 버튼 클릭 이벤트 추가
// 이미지 메모장 모달
$imageMemoModalCloseBtn.addEventListener('click', imageMemoModalCloseBtnClick) // 닫기 버튼 클릭 이벤트 추가
for (let viewBtn of $imageMemoModalViewBtn) { // 보기 버튼 클릭 이벤트 추가
    viewBtn.addEventListener('click', imageMemoModalViewBtnClick); 
}
for (let deleteBtn of $imageMemoModalDeleteBtn) { // 보기 버튼 클릭 이벤트 추가
    deleteBtn.addEventListener('click', imageMemoModalDeleteBtnClick); 
}
// 이미지 크게 보기 모달
$imageMemoViewModalCloseBtn.addEventListener('click', imageMemoModalViewBtnCloseBtnClick); // 닫기 버튼 클릭 이벤트 추가