import styles from '../../pages/PlacePicker/PlacePicker.module.css';

export default function Places({ title, places, fallbackText, onSelectPlace }) {
  return (
    <section className={styles['places-category']}>
      <h2>{title}</h2>
      {places.length === 0 && (
        <p className={styles['fallback-text']}>{fallbackText}</p>
      )}
      {places.length > 0 && (
        <ul className={styles.places}>
          {places.map(place => (
            <li key={place.id} className={styles['place-item']}>
              <button onClick={() => onSelectPlace(place.id)}>
                <img src={place.image.src} alt={place.image.alt} />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
