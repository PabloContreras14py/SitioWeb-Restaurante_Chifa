document.getElementById("reservationForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Reserva recibida! En breve nos comunicaremos para confirmar tu mesa en Chifa Los 3 Hermanos Cañete.");
    e.target.reset();
});