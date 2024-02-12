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
