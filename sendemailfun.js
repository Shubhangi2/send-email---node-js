const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  // Use your email service provider's SMTP settings
  host: 'smtp.gmail.com', // Example: Gmail SMTP
  port: 587, // Typically 587 for TLS
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'jshubhangi958@gmail.com', // Your email
    pass: 'Anita@1201' // App-specific password or environment variable
  }
});

// Function to send email
async function sendEmail(to, subject, text, html) {
  try {
    // Email configuration
    const mailOptions = {
      from: 'jshubhangi958@gmail.com', // Sender address
      to: to, // Recipient address
      subject: subject, // Subject line
      text: text, // Plain text body
      html: html // HTML body (optional)
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Example usage
async function sendEmailFunction() {
  try {
    await sendEmail(
      'jshubhangi523@gmail.com', 
      'Test Email', 
      'This is a test email sent from Node.js', 
      '<h1>Test Email</h1><p>This is a test email sent from Node.js</p>'
    );
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Email sending failed:', error);
  }
}

// Uncomment to run
// main();

module.exports = { sendEmailFunction };
