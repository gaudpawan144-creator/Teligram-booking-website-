document.getElementById("bookingForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const pickup = document.getElementById("pickup").value;
  const drop = document.getElementById("drop").value;
  const phone = document.getElementById("phone").value;

  const response = await fetch("/api/sendBooking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, pickup, drop, phone })
  });

  const result = await response.json();
  document.getElementById("status").textContent = result.message;
});
