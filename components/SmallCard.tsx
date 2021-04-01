import theme from '../styles/theme';

const SmallCard = ({ children }) => {
  return (
    <div className="small-card">
      {children}

      <style jsx>{`
        .small-card {
          width: 100%;
          border: none;
          border-radius: 0;
          box-shadow: none;
          padding: 0;
          margin: 20px 0;
          background-color: #fff;
        }

        @media only screen and (min-width: 768px) {
          .small-card {
            max-width: 600px;
            margin: 40px 20px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SmallCard;
