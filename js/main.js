// Login Modal PopUp
const openLoginMod = document.querySelector('.login');
const loginModal = document.querySelector('.login-modal');
const closeLoginMod = document.querySelector('.close-login-modal');
openLoginMod.addEventListener('click',showLoginModal);
closeLoginMod.addEventListener('click',closeLoginModal);
function showLoginModal(){
    loginModal.classList.remove('hidden');
}
function closeLoginModal(){
    loginModal.classList.add('hidden');
}


// JoinUs Modal PopUp
const openJoinMod = document.querySelector('.joinus');
const joinModal = document.querySelector('.joinus-modal');
const closeJoinMod = document.querySelector('.close-modal');
openJoinMod.addEventListener('click',showJoinModal);
closeJoinMod.addEventListener('click',closeJoinModal);
function showJoinModal(){
    joinModal.classList.remove('hidden');
}
function closeJoinModal(){
    joinModal.classList.add('hidden');
    mismatchNoticeActive(false);
}

// 비밀번호 마스킹 버튼 이벤트 추가
function passwordShowBtnDown(pwdInputId, btnId) {
    pwdInputId = document.getElementById(pwdInputId);
    btnId = document.getElementById(btnId);
    // 버튼 드래그 방지
    btnId.ondragstart = function() {
        return false;
    };

    btnId.addEventListener('mousedown', function() {
        pwdInputId.type = 'text';
        btnId.querySelector('img').src = './img/eye.svg';
        document.addEventListener('mouseup', function() {
            pwdInputId.type = 'password';
            btnId.querySelector('img').src = './img/eye-slash.svg';
        },
        {once: true});
    });
}

// 로그인 모달 비밀번호 버튼 마스킹 기능 추가
passwordShowBtnDown('login-user-pw', 'openeye3');
// 회원가입 모달 비밀번호 버튼 마스킹 기능 추가
passwordShowBtnDown('user-pw', 'openeye1');
// 회원가입 모달 비밀번호 확인 버튼 마스킹 기능 추가
passwordShowBtnDown('user-pw-check', 'openeye2');

/*
function checkKor(event) {
    // const regExp = /[^0-9a-zA-Z]/g; // 숫자와 영문자만 허용
    const regExp = /[^ㄱ-ㅎ|가-힣]/g; // 한글만 허용
    const del = event.target;
    if (regExp.test(del.value)) {
      del.value = del.value.replace(regExp, '');
    }
  };
*/

/*
function checkKor(event) {
    // const regExp = /[^0-9a-zA-Z]/g; // 숫자와 영문자만 허용
    const checkKor = /[^ㄱ-ㅎ|가-힣]/g; // 한글만 허용
    const del = event.target;
    if (checkKor.test(del.value)) {
      del.value = del.value.replace(checkKor, '');
    }
  };
*/
function checkKor(k){
    k.value  = k.value.replace(/[^ㄱ-힣]+/ig, '');
}

function checkEngNum(e1){
    e1.value  = e1.value.replace(/[^A-Za-z0-9]+/ig, '');
}

// 비밀번호 일치 여부 확인
function register(event) {
    event.preventDefault();
    var form = document.getElementById("joinus-modal-form");
    var formData = new FormData(form);
    var userName = formData.get("user-name");
    var userId = formData.get("user-id");
    var userPw = formData.get("user-pw");
    var userPwCheck = formData.get("user-pw-check");


    if (userPw !== userPwCheck){
        // 알럿 노출
        alert("비밀번호가 일치하지 않습니다.");
        // 비밀번호 불일치 안내문구 노출
        mismatchNoticeActive(true);
        return;
    };
    console.log("pass");
}

function mismatchNoticeActive(active) {
    var mismatchNotice = document.querySelector(".joinus-modal .user-pw-check .mismatch-notice");
    var registerBtn = document.querySelector(".joinus-modal .register-btn");
    if (active) {
        mismatchNotice.classList.remove("hidden");
        registerBtn.classList.add("mismatch");
    }
    else {
        mismatchNotice.classList.add("hidden");
        registerBtn.classList.remove("mismatch");
    };
}