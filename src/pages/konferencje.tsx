import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { isDateInFuture } from '../lib/date-utils';
import logo from '@site/static/img/logo-square.png';

type Converence = {
  startDate: Date;
  endDate: Date;
  title: string;
  location: 'Online' | string;
  link: string;
  isPartner?: boolean;
};

const conferences: Converence[] = [
  {
    title: 'UX Writer Conference',
    startDate: new Date('28 Jan 2025'),
    endDate: new Date('28 Jan 2025'),
    location: 'Online',
    link: 'https://uxwriterconference.com',
  },
  {
    title: 'MEGAComm',
    startDate: new Date('12 Feb 2025'),
    endDate: new Date('13 Feb 2025'),
    location: 'Online',
    link: 'https://megacomm.org/',
  },
  {
    title: 'DITA-OT Day',
    startDate: new Date('16 Feb 2025'),
    endDate: new Date('16 Feb 2025'),
    location: 'Kopenhaga, Dania',
    link: 'https://www.oxygenxml.com/events/2025/dita-ot_day.html',
  },
  {
    title: 'DITA Europe',
    startDate: new Date('17 Feb 2025'),
    endDate: new Date('18 Feb 2025'),
    location: 'Kopenhaga, Dania',
    link: 'https://ditaeurope.infomanagementcenter.com',
  },
  {
    title: 'UX360 virtual',
    startDate: new Date('19 Feb 2025'),
    endDate: new Date('20 Feb 2025'),
    location: 'Online',
    link: 'https://www.virtual.ux360summit.com/',
  },
  {
    title: 'Web Summit Qatar',
    startDate: new Date('23 Feb 2025'),
    endDate: new Date('26 Feb 2025'),
    location: 'Doha, Katar',
    link: 'https://qatar.websummit.com',
  },

  {
    title: 'Nordic TechKomm	',
    startDate: new Date('12 Mar 2025'),
    endDate: new Date('13 Mar 2025'),
    location: 'Sztokholm, Szwecja',
    link: 'https://se.nordic-techkomm.com 	',
  },
  {
    title: 'Women TechStyle Summit',
    startDate: new Date('20 Mar 2025	'),
    endDate: new Date('20 Mar 2025	'),
    location: 'online',
    link: 'https://womentechstyle.pl/',
  },
  {
    title: 'Leading Design New York',
    startDate: new Date('27 Mar 2025	'),
    endDate: new Date('27 Mar 2025	'),
    location: 'Nowy Jork, USA',
    link: 'https://leadingdesign.com/conferences/leading-design-new-york-2025',
  },

  {
    title: 'Information Energy',
    startDate: new Date('2 April 2025'),
    endDate: new Date('4 April 2025'),
    location: 'Online',
    link: 'https://www.informationenergy.org/de/',
  },
  {
    title: 'Learning Technologies',
    startDate: new Date('23 April 2025'),
    endDate: new Date('23 April 2025'),
    location: 'Londyn, Anglia',
    link: 'https://www.learningtechnologies.co.uk',
  },
  {
    title: 'Web Summit Rio',
    startDate: new Date('27 April 2025'),
    endDate: new Date('30 April 2025'),
    location: 'Rio De Janeiro, Brazylia',
    link: 'https://rio.websummit.com',
  },

  {
    title: 'Write The Docs',
    startDate: new Date('4 May 2025'),
    endDate: new Date('6 May 2025'),
    location: 'Portland, USA',
    link: 'https://www.writethedocs.org/conf/portland/2025/',
  },
  {
    title: 'DDX Innovation & UX Conference',
    startDate: new Date('10 May 2025'),
    endDate: new Date('10 May 2025'),
    location: 'Monachium, Niemcy',
    link: 'https://www.ddxconference.com/munich',
  },
  {
    title: 'UXDX USA',
    startDate: new Date('12 May 2025'),
    endDate: new Date('14 May 2025'),
    location: 'Nowy Jork, USA i online',
    link: 'https://uxdx.com/usa/2025/',
  },
  {
    title: 'UX360 Europe',
    startDate: new Date('14 May 2025'),
    endDate: new Date('15 May 2025'),
    location: 'Berlin, Niemcy',
    link: 'https://www.eu.ux360summit.com/',
  },
  {
    title: 'UXDX EMEA',
    startDate: new Date('19 May 2025'),
    endDate: new Date('21 May 2025'),
    location: 'Berlin, Niemcy i online',
    link: 'https://uxdx.com/berlin/2025/',
  },
  {
    title: 'UX LX',
    startDate: new Date('20 May 2025'),
    endDate: new Date('23 May 2025'),
    location: 'Lizbona, Portugalia',
    link: 'https://www.ux-lx.com',
  },
  {
    title: 'Evolution of TC',
    startDate: new Date('27 May 2025'),
    endDate: new Date('28 May 2025'),
    location: 'Sofia, Bułgaria',
    link: 'https://evolution-of-tc.com',
  },
  {
    title: 'Web Summit Vancouver',
    startDate: new Date('27 May 2025'),
    endDate: new Date('30 May 2025'),
    location: 'Vancouver, Kanada',
    link: 'https://vancouver.websummit.com',
  },

  {
    title: 'LocWorld53',
    startDate: new Date('3 June 2025'),
    endDate: new Date('5 June 2025'),
    location: 'Malmo, Szwecja',
    link: 'https://locworld.com/events/locworld53-malmo-2025/',
  },
  {
    title: 'Markup UK',
    startDate: new Date('5 June 2025'),
    endDate: new Date('7 June 2025'),
    location: 'Londyn, Anglia',
    link: 'https://markupuk.org/index.html',
  },
  {
    title: 'AGILE Conference',
    startDate: new Date('10 June 2025'),
    endDate: new Date('13 June 2025'),
    location: 'Drezno, Niemcy',
    link: 'https://agile-gi.eu/conference-2025',
  },
  {
    title: 'UX Scotland',
    startDate: new Date('11 June 2025'),
    endDate: new Date('12 June 2025'),
    location: 'Edynburg, Szkocja',
    link: 'https://uxscotland.net/',
  },

  {
    title: 'Balisage: The Markup Conference	',
    startDate: new Date('4 August 2025'),
    endDate: new Date('8 August 2025'),
    location: 'Online',
    link: 'https://www.balisage.net/index.html',
  },

  {
    title: 'CAKE conf',
    startDate: new Date(' 19 Sep 2025'),
    endDate: new Date(' 20 Sep 2025'),
    location: 'Kraków, Polska',
    link: 'https://cakeconf.contentbytes.pl/',
    isPartner: true,
  },

  {
    title: 'World Usability Congress',
    startDate: new Date('14 Oct 2025'),
    endDate: new Date('16 Oct 2025'),
    location: 'Graz, Austria',
    link: 'https://worldusabilitycongress.com',
  },
  {
    title: 'KMIS',
    startDate: new Date('20 Oct 2025'),
    endDate: new Date('22 Oct 2025'),
    location: 'Marbella, Hiszpania',
    link: 'https://kmis.scitevents.org',
  },

  {
    title: 'tcworld conference',
    startDate: new Date('11 Nov 2025'),
    endDate: new Date('13 Nov 2025'),
    location: 'Stuttgart, Niemcy',
    link: 'https://tcworldconference.tekom.de',
  },
  {
    title: 'Leading Design London',
    startDate: new Date('12 Nov 2025'),
    endDate: new Date('13 Nov 2025'),
    location: 'Londyn, Anglia',
    link: 'https://leadingdesign.com/conferences/london-2025',
  },
  {
    title: 'Code Europe',
    startDate: new Date('30 June 2025'),
    endDate: new Date('1 July 2025'),
    location: 'Kraków, Polska',
    link: 'https://www.codeeurope.pl',
    isPartner: true,
  },
];

function DateDisplay({ date }: { date: Date }) {
  return (
    <div>
      {date.toLocaleDateString('pl', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </div>
  );
}

type ConferenceListProps = {
  conferences: Converence[];
  archived?: boolean;
};

function ConferenceList({ conferences, archived }: ConferenceListProps) {
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
      {conferences.map(
        ({ title, startDate, endDate, link, location, isPartner }) => (
          <section
            className="card padding--lg margin--lg"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
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
                <DateDisplay date={startDate} />
                {startDate.getDate() != endDate.getDate() && (
                  <DateDisplay date={endDate} />
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

export default function Konferencje() {
  conferences.sort((a, b) => (a.startDate > b.endDate ? 1 : -1));

  const pastConferences = conferences.filter(
    (conf) => !isDateInFuture(conf.endDate)
  );

  const futureConferences = conferences.filter((conf) =>
    isDateInFuture(conf.endDate)
  );
  return (
    <Layout title="Konferencje">
      <main>
        <div className="container padding-top--lg padding-bottom--lg">
          <h1>Nadchodzące konferencje</h1>
          <ConferenceList conferences={futureConferences} />
          <h2>Minione konferencje</h2>
          <ConferenceList conferences={pastConferences} archived />
        </div>
      </main>
    </Layout>
  );
}
