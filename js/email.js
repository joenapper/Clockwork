// Sends Form
function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.project.value
    })
    .then(
        function(response) {
            console.log('success', response);
            alert('Message Sent! We Will Contact You Shortly');
            location.reload();
        },
        function(error) {
            console.log('failed', error);
        }
    );
    return false;
};