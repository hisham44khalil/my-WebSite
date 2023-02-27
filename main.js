// let Up = document.querySelector(".btn");

// window.onscroll = function () {
//     if (window.scrollY >= 300) {
//         Up.style.display = "block";
//     } else {
//         Up.style.display = "none";
//     }
// };

// Up.onclick = function () {
//     window.scrollTo({
//         left: 0,
//         top: 0,
//         behavior: "smooth",
//     });
// };



$('#myForm').on('submit', function (event) {
    event.preventDefault(); // prevent reload

    var formData = new FormData(this);
    formData.append('service_id', 'service_fnud1oj');
    formData.append('template_id', 'template_dj0bb34');
    formData.append('user_id', '3-MTmbECI8wall-kJ');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function () {
        alert('Your mail is sent!');
    }).fail(function (error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});