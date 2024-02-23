
// Login Modal PopUp 닫기 버튼
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
    inputTagInit(document.querySelectorAll('.login-modal input')[0]);
    inputTagInit(document.querySelectorAll('.login-modal input')[1]);
}

// JoinUs Modal PopUp 닫기 버튼
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
    inputTagInit(document.querySelectorAll('.joinus-modal input')[0]);
    inputTagInit(document.querySelectorAll('.joinus-modal input')[1]);
    inputTagInit(document.querySelectorAll('.joinus-modal input')[2]);
    inputTagInit(document.querySelectorAll('.joinus-modal input')[3]);
    mismatchNoticeActive(false);
    checkForDuplication(false);
}

// 모달 닫기 시 인풋박스 입력값 초기화
function inputTagInit(inputTag) {
    inputTag.value = null;
}

// 이름 입력 양식 (한글만 허용)
function checkKor(input){
    input.value = input.value.replace(/[^ㄱ-힣]+/ig, '');
}

// 아이디 및 비밀번호 입력 양식 (영문/숫자만 허용)
function checkEngNum(input){
    input.value  = input.value.replace(/[^A-Za-z0-9]+/ig, '');
}

// 회원가입 아이디 입력칸
const joinusUserId = document.getElementById('joinus-user-id');

// 회원가입 아이디 중복확인 버튼
const checkForDuplicationBtn = document.querySelector('.check-for-duplication-btn');

joinusUserId.addEventListener('input', function() {
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
checkForDuplicationBtn.addEventListener('click', function() {
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
}

// 로그인 모달 비밀번호 버튼 마스킹 기능 추가
passwordShowBtnDown('login-user-pw', 'openeye3');
// 회원가입 모달 비밀번호 버튼 마스킹 기능 추가
passwordShowBtnDown('joinus-user-pw', 'openeye1');
// 회원가입 모달 비밀번호 확인 버튼 마스킹 기능 추가
passwordShowBtnDown('joinus-user-pw-check', 'openeye2');

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

// 로그인 모달에서 회원가입하기 버튼 클릭 시 회원가입 모달로 전환
const switchToJoinusBtn = document.querySelector('.switch-to-joinus');
switchToJoinusBtn.addEventListener('click',switchToJoinus);
function switchToJoinus(){
    loginModal.classList.add("hidden");
    joinModal.classList.remove("hidden");
}

// 회원가입 모달의 회원가입 버튼 클릭 시

// 비밀번호 일치 여부 확인
function register(event) {
    event.preventDefault();
    var form = document.getElementById('joinus-modal-form');
    var formData = new FormData(form);
    var userName = formData.get('joinus-user-name');
    var userId = formData.get('joinus-user-id');
    var userPw = formData.get('joinus-user-pw');
    var userPwCheck = formData.get('joinus-user-pw-check');


    if (userPw !== userPwCheck){
        // 비밀번호 불일치 시
        // 알럿 노출
        alert("비밀번호가 일치하지 않습니다.");
        // 비밀번호 불일치 안내문구 노출
        mismatchNoticeActive(true);
        return;
    }
    else {
        // 비밀번호 일치 시(회원가입 요청 API 호출)
        // 현재는 바로 성공 함수 호출(API 개발 되면 API 함수 호출로 변경 필요)
        registerSuccess();
    };
}

// 회원가입 요청 API 호출
// const registerRequestBtn = document.querySelector('.register-requests');
// registerRequestBtn.addEventListener('click',registerRequest);
// function registerRequest(){
//     ~
// }

// 회원가입 요청 API 호출 response 로 true 값 반환 된 경우
// API response 값을 조건으로 잡아야함(현재는 API가 없으니 비밀번호가 일치하면 실행하도록 진행 > 추후 변경 필요)
function registerSuccess(){
    // 회원가입 성공 알럿창 노출
    alert("회원가입이 완료되었습니다.");
    // 로그인 모달로 전환
    joinModal.classList.add("hidden");
    loginModal.classList.remove("hidden");
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