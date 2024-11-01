const applicationForm = document.getElementById("applicationForm");
const container = document.querySelector(".container");

applicationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Your application has been submitted successfully!");

  container.innerHTML = `
        <h1>Thank You!</h1>
        <p>We will get back to you soon.</p>
    `;
});
