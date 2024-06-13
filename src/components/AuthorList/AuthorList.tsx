import React from 'react';
import authors from '@site/blog/authors.yml';
import AuthorAvatar, { AuthorProps } from '@site/src/components/AuthorAvatar';
import styles from './AuthorList.module.css';
import Link from '@docusaurus/Link';

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
      Absolwent filologii angielskiej ze sporym dorobkiem tłumaczeniowym. Od ponad dekady
      jest tech writerem. Obecnie specjalizuje się w dziedzinie Industrial Internet of Things 
      w branży energetycznej. Zawodowo miał dużą styczność z instrukcjami,
      e-learningiem, ciekawi się coachingiem. Fan aplikacji Snagit firmy
      TechSmith. Prywatnie interesuje się filmem, muzyką rockowo-metalową, lubi
      czytać książki i jeździć na nartach. Od piątego roku życia zafascynowany
      dinozaurami i tak już mu zostało. Drugą grupą zwierząt, którą ceni
      szczególnie są żółwie.
    </>
  ),
  niedzwiedzka: (
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
  jkula: (
    <>
      Tłumaczka języka angielskiego specjalizująca się w tłumaczeniach
      prawniczych. Od niedawna tech writerka, która postanowiła związać swoje
      dalsze losy z branżą IT. Absolwentka studiów podyplomowych z komunikacji
      technicznej na Akademii Finansów i Biznesu Vistula. Uwielbia czytać
      kryminały, oglądać filmy sensacyjne, szydełkować amigurumi i… pisać. Ma w
      planach wydać kiedyś własną powieść z wątkiem obyczajowo-kryminalnym. I
      skoczyć ze spadochronem.
    </>
  ),
  pensjonatus: (
    <>
      Działa w branży od 2008 roku. Zaczynał jako Technical Writer, potem
      zajmował się narzędziami do dokumentacji, oraz wdrażaniem dity. Członek
      rady <Link href="http://itcqf.org/">ITCQF</Link>, obecnie pracuje w
      polskim oddziale Guidewire Software. W wolnych chwilach lubi pisać flash
      fiction, czytać książki i grać na komputerze. Czeka aż roboty nas
      zastąpią, żebyśmy mogli wreszcie wziąć urlop. Nigdy nie jeździł na
      nartach, ale zawsze sobie mówi, że w tym sezonie spróbuje.
    </>
  ),
  mojk: (
    <>
      Przygodę z komunikacją techniczną rozpoczął w 2012 roku. Wraz z kolegami i
      koleżankami stara się rozkręcać polską branżę tech comm. Na początku 2014
      dołączył do techwriter.pl jako redaktor, a z biegiem czasu zaczął się też
      zajmować szeroko pojętym prowadzeniem portalu.
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
  toporek: (
    <>
      Martyna works with technical documentation every day. Complicated
      machines, production lines and food technology are her favourite things.
      In her spare time, Martyna loves traveling, riding bike, climbing, walking
      in the mountains, crocheting and reading books. She likes sophistication
      and experimentation. From time-to-time she writes articles and draws
      pictures.
    </>
  ),
  niewiarowski: (
    <>
      A graduate of English Philology with considerable translation
      experience. For well over a decade he has been a tech writer. 
      He currently specializes in the Industrial Internet of Things domain for the energy sector. 
      He designed instructions, procedures, e-learning material, and is interested in coaching.
      A fan of TechSmith’s Snagit app. His afterwork hobbies include watching films and listening to rock
      and metal music. He also likes reading and skiing. Since the age of five,
      he has been fascinated with dinosaurs and it stayed that way. The second group
      of animals that he especially admires are turtles (tortoises too!!!).
    </>
  ),
  niedzwiedzka: (
    <>
      Technical writer, a graduate of journalism at the University of Warsaw and
      technical communication at the Vistula Academy of Finance and Business.
      She and her friends create the girls.js community, where women can take
      their first steps in learning JavaScript for free. In the few free time,
      she learns polyphonic songs in the languages ​​of our eastern neighbours,
      practices yoga and cultivates plants in the community garden.
    </>
  ),
  jkula: (
    <>
      A translator from English to Polish, Justyna specializes in legal
      translations. SHe recently became a tech writer and embarked on a journey
      into the world of IT. SHe graduated from the post-diploma course in
      technical communication at Vistula University. She loves detective
      stories, action films, amigurumi (crochet), and... writing. She plans on
      publishing a crime novel about real human feelings. And parachute.
    </>
  ),
  pensjonatus: (
    <>
      Not an actual real person. He's been in the business of tech content since
      2008. Has worked as a writer, programmer, and DITA guy. A board member at{' '}
      <Link href="http://itcqf.org/">ITCQF</Link>, currently at Guidewire
      Software. Sometimes writes flash fiction, reads books or plays computer
      games. Is looking forward to the time when AI will take over so we can all
      take a break.
    </>
  ),
  mojk: (
    <>
      His adventure with technical communication started in 2012.Together with
      his colleagues, he tries to grow the Polish tech comm scene. At the
      beginning of 2014, he joined techwriter.pl as an editor and later he also
      became responsible for running the entire portal. He left the staff in
      June 2019.
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
