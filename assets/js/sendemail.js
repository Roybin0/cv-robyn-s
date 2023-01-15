function sendMail(contactForm) {
    emailjs.send("service_pa4u1tj", "resume00", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.emailaddress.value, 
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS!", response); 
        },
        function(error) {
            console.log("FAIL!", error);
        }); 
}