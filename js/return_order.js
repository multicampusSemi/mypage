$(document).ready(function () {
    $("#returnButton").on("click", function () {
        const reason = $("#returnReason").val().trim();
        if (!reason) {
            alert("반품 사유를 입력해주세요.");
            return;
        }
        alert("반품이 완료되었습니다.");
        window.location.href = "../html/admin_page.html";
    });
});
