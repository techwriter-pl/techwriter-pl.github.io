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
    title: 'Freelance Technical Writer (Remote) 80-100%',
    company: 'Schmid GmbH energy solutions - Polen',
    link: 'https://jobs.dualoo.com/portal/schmid-ag-energy-solutions/1a90f780-3e34-4815-9440-54ca0c2c9975/detail?lang=EN',
    location: 'Polska (zdalnie)',
    type: 'zdalna',
    description: `- Wsparcie dokumentacji technicznej dla produktów przemysłowych z wykorzystaniem narzędzi XML (preferowane Schema ST4). 
- Dokumentacja w języku angielskim, komunikacja i pozyskiwanie informacji w języku **niemieckim** i **polskim**. 
- Praca zdalna z Polski, okazjonalne wyjazdy do zakładu w Elblągu i siedziby w Szwajcarii. 
- Praca w międzynarodowym zespole, tworzenie instrukcji użytkownika, przewodników serwisowych i instrukcji roboczych.`,
  },
  {
    title: 'Specjalista ds. Dokumentacji Technicznej – Technical Writer',
    company: 'GREY PARTNERS POLAND SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ',
    link: 'https://www.pracuj.pl/praca/specjalista-ds-dokumentacji-technicznej-technical-writer-poznan,oferta,1004085858',
    location: 'Poznań',
    type: 'hybrydowo',
    description: `#### Tworzenie, aktualizacja i redagowanie dokumentacji technicznej, w tym:
    
- instrukcji użytkowania,
- etykiet,
- dokumentów produktowych.

#### Wymagania:

- Znajomość języka angielskiego,
- Doświadczenie w dokumentacji technicznej,
- Znajomość narzędzi takich jak XML, Adobe InDesign, MS Office.

#### Mile widziane:

- Doświadczenie z CAD,
- Znajomość "Technical Simplified English".`,
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
];
