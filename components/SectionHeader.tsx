import theme from '../styles/theme';

const SectionHeader = ({ title }) => {
  return (
    <h1>
      {title}
      <style jsx>{`
        h1 {
          color: ${theme.colors.pink};
          background-color: #333;
          font-family: ${theme.fontFamily.headline};
          font-size: 40px;
          margin: 0;
          padding: 30px;
        }

        @media only screen and (min-width: 768px) {
          h1 {
            padding: 30px 100px;
            font-size: 48px;
          }
        }
      `}</style>
    </h1>
  );
};

export default SectionHeader;
