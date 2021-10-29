import { SocialIcon } from 'react-social-icons';
import theme from '../styles/theme';
import ExternalLink from './ExternalLink';
import SmallCard from './SmallCard';

const Contact = () => {
  const contacts = [
    {
      link: 'mailto:atlisaevar@gmail.com',
      text: 'atlisaevar@gmail.com',
    },
    {
      link: 'https://www.linkedin.com/in/atlisaevar/',
      text: 'linkedin.com/in/atlisaevar/',
    },
    {
      link: 'https://github.com/atlisg',
      text: 'github.com/atlisg',
    },
    {
      link: 'https://github.com/atlidohop',
      text: 'github.com/atlidohop',
    },
  ];

  return (
    <div className="container">
      <SmallCard>
        <h2>Get in touch</h2>
        {contacts.map((contact, iContact) => (
          <div key={iContact} className="social-container">
            <SocialIcon url={contact.link} />
            <ExternalLink link={contact.link} text={contact.text} isTitle isRepo />
          </div>
        ))}
      </SmallCard>
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .social-container {
          margin: 20px;
        }
        h2 {
          font-size: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid ${theme.colors.borderColor};
          margin: 20px;
        }
        p {
          font-size: 18px;
          margin: 20px;
        }
      `}</style>
    </div>
  );
};

export default Contact;
