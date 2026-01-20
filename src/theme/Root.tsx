import { useEffect } from 'react';
import CookieDialog from '../components/CookieDialog/CookieDialog';
import { initializeGtag, setDefaultConsent } from '../lib/gtag';

export default function Root({ children }) {
  useEffect(() => {
    initializeGtag();
    setDefaultConsent();
  }, []);

  return (
    <>
      {children}
      <CookieDialog />
    </>
  );
}
