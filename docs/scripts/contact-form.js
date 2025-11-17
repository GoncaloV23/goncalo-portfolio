document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            const messageDiv = document.getElementById("submitMessage");
            messageDiv.textContent = "✓ Message submitted successfully!";
            messageDiv.classList.add("show");
            form.reset();

            setTimeout(() => {
              messageDiv.classList.remove("show");
            }, 4000);
          }
        })
        .catch((error) => {
          const messageDiv = document.getElementById("submitMessage");
          messageDiv.textContent = "✗ Error sending message. Please try again.";
          messageDiv.style.color = "#e74c3c";
          messageDiv.classList.add("show");
        });
    });
  }
});
