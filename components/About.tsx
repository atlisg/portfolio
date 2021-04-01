import Card from './Card';
import theme from '../styles/theme';

const About = () => (
  <div className="container">
    <Card>
      <h3 className="section-caption">
        Purposeful full stack developer with a passion for building software that matters.
      </h3>
      <p className="section-text">
        My professional path has taken some sharp turns – from recording artist and entertainer, to
        sound engineering and producing, to dean’s scholar, to full stack developer, to founder of a
        non-profit. The mission is always the same though, to solve problems and create something of
        real value for others.
      </p>
      <p className="section-text">
        As a software developer, I love designing beautiful systems, writing efficient, maintainable
        code, using state of the art technologies. My work ethic is relentless and obsessive,
        especially when working on something that actually makes a difference.
      </p>
    </Card>
    <style jsx>{`
      .container {
        margin: 0;
      }
      .section-caption {
        border-left: 4px solid ${theme.colors.purple};
        margin: 10px;
        padding-left: 20px;
        color: ${theme.colors.purple};
        line-height: 1.5;
        font-size: 20px;
        text-align: left;
        font-style: italic;
      }
      .section-text {
        margin: 20px 10px 10px;
        font-style: normal;
        font-size: 16px;
        text-align: left;
        line-height: 1.5;
        color: ${theme.colors.text};
      }

      @media only screen and (min-width: 768px) {
        .container {
          margin: 50px 0 0;
        }
        .section-caption {
          font-size: 24px;
        }
        .section-text {
          font-size: 20px;
        }
      }
    `}</style>
  </div>
);

export default About;
