const sgMail = require('@sendgrid/mail')

const API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(`${API_KEY}`)

exports.send = async (to, subject, body) =>{
    sgMail.send({
        to: to,
        from:'devcodemybr@gmail.com',
        subject: subject,
        //text:'teste',
        html: body
    });
}