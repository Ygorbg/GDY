function back() {
    window.history.back();
}

function openPaymentModal(planName, planPrice) {
    document.getElementById("planName").innerText = "Plano: " + planName;
    document.getElementById("planPrice").innerText = "Preço: " + planPrice;
    document.getElementById("paymentModal").style.display = "flex";
}


function closePaymentModal() {
    document.getElementById("paymentModal").style.display = "none";
}