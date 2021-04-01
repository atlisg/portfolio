import Card from '../components/Card';

const Skill = ({ title, logos }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <div className="container">
        {logos.map((logo: any, i: number) => (
          <div key={i} className="inner-container">
            <img src={logo.image} alt="logo" width="80" height={logo.height || '80'} />
            <p>{logo.name}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          margin-left: 20px;
        }
        .inner-container {
          margin: 20px 30px 0;
          text-align: center;
        }
        h3 {
          margin: 0;
          padding: 0 0 20px;
          border-bottom: 1px solid #ccc;
          font-size: 24px;
        }
      `}</style>
    </Card>
  );
};

export default Skill;
