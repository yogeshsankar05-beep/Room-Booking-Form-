document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let bookingData = {
        fullname: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        checkin: document.getElementById("checkin").value,
        checkout: document.getElementById("checkout").value,
        roomtype: document.getElementById("roomtype").value,
        guests: document.getElementById("guests").value,
        payment: document.querySelector('input[name="payment"]:checked').value,
        requests: document.getElementById("requests").value
    };

    // Date validation
    if (new Date(bookingData.checkout) <= new Date(bookingData.checkin)) {
        alert("Check-out date must be after Check-in date!");
        return;
    }

    // Store data
    localStorage.setItem("bookingDetails", JSON.stringify(bookingData));

    // Move to next page
    window.location.href = "details.html";
});
