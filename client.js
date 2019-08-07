// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });
  const cylinderSurface = new Surface(4580, 600, Surface.SurfaceShape.Cylinder);

  const kedarSurface = new Surface(600, 400, Surface.SurfaceShape.Flat);
  kedarSurface.setAngle(-Math.PI / 2, 0);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("FlyingKedar", {
      /* initial props */
    }),
    cylinderSurface
  );

  r360.renderToSurface(
    r360.createRoot("Kedar", {
      image: "kedar.png"
    }),
    kedarSurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("k_bg.jpg"), {});
}

window.React360 = { init };
