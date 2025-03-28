import Link from '@docusaurus/Link';
import { useEffect, useState } from 'react';
import styles from './UpcomingEvents.module.css';
import { EventDetails, getFeed } from './utils';
import clsx from 'clsx';

export function UpcomingEvents() {
  const [eventList, setEventList] = useState<EventDetails[]>([]);

  useEffect(() => {
    async function populateEventList() {
      const events = await getFeed();
      setEventList(events);
    }
    populateEventList();
  }, []);

  if (eventList.length === 0) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={clsx('col', styles.centered)}>
        <h2>📆 Nachodzące wydarzenia</h2>
      </div>
      {eventList.map(({ date, link, title }, index) => (
        <div
          key={index}
          className="col card padding-top--lg padding-bottom--lg"
        >
          <div className={styles.date}>
            {date.toLocaleDateString('pl', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </div>
          <Link href={link}>{title}</Link>
        </div>
      ))}
      <div className={clsx('col', styles.centered)}>
        <Link className="button button--primary" href="/wydarzenia">
          Więcej wydarzeń
        </Link>
      </div>
    </div>
  );
}
