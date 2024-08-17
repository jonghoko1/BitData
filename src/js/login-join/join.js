// 체크박스
const $termsOfServiceCheckBox = document.querySelector('#terms-of-service-checkbox'); // 이용약관 체크박스
const $fullTermsOfServiceBtn = document.querySelector('.full-terms-of-service'); // 이용약관 전문 보기 버튼
const $privacyPolicyCheckbox = document.querySelector('#privacy-policy-checkbox'); // 개인정보 동의
const $fullPrivacyPolicyBtn = document.querySelector('.full-privacy-policy'); // 개인정보 전문 보기 버튼
// 모달
const $termsOfServiceModal = document.querySelector('.terms-of-service-modal'); // 이용약관 모달
const $termsOfServiceModalCloseBtn = document.querySelector('.terms-of-service-modal .close-btn'); // 닫기 버튼
const $termsOfServiceModalAgreeBtn = document.querySelector('.terms-of-service-modal .agree-btn'); // 동의 버튼
const $privacyPolicyModal = document.querySelector('.privacy-policy-modal'); // 개인정보 모달
const $privacyPolicyModalCloseBtn = document.querySelector('.privacy-policy-modal .close-btn'); // 닫기 버튼
const $privacyPolicyeModalAgreeBtn = document.querySelector('.privacy-policy-modal .agree-btn'); // 동의 버튼
// 다음 버튼
const $nextBtn = document.querySelector('.next-btn');

// 다음 버튼 활성화 확인
const activeNextBtn = function() {
    if ($termsOfServiceCheckBox.checked && $privacyPolicyCheckbox.checked) {
        $nextBtn.classList.add('active');
    } else {
        $nextBtn.classList.remove('active');
    }
};

// 이용약관 체크박스 클릭시
$termsOfServiceCheckBox.addEventListener('click', function() {
    activeNextBtn();
});

// 이용약관 전문 확인 버튼 클릭시
$fullTermsOfServiceBtn.addEventListener('click', function() {
    $termsOfServiceModal.classList.remove('hidden');
});

// 이용약관 전문 모달 닫기 버튼
$termsOfServiceModalCloseBtn.addEventListener('click', function() {
    $termsOfServiceModal.classList.add('hidden');
});

// 이용약관 전문 모달 동의 버튼
$termsOfServiceModalAgreeBtn.addEventListener('click', function() {
    $termsOfServiceModal.classList.add('hidden');
    $termsOfServiceCheckBox.click();
});

// 개인정보 체크박스 클릭시
$privacyPolicyCheckbox.addEventListener('click', function() {
    activeNextBtn();
});

// 개인정보 전문 확인 버튼 클릭시
$fullPrivacyPolicyBtn.addEventListener('click', function() {
    $privacyPolicyModal.classList.remove('hidden');
});

// 개인정보 전문 모달 닫기 버튼
$privacyPolicyModalCloseBtn.addEventListener('click', function() {
    $privacyPolicyModal.classList.add('hidden');
});
// 개인정보 전문 모달 동의 버튼
$privacyPolicyeModalAgreeBtn.addEventListener('click', function() {
    $privacyPolicyModal.classList.add('hidden');
    $privacyPolicyCheckbox.click();
});

// 다음 버튼 클릭시
$nextBtn.addEventListener('click', function() {
    if ($nextBtn.classList.contains('active')) {
        window.location.href = './onboarding.html';
    }
});