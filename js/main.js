// 인풋박스 입력값 초기화
function inputTagInit(inputTag) {
    inputTag.value = null;
}

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
    inputTagInit(document.querySelectorAll('.login-modal input')[0]);
    inputTagInit(document.querySelectorAll('.login-modal input')[1]);
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
    inputTagInit(document.querySelectorAll('.joinus-modal input')[0]);
    inputTagInit(document.querySelectorAll('.joinus-modal input')[1]);
    inputTagInit(document.querySelectorAll('.joinus-modal input')[2]);
    inputTagInit(document.querySelectorAll('.joinus-modal input')[3]);
}

// 비밀번호 마스킹 및 마스킹 해제 코드
const pwdInput = document.getElementById('user-pw');
const showPwd = document.getElementById('openeye1');
showPwd.addEventListener('click',function(){
    if(pwdInput.type === 'password') {
        pwdInput.type = 'text';
        showPwd.src = './img/eye.svg';
    }else{
        pwdInput.type = 'password';
        showPwd.src = './img/eye-slash.svg';
    }
});


// 비밀번호 확인 마스킹 및 마스킹 해제 코드
const pwdCheck = document.getElementById('user-pw-check');
const showPwdCheck = document.getElementById('openeye2');
showPwdCheck.addEventListener('click',function(){
    if(pwdCheck.type === 'password') {
        pwdCheck.type = 'text';
        showPwdCheck.src = './img/eye.svg';
    }else{
        pwdCheck.type = 'password';
        showPwdCheck.src = './img/eye-slash.svg';
    }
});

// 이름 입력 양식 [이전 코드] (한글만 허용)
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


// 아이디 및 비밀번호 입력 양식 [이전 코드] (영문/숫자만 허용)
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

// 이름 입력 양식 (한글만 허용)
function checkKor(k){
    k.value  = k.value.replace(/[^ㄱ-힣]+/ig, '');
}
// 아이디 및 비밀번호 입력 양식 (영문/숫자만 허용)
function checkEngNum(e1){
    e1.value  = e1.value.replace(/[^A-Za-z0-9]+/ig, '');
}
const userId = document.getElementById('user-id');
const doubleCheckBtn = document.querySelector('.double-check-btn');


//중복확인 버튼 활성화
function doubleCheckBtnActive(){
    if(userId.value.length > 4 && userId.value.length < 17){
        doubleCheckBtn.disabled = false;}
    else{
        doubleCheckBtn.disabled = true; 
    }
}
