import {NextApiRequest, NextApiResponse} from 'next';
import sendgrid from '@sendgrid/mail';
import APIEnum from '../../types/APIEnum';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    const {method} = req;

    if (method !== APIEnum.post) {
        res.status(405).end(`Method ${method} is not allowed.`);
    } else {
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

        const {name, email, message} = req.body;
        const content = {
            to: process.env.EMAIL_RECIPIENT,
            from: 'form@fit-s-marky.cz',
            text: message,
            templateId: process.env.SENDGRID_TEMPLATE_ID,
            dynamicTemplateData: {
                subject: '🎈🎉 Formulář z webu 🧘',
                name,
                email,
                message,
            },
        };

        (async () => {
            try {
                await sendgrid.send(content);

                res.status(200).json({message: 'Zpráva byla úspěšně odeslána.'});
            } catch (error) {
                res.status(400).json({message: 'Něco se pravděpodobně po@#$&lo.'});
            }
        })();
    }
}
