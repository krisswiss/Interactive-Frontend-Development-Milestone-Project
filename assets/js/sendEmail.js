function sendMail(contactForm) {

    emailjs.send("gmail", "arts_antennae", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                hideModalOnSubmit(contactForm);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}

function hideModalOnSubmit(contactForm) {
    $('#booking-modal').modal('hide');
    // Credit for lines 23-25 Aaron McKenna
    contactForm.name.value = null;
    contactForm.emailaddress.value = null;
    contactForm.message.value = null;
}