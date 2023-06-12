import React, { useEffect } from 'react';

function SplineViewer() {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const canvas = document.querySelector('#canvas3d');
          if (canvas) {
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            observer.disconnect();
          }
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <iframe
        id='spline-iframe'
        src='https://my.spline.design/untitled-3556f22d69d774b50e0f54ebac0a8c76/'
        width='100%'
        height='100%'
      ></iframe>
    </div>
  );
}

export default SplineViewer;
