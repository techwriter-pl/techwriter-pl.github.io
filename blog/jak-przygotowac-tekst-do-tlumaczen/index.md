---
title: 'Jak przygotować tekst do tłumaczeń?'
authors: toporek
date: '2021-09-02'
tags:
  - 'dobre-praktyki'
  - 'narzędzia'
  - 'przyklady'
  - 'dokumentacja'
  - 'lokalizacja'
  - 'tłumaczenia'
  - 'użyteczność'
coverImage: '2.jpg'
---

Praca technical writera oprócz pisania tekstów zgodnie z najlepszymi praktykami,
wiąże się z również z przygotowaniem tekstów do tłumaczenia.

<!--truncate-->

Dzisiejszy artykuł poświęcony będzie tekstom źródłowym, które są przysyłane do
tłumaczenia. Podamy w nim również kilka przydatnych wskazówek, jak przygotować
tekst, aby proces tłumaczenia przebiegał sprawnie i bez zbędnych problemów.

### Tekst źródłowy i jego jakość

Bazą do tłumaczenia treści na różne języki jest tekst źródłowy - czyli
ostateczna i kompletna wersja przeznaczona do tłumaczenia. Dlaczego kompletna?

Przesyłanie tekstu w częściach lub bez kontekstu, może być dla tłumacza
kłopotliwe. Istnieje wtedy prawdopodobieństwo wystąpienia błędów i pomyłek.
Tłumacz musi znać cały tekst i cały kontekst, aby podjąć właściwe decyzje
tłumaczeniowe, np. dotyczące terminologii. Co więcej, wszelkie modyfikacje
tekstu, usuwanie fragmentów, zmienianie lub wydłużanie niektórych zdań prowadzi
do braku spójności tłumaczenia. Dlatego, zanim przekaże się tekst tłumaczowi,
warto wziąć to pod uwagę.

Co należałoby zrobić zanim zaczniecie tworzyć teksty źródłowe, a wiecie już że
będą tłumaczone na inne języki?

Jeśli chcecie zaoszczędzić swój czas i uniknąć pytań ze strony tłumacza, a tym
samym  otrzymać dobrej jakości tłumaczenie warto skorzystać z poniższych
instrukcji 😉

### Porady i wskazówki

- Aby zwiększyć zrozumienie i uprościć tłumaczenie, najlepiej tworzyć krótkie
  zdania zawierające około 20 słów lub mniej. Jasne, dobrze skonstruowane zdania
  poprawiają jakość tłumaczenia, skracają czas realizacji i obniżają koszty.
- Zastanówcie się na jakie języki będzie tłumaczony Wasz tekst. Proste języki są
  o wiele łatwiejsze do przetłumaczenia w porównaniu do rzadkich i
  skomplikowanych języków. Język angielski jest najbardziej poszukiwanym
  językiem w tłumaczeniu dokumentów ze względu na jego dużą popularność i
  globalne rozpowszechnienie. Jego zaleta w tłumaczeniach to stosunkowo krótkie
  słowa oraz nieskomplikowana odmiana czasowników.  Dla firm nieanglojęzycznych
  lokalizacja w tym języku jest koniecznością w przypadku ekspansji poza granice
  kraju. Użycie języka angielskiego do tworzenia tekstów źródłowych może okazać
  się przydatna nie tylko z perspektywy biznesu, jest on  najczęściej używany na
  stronach internetowych, w gazetach, książkach czy publikacjach naukowych.
  Ale... warto pamiętać, że tłumaczenie języków w obrębie tej samej
  [rodziny językowej](https://pl.wikipedia.org/wiki/Rodzina_j%C4%99zykowa) jest
  łatwiejsze niż pomiędzy różnymi rodzinami językowymi. Języki należące do tej
  samej rodziny mają zbliżoną gramatykę i pokrewne znaczenie słów. Natomiast
  tłumaczenie pomiędzy rodzinami językowymi będzie stanowiło o wiele większe
  wyzwanie ze względu na ich zasadnicze różnice, ale to już temat na kolejny
  artykuł. 😉
- Unikajcie długich opisów rzeczowników - tłumacz musi wywnioskować związek
  między słowami. Jeśli musisz przeczytać zdanie kilka razy, aby je zrozumieć,
  być może, wystąpią dalsze komplikacje, gdy zostanie ono przetłumaczone na
  wiele języków. **_Przykład_**: Zamiast **_runaway light connection resistance
  calibration_** _użyj_ **_runaway light connection_** \- duże skupiska
  rzeczowników są prawie niemożliwe do odczytania. Tłumacz musi przejść przez
  kilka słów modyfikujących, aby zrozumieć o co chodziło pisarzowi.
- Stwórzcie terminologię (glosariusz) dla tłumacza. Niektóre terminy techniczne,
  mają kilka znaczeń, a ich objaśnienia mogą być niejasne. Dobrą praktyką jest
  wyjaśnienie terminów lub pojęć, które są używane w Waszych dokumentach.
  Zmniejszy to niejednoznaczność nie tylko dla użytkowników, ale także dla
  tłumaczy. Jeśli używasz terminy, które nie powinny być tłumaczone, poinformuj
  o tym swojego tłumacza!
- Używajcie tylko jednego terminu, aby zidentyfikować daną koncepcję. Piszcie to
  samo, w ten sam sposób, za każdym razem. Używanie różnych sposobów zapisu
  jednego pojęcia wpływa niekorzystnie na ogólną spójność tłumaczenia. Może to
  prowadzić do obniżenia jakości, wzrostu kosztów i wydłużenia czasu realizacji.
  _**Przykład**:_ Jeśli używasz nazwy _**servo control unit**_, używaj jej w
  całym dokumencie, nie zmieniaj jej na **_actuator_** w innym miejscu 😊.
- Unikajcie skrótów lub ograniczcie ich stosowanie. Skróty w innych językach
  mogą być niezrozumiałe, a nawet mieć zupełnie inne znaczenie. _**Przykład**:_
  Skrót z języka angielskiego, przetłumaczony na język polski: _**SDS** (Safety
  Data Sheet) - karta charakterystyki_ _**PCB** (Printed Circuit Board) - płytka
  drukowana_
- Zwrócie uwagę na format daty, czasu, wymiary, czy numery telefonów. Każdy kraj
  ma swoje własne zwyczaje i akceptowalne formaty, dlatego warto o tym pamiętać.
  **_Przykład_**: Rozszyfrowanie daty **_09/08/2021_** - czy to jest wrzesień,
  czy sierpień? W Polsce lub Niemczech jest to sierpień, ale w Stanach
  Zjednoczonych jest to wrzesień. Najbezpieczniej jest użyć całej nazwy
  miesiąca. Pomocny może być również standard
  [ISO 8601](https://pl.wikipedia.org/wiki/ISO_8601), który definiuję w jakim
  formacie przedstawiać daty **(YYYY-MM-DD)** i czas **(hhmmss)** aby ułatwić
  komunikację na całym świecie.

- Weźcie pod uwagę zmiany w projekcie.
  [Przetłumaczony tekst może być dłuższy lub krótszy od oryginału](https://www.w3.org/International/articles/article-text-size.pl).
  Jest to istotne zwłaszcza w przypadku, gdy liczba stron w tłumaczonej wersji
  powinna pozostać taka sama. Co wtedy zrobić?

\- planujcie z wyprzedzeniem - skontaktujcie się z dostawcą usług językowych już
na wczesnym etapie projektu. Doświadczeni tłumacze będą wiedzieli, co można
przeredagować, przesunąć lub w inny sposób dostosować, aby zmieściło się w
wyznaczonym miejscu.

\- układ graficzny powinien zostać dopasowany, dopiero gdy tłumaczenie jest
gotowe, wtedy unikniecie wciskania na siłę tłumaczenia w określoną formę 😉.

\- jeśli Wasz projekt już ruszył, dobrze jest upewnić się, że maksymalna
przestrzeń nie została wykorzystana już w tekście źródłowym. Z zasady każde
tłumaczenie jest dłuższe niż tekst źródłowy, jak na przykład w przypadku
tłumaczenia z języka angielskiego na niemiecki.  W tym przypadku treść zostaje
przedstawiona za pomocą jak najmniejszej ilości krótkich słów. Należy pamiętać,
że ograniczenia ilości znaków może mieć negatywny wpływ na język i zdania te
mogą tracić swoje brzmienie.

\- w trakcie projektowania interfejsu, należy rozważyć dłuższe lub dynamiczne
okna dialogowe, których rozmiar można zmieniać w zależności od potrzeb. W języku
angielskim, pięcioznakowy termin **enter** po niemiecku rozszerza się do
ośmioznakowego **eingeben**. Może się okazać, że w przypadku dłuższych słów
potrzebny jest skrót, albo będzie trzeba rozpatrzeć użycie innego terminu, który
zmieści się w dostępnym miejscu.

- Upewnijcie się, że obrazy i symbole są uniwersalne i mogą być wykorzystane w
  tłumaczeniach. Jeśli używasz zdjęć, zrzutów ekranu lub innych materiałów
  wizualnych, upewnij się, że nie zawierają one tekstu. W przeciwnym razie
  trzeba będzie przygotować kolejny zestaw wizualizacji z tekstem w języku
  tłumaczenia.
- Przygotujcie edytowalne pliki. Profesjonalne firmy tłumaczeniowe korzystają
  często z narzędzi
  [CAT (Computer Assisted Translation)](https://en.wikipedia.org/wiki/Computer-assisted_translation),
  które zazwyczaj najlepiej współpracują z formatami HTML, XML, edytorami
  tekstu, plikami programów do składu DTP.  Pliki .pdf mogą być problematyczne i
  czasochłonne. Ich konwersja to dodatkowa praca dla tłumacza. Zamiast skupić
  się na samym tłumaczeniu będzie koncentrował się na drugoplanowej usłudze.
- Załączcie stosowną instrukcję dla tłumacza. W przypadku dużych projektów
  przydatne może być utworzenie osobnych folderów dla każdego typu tematu
  (grafiki, glosariusze, podział sekcji). Ułatwi to zarządzanie projektem i
  znajdowanie informacji. Warto przemyśleć, które części będą tłumaczone, a
  które nie.

### Podsumowując

Pisanie materiałów gotowych do tłumaczenia pozwoli Wam zaoszczędzić czas i
pieniądze, a także podniesie jakość i czytelność Waszych docelowych tłumaczeń.
Dobrej jakości tłumaczenie jest zawsze wynikiem współpracy zarówno autorów
technicznych, jak i tłumaczy. Wzajemne zrozumienie prowadzi do bardzo dobrych
rezultatów.

Jeśli chcecie zapoznać się z kulisami pracy tłumacza i dowiedzieć się za co
tłumacz lubi technical writera, zapraszamy do przeczytania cyklu wpisów
poświęconych tej właśnie tematyce
[(tutaj)](../za-co-tlumacze-lubia-autorow-internacjonalizacja/index.md),
[(tutaj)](../za-co-tlumacze-lubia-autorow-skladaki/index.md) i jeszcze
[(tutaj)](../za-co-tlumacze-lubia-autorow-spojnosc/index.md). 😉

A może macie swoje doświadczenia z tłumaczeniem tekstów źródłowych i
chcielibyście podzielić się cennymi wskazówkami? Jak Wy przygotowuje
dokumentację do tłumaczeń?

Zapraszamy do komentarzy!
