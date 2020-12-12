import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default (
  trackingId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
) => {
  const { listen } = useHistory();

  useEffect(() => {
    const unlisten = listen((location) => {
      if (!window.gtag) return; // eslint-disable-line
      if (!trackingId) return;

      window.gtag('config', trackingId, { page_path: location.pathname }); // eslint-disable-line
    });

    return unlisten;
  }, [trackingId, listen]);
};
