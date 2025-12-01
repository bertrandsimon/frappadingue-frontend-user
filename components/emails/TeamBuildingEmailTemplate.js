import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
} from '@react-email/components';
import * as React from 'react';

export default function TeamBuildingEmailTemplate({
  firstName,
  lastName,
  email,
  phone,
  distance,
  tshirtOption,
  numberOfPeople,
  message,
}) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nouvelle demande de Team Building</Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>Nom:</strong> {firstName} {lastName}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            {phone && (
              <Text style={text}>
                <strong>Téléphone:</strong> {phone}
              </Text>
            )}
            <Text style={text}>
              <strong>Distance choisie:</strong> {distance || 'Non spécifiée'}
            </Text>
            <Text style={text}>
              <strong>Option t-shirt:</strong> {tshirtOption || 'Non spécifiée'}
            </Text>
            <Text style={text}>
              <strong>Nombre de personnes:</strong> {numberOfPeople || 'Non spécifié'}
            </Text>
            {message && (
              <Text style={text}>
                <strong>Message:</strong> {message}
              </Text>
            )}
            <Text style={text}>
              <strong>Date:</strong> {new Date().toLocaleString('fr-FR')}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#000000',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#1a1a1a',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const h1 = {
  color: '#ffe500',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
  textAlign: 'center',
};

const section = {
  padding: '0 48px',
};

const text = {
  color: '#ffffff',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
};

