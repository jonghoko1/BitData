const $kakaoLoginBtn = document.querySelector('.kakao-login-btn');

$kakaoLoginBtn.addEventListener('click', login);

function login() {
    const isUser = confirm('기존 회원이신가요?');

    if (isUser) {
        console.log('기존 회원');
        window.location.href = './data-collection.html';
    } else {
        console.log('신규 회원');
        window.location.href = './join.html';
    }
}