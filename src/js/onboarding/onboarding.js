const $apiManagementFrm = document.querySelector('#api-management-frm'); // API Management 폼
const $apiKeyInputField = document.querySelector('#api-key'); // api-key 입력란
const $secretKeyInputField = document.querySelector('#secret-key'); // secret-key 입력란
const $startBtn = document.querySelector('.start-btn'); // [시작하기] 버튼


$apiKeyInputField.addEventListener('input', (event) => { // api-key 입력란 값 입력시
    checkInputValue(event); // 영문과 숫자가 아닌 문자가 포함되어 있는지 검사 후 빈문자열로 대체
    noticeInputField($apiKeyInputField);
    checkActive(); // api-key 입력란과 secret-key 입력란에 값이 있을 경우 활성화
});

$secretKeyInputField.addEventListener('input', (event) => { // secret-key 입력란 값 입력시
    checkInputValue(event); // 영문과 숫자가 아닌 문자가 포함되어 있는지 검사 후 빈문자열로 대체
    noticeInputField($secretKeyInputField);
    checkActive(); // api-key 입력란과 secret-key 입력란에 값이 있을 경우 활성화
});

// [시작하기] 버튼
$startBtn.addEventListener('click', (event) => { // 활성화 상태가 아니라면 제출하지 않음
    if (!$startBtn.classList.contains('active')) {
        event.preventDefault();
    }
});

// API Management 폼 이벤트 제출 이벤트
$apiManagementFrm.addEventListener('submit', (event) => {
    event.preventDefault(); // 기존 체출 동작 비활성화
    spendApiKey();
});


function checkInputValue(event) { // 영문과 숫자가 아닌 문자가 포함되어 있는지 검사 후 빈문자열로 대체
    const inputField = event.target;
    const inputValue = inputField.value;
    const pattern = /[^a-zA-Z0-9]/g; // 영문과 숫자가 아닌지 검사

    if (pattern.test(inputValue)) { // 영문과 숫자가 아닌 문자가 포함되어 있는지 검사
        inputField.value = inputValue.replace(pattern, ''); // 포함되어 있을 경우 빈칸으로 대체
    }
}

function noticeInputField(inputField) {
    const $notice = inputField.parentElement.querySelector('.notice');

    if (inputField.value.length === 0 ||
        inputField.value.length === 64
    ) {
        $notice.classList.add('hidden');
    } else {
        $notice.classList.remove('hidden');
    }

}

function checkActive() { // api-key 입력란과 secret-key 입력란에 값이 있을 경우 활성화
    if ($apiKeyInputField.value.length >= 64 &&
        $secretKeyInputField.value.length >= 64
    ) {
        $startBtn.classList.add('active');
    } else {
        $startBtn.classList.remove('active');
    }
}

function spendApiKey() {
    window.location.href = 'data-collction.html';
}