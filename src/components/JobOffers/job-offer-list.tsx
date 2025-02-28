export type JobOfferProps = {
  title: string;
  company: string;
  link: string;
  location: string;
  type: 'zdalna' | 'w biurze' | 'hybrydowo';
  description: string;
};

export const jobOffers: JobOfferProps[] = [
  {
    title: 'Redaktor',
    company: 'Techwriter.pl',
    link: '/oferta-wspolpracy-redaktor-techwriter-pl',
    location: 'cały świat',
    type: 'zdalna',
    description: `Chcesz pisać dla techwriter.pl i tym samym mieć wpływ na rozwój polskiej społeczności komunikacji technicznej? 
      Nie jest to oferta płatnej pracy, ale może dać Ci dużo innych korzyści.`,
  },
  {
    title: 'Technical Writer with German',
    company: 'Etteplan',
    link: 'https://emp.jobylon.com/jobs/271520-etteplan-technical-writer-with-german/',
    location: 'Wrocław, Katowice, Poznań, Gdańsk',
    type: 'hybrydowo',
    description: `Najważniejsze informacje o ofercie:
- Kluczowe wymagania: biegła znajomość języka niemieckiego i angielskiego, doświadczenie w dokumentacji technicznej, znajomość XML/DITA/S1000D

Etteplan oferuje:
- Pracę w międzynarodowym środowisku 
- Pakiet benefitów (opieka medyczna, Multisport, ubezpieczenie grupowe)
- Elastyczne godziny pracy 
- Szkolenia i możliwości rozwoju`,
  },
  {
    title: 'Technical Writer',
    company: 'Etteplan',
    link: 'https://emp.jobylon.com/jobs/273798-etteplan-technical-writer-hybrydowo-szczecin/',
    location: 'Szczecin (3 dni w fabryce, 2 dni zdalnie)',
    type: 'hybrydowo',
    description: `Najważniejsze informacje o ofercie:
- Branża: turbiny wiatrowe 
- Kluczowe wymagania: bardzo dobra znajomość języka angielskiego, doświadczenie w dokumentacji technicznej, znajomość XML/DITA/S1000D 

Etteplan oferuje:
- Pracę w międzynarodowym środowisku 
- Pakiet benefitów (opieka medyczna, Multisport, ubezpieczenie grupowe)
- Elastyczne godziny pracy 
- Szkolenia i możliwości rozwoju`,
  },
  {
    title: 'Senior Technical Writer - Developer Content',
    company: 'Splunk',
    link: 'https://www.splunk.com/en_us/careers/jobs/senior-technical-writer-developer-31867.html',
    location: 'Kraków',
    type: 'hybrydowo',
    description: `Splunk tworzy oprogramowanie do monitorowania i analizy dużej ilości danych w czasie rzeczywistym. 
  Splunk również skrupulatnie buduje swoją obecność w Krakowie intensywnie rekrutując. 

  Kogo szukają? 

  Jeśli jesteś doświadczonym Technical Writerem, ale zawsze ciągnęło Cię w stronę kodu, jeśli do tego dobrze rozumiesz się z programistami i udzielasz się w projektach open sourceowych - jest duża szansa, że szukasz właśnie takiej oferty!
  
  P.S. Nie będziesz jedynym Tech Writerem na miejscu. I choć większość zespołu dokumentalistów znajduje się w Stanach, w Polsce mamy już 5 pisarzy, którzy wspierają lokalne zespoły developerskie.`,
  },
  {
    title: 'Technical Writer',
    company: 'Techland',
    link: 'https://techland.net/job-offers/technical-writer-15',
    location: 'Warszawa, Wrocław',
    type: 'w biurze',
    description: `Techland to firma z wieloletnią historią w branży gier. 
Dzięki ponad 30-letniemu doświadczeniu na rynku wie, jak dostarczać niezapomniane wrażenia.
Ich międzynarodowy zespół z siedzibą w Polsce składa się z ponad 500 profesjonalistów. 
Są znani z takich gier jak The Call of Juarez i Dying Light. Ale na tym nie poprzestają. Chcą nadal tworzyć fascynujące tytuły AAA oparte na nowatorskiej rozgrywce.

Obecnie Techland poszukuje osoby na stanowisko Technical Writera, 
która będzie odpowiedzialna za pisanie i ulepszanie dokumentacji technicznej dla twórców treści i deweloperów.`,
  },
];
