import React, { useEffect, useRef } from 'react';

function SplineViewer({ url }) {
  const viewerRef = useRef();

  useEffect(() => {
    // Create script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@0.9.364/build/spline-viewer.js';
    script.type = 'module';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (viewerRef.current) {
      viewerRef.current.setAttribute('url', url);
    }
  }, [url]);

  return <spline-viewer ref={viewerRef} loading-anim />;
}

export default SplineViewer;
