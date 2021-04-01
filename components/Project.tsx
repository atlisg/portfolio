import theme from '../styles/theme';
import SmallCard from '../components/SmallCard';

const Project = ({ image, title, about, homepage, repo }) => {
  return (
    <SmallCard>
      <div className="image-container">
        <img src={image} alt="project" />
      </div>
      <h2>
        <a href={homepage}>{title}</a>
      </h2>
      <p>{about}</p>
      <h3>
        <a href={repo}>Github repo</a>
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
          margin: 20px;
        }
        p {
          margin: 20px;
        }
        a {
          text-decoration: none;
          color: ${theme.colors.text};
        }
        a:hover {
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
