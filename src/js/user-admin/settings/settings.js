const $relinkBtn = document.querySelector('.relink-btn'); // [연동 재시도] 버튼

const $loadingModal = document.querySelector('.loading'); // 로딩 화면


$relinkBtn.addEventListener('click', relink);


function relink() {
    console.log('연동 시작');
    $loadingModal.classList.remove('hidden');
    setTimeout(relinkResult, 3000); // 3초 후 연결 결과 노출
}

function relinkResult() {
    console.log('연동 결과 노출');
    $loadingModal.classList.add('hidden');
}