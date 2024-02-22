// 인풋박스 입력값 초기화
function inputTagInit(inputTag) {
    inputTag.value = null;
}

// Login Modal PopUp 닫기 버튼
const openLoginMod = document.querySelector('.login');
const loginModal = document.querySelector('.login-modal');
const closeLoginMod = document.querySelector('.close-login-modal');
closeLoginMod.ondragstart = function () {
    return false;
}
openLoginMod.addEventListener('click', showLoginModal);
closeLoginMod.addEventListener('click', closeLoginModal);
function showLoginModal() {
    loginModal.classList.remove('hidden');
}
function closeLoginModal() {
    loginModal.classList.add('hidden');
    inputTagInit(document.querySelectorAll('.login-modal input')[0]);
    inputTagInit(document.querySelectorAll('.login-modal input')[1]);
}

// JoinUs Modal PopUp 닫기 버튼
const openJoinMod = document.querySelector('.joinus');
const joinModal = document.querySelector('.joinus-modal');
const closeJoinMod = document.querySelector('.close-joinus-modal');
closeJoinMod.ondragstart = function () {
    return false;
}
openJoinMod.addEventListener('click', showJoinModal);
closeJoinMod.addEventListener('click', closeJoinModal);
function showJoinModal() {
    joinModal.classList.remove('hidden');
}
function closeJoinModal() {
    joinModal.classList.add('hidden');
    inputTagInit(document.querySelectorAll('.joinus-modal input')[0]);
    inputTagInit(document.querySelectorAll('.joinus-modal input')[1]);
    inputTagInit(document.querySelectorAll('.joinus-modal input')[2]);
    inputTagInit(document.querySelectorAll('.joinus-modal input')[3]);
    mismatchNoticeActive(false);
    checkForDuplication(false);
}

const loginUserId = document.getElementById('login-user-id'); // 로그인 아이디 입력칸
const loginUserPw = document.getElementById('login-user-pw'); // 로그인 비밀번호 입력칸
const loginBtn = document.querySelector('.login-modal .login-btn button'); // 로그인 버튼

const joinusUserName = document.getElementById('joinus-user-name'); // 회원가입 이름 입력칸
const joinusUserId = document.getElementById('joinus-user-id'); // 회원가입 아이디 입력칸
const joinusUserPw = document.getElementById('joinus-user-pw'); // 회원가입 비밀번호 입력칸
const joinusUserPwCheck = document.getElementById('joinus-user-pw-check'); // 회원가입 비밀번호 확인 입력칸
const registerBtn = document.querySelector('.joinus-modal .register-btn button'); // 회원가입 버튼

// 로그인 모달 입력칸 이벤트 등록
loginUserId.addEventListener('input', function () {
    checkEngNum(loginUserId);
    loginBtnActive();
});
loginUserPw.addEventListener('input', function () {
    checkEngNum(loginUserPw);
    loginBtnActive();
});

// 회원가입 모달 입력칸 이벤트 등록
joinusUserName.addEventListener('input', function () {
    checkKor(joinusUserName);
    joinusBtnActive();
});
joinusUserId.addEventListener('input', function () {
    checkEngNum(joinusUserId);
    joinusBtnActive();
});
joinusUserPw.addEventListener('input', function () {
    checkEngNum(joinusUserPw);
    joinusBtnActive();
});
joinusUserPwCheck.addEventListener('input', function () {
    checkEngNum(joinusUserPwCheck);
    joinusBtnActive();
});

// 이름 입력 양식 (한글만 허용)
function checkKor(input) {
    input.value = input.value.replace(/[^ㄱ-힣]+/ig, '');
}
// 아이디 및 비밀번호 입력 양식 (영문/숫자만 허용)
function checkEngNum(input) {
    input.value = input.value.replace(/[^A-Za-z0-9]+/ig, '');
}

// 로그인 버튼 활성화 비활성화
function loginBtnActive() {
    if (loginUserId.value.length > 4 &&
        loginUserPw.value.length > 7
    ) {
        loginBtn.classList.replace('inactive-btn', 'active-btn');
        loginBtn.disabled = false;
    }
    else {
        loginBtn.classList.replace('active-btn', 'inactive-btn');
        loginBtn.disabled = true;
    };
}

// 회원가입 버튼 활성화 비활성
function joinusBtnActive() {
    if (joinusUserName.value.length > 1 &&
        joinusUserId.classList.contains('confirmed-input') &&
        joinusUserPw.value.length > 7 &&
        joinusUserPwCheck.value.length > 7

    ) {
        registerBtn.classList.replace('inactive-btn', 'active-btn');
        registerBtn.disabled = false;
    }
    else {
        registerBtn.classList.replace('active-btn', 'inactive-btn');
        registerBtn.disabled = true;
    };
}

// 회원가입 아이디 중복확인 버튼
const checkForDuplicationBtn = document.querySelector('.check-for-duplication-btn');

joinusUserId.addEventListener('input', function () {
    checkForDuplicationBtnSet();
});

// 회원가입 아이디 중복확인 버튼 상태 변경
function checkForDuplicationBtnSet() {
    if (joinusUserId.value.length > 4) {
        checkForDuplicationBtn.classList.replace('inactive-btn', 'active-btn');
        checkForDuplicationBtn.disabled = false;
    }
    else {
        checkForDuplicationBtn.classList.replace('active-btn', 'inactive-btn');
        checkForDuplicationBtn.disabled = true;
    };
}

// 회원가입 아이디 중복확인
checkForDuplicationBtn.addEventListener('click', function () {
    checkForDuplication(true);
});
function checkForDuplication(result) {
    if (result) {
        checkForDuplicationBtn.classList.replace('active-btn', 'confirmed-btn');
        checkForDuplicationBtn.disabled = true;
        checkForDuplicationBtn.textContent = '확인완료';

        joinusUserId.classList.replace('unconfirmed-input', 'confirmed-input');
        joinusUserId.disabled = true;
    }
    else {
        checkForDuplicationBtn.classList.replace('confirmed-btn', 'inactive-btn');
        checkForDuplicationBtn.disabled = true;
        checkForDuplicationBtn.textContent = '중복확인';

        joinusUserId.classList.replace('confirmed-input', 'unconfirmed-input');
        joinusUserId.disabled = false;
    };
    joinusBtnActive();
}

// 로그인 모달 비밀번호 버튼 마스킹 기능 추가
passwordShowBtnDown(loginUserPw, 'openeye3');
// 회원가입 모달 비밀번호 버튼 마스킹 기능 추가
passwordShowBtnDown(joinusUserPw, 'openeye1');
// 회원가입 모달 비밀번호 확인 버튼 마스킹 기능 추가
passwordShowBtnDown(joinusUserPwCheck, 'openeye2');

// 비밀번호 마스킹 버튼 이벤트 추가
function passwordShowBtnDown(input, btnId) {
    btnId = document.getElementById(btnId);
    // 버튼 드래그 방지
    btnId.ondragstart = function () {
        return false;
    };

    btnId.addEventListener('mousedown', function () {
        input.type = 'text';
        btnId.querySelector('img').src = './img/eye.svg';
        document.addEventListener('mouseup', function () {
            input.type = 'password';
            btnId.querySelector('img').src = './img/eye-slash.svg';
        },
            { once: true });
    });
}

// 비밀번호 일치 여부 확인
function register(event) {
    event.preventDefault();
    var form = document.getElementById('joinus-modal-form');
    var formData = new FormData(form);
    var userName = formData.get('joinus-user-name');
    var userId = formData.get('joinus-user-id');
    var userPw = formData.get('joinus-user-pw');
    var userPwCheck = formData.get('joinus-user-pw-check');

    if (userPw !== userPwCheck) {
        // 알럿 노출
        alert("비밀번호가 일치하지 않습니다.");
        // 비밀번호 불일치 안내문구 노출
        mismatchNoticeActive(true);
        return;
    };
}

// 비밀번호 불일치 안내문 활성화 및 비활성화 기능
function mismatchNoticeActive(active) {
    var mismatchNotice = document.querySelector('.joinus-modal .user-pw-check .mismatch-notice');
    var registerBtn = document.querySelector('.joinus-modal .register-btn');
    if (active) {
        mismatchNotice.classList.remove('hidden');
        registerBtn.classList.add('mismatch');
    }
    else {
        mismatchNotice.classList.add('hidden');
        registerBtn.classList.remove('mismatch');
    };
}