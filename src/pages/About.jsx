import React from 'react';

export const About = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    fontSize: '16px',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#007bff', // Blue color
  };

  const paragraphStyle = {
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About Us</h2>
      <p style={paragraphStyle}>
        A global consulting company focused on providing a range of IT consulting services with a focus on quality and agile execution. We are disrupting the IT sector with premium talent & strong partnerships operating primarily in the international market. Leveraging hand-picked talent, we make our impact through quick turnaround time and immaculate quality. We aim to provide our customers with a boutique experience and build strong relationships based on trust. We’re an IT consulting, people-first company for its clients & members. We are SchbangQ!
      </p>
      <h3 style={headingStyle}>What is SchbangQ?</h3>
      <p style={paragraphStyle}>
        A joint venture incepted by two corporate forces; growing their reach across the globe to establish world class capabilities.
      </p>
      <p style={paragraphStyle}>
        Schbang is a marketing technology company leading the advertising space in India. They have multiple presences in India, and have also expanded to London & Amsterdam. With 1000+ people powering the company, England & the Nordics are just the beginning for Schbang!
      </p>
      <p style={paragraphStyle}>
        Qgroup has been in the IT space for 10+ years! With ~36 companies in the group, they have one of the largest networks of consultants and IT professionals in the Nordic countries. Their expertise drives success for their customers through a boutique experience and the highest standards of quality being delivered consistently. Their presence ranges across 18 locations including North America, Europe, and Asia.
      </p>
    </div>
  );
};
