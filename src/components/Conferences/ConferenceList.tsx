import Link from '@docusaurus/Link';
import logo from '@site/static/img/logo-square.png';
import { ConferenceDateDisplay } from './ConferenceDateDisplay';
import { Conference } from './ListOfConferences';

type ConferenceListProps = {
  conferences: Conference[];
  archived?: boolean;
};

export function ConferenceList({ conferences, archived }: ConferenceListProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        padding: '2rem 0',
        margin: '2rem 0',
        background: archived
          ? 'linear-gradient(90deg,rgba(150, 150, 150, 1) 0%, rgba(94, 99, 95, 1) 50%, rgba(36, 36, 33, 1) 100%)'
          : 'linear-gradient(90deg,var(--tech-writer-blue) 0%, rgba(148, 168, 155, 1) 50%, var(--tech-writer-yellow) 100%)',
        borderImage:
          'linear-gradient(var(--angle), var(--tech-writer-yellow), var(--tech-writer-blue)) 1',
        borderWidth: '4px',
      }}
    >
      {conferences.length === 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: 20,
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '2rem',
          }}
        >
          Nie ma konferencji tego typu
        </div>
      )}
      {conferences.map(
        ({ title, startDate, endDate, link, location, isPartner }, key) => (
          <section
            className="card padding--lg margin--lg"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
            key={key}
          >
            <div>
              <h2
                style={{
                  marginBottom: 8,
                  fontSize: title.length > 20 ? 20 : undefined,
                }}
              >
                {title}
              </h2>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 14,
                  fontStyle: 'italic',
                  padding: '4px 8px',
                  border: '1px solid var(--tech-writer-blue)',
                  borderRadius: 8,
                }}
              >
                <ConferenceDateDisplay date={startDate} />
                {startDate.getDate() != endDate.getDate() && (
                  <ConferenceDateDisplay date={endDate} />
                )}
              </div>
            </div>
            <div>
              {isPartner ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <img src={logo} alt="" width={16} height={16} />
                  <strong>partner</strong>
                </div>
              ) : (
                <div>&nbsp;</div>
              )}
              <div>{location}</div>
              <Link href={link}>link</Link>
            </div>
          </section>
        )
      )}
    </div>
  );
}
