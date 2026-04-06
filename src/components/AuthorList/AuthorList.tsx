import Link from '@docusaurus/Link';
import authors from '@site/blog/authors.yml';
import AuthorAvatar, { AuthorProps } from '@site/src/components/AuthorAvatar';
import styles from './AuthorList.module.css';

const polishDescriptions: { [id: string]: JSX.Element } = {
  agnieszka: (
    <>
      Od kilku lat stawia kroki w tech commie, głównie współpracując z
      techwriter.pl. Absolwentka filologii angielskiej. Obecnie wykonuje zawód
      matka. Blogerka. Pasjonatka i propagatorka czytelnictwa z zacięciem do
      podróży i fotografii.
    </>
  ),
  niewiarowski: (
    <>
      Absolwent filologii angielskiej ze sporym dorobkiem tłumaczeniowym. Od
      ponad dekady jest tech writerem. Obecnie specjalizuje się w dziedzinie
      Industrial Internet of Things w branży energetycznej. Zawodowo miał dużą
      styczność z instrukcjami, e-learningiem, ciekawi się coachingiem. Fan
      aplikacji Snagit firmy TechSmith. Prywatnie interesuje się filmem, muzyką
      rockowo-metalową, lubi czytać książki i jeździć na nartach. Od piątego
      roku życia zafascynowany dinozaurami i tak już mu zostało. Drugą grupą
      zwierząt, którą ceni szczególnie są żółwie.
    </>
  ),
  niedzwiecka: (
    <>
      Technical writerka, zaprzyjaźniona z branżą IT prawie od zawsze.
      Absolwentka dziennikarstwa na Uniwersytecie Warszawskim oraz studiów
      podyplomowych z komunikacji technicznej na Akademii Finansów i Biznesu
      Vistula. Wraz z przyjaciółmi tworzy społeczność{' '}
      <Link href="https://girlsjs.pl/">girls.js</Link>, gdzie kobiety mogą za
      darmo stawiać pierwsze kroki w nauce JavaScriptu. W nielicznych wolnych
      chwilach uczy się wielogłosowych pieśni w językach naszych wschodnich
      sąsiadów, praktykuje jogę i pielęgnuje rośliny w ogrodzie
      społecznościowym.
    </>
  ),
  pensjonatus: (
    <>
      Działa w branży od 2008 roku. Zaczynał jako Technical Writer, potem
      zajmował się narzędziami do dokumentacji, oraz wdrażaniem dity. Obecnie
      pracuje w polskim oddziale Guidewire Software. W wolnych chwilach lubi
      pisać flash fiction, czytać książki i grać na komputerze. Czeka aż roboty
      nas zastąpią, żebyśmy mogli wreszcie wziąć urlop. Nigdy nie jeździł na
      nartach, ale zawsze sobie mówi, że w tym sezonie spróbuje.
    </>
  ),
  mojk: (
    <>
      Przygodę z komunikacją techniczną rozpoczął w 2012 roku, po tym jak
      porzucił nigdy nierozpoczętą karierę modela. Dwa lata później dołączył do
      techwriter.pl i tak już został (z krótką przerwą na reset). Wraz z
      kolegami i koleżankami po fachu stara się rozkręcać polską branżę tech
      comm. Obecnie realizuje się jako kodujący Tech Writer w polskim oddziale
      Guidewire Software oraz współtwórca podcastu "Tech Writer koduje".
      Interesują go mało popularne dyscypliny sportu, takie jak bieganie i jazda
      na rowerze. Gdyby nie związał się z dokumentacją, zostałby strażakiem.
    </>
  ),
  magdazaczek: (
    <>
      Rozpoczęła pracę jako technical writerka w 2019 roku. Od tego czasu
      zdobywała doświadczenie w trzech różnych firmach, tworząc dokumentację
      techniczną. Od ponad trzech lat zajmuje się pisaniem dokumentacji dla
      rozwiązań dostępnych na Atlassian Marketplace. W maju 2025 roku ukończyła
      studia podyplomowe z komunikacji technicznej na Akademii Finansów i
      Biznesu Vistula.
    </>
  ),
};

const englishDescriptions: { [id: string]: JSX.Element } = {
  agnieszka: (
    <>
      For the past few years, she’s been gaining experience in tech comm, mainly
      as an editor of techwriter.pl. She graduated in English. Currently, she’s
      occupied with being a mother and blogger. Agnieszka is passionate about
      travelling, photography, and reading.
    </>
  ),
  niewiarowski: (
    <>
      A graduate of English Philology with considerable translation experience.
      For well over a decade he has been a tech writer. He currently specializes
      in the Industrial Internet of Things domain for the energy sector. He
      designed instructions, procedures, e-learning material, and is interested
      in coaching. A fan of TechSmith’s Snagit app. His afterwork hobbies
      include watching films and listening to rock and metal music. He also
      likes reading and skiing. Since the age of five, he has been fascinated
      with dinosaurs and it stayed that way. The second group of animals that he
      especially admires are turtles (tortoises too!!!).
    </>
  ),
  niedzwiecka: (
    <>
      Technical writer, a graduate of journalism at the University of Warsaw and
      technical communication at the Vistula Academy of Finance and Business.
      She and her friends create the girls.js community, where women can take
      their first steps in learning JavaScript for free. In the few free time,
      she learns polyphonic songs in the languages ​​of our eastern neighbours,
      practices yoga and cultivates plants in the community garden.
    </>
  ),
  pensjonatus: (
    <>
      He's been in the business of tech content since 2008. Has worked as a
      writer, programmer, and DITA guy. Currently at Guidewire Software.
      Sometimes writes flash fiction, reads books or plays computer games. He's
      looking forward to the time when AI will take over so we can all take a
      break.
    </>
  ),
  mojk: (
    <>
      He began his technical communication journey in 2012, after abandoning a
      never-started modeling career. Two years later, he joined techwriter.pl
      and has stayed ever since (with a short break to reset). Together with his
      colleagues, he strives to rock the Polish tech comm scene. Currently, he
      works as a coding Tech Writer at the Polish branch of Guidewire Software
      and co-creates the "Tech Writer koduje" podcast. He is interested in
      not-so-popular sports, such as running and cycling. Had he not become
      involved in documentation, he would have become a firefighter.
    </>
  ),
  magdazaczek: (
    <>
      Magda began her career as a technical writer in 2019. Since then, she has
      gained experience working in three different companies, creating technical
      documentation for software apps. For over three years, she has been
      writing documentation for apps available on the Atlassian Marketplace. In
      May 2025, she completed postgraduate studies in technical communication at
      the Vistula Academy of Finance and Business.
    </>
  ),
};

type AuthorListProps = {
  language?: 'Polish' | 'English';
};

export default function AuthorList({ language }: AuthorListProps) {
  const authorList: AuthorProps[] = Object.entries<AuthorProps>(authors).map(
    ([key, value]) => ({
      name: value.name,
      role: value.role,
      image_url: value.image_url,
      url: value.url,
      id: key,
    })
  );

  authorList.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className={styles.wrapper}>
      {authorList
        .filter(
          (author) =>
            englishDescriptions[author.id] && polishDescriptions[author.id]
        )
        .map((author: AuthorProps) => (
          <div key={author.name} className={styles.author}>
            <AuthorAvatar {...author} />
            <div>
              {language && language === 'English'
                ? englishDescriptions[author.id]
                : polishDescriptions[author.id]}
            </div>
          </div>
        ))}
    </div>
  );
}
