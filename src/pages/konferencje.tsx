import { ConferenceList } from '@site/src/components/Conferences/ConferenceList';
import { conferences } from '@site/src/components/Conferences/Conferences';
import Layout from '@theme/Layout';
import { CSSProperties, useState } from 'react';
import { isDateInFuture } from '../lib/date-utils';

type TypeFilter = 'all' | 'online' | 'in-person';
type LocationFilter = 'all' | 'poland' | 'international';

export default function Konferencje() {
  const [filterType, setFilterType] = useState<TypeFilter>('all');
  const [filterLocation, setFilterLocation] = useState<LocationFilter>('all');

  const filteredConferences = conferences.filter((conf) => {
    const matchesType =
      filterType === 'all' ||
      (filterType === 'online' && conf.type.includes('online')) ||
      (filterType === 'in-person' && conf.type.includes('in-person'));

    const matchesLocation =
      filterLocation === 'all' ||
      (filterLocation === 'poland' && conf.location.includes('Polska')) ||
      (filterLocation === 'international' && !conf.location.includes('Polska'));

    return matchesType && matchesLocation;
  });

  const pastConferences = filteredConferences.filter(
    (conf) => !isDateInFuture(conf.endDate)
  );
  pastConferences.sort((a, b) => (a.startDate > b.startDate ? -1 : 1));

  const futureConferences = filteredConferences.filter((conf) =>
    isDateInFuture(conf.endDate)
  );
  futureConferences.sort((a, b) => (a.startDate > b.startDate ? 1 : -1));

  const filterStyles: CSSProperties = { display: 'flex', gap: '1rem' };

  return (
    <Layout
      title="Konferencje"
      description="Lista konferencji, które mogą Cię zainteresować."
    >
      <main>
        <div className="container padding-top--lg padding-bottom--lg">
          <h1>Konferencje</h1>
          <p>
            Na tej stronie znajdziesz listę konferencji, które mogą Cię
            zainteresować. Jeśli organizujesz konferencję i chcesz, abyśmy ją
            dodali do tej listy, skontaktuj się z nami.
          </p>

          <div className="row" style={{ fontSize: '1.2rem' }}>
            <label className="col margin-bottom--lg" style={filterStyles}>
              Typ konferencji:
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value as TypeFilter)}
              >
                <option value="all">Wszystkie</option>
                <option value="online">Online</option>
                <option value="in-person">Stacjonarne</option>
              </select>
            </label>

            <label className="col margin-bottom--lg" style={filterStyles}>
              Lokalizacja:
              <select
                value={filterLocation}
                onChange={(e) =>
                  setFilterLocation(e.target.value as LocationFilter)
                }
              >
                <option value="all">Wszystkie</option>
                <option value="poland">Polska</option>
                <option value="international">Międzynarodowe</option>
              </select>
            </label>
          </div>

          <h2>Nadchodzące konferencje</h2>
          <ConferenceList conferences={futureConferences} />
          <h2>Minione konferencje</h2>
          <ConferenceList conferences={pastConferences} archived />
        </div>
      </main>
    </Layout>
  );
}
