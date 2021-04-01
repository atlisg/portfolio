import Project from '../components/Project';

const Projects = ({ windowSize }) => (
  <div className="container">
    <Project
      image={windowSize.width < 578 ? 'food-e-mobile.png' : 'food-e.png'}
      title="FOOD·E"
      about="Released in May 2020, FOOD·E is helping food professionals promote the sustainability of their food. Built with Next.js and MongoDB."
      homepage="//foodprintcalculator.com/"
      shortLink="foodprintcalculator.com"
      repo="//github.com/ethicodeorg/foodprint-calculator"
    />
    <Project
      image={windowSize.width < 578 ? 'ethicode-mobile.png' : 'ethicode-team.png'}
      title="Ethicode homepage"
      about="Created in March 2020, the homepage for Ethicode was originally built with Vue.js but after experimenting with that framework a bit, I decided to rewrite this project using Next.js."
      homepage="//ethicode.org/"
      shortLink="ethicode.org"
      repo="//github.com/ethicodeorg/website"
    />
    <Project
      image={windowSize.width < 578 ? 'veganbot-mobile.png' : 'veganbot.png'}
      title="VeganBot"
      about="Deployed in May 2018, VeganBot educates and trains people in the vegan conversation, to help veganism spread even faster. The client was built with TypeScript/Angular.js, the server with Node.js and then some Python scripts to gather the content."
      homepage="//veganbot.com/"
      shortLink="veganbot.com"
      repo="//github.com/atlisg/vegan-bot"
    />
    <Project
      image={windowSize.width < 578 ? 'hfp-mobile.png' : 'hfp.png'}
      title="Hvert fara peningarnir?"
      about="'Hvert fara peningarnir?' or 'Where does the money go?' was my graduation project. Me and two other geniuses took it upon ourselves to display the books for the town of Kópavogur in a user friendly UI to increase transparency on how the town's finance is managed. The town of Kópavogur was the first establishment in Iceland to open their books in this way but now many other towns and counties have followed suit. We used Angular.js on the client, Node.js on the server and a Python script to move the data from the towns SQL database into our super fast NoSQL ElasticSearch search engine."
      homepage="//hfp.kopavogur.is"
      shortLink="hfp.kopavogur.is"
      repo="//github.com/agirmar92/HvertFaraPeningarnir"
    />

    <style jsx>{`
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}</style>
  </div>
);

export default Projects;
