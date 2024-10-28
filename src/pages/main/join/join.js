import './join.css';

// 체크박스
const $checkAllCheckBox = document.querySelector('#check-all-checkbox'); // 전체 동의
const $termsOfServiceCheckBox = document.querySelector('#terms-of-service-checkbox'); // 이용약관 체크박스
const $fullTermsOfServiceBtn = document.querySelector('.full-terms-of-service'); // 이용약관 전문 보기 버튼
const $privacyPolicyCheckbox = document.querySelector('#privacy-policy-checkbox'); // 개인정보 동의
const $fullPrivacyPolicyBtn = document.querySelector('.full-privacy-policy'); // 개인정보 전문 보기 버튼
const $ageConfirmationCheckbox = document.querySelector('#age-confirmation-checkbox'); // 만 14세 이상 동의
const $ageConfirmationNoticeBtn = document.querySelector('.age-confirmation-notice'); // 만 14세 이상 안내 버튼
// 모달
const $termsOfServiceModal = document.querySelector('.terms-of-service-modal'); // 이용약관 모달
const $termsOfServiceModalCloseBtn = document.querySelector('.terms-of-service-modal .close-btn'); // 닫기 버튼
const $termsOfServiceModalAgreeBtn = document.querySelector('.terms-of-service-modal .agree-btn'); // 동의 버튼
const $privacyPolicyModal = document.querySelector('.privacy-policy-modal'); // 개인정보 모달
const $privacyPolicyModalCloseBtn = document.querySelector('.privacy-policy-modal .close-btn'); // 닫기 버튼
const $privacyPolicyeModalAgreeBtn = document.querySelector('.privacy-policy-modal .agree-btn'); // 동의 버튼
const $ageConfirmationModal = document.querySelector('.age-confirmation-modal'); // 만 14세 이상 안내 모달
const $ageConfirmationModalCloseBtn = document.querySelector('.age-confirmation-modal .close-btn'); // 닫기 버튼
const $ageConfirmationModalAgreeBtn = document.querySelector('.age-confirmation-modal .agree-btn'); // 동의 버튼
// 다음 버튼
const $nextBtn = document.querySelector('.next-btn');


// 다음 버튼 활성화 확인
const activeNextBtn = function() {
    if ($termsOfServiceCheckBox.checked 
        && $privacyPolicyCheckbox.checked 
        && $ageConfirmationCheckbox.checked
    ) {
        $checkAllCheckBox.checked = true;
        $nextBtn.classList.add('active');
    } else {
        $checkAllCheckBox.checked = false;
        $nextBtn.classList.remove('active');
    }
};

// 동의 버튼 동작
const check = function(checkBox) {
    checkBox.checked = true;
    activeNextBtn();
}

// 전체 동의 체크박스 클릭시
$checkAllCheckBox.addEventListener('click', function() {
    if (!$checkAllCheckBox.checked) {
        $termsOfServiceCheckBox.checked = false;
        $privacyPolicyCheckbox.checked = false;
        $ageConfirmationCheckbox.checked = false;
        $nextBtn.classList.remove('active');
    } else {
        $termsOfServiceCheckBox.checked = true;
        $privacyPolicyCheckbox.checked = true;
        $ageConfirmationCheckbox.checked = true;
        $nextBtn.classList.add('active');
    }
});


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
    check($termsOfServiceCheckBox);
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
    check($privacyPolicyCheckbox);
});


// 만 14세 이상 체크박스 클릭시
$ageConfirmationCheckbox.addEventListener('click', function() {
    activeNextBtn();
});
// 만 14세 이상 안내 확인 버튼 클릭시
$ageConfirmationNoticeBtn.addEventListener('click', function() {
    $ageConfirmationModal.classList.remove('hidden');
});
// 만 14세 이상 안내 모달 닫기 버튼
$ageConfirmationModalCloseBtn.addEventListener('click', function() {
    $ageConfirmationModal.classList.add('hidden');
});
// 만 14세 이상 안내 모달 동의 버튼
$ageConfirmationModalAgreeBtn.addEventListener('click', function() {
    $ageConfirmationModal.classList.add('hidden');
    check($ageConfirmationCheckbox);
});


// 다음 버튼 클릭시
$nextBtn.addEventListener('click', function() {
    if ($nextBtn.classList.contains('active')) {
        window.location.href = '/onboarding';
    }
});