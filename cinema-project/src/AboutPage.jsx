import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Allwin',
      email: 'ajohnson@qa.com',
      website: 'https://www.linkdin.com',
      bio: ''
    },
    {
      name: '',
      email: '',
      website: '',
      bio: ''
    },
    {
        name: '',
        email: '',
        website: '',
        bio: ''
      },
      {
        name: '',
        email: '',
        website: '',
        bio: ''
      }
  ];

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our team page! Meet the talented individuals who worked hard to create this site.</p>
      
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
            <p>Email: <a href={`mailto:${member.email}`}>{member.email}</a></p>
            <p>Website: <a href={member.website}>{member.website}</a></p>
          </div>
        ))}
      </div>

      <div className="sign-off">
        <p>
          Thank you for visiting our site. If you have any questions or inquiries, please don't hesitate to <Link to="/ContactPage.jsx">contact us</Link>.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
