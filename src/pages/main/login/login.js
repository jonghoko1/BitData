import './login.css';

const $kakaoLoginBtn = document.querySelector('.kakao-login-btn');

$kakaoLoginBtn.addEventListener('click', login);

function login() {
    window.location.href = '/login/kakao';
}