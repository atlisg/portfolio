import theme from '../styles/theme';
import SmallCard from './SmallCard';

const Education = () => (
  <div className="container">
    <SmallCard>
      <div className="header">
        <img src="ru.png" alt="ru-logo" />
        <h3>Reykjavik University</h3>
      </div>
      <div className="body">
        <p>Aug 2013 – May 2016 | Reykjavík, Iceland</p>
      </div>
      <ul>
        <li>B.S. in Computer Science</li>
        <li>Made the Dean's list for outstanding academic achievement</li>
      </ul>
    </SmallCard>
    <SmallCard>
      <div className="header">
        <img src="sae.png" alt="sae-logo" />
        <h3>SAE Institude</h3>
      </div>
      <div className="body">
        <p>Aug 2005 – Sep 2006 | Liverpool, England</p>
      </div>
      <ul>
        <li>Diploma in Audio Engineering</li>
      </ul>
    </SmallCard>
    <style jsx>{`
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 10px 0;
        margin: 0 20px;
        border-bottom: 1px solid #ccc;
      }
      img {
        width: 40px;
        margin-right: 10px;
      }
      p {
        margin: 20px;
        font-style: italic;
        color: ${theme.colors.darkGrey};
      }
      li {
        line-height: 1.5;
        margin-right: 20px;
      }
    `}</style>
  </div>
);

export default Education;
