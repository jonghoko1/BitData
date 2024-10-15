import './collect.css';

const $statusImage = document.querySelector('.status-image');
const $statusText = document.querySelector('.status');
const $noticeText = document.querySelector('.notice');


function collectionSusccess() { // 데이터 수집 성공시 
    window.location.href = '/src/pages/service/history/history.html';
}

function collectionFail() { // 데이터 수집 실패시
    console.log('데이터 수집 실패');

    // 상태 변경에 따른 이미지 및 문구 변경
    $statusImage.innerHTML = `<img src="../../resources/img/login-join/notice_icon.png" alt="경고 표시">`;
    $statusText.innerHTML = `데이터 수집 불가`;
    $statusText.classList.add('fail');
    $noticeText.innerHTML = `바이낸스 계정 연동 상태를 확인해주세요!`;

    setTimeout(() => { // 5초 뒤 설정화면으로 이동
        window.location.href = '/src/pages/service/settings/settings.html';
    }, 5000);
}


// 테스트 코드
const $successBtn = document.querySelector('.success');
const $failBtn = document.querySelector('.fail'); 

$successBtn.addEventListener('click', collectionSusccess);
$failBtn.addEventListener('click', collectionFail);