import Card from './Card';
import theme from '../styles/theme';
import ExternalLink from './ExternalLink';

const About = () => (
  <div className="container">
    <Card>
      <h2 className="section-title">Mission</h2>
      <h3 className="section-why">
        To solve problems worth solving and fight for causes worth fighting for – so that we can
        expand wellbeing and our circle of compassion.
      </h3>
      <p className="section-text">
        So far, my most significant contributions towards the mission have been made by creating and
        building software like <ExternalLink link="http://veganbot.com/" text="VeganBot" />, in aid
        of the animal rights movement, and{' '}
        <ExternalLink link="//foodprintcalculator.com/" text="FOOD·E" />, to create awareness of the
        environmental impacts of food. I'm always looking for new problems worth solving and am
        always open to anything that will serve the mission in any way.
      </p>
    </Card>
    <Card>
      <h2 className="section-title">Story</h2>
      <p className="section-text">
        My professional path has taken some sharp turns – from recording artist and entertainer, to
        sound engineer and producer, to dean’s scholar in computer science, to full-stack software
        developer, to founder of a non-profit. Following my passions is what caused each turn, but
        with each turn, I serve the mission better.
      </p>
      <p className="section-text">
        I love solving problems and creating something of real value for others. I love designing
        beautiful systems, writing efficient, maintainable code, while using state of the art
        technologies. My work ethic is relentless and obsessive, especially when working on
        something that actually makes a difference.
      </p>
      <p className="section-text">
        I love the power that comes with being a software developer – but with great power comes
        great responsibility. That's why I want to use my powers, along with my passions, to make a
        positive impact.
      </p>
    </Card>
    <style jsx>{`
      .container {
        margin: 0;
      }
      .section-title {
        margin: 0;
        padding-bottom: 20px;
        border-bottom: 1px solid ${theme.colors.borderColor};
        color: ${theme.colors.text};
      }
      .section-why {
        border-left: 3px solid ${theme.colors.purple};
        padding-left: 20px;
        margin: 20px 0 0;
        color: ${theme.colors.purple};
        line-height: 1.5;
        font-size: 16px;
        text-align: left;
        font-style: italic;
      }
      .section-text {
        margin: 20px 0 0;
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
        .section-why {
          font-size: 18px;
        }
        .section-text {
          font-size: 18px;
        }
      }
    `}</style>
  </div>
);

export default About;
