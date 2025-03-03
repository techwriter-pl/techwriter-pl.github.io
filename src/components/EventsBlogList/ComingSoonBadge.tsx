import styles from './ComingSoon.module.css';
import badgeImage from './juz-wkrotce.png';

export default function ComingSoonBadge() {
  return (
    <div className={styles.wrapper}>
      <img
        src={badgeImage}
        className={styles.badge}
        alt="Pulsujący napis 'już wkrótce'"
      />
    </div>
  );
}
