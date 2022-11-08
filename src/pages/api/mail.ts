import * as mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
		Phone: ${body.phone}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    to: 'bribri546@gmail.com',
    from: 'bribri546@gmail.com',
    subject: 'Contact message from your website!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }).catch((e) => console.log(e));
	
  res.status(200).json({ status: 'Ok' });
}
