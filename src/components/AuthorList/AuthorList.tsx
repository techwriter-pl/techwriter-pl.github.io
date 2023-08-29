import React from "react";
import authors from "@site/blog/authors.yml";
import AuthorAvatar, { AuthorProps } from "@site/src/components/AuthorAvatar";
import styles from "./AuthorList.module.css";
import Link from "@docusaurus/Link";

const polishDescriptions: { [id: string]: JSX.Element } = {
  admin: (
    <>
      Pomysłodawca i współzałożyciel techwriter.pl. Wróg lania wody, zwolennik
      piwa. Cierpi na „ADHD” - tester, trener, konsultant, menadżer, mentor,
      przedsiębiorca, wykładowca, członek rady{" "}
      <Link href="http://itcqf.org/">ITCQF</Link>… Jedna branża to dla niego za
      mało, dlatego poza komunikacją techniczną zajmuje się{" "}
      <Link href="https://accens.pl/">dostępnością cyfrową</Link>
      oraz współtworzy{" "}
      <Link href="https://www.4testers.pl/">
        kurs testowania oprogramowania
      </Link>
      . Można go spotkać również na turnieju{" "}
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
      Vistula. Wraz z przyjaciółmi tworzy społeczność{" "}
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
  szablowska: <></>,
  milc: <></>,
  kuba: <></>,
  piechowicz: <></>,
};

export default function AuthorList() {
  const authorList: AuthorProps[] = Object.entries<AuthorProps>(authors).map(
    ([key, value]) => ({
      name: value.name,
      role: value.role,
      image_url: value.image_url,
      url: value.url,
      id: key,
    })
  );

  return (
    <div className={styles.wrapper}>
      {authorList.map((author: AuthorProps) => (
        <div key={author.name} className={styles.author}>
          <AuthorAvatar {...author} />
          <div>{polishDescriptions[author.id]}</div>
        </div>
      ))}
    </div>
  );
}
