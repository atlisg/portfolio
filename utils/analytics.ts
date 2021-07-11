import ReactGA from 'react-ga';

declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

export const initGA = () => {
  ReactGA.initialize('UA-113130296-4');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
