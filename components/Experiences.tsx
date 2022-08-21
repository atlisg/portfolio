import Experience from '../components/Experience';

const Experiences = () => (
  <div className="container">
    <Experience
      logo="ankeri_logo.webp"
      company="Ankeri Solutions"
      homepage="//ankeri.net"
      title="Software engineer"
      period="Nov 2021 – present | Reykjavík, Iceland"
      highlights={[
        {
          text: 'Created the Ankeri Aware app to make performance and sustainability an enterprise wide push for shipping companies, ',
          link: '//ankeri.net/aware',
          linkText: 'Ankeri Aware',
        },
      ]}
      footer="Ankeri is the cloud-based platform that allows every shipping company to stay on top of fleet data, performance and sustainability."
    />
    <Experience
      logo="eye-close.png"
      company="Ethicode"
      homepage="//ethicode.org"
      title="Founder"
      period="Mar 2020 – present | Remote from Garður, Iceland"
      highlights={[
        {
          text: 'Started an organization around my personal projects',
        },
        {
          text: 'Created a Foodprint Calculator to evaluate the environmental impact of recipes and food products, ',
          link: '//foodprintcalculator.com',
          linkText: 'FOOD·E',
        },
        {
          text: 'Recruited and organized 25 volunteers from around the world to work on them with me',
        },
      ]}
      footer="Ethicode is working towards a world where all sentient beings have the right to life, liberty, and the pursuit of happiness."
    />
    <Experience
      logo="planeBlue.png"
      company="Dohop"
      homepage="//dohop.com"
      title="Full stack developer"
      period="Sep 2017 – Aug 2021 | Reykjavík, Iceland and Remote from Garður, Iceland"
      highlights={[
        {
          text: 'Key developer for our biggest partner platform, ',
          link: 'https://worldwide.easyjet.com/',
          linkText: 'worldwide by easyJet',
        },
        {
          text: 'Implemented seat selection throughout the stack',
        },
        {
          text: 'Implemented fare class selection in the frontend',
        },
        {
          text: 'These last two items unlocked a huge market for us and sparked a skyrocket in sales at the company',
        },
        {
          text: 'Created e2e tests for all our whitelabel partner platforms using Cypress',
        },
        {
          text: 'Since I joined the company, we won the "World\'s Leading Flight Comparison Website" every year at the ',
          link: 'https://www.worldtravelawards.com/award-travel-technologys-leading-flight-comparison-website-2020',
          linkText: 'World Travel Awards',
        },
      ]}
      footer="Dohop provides virtual interline platforms for airlines, i.e. a flight search and booking engine to connect with other airlines."
    />
    <Experience
      logo="north+patch.png"
      company="Code North"
      homepage="//codenorth.com"
      title="Frontend developer"
      period="May 2016 – Aug 2017 | Reykjavík, Iceland and Remote from Garður, Iceland"
      highlights={[
        {
          text: 'Created an internal Aircraft Maintenance Control System for Icelandair',
        },
        {
          text: 'Helped create an array of business solution apps, ',
          link: 'https://www.heartbeat.cloud/for-business',
          linkText: 'the Heartbeat collection',
        },
      ]}
      footer="Code North provides business solutions connecting dated software with fast, modern interfaces and architechtures."
    />
    <Experience
      logo="ru.png"
      company="Reykjavik University"
      homepage="//ru.is"
      title="Developer and Instructor"
      period="Jun 2015 – May 2016 | Reykjavík, Iceland"
      highlights={[
        {
          text: 'Automated processes for the School of Computer Science Offices in the summer of 2015',
        },
        {
          text: 'Instructed in the course "Calculus and Statistics" in the fall of 2015',
        },
        {
          text: 'Instructed in the course "Programming languages" in the spring of 2016',
        },
      ]}
      footer="Reykjavik University is the largest private university in Iceland with more than 3,500 students."
    />
    <style jsx>{`
      .container {
        margin: 0;
      }

      @media only screen and (min-width: 768px) {
        .container {
          margin: 50px 0 0;
        }
      }
    `}</style>
  </div>
);

export default Experiences;
