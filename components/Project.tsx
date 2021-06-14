import theme from '../styles/theme';
import SmallCard from '../components/SmallCard';
import ExternalLink from './ExternalLink';

const Project = ({ image, title, about, homepage, shortLink, repo }) => {
  return (
    <SmallCard>
      <div className="image-container">
        <img src={image} alt="project" />
      </div>
      <h3>
        <ExternalLink link={homepage} text={title} isTitle />
      </h3>
      <p>{about}</p>
      <h3>
        <ExternalLink link={homepage} text={shortLink} />
        <ExternalLink link={repo} text="Github repo" isRepo />
      </h3>
      <style jsx>{`
        .image-container {
          height: 420px;
          overflow: hidden;
        }
        img {
          width: 100%;
        }
        h2 {
          margin: 20px;
          font-size: 24px;
        }
        h3 {
          display: flex;
          flex-wrap: wrap;
          margin: 20px;
        }
        p {
          margin: 20px;
        }

        @media only screen and (min-width: 768px) {
          .image-container {
            height: 320px;
          }
          img {
            max-width: 600px;
          }
        }
      `}</style>
    </SmallCard>
  );
};

export default Project;
