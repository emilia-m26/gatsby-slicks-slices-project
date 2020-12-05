//require nodemailer
const nodemailer = require('nodemailer');
//create transport for nodemailer - used etheral.email on this
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});



exports.handler = async (event, context) => {
//test send an email
    const info = await transporter.sendMail({
        from: "Slick's Slices <slick@example.com>",
        to: "orders@example.com",
        subject: "New Order!",
        html: `<p>Your new pizza order is here</p>`
    });
    return {
        statusCode: 200,
        body: JSON.stringify(info)
    }
}