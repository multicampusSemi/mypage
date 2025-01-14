$(document).ready(function () {
    // 색상 변경 이벤트
    $(".color-select").on("change", function () {
        const color = $(this).val();
        const product = $(this).data("product");
        const img = $(this).closest(".order-item").find("img");

        if (color) {
            img.attr("src", `../images/${product}_${color}.jpg`);
            alert("색상을 변경하였습니다.");
        }
    });

    // 주문 취소 버튼 이벤트
    $(".cancel-order-button").on("click", function () {
        window.location.href = "../html/cancel_order.html";
    });
});
