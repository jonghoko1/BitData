// field
// 거래내역 페이지
const $imageMemoBtn = document.querySelector('.image-memo-btn'); // 거래내역 메모 버튼
// 이미지 메모장 모달
const $imageMemoModal = document.querySelector('.image-memo'); // 이미지 메모장 모달
const $imageMemoModalImageCardContainer = document.querySelector('.image-memo .image-card-container'); // 이미지 카드 컨테이너
const $imageMemoModalCloseBtn = document.querySelector('.image-memo .close-btn'); // 닫기 버튼
const $imageMemoModalViewBtns = document.querySelectorAll('.image-memo .view-btn'); // 보기 버튼들
const $imageMemoModalDeleteBtns = document.querySelectorAll('.image-memo .delete-btn'); // 삭제 버튼들
const $imageMemoModalImageUpload = document.getElementById('image-upload'); // 이미지 업로드 input
const $imageMemoModalUploadBtn = document.querySelector('.image-memo .upload-btn'); // 업로드 버튼
// 이미지 크게 보기 모달
const $imageMemoViewModal = document.querySelector('.image-memo-view'); // 이미지 크게 보기 모달
const $imageMemoViewModalCloseBtn = document.querySelector('.image-memo-view .close-btn'); // 닫기 버튼
const $imageMemoViewModalUpdateBtn = document.querySelector('.image-memo-view .update-btn'); // 업데이트 모달
// 메모 수정 모달
const $memoUpdateModal = document.querySelector('.memo-update'); // 메모 수정 모달

// methods
// 거래내역
const openImageMemoModal = function() { // 이미지 메모장 모달 열기
    $imageMemoModal.classList.remove('hidden'); // 모달 노출
    document.body.style.overflow = 'hidden'; // 뒷 배경 스크롤 방지
};
// 이미지 메모장 모달
const closeImageMemoModal = function() { // 이미지 메모장 모달 닫기
    $imageMemoModal.classList.add('hidden'); // 모달 숨기기
    document.body.style.overflow = 'auto'; // 뒷 배경 스크롤 가능
}
const viewImageInModal = function() { // 보기 버튼 클릭시
    $imageMemoViewModal.classList.remove('hidden'); // 이미지 크게 보기 모달 노출
}
const deleteImageFromModal = function(event) { // 삭제 버튼 클릭시
    if (confirm('메모를 삭제하시겠습니까?')) {
        const $imageCard = event.target.closest('.image-card');
        $imageCard.remove();
        $imageMemoModalUploadBtn.parentElement.classList.remove('hidden'); // 업로드 버튼 노출
    }
}
const triggerImageUpload = function() { // 파일 업로더 노출
    $imageMemoModalImageUpload.click();
}
const handleImageUploadChange = function() { // 파일을 업로드했을때
    const file = $imageMemoModalImageUpload.files[0];
    if (file) { // file이 null이 아닐 때
        uploadImage(file);
    }
}
const uploadImage = function(file) {

}
// 이미지 크게 보기 모달
const closeImageViewModal = function() { // 이미지 크게 보기 모달 닫기
    $imageMemoViewModal.classList.add('hidden');
}
// 메모 수정 모달
const openMemoUpdateModal = function() { // 메모 수정 모달 열기
    $memoUpdateModal.classList.remove('hidden');
}

// main
// 거래내역
$imageMemoBtn.addEventListener('click', openImageMemoModal); // 메모 버튼 클릭 이벤트 추가
// 이미지 메모장 모달
$imageMemoModalCloseBtn.addEventListener('click', closeImageMemoModal) // 닫기 버튼 클릭 이벤트 추가
$imageMemoModalUploadBtn.addEventListener('click', triggerImageUpload); // 업로드 버튼 클릭 이벤트 추가
$imageMemoModalImageUpload.addEventListener('change', handleImageUploadChange); // 이미지 업로드 변경 이벤트 추가
// 보기 버튼 클릭 이벤트 추가
$imageMemoModalViewBtns.forEach(viewBtn => {
    viewBtn.addEventListener('click', viewImageInModal);
});
// 삭제 버튼 클릭 이벤트 추가
$imageMemoModalDeleteBtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', deleteImageFromModal);
});
// 이미지 크게 보기 모달 닫기 버튼 클릭 이벤트 추가
$imageMemoViewModalCloseBtn.addEventListener('click', closeImageViewModal);
$imageMemoViewModalUpdateBtn.addEventListener('click', openMemoUpdateModal);
// 메모 수정 모달