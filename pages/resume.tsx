import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SectionHeader from '../components/SectionHeader';
import SideBar from '../components/SideBar';
import theme from '../styles/theme';
import Education from '../components/Education';
import Contact from '../components/Contact';
import About from '../components/About';
import { FaBars } from 'react-icons/fa';

const Resume = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const photos = ['checkit', 'frelsarinn', 'iceland', 'lundi'];
  const photoindex = Math.floor(Math.random() * photos.length);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      <div className="background2" />

      <div className="content">
        <div className="menubar">
          <div className="bars-button" onClick={() => setIsToggled(!isToggled)}>
            <FaBars color={theme.colors.lightText} />
          </div>
          <div className="menu-name-container">
            <div className="name">Atli Sævar</div>
            <div className="title">Full Stack Developer</div>
          </div>
        </div>
        <SideBar isToggled={isToggled} setIsToggled={setIsToggled} windowSize={windowSize} />
        <div className="main">
          <div className="section" id="about">
            <SectionHeader title="About" />
            <About />
          </div>

          <div className="section" id="experience">
            <SectionHeader title="Experience" />
            <Experiences />
          </div>

          <div className="section" id="projects">
            <SectionHeader title="Projects" />
            <Projects windowSize={windowSize} />
          </div>

          <div className="section" id="skills">
            <SectionHeader title="Skills" />
            <Skills />
          </div>

          <div className="section" id="education">
            <SectionHeader title="Education" />
            <Education />
          </div>

          <div className="section" id="contact">
            <SectionHeader title="Contact" />
            <Contact />
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: ${theme.colors.background};
        }

        .content {
          display: flex;
          width: 100vw;
        }

        .menubar {
          display: flex;
          align-items: center;
          position: fixed;
          width: 100%;
          padding: 12px 26px;
          background-color: ${theme.colors.darkBackground};
          font-size: 32px;
        }
        .menu-name-container {
          width: 100%;
          font-size: 20px;
          color: ${theme.colors.lightText};
          text-align: center;
        }
        .name {
          font-size: 32px;
        }
        .title {
          font-size: 16px;
          color: ${theme.colors.yellow};
        }
        .bars-button {
          display: flex;
          align-items: center;
        }

        .background2 {
          position: fixed;
          top: 0;
          width: 100vw;
          height: 100vh;
          background-image: url(${photos[photoindex]}.jpg);
          background-size: cover;
          background-position: center;
          z-index: -1;
        }

        .main {
          width: 100%;
          margin-top: 80px;
          margin-left: 0;
        }

        .section {
          padding-bottom: 0;
          min-height: 100vh;
        }

        @media screen and (min-width: 768px) {
          .main {
            margin-top: 0;
            margin-left: 260px;
          }
          .section {
            padding-bottom: 50px;
          }
          .menubar {
            display: none;
          }
        }
      `}</style>

      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          font-family: ${theme.fontFamily.default};
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        body::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        body {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Resume;
