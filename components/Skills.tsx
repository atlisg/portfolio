import Skill from './Skill';

const Skills = () => (
  <div className="container">
    <Skill
      title="Frontend"
      logos={[
        {
          image: 'react.png',
          name: 'React.js',
        },
        {
          image: 'next-js.svg',
          name: 'Next.js',
        },
        {
          image: 'vue.png',
          name: 'Vue.js',
        },
        {
          image: 'typescript.svg',
          name: 'Typescript',
        },
        {
          image: 'angular.svg',
          name: 'Angular.js',
        },
      ]}
    />
    <Skill
      title="Backend"
      logos={[
        {
          image: 'python.png',
          name: 'Python',
        },
        {
          image: 'nodejs.png',
          name: 'Node.js',
          height: 49,
        },
        {
          image: 'c++.png',
          name: 'C++',
          height: 90,
        },
        {
          image: 'java.png',
          name: 'Java',
        },
      ]}
    />
    <Skill
      title="Deployments"
      logos={[
        {
          image: 'vercel.png',
          name: 'Vercel',
        },
        {
          image: 'docker.png',
          name: 'Docker',
          height: 58,
        },
        {
          image: 'aws.png',
          name: 'AWS',
          height: 48,
        },
      ]}
    />
    <Skill
      title="Databases"
      logos={[
        {
          image: 'mongo.jpeg',
          name: 'MongoDB',
          height: 50,
        },
        {
          image: 'mysql.png',
          name: 'MySQL',
        },
        {
          image: 'elasticsearch.svg',
          name: 'ElasticSearch',
        },
      ]}
    />
    <Skill
      title="Other"
      logos={[
        {
          image: 'cypress.png',
          name: 'Cypress',
        },
        {
          image: 'github.png',
          name: 'Github',
        },
        {
          image: 'asana.svg',
          name: 'Asana',
        },
      ]}
    />

    <style jsx>{`
      .container {
        margin: 50px 0 0;
      }
    `}</style>
  </div>
);

export default Skills;
