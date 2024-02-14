
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
const joinModal = document.querySelector('.modal');
const closeJoinMod = document.querySelector('.close-modal');
openJoinMod.addEventListener('click',showJoinModal);
closeJoinMod.addEventListener('click',closeJoinModal);
function showJoinModal(){
    joinModal.classList.remove('hidden');
}
function closeJoinModal(){
    joinModal.classList.add('hidden');
}

const pwdInput = document.getElementById('user_pw');
const showPwd = document.getElementById('openeye');
showPwd.addEventListener('click',function(){
    if(pwdInput.type === 'password') {
        pwdInput.type = 'text';
        showPwd.src = './img/eye.svg';
    }else{
        pwdInput.type = 'password';
        showPwd.src = './img/eye-slash.svg';
    }
});



const pwdCheck = document.getElementById('user_pw_check');
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



