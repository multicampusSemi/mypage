$(document).ready(function () {
    $("#cancelButton").on("click", function () {
        const reason = $("#cancelReason").val().trim();
        if (!reason) {
            alert("취소 사유를 입력해주세요.");
            return;
        }
        alert("취소가 완료되었습니다.");
        window.location.href = "../html/admin_page.html";
    });
});
