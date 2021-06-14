import { SocialIcon } from 'react-social-icons';
import theme from '../styles/theme';
import SmallCard from './SmallCard';

const Contact = () => (
  <div className="container">
    <SmallCard>
      <h2>Get in touch</h2>
      <p>
        If you're looking for someone to create tailor-made web & mobile applications to scale your
        impact and propel your mission towards a more ethical future, I'd be delighted to talk.
      </p>
      <p>
        To get started, send me a brief description of your project, and we can start exploring the
        next steps. Let's spread some love together!
      </p>
      <div className="social-container">
        <SocialIcon url="mailto:atlisaevar@gmail.com" />
        <a href="mailto:atlisaevar@gmail.com">atlisaevar@gmail.com</a>
      </div>
      <div className="social-container">
        <SocialIcon url="https://github.com/atlisg" />
        <a href="https://github.com/atlisg">github.com/atlisg</a>
      </div>
      <div className="social-container">
        <SocialIcon url="https://github.com/atlidohop" />
        <a href="https://github.com/atlidohop">github.com/atlidohop</a>
      </div>
      <div className="social-container">
        <SocialIcon url="https://www.linkedin.com/in/atlisaevar/" />
        <a href="https://www.linkedin.com/in/atlisaevar/">linkedin.com/in/atlisaevar</a>
      </div>
      <div className="social-container">
        <SocialIcon url="https://www.instagram.com/atlisaevar/" />
        <a href="https://www.instagram.com/atlisaevar/">instagram.com/atlisaevar</a>
      </div>
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
      a {
        margin-left: 20px;
        text-decoration: none;
        color: ${theme.colors.text};
      }
      a:hover {
        color: ${theme.colors.blue};
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

export default Contact;
