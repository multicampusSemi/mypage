$(document).ready(function () {
    // 기존 작동 로직 유지: 반품 버튼 동적 추가
    $("#orderTable tr").each(function () {
        const status = $(this).find("td:nth-child(4)").text().trim(); // 주문 상태
        const orderId = $(this).find("td:nth-child(1)").text().trim(); // 주문 번호
        const returnCell = $(this).find(".return-cell"); // 반품 버튼 셀

        // 주문 상태가 '주문 완료' 또는 '주문 중'인 경우에만 반품 버튼 추가
        if (status === "주문 완료" || status === "주문 중") {
            const button = $(`<button class="return-button" data-order="${orderId}">반품 신청</button>`);
            returnCell.append(button);
        }
    });

    // 기존 작동 로직 유지: 반품 버튼 클릭 이벤트
    $(document).on("click", ".return-button", function () {
        const orderId = $(this).data("order");
        alert(`${orderId}번 주문 반품 신청 페이지로 이동합니다.`);
        window.location.href = "../html/return_order.html";
    });
});
