---
title: "Kilka pytań do - część 17"
date: "2019-02-19"
categories:
  - "warsztat"
  - "wywiady"
tags:
  - "spolecznosc"
  - "wywiad"
coverImage: "microphone-1172260_640.jpg"
---

Po dłuższej przerwie powracamy do cyklu "Kilka pytań do". Co więcej, ten wywiad zawiera w sobie podwójną dawkę wiedzy. Grzegorz Kossobudzki i Mateusz Wiktor pracują obecnie w tej samej firmie i zdecydowali się opowiedzieć nam o swoim doświadczeniu i o tym jak wygląda ich praca.

### Jak długo pracujesz jako Tech Writer?

**Grzegorz:** Nieco ponad cztery lata.

**Mateusz:** Zaczynam siódmy rok.

### W jaki sposób zostałeś Tech Writerem?

**Grzegorz:** Gdy studiowałem na Politechnice Wrocławskiej, trafiłem na ogłoszenie na forum studenckim. Nie wiedziałem wówczas kim jest Tech Writer, ale uznałem że ta praca to fajna możliwość połączenia umiejętności językowych i technicznych, a potem wszystko już się potoczyło własnym rytmem...

**Mateusz:** Jeszcze na studiach pracowałem jako customer service advisor w jednej z dużych firm w Katowicach i tam po raz pierwszy zetknąłem się z czymś, co można nazwać dokumentacją techniczną. Przejmowaliśmy wtedy nowego klienta, trzeba było napisać nowe procedury i właśnie na ten czas ("transition") przyjechał do nas kolega z Krakowa by przekazać nam wiedzę. Okazało się, że Paweł miał koleżankę która zajmowała się rekrutacją do pewnej gliwickiej firmy która również ma dział supportu. Pierwotnie aplikowałem tam na stanowisko supportowe właśnie, ale dzięki konkretnym osobom w dziale rekrutacji już na miejscu okazało się, że mój profil kandydata i zainteresowania bardziej odpowiadają innej pozycji. Początkowo nie spełniałem praktycznie żadnego z wymagań, ale (ostatecznie) udało mi się pozytywnie przejść rekrutację. Podczas rozmów z członkami zespołu Technical Writerów (poprawnie :)) ustaliliśmy, że nie nadaję się na pełnoprawnego Technical Writera, ale dadzą mi szansę na stanowisku juniorskim. Założenie było takie: muszę w rok nauczyć się wszystkiego czego mi brakuje, t.j. programowanie, Agile, testowanie, zagadnienia e-commerce, generalnie takie obycie w procesie produkcji oprogramowania. No i pykło - zostałem tam na 4,5 roku.

### Czy możesz opowiedzieć coś o swojej firmie i zespole, w którym pracujesz?

**Grzegorz:** Braintribe to austriacki start-up działający w branży Big Data. Nasz główny produkt, platforma Tribefire, umożliwia modelowanie i normalizację danych wykorzystując opatentowane rozwiązania firmy. Nasz zespół to tak naprawdę cały dział R&D, liczący ok. 30 osób, i zlokalizowany głównie w Wiedniu i Belgradzie, choć kilka osób (w tym ja) pracuje zdalnie. Rolą Tech Writerów jest przede wszystkim rozwój portalu dokumentacyjnego, skierowanego głównie do developerów chcących rozwijać naszą platformę. Przy okazji sporo testujemy (w firmie nie ma testerów jako takich, więc ktoś musi :).

**Mateusz:** Firma w której pracuję aktualnie zajmuje się produkcją oprogramowania do szeroko pojętego modelowania oraz normalizacji i integracji danych. W zespole dokumentacyjnym jestem ja i Grzesiek, ale, co nie powinno dziwić, jesteśmy częścią R&D więc pracujemy z około 30 osobami.

### W jaki sposób jest zorganizowana praca Twoja i Twojego zespołu?

**Grzegorz:** Do śledzenia zadań używamy Jiry, ale przede wszystkim opieramy się na bieżącej komunikacji z zespołami developerskimi przy pomocy Slacka. Co tydzień bierzemy udział w synchronizacji zespołów R&D, gdzie każdy przedstawia swoje postępy. Gdy ukończymy zadanie i zamkniemy ticket, instrukcja jest testowana przez drugiego Tech Writera i przez developera.

**Mateusz:** Tech Writer u nas w firmie generalnie musi się znać na wszystkim :) Dużo testujemy, dużo rozkminiamy z kodu, rozwijamy też własnego toola do tworzenia dokumentacji. Poza bieżącymi tematami, zawsze znajdzie się coś z documentation debt do zrobienia.

### Jakich narzędzi używasz i co o nich sądzisz?

**Grzegorz:** Do zapisu treści (jako Markdown) używamy VS Code, a do wersjonowania GitHuba. Sam portal dokumentacyjny (jak i cały produkt) jest generowany przy pomocy naszego CLI o wdzięcznej nazwie Jinni, w oparciu o artefakty Maven wygenerowane przez Jenkinsa ze źródeł. Dokumentacja w tym setupie jest traktowana tak jak kod źródłowy - pliki "żyją" w odpowiednim repozytorium, a developer może je zmodyfikować w dowolnym momencie. Gdy trzeba pracować z kodem źródłowym, korzystamy z Eclipse i Mavena. Uważam, że to dość sprytne rozwiązanie, umożliwiające kontekstowe dopasowanie dokumentacji do produktu w naturalny sposób, bez konieczności głowienia się nad integracją treści wygenerowanej przez tego czy innego HAT-a. Z drugiej strony, musieliśmy wraz z developerami rozwiązać kilka problemów, jak choćby content reuse, czy też linkowanie pomiędzy repozytoriami.

**Mateusz:** Piszemy w Markdownie i wersjonujemy w GIT-cie, więc nie jesteśmy przywiązani do jednego toola - typowe podejście docs-as-code. Ja preferuję VS Code do pisania, ma dużo przydatnych wtyczek i nawet odpowiada mi jego estetyka. Do generowania dokumentacji używamy autorskiego toola, który działa na zasadzie podejścia inkrementacyjnego. Nasz soft składa się z modułów, tzw. "assetów". Nasz tool generuje dokumentację tylko do tych assetów, które zostały wybrane przy instalacji/deploymencie. W mojej ocenie pozwala to na łatwiejszą nawigację i szybsze znajdowanie informacji które są istotne dla każdej konkretnej instalacji/deploymentu. Mamy też oczywiście portal, który agreguje wszystkie dostępne "assety". Do drugiego z produktów, który opisujemy używam Jekylla. Ponadto, do rzeczy, które są powtarzalne (budowanie, deploymenty, upload na serwer) korzystam z pomocy pana Jenkinsa. Gdy czytam/psuję kod korzystam z Eclipse'a. Niestety, tutaj wyboru nie miałem :)

### W jaki sposób zdobywasz informacje potrzebne do tworzenia dokumentacji?

**Grzegorz:** Czasami wystarczy przetestować informacje zawarte w tickecie, a innym razem trzeba samemu popsuć kod a potem porozmawiać o tym z programistą.

**Mateusz:** Testowanie, tickety, rozmowy z developerami, przekupstwa, szantaż emocjonalny - nic niestandardowego.

### Jakie dokumenty dostarczasz, w jakiej postaci, w jakim języku i jak są one publikowane?

**Grzegorz:** Głównie są to instrukcje dotyczące tworzenia określonej funkcjonalności w oparciu o naszą platformę, czasami trafi się Release Note. Dokumentację piszemy po angielsku w Markdownie, generujemy pliki HTML przy pomocy Jinni, i publikujemy na portalu posługując się Jenkinsem. Oprócz tego, każdy kto instaluje naszą platformę dostaje własny, lokalny portal, zawierający dokumentację zgodną z konfiguracją produktu.

**Mateusz:** Używając terminów związanych z DITA - koncepty, procedury i referencje. Dostarczamy spersonalizowany, statyczny portal z dokumentacją. Będzie on więc działał zarówno gdy jest hostowany przez serwer, jak i gdy jest otwarty z systemu plików. Piszemy tylko po angielsku.

### Jakie produkty opisujesz?

**Grzegorz:** Wspomniana wyżej platforma Tribefire, oraz Agile Dox - produkt oparty o Tribefire, służący do zarządzania dokumentami zlokalizowanymi w różnych repozytoriach.

**Mateusz:** Główną platformę Tribefire oraz jej implementację - AgileDox.

### Czy oprócz tworzenia dokumentacji zajmujesz się czymś jeszcze, np. tworzeniem materiałów marketingowych? Jeśli tak, to czym i jakich narzędzi do tego używasz?

**Grzegorz:** Sporo testuję, ale wynika to z konieczności napisania dokumentacji.

**Mateusz:** Staram się trzymać z dala od materiałów marketingowych i na szczęście nie muszę tego robić. Poza pisaniem jako takim rozwijamy naszego toola do tworzenia dokumentacji gdzie trzeba robić wszystko, od product owneringu po testowanie.

### Jakie są największe wyzwania, które napotykasz w swojej pracy?

**Grzegorz:** Dla mnie takim wyzwaniem jest programowanie w Javie, by móc dostarczyć odpowiednie przykłady w dokumentacji. To zupełna nowość, ale walczę jak mogę, przy pomocy kolegi po fachu w zespole, i programistów.

**Mateusz:** "Jestem zajęty.", "Nie mam czasu.", "You have merge conflicts in your working copy" oraz "Error parsing documentation" ;)

### Co najbardziej lubisz w pracy Tech Writera?

**Grzegorz:** Ciągłą naukę i możliwość pomocy ludziom, których nie znam.

**Mateusz:** Gdy ktoś zadaje pytanie, na które można odpowiedzieć linkiem do dokumentacji :) Generalnie lubię, gdy to co robię jest przydatne dla innych. Kontakt zarówno z ludźmi i z technologią również jest przyjemny.

### Co byś radził osobom, które chciałyby zacząć swoją przygodę z pisaniem dokumentacji?

**Grzegorz:** Nie zniechęcaj się jeśli nie spełniasz (lub nie rozumiesz) wszystkich wymagań w ogłoszeniach - Tech Comm to ciągle niszowa branża, więc nie jesteś sam(a). Liczy się przede wszystkim zdolność do nauki nowych rzeczy w dobrym tempie i umiejętność przekazywania zdobytej wiedzy innym.

**Mateusz:** Mogę jedynie poradzić coś dla aplikujących do branży IT - aplikuj do firmy, gdzie jest już ktoś doświadczony, nie bój się popsuć aplikacji, zadawaj dużo pytań, naucz się czytać kod i podstaw programowania i pamiętaj, że tester Twoim przyjacielem jest.



Jeśli macie dodatkowe pytania, możecie skontaktować się z naszymi rozmówcami za pomocą LinkedIn:

- [Grzegorz Kossobudzki](https://www.linkedin.com/in/grzegorz-kossobudzki-205a63b4/)
- [Mateusz Wiktor](https://www.linkedin.com/in/mwiktor/)

Jeśli macie ochotę podzielić się swoimi doświadczeniami, nie zwlekajcie dłużej, tylko piszcie na **[kontakt@techwriter.pl](mailto:kontakt@techwriter.pl)**.

_Zdjęcie pochodzi z serwisu [Pixabay](https://pixabay.com/pl/mikrofon-mic-wokal-media-mike-1172260/)_
