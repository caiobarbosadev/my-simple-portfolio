function sendMessageToWhatsApp(event) {
    event.preventDefault();

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thank you!',
        text: 'You will be redirected to WhatsApp in a moment.',
        showConfirmButton: false,
        timer: 4000
    })

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsAppMessage = `Hello, my name is ${name}. Message: ${message}. My email is: ${email}`;
    const whatsAppLink = `https://wa.me/5519989193965?text=${whatsAppMessage}`;

    setTimeout(() => {
        window.open(whatsAppLink, "_blank");
    }, 4000)

}