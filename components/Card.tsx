const Card = ({ children }) => (
  <div className="card">
    {children}

    <style jsx>{`
      .card {
        border: none;
        border-radius: 0;
        box-shadow: none;
        width: 100%;
        padding: 20px;
        margin: 20px auto;
        background-color: #fff;
      }

      @media only screen and (min-width: 768px) {
        .card {
          max-width: 800px;
          margin: 30px auto 0;
        }
      }
    `}</style>
  </div>
);
export default Card;
