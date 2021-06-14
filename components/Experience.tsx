import theme from '../styles/theme';
import Card from '../components/Card';
import ExternalLink from './ExternalLink';

const Experience = ({ logo, company, homepage, title, period, highlights, footer }) => {
  return (
    <Card>
      <div className="section-header">
        <img src={logo} alt="logo" width="40" height="40" />
        <h3 className="section-header-name">
          <ExternalLink link={homepage} text={company} isTitle />
        </h3>
        <h3 className="section-header-title">{title}</h3>
      </div>
      <div className="body">
        <p className="period">{period}</p>
        <h3 className="body-title">Highlights</h3>
        <ul>
          {highlights.map((highlight: any, i: number) => (
            <li key={i}>
              {highlight.text}
              {highlight.link && <ExternalLink link={highlight.link} text={highlight.linkText} />}
            </li>
          ))}
        </ul>
      </div>
      <div className="footer">{footer}</div>
      <style jsx>{`
        .section-header {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          padding-bottom: 20px;
          border-bottom: 1px solid #ccc;
        }
        .section-header-name {
          font-size: 20px;
          margin: 0 0 0 20px;
        }
        .company-link {
          color: ${theme.colors.text};
        }
        .company-link:hover {
          color: ${theme.colors.blue};
        }
        .body-title {
          text-align: left;
        }
        .section-header-title {
          color: ${theme.colors.darkGrey};
          font-size: 16px;
          margin: 0 0 0 auto;
        }
        .period {
          font-style: italic;
          color: ${theme.colors.darkGrey};
        }
        .footer {
          border-top: 1px solid #ccc;
          padding-top: 20px;
          font-style: italic;
          color: ${theme.colors.darkGrey};
        }
        li {
          line-height: 1.5;
        }

        @media screen and (min-width: 768px) {
          .section-header-name {
            font-size: 24px;
          }
          .section-header-title {
            font-size: 20px;
          }
        }
      `}</style>
    </Card>
  );
};

export default Experience;
