function submit() {

    var name =  document.getElementById('contactName').value;
    var email = document.getElementById('contactEmail').value;
    var subject = document.getElementById('contactSubject').value;
    var message = document.getElementById('contactMessage').value;


    let formData = {
        "name": name,
        "email": email,
        "subject": subject,
        "message": message
    }
    console.log("Success!")

    // Needs to be connected/sent somewhere
    // Need EmailJS or backend email service

}
