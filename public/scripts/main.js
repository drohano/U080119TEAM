//btn1 = id på knapp i team html

$("#btn1").click(sendEmail());

function sendEmail(){
    event.preventDefault();
    var data = {
        server_id: 'default_service',
        template_id: 'template_g2lqOAe6',
        user_id: 'user_ArtbQcgVTngu8iPDni0Lr',
        template_params: {
            'to email' : 'tuva@etavo.com',
            'message_html' : '<h1>Welcome</h1><p>Time to make contact!</p>'
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function(){
        alert('Your email has been sent!');
    }).fail(function(error){
        alert('Something went wrong... ' + JSON.stringify(error));
    });
};