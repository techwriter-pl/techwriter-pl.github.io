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
    title: 'Open Source Technical Writer',
    company: 'Antmicro',
    link: 'https://careers.antmicro.com/jobs/technical-writer/',
    location: 'Poznan, Wroclaw, Gdansk, Gothenburg',
    type: 'w biurze',
    description: `Oferta dla osób zajawionych na technologie open source. Tym razem, tech writer jest częścią zespołu marketingowego.

Firma pisze o obie tak:

> We enable Artificial Intelligence at the edge, create complex IoT systems and build robots, drones and other intelligent devices for customers around the globe thanks to our extensive in-house R&D.
 
Z ciekawszych wymagań, oferta wymienia dobrą znajomość zasad naukowych (scientific principles). Dodatkowym plusem będzie znajomość Pythona i Gita, chociaż nie jest to absolutnie wymagane.`,
  },
  {
    title: 'Senior R&D Technical Writer',
    company: 'Hitachi Energy',
    link: 'https://www.hitachienergy.com/careers/open-jobs/details/JID3-121956',
    location: 'Łódź',
    type: 'hybrydowo',
    description: `Najważniejsze informacje o ofercie:
- Branża: energetyczna, transformatory
- Kluczowe wymagania: bardzo dobra znajomość języka angielskiego, doświadczenie w tworzeniu zrozumiałej dokumentacji technicznej, 
- Mile widziana znajomość: podręczników stylu i standardów pisania w języku angielskim, podejścia docs-as-code, narzędzi do tworzenia dokumentacji i systemów zarządzania treścią, Git, Azure DevOps.`,
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
];
