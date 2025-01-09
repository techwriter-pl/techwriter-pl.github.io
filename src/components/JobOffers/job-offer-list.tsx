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
    title: 'Technical Writer',
    company: 'Techland',
    link: 'https://techland.net/job-offers/technical-writer-15',
    location: 'Warszawa, Wrocław',
    type: 'w biurze',
    description: `Techland to firma z wieloletnią historią w branży gier.
    Dzięki ponad 30-letniemu doświadczeniu na rynku wie, jak dostarczać niezapomniane wrażenia. 
    Ich międzynarodowy zespół z siedzibą w Polsce składa się z ponad 500 profesjonalistów.
    Są znani z takich gier jak The Call of Juarez i Dying Light. Ale na tym nie poprzestają. Chcą nadal tworzyć fascynujące tytuły AAA oparte na nowatorskiej rozgrywce.
    
    Obecnie Techland poszukuje osoby na stanowisko Technical Writera, która będzie odpowiedzialna za pisanie i ulepszanie dokumentacji technicznej dla twórców treści i deweloperów.`,
  },
  {
    title: 'Technical Writer',
    company: 'Guidewire Software',
    link: 'https://www.guidewire.com/about/careers/jobs/technical-writer-JR_12577',
    location: 'Kraków',
    type: 'hybrydowo',
    description: `Guidewire poszukuje osoby, która pomoże tworzyć dokumentację
do ich design systemu i platformy cyfrowej. Guidewire dostarcza platformę dla
firm ubezpieczeniowych.

Rzeczoną dokumentację możecie zobaczyć [tutaj](https://docs.guidewire.com/jutro/documentation/10.9/).
Co ciekawe, platforma Guidewire nazywa się Jutro. Mimo, że firma jest amerykańska
jak hamburgery i 4 lipca, to nazwa platformy wzięła się z języka polskiego.`,
  },
  {
    title: 'Senior R&D Technical Writer',
    company: 'Hitachi Energy',
    link: 'https://www.linkedin.com/jobs/view/4084134730/',
    location: 'Kraków',
    type: 'w biurze',
    description: `Firma Hitachi Energy, którą możecie kojarzyć z
[meetupu o technical writingu i kulturze japońskiej](https://techwriter.pl/relacja-z-meetupu-hitachi-karate/),
[projektu District C](https://techwriter.pl/district-c-collaboration) i
zgłębiania zasad prostego języka angielskiego według specyfikacji ASD STE-100
prowadzi własnie rekrutację na stanowisko Senior R&D Technical Writer.

Więcej szczegółów na temat oferty znajdziecie w
[ogłoszeniu na LinkedIn](https://www.linkedin.com/jobs/view/4084134730/).
Aplikować możecie przez
[platformę Workday pracodawcy](https://hitachi.wd1.myworkdayjobs.com/hitachi/job/Krakow-Lesser-Poland-Poland/Senior-R-D-Technical-Writer_R0065617/apply?source=hitachienergy&ref=).

Rekrutację prowadzi
[Piotra Sroka](https://www.linkedin.com/in/piotrsrokatechwriter/) oraz
[Mariusz Kaczmarek](https://www.linkedin.com/in/mariuszkaczmarek-pl/). Jeśli
macie jakieś dodatkowe pytania na temat oferty, odezwijcie się do nich.`,
  },
];
