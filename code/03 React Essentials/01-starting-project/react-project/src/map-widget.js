import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

export class MapWidget {
  #domNode;

  constructor(domNode) {
    this._getPosition();
    this.#domNode = domNode;
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could NOT get your position! 🙅');
        }
      );
  }

  //once map has loaded successfully
  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.map = L.map(this.#domNode, {
      zoomControl: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      scrollWheelZoom: false,
      zoomAnimation: false,
      touchZoom: false,
      zoomSnap: 0.1,
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(this.map);
    this.map.setView(coords, 0);
  }

  setZoom(level) {
    this.map?.setZoom(level);
  }
}
