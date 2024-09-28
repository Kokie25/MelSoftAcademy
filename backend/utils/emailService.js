const nodemailer = require('nodemailer');

const sendEmail = async (recipientEmail, subject, message) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Email account to send from
            pass: process.env.EMAIL_PASS, // Email account password or app-specific password
        },
    });

    // Email options
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender's email
        to: recipientEmail, // Recipient's email
        subject: subject, // Subject line
        text: message, // Plain text body
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = sendEmail;
