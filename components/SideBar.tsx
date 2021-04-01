import Link from 'next/link';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaCheck, FaEnvelope, FaGlasses, FaHeart, FaStar, FaUniversity } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import theme from '../styles/theme';

const MySideBar = ({ isToggled, setIsToggled, windowSize }) => {
  return (
    <ProSidebar
      width="260px"
      breakPoint="md"
      toggled={isToggled}
      onToggle={() => setIsToggled(false)}
    >
      <div className="logo">
        <Link href="/">
          <a className="home-link">
            <img src="atli.png" alt="profile" className="profile" />
            <div className="name">Atli Sævar</div>
            <div className="title">Full Stack Developer</div>
          </a>
        </Link>
      </div>
      <Menu iconShape="circle">
        <MenuItem icon={<FaHeart color={theme.colors.pink} />}>
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setIsToggled(false)}
            offset={windowSize.width < 768 ? -80 : 0}
          >
            <div className="nav-item">About</div>
          </ScrollLink>
        </MenuItem>
        <MenuItem icon={<FaGlasses color={theme.colors.lightText} />}>
          <ScrollLink
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setIsToggled(false)}
            offset={windowSize.width < 768 ? -80 : 0}
          >
            <div className="nav-item">Experience</div>
          </ScrollLink>
        </MenuItem>
        <MenuItem icon={<FaStar color={theme.colors.yellow} />}>
          <ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setIsToggled(false)}
            offset={windowSize.width < 768 ? -80 : 0}
          >
            <div className="nav-item">Projects</div>
          </ScrollLink>
        </MenuItem>
        <MenuItem icon={<FaCheck color={theme.colors.blue} />}>
          <ScrollLink
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setIsToggled(false)}
            offset={windowSize.width < 768 ? -80 : 0}
          >
            <div className="nav-item">Skills</div>
          </ScrollLink>
        </MenuItem>
        <MenuItem icon={<FaUniversity color={theme.colors.lightText} />}>
          <ScrollLink
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setIsToggled(false)}
            offset={windowSize.width < 768 ? -80 : 0}
          >
            <div className="nav-item">Education</div>
          </ScrollLink>
        </MenuItem>
        <MenuItem icon={<FaEnvelope color={theme.colors.yellow} />}>
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setIsToggled(false)}
            offset={windowSize.width < 768 ? -80 : 0}
          >
            <div className="nav-item">Contact</div>
          </ScrollLink>
        </MenuItem>
      </Menu>

      <style jsx>{`
        .logo {
          padding: 20px;
          font-family: ${theme.fontFamily.headline};
          text-align: center;
        }
        .profile {
          width: 180px;
          clip-path: circle(90px at center);
        }
        .name {
          margin-top: 10px;
          font-size: 32px;
          color: ${theme.colors.yellow};
        }
        .title {
          padding-bottom: 20px;
          border-bottom: 1px solid #999;
          font-size: 16px;
          color: ${theme.colors.lightText};
        }
        .home-link {
          text-decoration: none;
        }

        .nav {
          padding: 40px 0;
        }
        .nav-item {
          color: ${theme.colors.lightText};
        }

        @media screen and (min-width: 768px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>

      <style jsx global>{`
        .active .nav-item {
          font-weight: bold;
          font-size: 20px;
        }

        .pro-sidebar {
          position: fixed;
          color: ${theme.colors.lightText};
        }
        .pro-sidebar > .pro-sidebar-inner {
          background-color: ${theme.colors.darkBackground};
        }
      `}</style>
    </ProSidebar>
  );
};

export default MySideBar;
