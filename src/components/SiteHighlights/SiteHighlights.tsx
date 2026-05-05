import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ReactNode } from 'react';

type Highlight = {
  title: string;
  description: ReactNode;
  linkUrl: string;
  linkLabel: string;
};

const highlights: Highlight[] = [
  {
    title: `Konferencje`,
    description: (
      <>
        Dowiedz się na jakie wydarzenia z branży warto się wybrać. Poszerz swoją
        wiedzę i poznaj ludzi, którzy zajmują się komunikacją techniczną.
      </>
    ),
    linkUrl: '/konferencje',
    linkLabel: 'Lista konferencji',
  },
  {
    title: `Przydatne linki`,
    description: (
      <>
        Zbieramy i uaktualniamy listę linków do branżowych blogów, stron,
        społeczności, forów, podcastów i kursów. Umieszczamy tu pozycje które
        uważamy za wartościowe jako źródła wiedzy o technical writingu.
      </>
    ),
    linkUrl: '/linki',
    linkLabel: 'Lista przydatnych linków',
  },
];

export default function SiteHighlights() {
  return (
    <div className="container padding-top--xl padding-bottom--xl">
      <h2 className="text--center margin-bottom--xl">
        Co jeszcze znajdziesz na tej stronie?
      </h2>
      <div className="row">
        {highlights.map(({ title, description, linkUrl, linkLabel }, key) => (
          <div className="col" key={key}>
            <div
              className="card padding--lg"
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div className="padding-bottom--lg">
                <h3>{title}</h3>
                <div>{description}</div>
              </div>
              <Link href={useBaseUrl(linkUrl)}>{linkLabel}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
