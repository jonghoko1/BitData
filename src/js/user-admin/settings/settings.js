import {
    checkInputValue, 
    noticeInputField, 
    checkActive,
    clearInputField
} from '../../common/key-input-field.js';

import {
    maskingShowBtn
} from '../../common/eye-button.js';

const $relinkBtn = document.querySelector('.relink-btn'); // [연동 재시도] 버튼
const $settingBtn = document.querySelector('.setting-btn'); // [설정하기] 버튼

const $loadingModal = document.querySelector('.loading'); // 로딩 화면

const $binanceSettingModal = document.querySelector('.binance-setting'); // 바이낸스 계정 연동 모달
const $binanceSettingModalCloseBtn = document.querySelector('.binance-setting .close-btn'); // [닫기] 버튼
const $binanceSettingModalApifrm = document.querySelector('#api-management-frm'); // api 관리 폼
const $binanceSettingModalApiKeyInputField = document.querySelector('#api-key'); // api key 입력란
const $binanceSettingModalSecretKeyInputField = document.querySelector('#secret-key'); // secret key 입력란
const $binanceSettingModalSecretKeyInputFieldEyeBtn = document.querySelector('.eye'); // [보기/숨기기] 버튼
const $binanceSettingModalSettingBtn = document.querySelector('.save-btn'); // [설정] 버튼


$relinkBtn.addEventListener('click', relink);

$settingBtn.addEventListener('click', openBinanceModal);

$binanceSettingModalCloseBtn.addEventListener('click', closeBinanceModeal);

$binanceSettingModalApiKeyInputField.addEventListener('input', (event) => { // api-key 입력란 값 입력시
    checkInputValue(event); // 영문과 숫자가 아닌 문자가 포함되어 있는지 검사 후 빈문자열로 대체
    noticeInputField($binanceSettingModalApiKeyInputField);
    checkActive( // api-key 입력란과 secret-key 입력란에 값이 있을 경우 활성화
        $binanceSettingModalApiKeyInputField, 
        $binanceSettingModalSecretKeyInputField, 
        $binanceSettingModalSettingBtn
    );
});

$binanceSettingModalSecretKeyInputField.addEventListener('input', (event) => { // secret-key 입력란 값 입력시
    checkInputValue(event); // 영문과 숫자가 아닌 문자가 포함되어 있는지 검사 후 빈문자열로 대체
    noticeInputField($binanceSettingModalSecretKeyInputField);
    checkActive( // api-key 입력란과 secret-key 입력란에 값이 있을 경우 활성화
        $binanceSettingModalApiKeyInputField, 
        $binanceSettingModalSecretKeyInputField, 
        $binanceSettingModalSettingBtn
    );
});

$binanceSettingModalSecretKeyInputFieldEyeBtn.addEventListener('mousedown', () => { // [보기/숨기기] 버튼 마스킹
    maskingShowBtn(
        $binanceSettingModalSecretKeyInputField, 
        $binanceSettingModalSecretKeyInputFieldEyeBtn
    );
});

$binanceSettingModalSettingBtn.addEventListener('click', (evnet) => {
    if (!$binanceSettingModalSettingBtn.classList.contains('active')) { // 설정 버튼 비활성화시 제출 방지
        evnet.preventDefault();
    }
});

$binanceSettingModalApifrm.addEventListener('submit', (event) => {
    event.preventDefault(); // 기존 제출 동작 비활성화
    spendApiKey();
});


function relink() { // [연동 재시도] 버튼 클릭시
    console.log('연동 시작');
    $loadingModal.classList.remove('hidden');
    setTimeout(relinkResult, 3000); // 3초 후 연결 결과 노출
}

function relinkResult() { // 연동 시도 3초 초과시
    console.log('연동 결과 노출');
    $loadingModal.classList.add('hidden');
}

function openBinanceModal() { // 바이낸스 계정 연동 모달 열기
    $binanceSettingModal.classList.remove('hidden');
}

function closeBinanceModeal() { // 바이낸스 계정 연동 모달 닫기
    $binanceSettingModal.classList.add('hidden');
    clearInputField( // 모달 초기화
        $binanceSettingModalApiKeyInputField,
        $binanceSettingModalSecretKeyInputField,
        $binanceSettingModalSettingBtn
    );
}

function spendApiKey() {
    console.log('key 전송');
}