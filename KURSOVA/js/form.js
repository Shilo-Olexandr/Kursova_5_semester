(function () {
    emailjs.init("BMSUYI-2cospmY8-V");
})();

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("service_3aurx5k", "template_phyeykp", templateParams).then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Повідомлення успішно відправлено!");
            },
            function (error) {
                console.log("FAILED...", error);
                alert("Щось пішло не так, спробуйте ще раз.");
            }
        );
    });
});
