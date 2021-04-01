import theme from '../styles/theme';
import SmallCard from '../components/SmallCard';

const Project = ({ image, title, about, homepage, shortLink, repo }) => {
  return (
    <SmallCard>
      <div className="image-container">
        <img src={image} alt="project" />
      </div>
      <h2>
        <a className="title" href={homepage}>
          {title}
        </a>
      </h2>
      <h4>
        <a className="repo" href={homepage}>
          {shortLink}
        </a>
      </h4>
      <p>{about}</p>
      <h3>
        <a className="repo" href={repo}>
          Github repo
        </a>
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
        h3,
        h4 {
          margin: 20px;
        }
        p {
          margin: 20px;
        }
        .repo {
          text-decoration: none;
          color: ${theme.colors.blue};
        }
        .repo:hover {
          opacity: 0.8;
        }
        .title {
          text-decoration: none;
          color: ${theme.colors.text};
        }
        .title:hover {
          color: ${theme.colors.blue};
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
