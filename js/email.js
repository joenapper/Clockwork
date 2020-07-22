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
        },
        function(error) {
            console.log('failed', error);
        }
    );
    return false;
};

// Clears Form
const nameClear = document.querySelector('#companyName');
const emailClear = document.querySelector('#email');
const numberClear = document.querySelector('#number');
const textareaClear = document.querySelector('textarea');
const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', resetForm);

function resetForm() {
    // Reset Textarea
    setTimeout(() => {
        nameClear.value = '';
        emailClear.value = '';
        numberClear.value = '';
        textareaClear.value = '';
    }, 100);
};