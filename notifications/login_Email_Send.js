import nodemailer from 'nodemailer';

export default {
        sendMail: async ({ userName, userEmail }) => {
                try {
                        const transporter = nodemailer.createTransport({
                                service: "gmail",
                                auth: {
                                        user: "mayur.megharanjanads@gmail.com", // Your email address
                                        pass: "tbus vosu dqzz minu", // Your email password
                                },
                        });

                        // Define the email options
                        const mailOptions = {
                                from: '"Mayur Bhoi Assignment" <mayur.megharanjanads@gmail.com>', // Your email address
                                to: `${userEmail}`, // Recipient email address
                                subject: 'ZealYug Assignment for  Mayur Bhoi',
                                html: `hii ${userName} Our newsletter is your gateway to:

                                Exclusive Content: Get access to insightful articles, tips, and resources.
                                Special Offers: Be the first to know about promotions, discounts, and giveaways. Upcoming Events: Stay informed about upcoming webinars, workshops, and conferences
                                Product Updates: Discover the latest enhancements to our products and services.
                                Community Insights: Hear stories and insights from our community of users.
                                Rest assured, your email address will be kept confidential and will only be used to send you our newsletter. We value your privacy and adhere to strict data protection guidelines.
                                Thank you for considering subscribing to our newsletter, we look forward to sharing valuable content and keeping you updated.
                                If you have any questions or need further assistance, please feel free to contact our support team at zealyug.support@gmail.com.
                        
                                 Best regards,
                                 [zealyug mayur]
                                  [mayutbhoi200@gmail.com]`, // Your HTML message
                        };

                        // Send the email
                        const info = await transporter.sendMail(mailOptions);

                        console.log('Email sent: ' + info.response);
                        return info.response;
                } catch (error) {
                        console.error(error);
                        throw error; // Re-throw the error to be handled elsewhere in your application
                }
        },
};
