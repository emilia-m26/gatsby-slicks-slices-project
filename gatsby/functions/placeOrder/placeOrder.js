//require nodemailer
const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total}) {
    return `
        <div>
        <h2>Your recent order for ${total}</h2>
        <p>Please start walking over. We will have your order ready in the next 20 minutes.</p>
        <ul>
        ${order.map(item => `
            <li>
            <img src="${item.thumbnail}" alt="${item.name}" />
            ${item.size} ${item.name} - ${item.price}
            </li>
        `)}
        </ul>
        <p>Your total is $${total} due at pickup.</p>
        </div>
    `;
}

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
    const body = JSON.parse(event.body);
    console.log(body);
//validate data coming in is correct
const requiredFields = ['email', 'name', 'order'];

for(const field of requiredFields) {
    console.log(`Checking that ${field} is good`);
    if(!body[field]) {
        return {
            statusCode: 400,
            body: JSON.stringify({message: `Ooops! You are missing the ${field} field`})
        }
    }
}

//send email

//send success or error message

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