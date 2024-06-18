document.getElementById('title').addEventListener('input', function(event) {
    var inputField = event.target;

    // 글자 수를 최대 10자로 제한
    if (inputField.value.length > 10) {
        inputField.value = inputField.value.slice(0, 10);
    }

    // 한글, 영어, 특수 문자만 가능하게 (줄바꿈 포함하지 않음)
    inputField.value = inputField.value.replace(/[^\w\s\.\,\!\@\#\$\%\^\&\*\(\)\_\-\+\=\/\?\>\<\;\:\"\'\[\]\{\}\|\\\~\`\u3131-\uD79D]/g, '');
});

document.getElementById('description').addEventListener('input', function(event) {
    var inputField = event.target;

    // 글자 수를 최대 200자로 제한
    if (inputField.value.length > 200) {
        inputField.value = inputField.value.slice(0, 200);
    }

    // 한글, 영어, 특수 문자만 가능하게 (줄바꿈 포함)
    inputField.value = inputField.value.replace(/[^\w\s\.\,\!\@\#\$\%\^\&\*\(\)\_\-\+\=\/\?\>\<\;\:\"\'\[\]\{\}\|\\\~\`\u3131-\uD79D\r\n]/g, '');
});

document.addEventListener('DOMContentLoaded', function() {
    const memoUpdateModal = document.querySelector('.modal.memo-update');
    const titleInput = document.getElementById('title');
    const descriptionTextarea = document.getElementById('description');
    const saveBtn = document.querySelector('.save-btn');
    const closeBtn = document.querySelector('.modal.memo-update .close-btn');

    // // 모달 닫기 버튼 이벤트
    // closeBtn.addEventListener('click', function() {
    //     memoUpdateModal.style.display = 'none';
    // });

    // 저장 버튼 클릭 시 처리
    saveBtn.addEventListener('click', function(event) {
        event.preventDefault(); // 기본 동작(페이지 새로고침) 방지

        // 제목 입력 여부 확인
        const newTitle = titleInput.value.trim();
        if (newTitle === '') {
            alert('제목을 입력해주세요.');
            return;
        }

        // 확인/취소 알림창 띄우기
        const confirmResult = confirm('저장하시겠습니까?');
        if (confirmResult) {
            // 저장 처리 (여기서는 콘솔에 출력하는 예시)
            // const newDescription = descriptionTextarea.value;
            // console.log('새로운 제목:', newTitle);
            // console.log('새로운 설명:', newDescription);

            // 저장 후 모달 닫기
            memoUpdateModal.style.display = 'none';
        }
    });
});
