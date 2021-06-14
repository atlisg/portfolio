import theme from '../styles/theme';

const ExternalLink = ({ text, link, isTitle = false, isRepo = false }) => {
  return (
    <a className="link" href={link} target="_blank">
      {text}
      <style jsx>{`
        .link {
          text-decoration: none;
          color: ${isTitle ? theme.colors.text : theme.colors.blue};
          margin-left: ${isRepo ? '30px' : '0'};
        }
        .link:hover {
          opacity: 0.7;
          color: ${theme.colors.blue};
        }
      `}</style>
    </a>
  );
};

export default ExternalLink;
