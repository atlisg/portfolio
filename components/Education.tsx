import theme from '../styles/theme';
import Card from './Card';

const Education = () => (
  <div className="container">
    <Card>
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
    </Card>
    <Card>
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
    </Card>
    <style jsx>{`
      .container {
        margin: 0;
      }
      .header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
      }
      img {
        width: 40px;
        margin-right: 10px;
      }
      p {
        margin: 20px 0;
        font-style: italic;
        color: ${theme.colors.darkGrey};
      }
      ul {
        padding-left: 20px;
      }
      li {
        line-height: 1.5;
        margin-right: 20px;
      }
      h3 {
        margin: 0;
        font-size: 24px;
      }
    `}</style>
  </div>
);

export default Education;
