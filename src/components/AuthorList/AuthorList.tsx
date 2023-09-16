import React from 'react';
import authors from '@site/blog/authors.yml';
import AuthorAvatar, { AuthorProps } from '@site/src/components/AuthorAvatar';
import styles from './AuthorList.module.css';
import Link from '@docusaurus/Link';

const polishDescriptions: { [id: string]: JSX.Element } = {
  admin: (
    <>
      Pomysłodawca i współzałożyciel techwriter.pl. Wróg lania wody, zwolennik
      piwa. Cierpi na „ADHD” - tester, trener, konsultant, menadżer, mentor,
      przedsiębiorca, wykładowca, członek rady{' '}
      <Link href="http://itcqf.org/">ITCQF</Link>… Jedna branża to dla niego za
      mało, dlatego poza komunikacją techniczną zajmuje się{' '}
      <Link href="https://accens.pl/">dostępnością cyfrową</Link>
      oraz współtworzy{' '}
      <Link href="https://www.4testers.pl/">
        kurs testowania oprogramowania
      </Link>
      . Można go spotkać również na turnieju{' '}
      <Link href="https://3x3basket.pl/">koszykówki 3×3</Link>.
    </>
  ),
  agnieszka: (
    <>
      Od kilku lat stawia kroki w tech commie, głównie współpracując z
      techwriter.pl. Absolwentka filologii angielskiej. Obecnie wykonuje zawód
      matka. Blogerka. Pasjonatka i propagatorka czytelnictwa z zacięciem do
      podróży i fotografii.
    </>
  ),
  toporek: (
    <>
      Martyna na co dzień zajmuje się dokumentacją techniczną. Lubi opisywać
      skompilowane maszyny, linie produkcyjne oraz posiada ogromne doświadczenie
      w branży spożywczej. Gdy dopada ją nuda podróżuje, jeździ na rowerze,
      wspina się, chodzi po górach, szydełkuje i czyta. Lubi wymyślność i
      eksperymentatorstwo. Od czasu do czasu coś napisze albo narysuje.
    </>
  ),
  niewiarowski: (
    <>
      Absolwent filologii angielskiej ze sporym dorobkiem tłumaczeniowym. Od 10
      lat jest tech writerem w branży nawigacji samochodowej i pojazdów
      autonomicznych. Zawodowo miał dużą styczność z instrukcjami,
      e-learningiem, ciekawi się coachingiem. Fan aplikacji Snagit firmy
      TechSmith. Prywatnie interesuje się filmem, muzyką rockowo-metalową, lubi
      czytać książki i jeździć na nartach. Od piątego roku życia zafascynowany
      dinozaurami i tak mu już pozostało. Drugą grupą zwierząt, którą ceni
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
  tprus: (
    <>
      Absolwent Politechniki Wrocławskiej, technical writer w firmie Atlassian.
      Doświadczenie w obszarze komunikacji technicznej budował również jako
      wieloletni pracownik Nokii i Unit4. Trener ITCQF, współtwórca wrocławskiej
      społeczności MeetContent, prelegent i uczestnik konferencji związanych z
      technical writingiem w kraju i za granicą.
    </>
  ),
  kulgawczuk: (
    <>
      Techwriterowe dziecko niespodzianka. Nigdy nie myślał o przyszłości w tech
      commie, gdy zaczynał studia filologiczne. Nigdy nie przestał myśleć o
      przyszłości w tech commie, gdy kończył studia filologiczne. Dopiero
      postawił kilka pierwszych kroków w świecie dokumentacji. Romans z
      tłumaczeniem zaowocował ciekawym sposobem na spędzanie wolnego czasu. Trzy
      lata w zakonie sugerują, że jest osobą z jasno określonymi przekonaniami
      religijnymi i zdrową dawką dyscypliny w życiu. Ze sportów – bieganie, z
      planszówek – kooperacja, z deserów – Tiramisu.
    </>
  ),
};

const englishDescriptions: { [id: string]: JSX.Element } = {
  admin: (
    <>
      The originator and a co-founder of techwriter.pl. He suffers from
      hyperactivity – a tester, trainer, consultant, manager, mentor,
      entrepreneur, lecturer, board member of ITCQF… One field isn’t enough for
      him. That’s why in addition to technical communication, he works in
      quality assurance. He loves basketball. Sometimes, you can meet him on a
      tennis court.
    </>
  ),
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
      achievements. For 10 years he has been a tech writer in the automotive
      navigation and autonomous vehicles industry. Professionally, he had a lot
      of contact with instructions, e-learning, and is interested in coaching.
      Fan of TechSmith’s Snagit app. Privately, he is interested in film, rock
      and metal music. He also likes reading and skiing. From the age of five,
      he was fascinated with dinosaurs and it stayed that way. The second group
      of animals that he especially admires are turtles and tortoises.
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
  tprus: (
    <>
      Graduated from Politechnika Wrocławska, technical writer at Atlassian. Got
      his tech writing chops and extensive experience at Nokia and Unit4. ITCQF
      instructor, co-founder of MeetContent Wrocław, speaker and avid goer to
      tech writing conferences.
    </>
  ),
  kulgawczuk: (
    <>
      Techwriter child of surprise. He never thought about future in tech comm
      when he was taking up philological studies. He never ceased to think about
      future in tech comm when he was graduating from philological studies. He
      has taken only a few first steps in the documentation world. An affair
      with translation resulted in an interesting way of spending free time.
      Three years in a religious order suggest that he is a person with clearly
      stated believes and with a healthy dose of discipline. Sports – running,
      board games – cooperation, desserts – Tiramisu.
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
