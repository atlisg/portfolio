import Head from 'next/head';
import Link from 'next/link';
import { FaHandPointUp } from 'react-icons/fa';
import theme from '../styles/theme';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Atli Sævar | Full stack developer</title>
        <link rel="icon" href="/atli.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="frontpage">
        <h3>
          <p>
            <span>I want to create something </span>
            <span className="meaningful">meaningful</span>
          </p>
          <p>
            <span>that has a </span>
            <span className="positive">positive impact</span>
          </p>
        </h3>
        <Link href="/resume">
          <a className="resume-link">
            <img src="atli.png" alt="profile" className="profile" />
          </a>
        </Link>
        <h1 className="name">Atli Sævar Guðmundsson</h1>
        <h2 className="title">Full stack developer</h2>
        <div className="look">
          <p className="gentle">(gently tap my nose to have a look)</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: ${theme.colors.darkBackground};
        }

        .profile {
          width: 200px;
          padding: 20px;
          clip-path: circle(150px at center);
          border: 10px solid ${theme.colors.pink};
          border-radius: 150px;
          animation-name: wiggle;
          animation-duration: 5s;
          animation-iteration-count: 3;
          animation-timing-function: linear;
          animation-delay: 2s;
        }

        .look {
          margin: 30px;
          color: ${theme.colors.blue};
          font-size: 20px;
          text-align: center;
        }

        .frontpage {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .name {
          margin: 20px 0 10px;
          font-family: ${theme.fontFamily.default};
          font-weight: 400;
          font-size: 1.5rem;
          text-align: center;
          color: ${theme.colors.lightText};
        }
        .title {
          margin: 0;
          font-weight: 400;
          font-family: ${theme.fontFamily.default};
          font-size: 1.2rem;
          text-align: center;
          color: ${theme.colors.yellow};
        }
        .gentle {
          margin-top: 0;
          font-size: 16px;
          color: ${theme.colors.blue};
        }

        h3 {
          margin: 40px 0;
          font-size: 20px;
          text-align: center;
        }
        p {
          margin: 10px 0;
          color: ${theme.colors.lightText};
          font-style: italic;
        }
        .meaningful {
          color: ${theme.colors.pink};
        }
        .positive {
          color: ${theme.colors.blue};
        }

        @keyframes wiggle {
          77% {
            transform: scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          80%,
          86%,
          92% {
            transform: scale(1.1) rotateZ(2deg);
          }
          83%,
          89%,
          95% {
            transform: scale(1.1) rotateZ(-2deg);
          }
          98% {
            transform: scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
        }
        @-webkit-keyframes wiggle {
          77% {
            -webkit-transform: scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          80%,
          86%,
          92% {
            -webkit-transform: scale(1.1) rotateZ(2deg);
          }
          83%,
          89%,
          95% {
            -webkit-transform: scale(1.1) rotateZ(-2deg);
          }
          98% {
            -webkit-transform: scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
        }

        @media screen and (min-width: 768px) {
          .background1 {
            background-size: 50vw;
          }
          h3 {
            margin: 40px 0;
            font-size: 24px;
          }
          .profile {
            width: 300px;
          }
          .name {
            font-size: 2.5rem;
          }
          .title {
            font-size: 2rem;
          }
          .gentle {
            margin-top: 20px;
            font-size: 24px;
          }
        }

        @media screen and (min-width: 1000px) {
          .background1 {
            background-size: calc(1 / 3 * 100vw);
          }
        }

        @media screen and (min-width: 1500px) {
          .background1 {
            background-size: 25vw;
          }
        }
      `}</style>

      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          font-family: ${theme.fontFamily.default};
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
