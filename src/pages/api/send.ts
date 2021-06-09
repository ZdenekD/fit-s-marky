import {NextApiRequest, NextApiResponse} from 'next';
import sendgrid, {MailDataRequired} from '@sendgrid/mail';
import VariantsEnum from '../../enums/VariantsEnum';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    const {method} = req;

    if (method !== 'POST') {
        res.status(405).end(`Method ${method} is not allowed.`);
    } else {
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

        const {name, email, message} = req.body;
        const content = {
            to: process.env.EMAIL_RECIPIENT,
            from: process.env.EMAIL_SENDER as string,
            templateId: process.env.SENDGRID_TEMPLATE_ID,
            dynamic_template_data: {
                subject: process.env.EMAIL_SUBJECT,
                name,
                email,
                message,
            },
        };

        (async () => {
            try {
                await sendgrid.send(content as MailDataRequired);

                res.status(200).json({
                    message: 'Zpráva byla úspěšně odeslána.',
                    variant: VariantsEnum.success,
                });
            } catch (error) {
                res.status(400).json({
                    message: 'Něco se pravděpodobně po@#$&lo.',
                    variant: VariantsEnum.danger,
                });
            }
        })();
    }
}
