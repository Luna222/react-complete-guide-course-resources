import { useRef, useState, useEffect } from 'react';

import Places from '../../components/PlacePickerItems/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from '../../components/PlacePickerItems/Modal.jsx';
import DeleteConfirmation from '../../components/PlacePickerItems/DeleteConfirmation.jsx';
import logoImg from '../../../public/placeImgs/logo.png';

import styles from './PlacePicker.module.css';
import { sortPlacesByDistance } from './loc.js';

function PlacePicker_Inspect() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState([]);

  useEffect(() => {
    const storedIds =
      JSON.parse(localStorage.getItem('SELECTED_PLACES_IDS')) ?? [];

    console.log('Stored IDs on load:', storedIds);

    const storedPickedPlaces = storedIds.map(id =>
      AVAILABLE_PLACES.find(place => place.id === id)
    );
    console.log('storedPickedPlaces on load:', storedPickedPlaces);
    setPickedPlaces(storedPickedPlaces);

    //🔺 Since state updates are asynchronous, the console.log(pickedPlaces) might not reflect the new state immediately.
    console.log('pickPlaced on load:', pickedPlaces); //[]
  }, []);

  useEffect(() => {
    console.log('pickedPlaces on state change:', pickedPlaces);

    localStorage.setItem(
      'SELECTED_PLACES_IDS',
      JSON.stringify(pickedPlaces.map(place => place.id))
    );
  }, [pickedPlaces]);

  //📍navigator, localStorage: global objects exposed by the browser

  /*
  💚 [⭐️ useEffect(effectFn, dependencies<Array>?)] Hook
    ❗️Effect will be executed ONLY AFTER this React component is mounted/rendered/done executing

    [in this case]: avoid INFINITE LOOP that would crash our application
  */
  useEffect(() => {
    // This is where the side effect happens ...
    navigator.geolocation.getCurrentPosition(
      position => {
        const sortedPlaces = sortPlacesByDistance(
          AVAILABLE_PLACES,
          position.coords.latitude,
          position.coords.longitude
        );
        setAvailablePlaces(sortedPlaces);
      },
      () => alert('Could NOT get your position! 🙅')
    );
    /*
    If your Effect doesn’t use any reactive values (passing an empty dependency array []):
      it will ❗️ONLY run after the initial render of your Component
        & will ❌ NOT re-run when any of your Component’s props or state change & Component re-executed/re-rendered.
    */
  }, []);

  /*
  ❗️🌟 this is a ✨Side Effect beyond the main goal of React Function (returning jsx code)

    [😐 Problem]: 
      *navigator.geolocation.getCurrentPosition will take sometime to fetch user's location
      --> the 1st component's render cycle will be finished at the point or before we get user's location
  */
  // navigator.geolocation.getCurrentPosition(
  //   position => {
  //     const sortedPlaces = sortPlacesByDistance(
  //       AVAILABLE_PLACES,
  //       position.coords.latitude,
  //       position.coords.longitude
  //     );

  //     /*
  //     [🔄 Problem that causes an INFINITE LOOP that would crash our application]:
  //       call the 'setAvailablePlaces' updateStateFn each time the user's location is fetched
  //         --> causes the Component (PlacePicker) to re-execute repeatedly

  //     ===> 💚 [⭐️ useEffect(effectFn, dependencies<Array>?)] Hook allows us to solve this problem
  //     */
  //     setAvailablePlaces(sortedPlaces);
  //   },
  //   () => alert('Could NOT get your position! 🙅')
  // );

  //📌 Not All Side Effects Need useEffect 1️⃣
  function handleSelectPlace(id) {
    //👉 callbackFn only run upon user interaction (click event), does NOT cause the Component to be re-executed ...
    setPickedPlaces(prevPickedPlaces => {
      if (prevPickedPlaces.some(place => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find(place => place.id === id);
      return [place, ...prevPickedPlaces]; //latest jsx snapshot of 'PickedPlaces' State
    });

    const storedIds =
      JSON.parse(localStorage.getItem('SELECTED_PLACES_IDS')) ?? [];
    //store the list of picked place ids in localStorage that is NOT related to returned jsx code
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        'SELECTED_PLACES_IDS',
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleRemovePlace() {
    setPickedPlaces(prevPickedPlaces =>
      prevPickedPlaces.filter(place => place.id !== selectedPlace.current)
    );
    modal.current.close();
  }

  return (
    <div className={`page-wrapper ${styles['page-wrapper-placePicker']}`}>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </div>
  );
}

export default PlacePicker_Inspect;
