// API Route: /api/teambuilding
// Handles team building form submissions and sends email using Resend

import TeamBuildingEmailTemplate from '../../components/emails/TeamBuildingEmailTemplate';
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, distance, tshirtOption, numberOfPeople, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !distance || !tshirtOption || !numberOfPeople) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({ error: 'Configuration email manquante' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Frappadingue <noreply@frappadingue.net>',
      to: ['trandber@hotmail.com'],
      replyTo: email,
      subject: 'Nouvelle demande de Team Building - Frappadingue',
      react: TeamBuildingEmailTemplate({
        firstName,
        lastName,
        email,
        phone,
        distance,
        tshirtOption,
        numberOfPeople,
        message,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
    }

    return res.status(200).json({ 
      success: true,
      message: 'Votre demande a été envoyée avec succès !',
      data 
    });

  } catch (error) {
    console.error('Team building form error:', error);
    return res.status(500).json({ 
      error: 'Une erreur est survenue lors de l\'envoi de la demande',
      details: error.message 
    });
  }
}

