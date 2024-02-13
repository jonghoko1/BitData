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

/*const pwdInput = document.querySelector('.user_pw');
const showPwd = document.querySelector('.eye');

showPwd.addEventListener('click',function(){
    if(pwdInput.type === 'password') {
        pwdInput.type = 'text';
        showPwd
    }
})*/