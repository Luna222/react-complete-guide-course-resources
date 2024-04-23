import { useRef, useEffect } from 'react';
import { MapWidget } from '../map-widget.js';

/*
👉 Controlling a non-React/3-party widget: ❗️make it reflected upon React Components' props/state changes
*/
export default function Map({ zoomLevel }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  /*
  🔸useEffect(setupFn, dependencies<Array>) Hook >>: 
    💚 allows you to perform side effects in Functional Components: fetching data with Effects for your Component, connecting to an external/3-party system , or Wrapping Effects in custom Hooks, etc

    ⭐️ Side Effect runs ❗️after the initial render and after re-renders IF dependencies—reactive values (zoomLevel) changed.
  */
  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current);
    }

    const map = mapRef.current;
    map.setZoom(zoomLevel);
  }, [zoomLevel]);

  return <div style={{ width: 200, height: 200 }} ref={containerRef} />;
}
