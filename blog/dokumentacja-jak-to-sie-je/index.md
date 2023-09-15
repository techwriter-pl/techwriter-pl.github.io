---
title: 'Dokumentacja - jak to się je?'
authors: agnieszka
date: '2020-10-21'
tags:
  - 'dobre-praktyki'
  - 'warsztat'
  - 'dokumentacja'
coverImage: 'dokumentacja_goscinny.png'
---

Dziś temat bliski wszystkim Technical Writerom, a mianowicie **dokumentacja**.

<!--truncate-->

Jakie są jej cechy, co powinna zawierać, jakie są etapy jej powstawania? Jak
zweryfikować, czy nie popełniliśmy błędu w trakcie jej tworzenia?

Na te, i wiele innych pytań odpowiada **MACIEJ DUSZA** - autor poniższego
tekstu, zawodowo analityk ds. zapewniania jakości, tester oprogramowania oraz
autor tekstów technicznych.

Serdecznie zapraszamy!

Pisanie dokumentacji często traktowane jest przez programistów jak ciężka kara i
dopust boży. Z nieco większym zrozumieniem odnoszą się do tego kierownicy
projektów, zwłaszcza ci, którzy kiedyś w połowie projektu stracili pracownika
będącego „guru od systemu/programu/modułu”, i musieli w trybie nagłym wdrażać do
pracy nową osobę, przegryzając się przez tysiące linii nieudokumentowanego, i
często pozbawionego komentarzy kodu.

Ja osobiście lubię pisać dokumentację. Sprawia mi przyjemność opisywanie
poszczególnych elementów systemu w sposób dokładny, precyzyjny, i zrozumiały dla
odbiorcy. Poniżej przedstawiam zbiór porad i uwag, które – mam nadzieję –
przydadzą się zarówno osobom piszącym „z potrzeby serca”, jak i tym, dla których
jest to przykrym obowiązkiem.

Moje uwagi przedstawiam w postaci krótkich akapitów, odnoszących się do
poszczególnych zagadnień związanych z pisaniem dokumentacji. Opracowałem je na
podstawie własnych doświadczeń, oraz lektury kilku książek, których tytuły
wymieniam na końcu.

#### Cechy dobrej dokumentacji:

- jest dokładna i bezbłędna
- jest kompletna
- jest spójna
- jest napisana w sposób klarowny i jednoznaczny
- użytkownik może łatwo znaleźć informację, której potrzebuje
- ma porządny, ładny wygląd.

#### Etapy tworzenia dokumentacji:

- zbieranie informacji na temat opisywanego systemu
- tworzenie projektu dokumentacji
- pisanie dokumentacji
- weryfikacja dokumentacji
- dokonywanie poprawek i uzupełnianie braków.

Dwa ostatnie etapy są zwykle powtarzane kilkakrotnie, aż do usunięcia wszystkich
usterek.

##### Informacje na temat opisywanego systemu, można zbierać poprzez:

- czytanie już istniejących fragmentów dokumentacji
- pracę z programem i analizę kodu źródłowego
- konsultacje (zazwyczaj z developerami, którzy stworzyli system).

##### Projekt dokumentacji powinien zawierać następujące elementy:

- tytuł dokumentacji
- rodzaj dokumentacji (np. podręcznik użytkownika)
- przewidywana data zakończenia prac nad dokumentacją
- imię i nazwisko dokumentalisty
- krótki opis tego, co dokumentacja będzie zawierać
- szacunkowa liczba stron (najlepiej określić to poprzez porównanie z podobnymi,
  istniejącymi już dokumentami)
- spis głównych rozdziałów
- terminy kamieni milowych.

Kamień milowy przy pisaniu dokumentacji, to moment kiedy dokumentacja idzie do
weryfikacji. Dobrym miejscem na **ustanowienie pierwszego kamienia milowego**,
jest moment gdy:

- większość (dwie trzecie lub trzy czwarte) tekstu jest już napisana
- zaznaczone są miejsca, w których wstawione zostaną rysunki i zrzuty ekranów.

Dobrym miejscem na **ustanowienie drugiego kamienia milowego**, jest moment gdy:

- praktycznie cały tekst jest już napisany
- prawie wszystkie rysunki i zrzuty ekranów są już w dokumentacji
- poprawione zostały usterki, które wyszły na jaw w czasie weryfikacji po
  pierwszym kamieniu milowym.

Przy tworzeniu dokumentacji, zwykle występują co najmniej dwa kamienie milowe, i
często nie ma ich więcej. Dlatego w projekcie dokumentacji podaje się
najczęściej terminy dwóch kamieni.

##### Weryfikacja dokumentacji oznacza:

- dokładne przeczytanie dokumentacji w poszukiwaniu błędów
- sprawdzenie czy zrzuty ekranu odpowiadają temu, co rzeczywiście w opisywanym
  momencie widać na ekranie
- wykonanie procedur (instrukcji) zawartych w dokumentacji, i sprawdzenie czy
  rzeczywiście generują żądane rezultaty
- przekazanie dokumentacji recenzentom i zebranie ich uwag.

Pożyteczną metodą weryfikacji, jest również poproszenie kogoś, kto nie posiada
zbyt głębokiej wiedzy na temat opisywanego systemu, o przeczytanie dokumentacji,
i upewnienie się, że wszystko zrozumiał. Powód: dokumentalista może zapomnieć o
napisaniu czegoś, co jest dla niego "oczywiste", a recenzent, zwykle dobrze
znający system, może nie zauważyć takiego braku.

##### Dwa ważne pytania, jakie należy sobie zadać przed rozpoczęciem pracy nad dokumentacją:

1. Dla kogo ta dokumentacja jest przeznaczona? Inaczej pisze się np. dla
   sprzedawcy, który będzie jedynie korzystał z systemu, a inaczej dla
   programisty, który będzie ten system rozwijał. Nie chodzi tu tylko o treść,
   chodzi również o styl pisania (np. używanie słownictwa technicznego).
2. Jakie przyjąć podejście: opisowe czy zadaniowe? Opisowe podejście do pisania
   dokumentacji polega na tym, że po prostu opisujemy kolejne elementy systemu,
   troszcząc się jedynie o to, żeby zrobić to dobrze. Podejście zadaniowe polega
   na tym, że przy pisaniu bierzemy pod uwagę zadania, które wykonuje odbiorca
   dokumentacji. Przykładowo: załóżmy, że opisujemy interfejs użytkownika, a
   odbiorcą dokumentacji ma być osoba zajmująca się wystawianiem faktur. Jeśli
   przyjmiemy podejście zadaniowe, to opcje systemu opiszemy nie w takiej
   kolejności, w jakiej są ułożone w menu, tylko w takiej, w jakiej korzysta się
   z nich przy wystawianiu faktur.

Może się zdarzyć, że z dokumentacji mają korzystać dwie różne grupy
użytkowników. Na przykład sprzedajemy system wspomagający sprzedaż firmie, która
posiada dział sprzedaży i dział informatyki. Sprzedawcy będą używać tego systemu
korzystając z interfejsu użytkownika, a informatycy otrzymają kod źródłowy, i
będą go na własną rękę rozwijać. W takiej sytuacji, najlepszym rozwiązaniem jest
napisanie dwóch oddzielnych dokumentacji: jednej dla sprzedawców, i jednej dla
informatyków. Jest to oczywiście bardziej praco- i czasochłonne, ale znacznie
wygodniejsze z punktu widzenia odbiorców dokumentacji. Jeśli jednak nie chcemy
pisać dwóch oddzielnych dokumentacji (bo np. nie ma na to czasu), i decydujemy
się włożyć wszystkie informacje do jednej dokumentacji, wówczas należy wyraźnie
zaznaczyć, które sekcje dokumentacji są przeznaczone dla której grupy odbiorców.

Pisanie dokumentacji jednym ciągiem, od początku do końca, nie jest dobrym
pomysłem. Po pierwsze, nieraz będą się zdarzać sytuacje, kiedy napisanie
kolejnego fragmentu nie jest możliwe (bo np. developer, z którym trzeba się
skonsultować, nie jest chwilowo dostępny). Po drugie, po zakończeniu może się
okazać, że dokumentacja wprawdzie zawiera wszystko co trzeba, ale jej układ
powinien być inny. Dlatego lepsze wyniki przynosi następujące podejście:

- określamy jakie rozdziały będzie mieć dokumentacja
- dla każdego rozdziału określamy jakie będzie mieć podrozdziały
- dla każdego podrozdziału określamy jakie będzie mieć pod-podrozdziały i tak
  dalej...
- kiedy szczegółowa struktura rozdziałów jest już gotowa, zaczynamy wypełniać
  treścią kolejne pod-...-rozdziały. Jeśli w jakimś momencie napotkamy problem,
  z którym nie możemy sobie od razu poradzić, wtedy zaznaczamy że to miejsce
  wymaga uzupełnienia, i po prostu zabieramy się za wypełnianie treścią
  kolejnego elementu struktury.

Dodatkową zaletą takiego podejścia jest to, że na pierwszy rzut oka widoczny
jest stan prac nad dokumentacją - co konkretnie jest już gotowe, co wymaga
uzupełnienia, a co nie jest jeszcze rozpoczęte.

##### Na początku dokumentacji powinny się znaleźć:

- copyright (najlepiej zwrócić się do działu prawnego firmy o opracowanie
  dokładnego sformułowania)
- spis treści
- opcjonalnie: spis ilustracji (dla użytkownika może być wygodne, jeśli będzie
  mógł znaleźć konkretny diagram, bez zastanawiania się w jakim powinien być
  rozdziale)
- wstęp.

**Wstęp** powinien informować:

- jaki produkt opisuje dokumentacja
- dla kogo dokumentacja jest przeznaczona
- co dokumentacja zawiera (bardzo ogólnie)
- jakie konwencje są stosowane w dokumentacji (np. jaka czcionka jest stosowana
  dla zamieszczonych w dokumentacji fragmentów kodu źródłowego).

**Na końcu dokumentacji powinny się znaleźć:**

- załączniki
- słowniczek terminów specyficznych dla opisywanego systemu, oraz terminów i
  skrótów które są używane w dokumentacji, a których użytkownik może nie znać
- indeks.

Załączniki powinny zawierać informacje, które użytkownik może chcieć uzyskać,
ale które nie są niezbędne do zrozumienia dokumentacji (np. definicje pól w
bazie danych). Uwaga: nie należy traktować załączników jako miejsce, do którego
dokumentalista może wrzucić wszystkie informacje, co do których nie ma pewności
gdzie je umieścić. Indeks jest bardzo ważnym elementem dokumentacji. To w dużym
stopniu od niego zależy, na ile dokumentacja będzie użyteczna dla użytkownika.

Kiedy prace nad dokumentacją dojdą do kamienia milowego, przy którym wskazane
jest przeprowadzenie weryfikacji tego, co zostało dotychczas stworzone,
dokumentalista powinien najpierw sam sprawdzić swoją pracę, a następnie poprosić
kilka osób o recenzję. Naturalnymi kandydatami na recenzentów są developerzy
pracujący nad opisywanym systemem, i szef dokumentalisty. Warto zwrócić się o to
również do ludzi, którzy mają codzienny kontakt z klientem - odbiorcą
dokumentacji (czyli do pracowników działu sprzedaży, działu marketingu i działu
pomocy technicznej).

Uważne przeczytanie dokumentacji wymaga czasu. Dlatego recenzentów należy z
wyprzedzeniem zawiadomić o tym, że danego dnia przyśle im się dokumentację do
zrecenzowania.

Istnieją **trzy metody zbierania opinii od recenzentów**.

**Pierwsza**, najbardziej efektywna, polega na tym, że dokumentalista i wszyscy
recenzenci spotykają się razem, siadają przy stole, przechodzą po kolei przez
wszystkie rozdziały i akapity dokumentacji, każdy może zgłaszać na głos swoje
uwagi, a pozostali od razu ustosunkowują się do tych uwag. Dzięki temu, każda
sugestia, jaką ktoś może mieć, jest rozpatrywana przez cały zespół recenzentów.
Uwaga: na takim spotkaniu nieraz zdarza się, że rozmowa zaczyna odbiegać od
tematu (np. developer zaczyna mówić o pracach nad modułem, który nie wchodzi w
zakres systemu objętego dokumentacją). Im więcej ludzi bierze udział w
spotkaniu, tym częściej zdarzają się takie mimowolne odejścia od tematu.
Dlatego, jeśli recenzentów jest więcej niż kilku, warto poprosić kogoś, kto sam
nie bierze udziału w recenzowaniu, o pełnienie funkcji moderatora. Moderator
jest obecny na zebraniu, ale nie zabiera głosu w dyskusji. Jedyne, czym się
zajmuje, to słuchanie tego, co mówią inni, i przerywanie ludziom, którzy
zaczynają odchodzić od tematu.

**Druga** metoda zbierania opinii, polega na rozesłaniu dokumentacji do
wszystkich recenzentów, odebraniu opinii od każdego oddzielnie i skonsolidowaniu
otrzymanych uwag. Szczególną uwagę dokumentalista musi tu zwrócić na sprzeczne
sugestie, które mogą nadejść od różnych recenzentów. W takim przypadku należy
zawiadomić autorów tych sugestii o zaistniałej sytuacji i poprosić o
przemyślenie stanowiska drugiej osoby. Jeśli żaden z recenzentów nie chce
ustąpić, a dokumentalista nie ma własnego zdania w tej kwestii, właściwe wydaje
się uwzględnienie propozycji recenzenta, zajmującego wyższe stanowisko w
hierarchii firmy. Jeśli jednak dokumentalista skłania się ku rozwiązaniu
proponowanemu przez niżej stojącego recenzenta, powinien skonsultować się ze
swoim szefem.

**Trzecia** metoda zbierania opinii, polega na wysłaniu dokumentacji do jednego
z recenzentów, następnie, razem z naniesionymi przez niego uwagami, do drugiego,
potem z uwagami naniesionymi przez tych dwóch do trzeciego, i tak dalej. Dzięki
temu każdy (prócz pierwszego) recenzent, może odnieść się nie tylko do samej
dokumentacji, ale również do uwag poprzednich recenzentów. Metoda ta zabiera
oczywiście więcej czasu, niż dwie pozostałe metody.

Jeśli przekazuje się do recenzji dokument, który był już kiedyś recenzowany,
należy zaznaczyć co zostało dodane lub zmienione od czasu poprzedniej recenzji,
żeby recenzenci nie musieli ponownie czytać wszystkiego od A do Z.

Kiedy dokumentacja zostaje oddana do produkcji, następuje jej "zamrożenie".
Oznacza to, że żadne zmiany nie będą już wprowadzane. Jeśli przed przekazaniem
dokumentacji odbiorcy, okaże się że coś wymaga zmiany, do dokumentacji zostanie
dołączona errata (np. plik README na CD z dokumentacją), a potrzebne zmiany
zostaną wprowadzone dopiero w następnej wersji dokumentacji.

Ważną rzeczą jest bardzo dokładne zebranie uwag od odbiorców dokumentacji, po
dostarczeniu im pierwszej gotowej części. Na podstawie takich uwag można nie
tylko stworzyć wskazówki przydatne w dalszych pracach nad dokumentacją, ale może
to również prowadzić do zmiany przyjętych standardów (najprostszy przykład:
odbiorca prosi o pisanie dokumentacji przy użyciu większej czcionki, bo ma słaby
wzrok). Opinie odbiorców należy zbierać po przekazaniu im każdej części
dokumentacji, jednak szczególnie ważne jest to na początku, z powodów
wymienionych wyżej.

Przed rozpoczęciem pisania dokumentacji, należy ustalić symbol / ciąg znaków,
który będzie stosowany w miejscach wymagających uzupełnienia. Takim symbolem
może być np. ciąg liter TBD (od ang. to be determined). Jeśli osoba pisząca
dokumentację, nie będzie pewna co napisać w jakimś miejscu (bo np. wymaga to
konsultacji z developerem), to może kontynuować pisanie pod warunkiem wstawienia
w to miejsce takiego symbolu. Obowiązuje zakaz oznaczania miejsc wymagających
uzupełnienia w jakikolwiek inny sposób (np. pisząc: do uzupełnienia). Powód jest
oczywisty: chodzi o to, żeby w każdej chwili można było jednym find'em znaleźć
wszystkie niedokończone miejsca.

Jeśli wskazane jest umieszczenie w dokumentacji zrzutu jakiegoś ekranu, to ekran
ten powinien zawierać konkretne dane, a nie tylko puste pola. Przykładowo, jeśli
na ekranie jest okno służące do wprowadzania informacji personalnych, to należy
do odpowiednich pól wprowadzić zmyślone imię, nazwisko, adres, telefon itd.
Uwaga: niedopuszczalne jest wprowadzanie danych żyjących osób (np. przepisywanie
z książki telefonicznej), może to grozić procesem sądowym.

Kiedy pisze się dokumentację, precyzja i klarowność sformułowań są ważniejsze od
elegancji. Jeśli np. w jednym zdaniu pojawi się dziesięć razy słowo system, to
nie ma w tym nic niewłaściwego. Nie należy pisać na zmianę system i np. program,
bo może to jedynie wprawić w zakłopotanie odbiorcę dokumentacji, który zacznie
się zastanawiać czy na pewno chodzi o to samo. Na tej samej zasadzie, należy
trzymać się raz przyjętych terminów na określenie pewnych rzeczy czy czynności.
Jeśli np. w pierwszym rozdziale piszemy o klikaniu myszą, to już do końca
powinniśmy konsekwentnie używać tego określenia, a nie zastępować go w innym
rozdziale słowem tupanie myszą.

Czasem może się zdarzyć, że trzeba wybierać między ścisłym trzymaniem się zasad
pisowni, a klarownością przekazu. W takim przypadku lepiej złamać zasady, żeby w
zamian za to uzyskać jednoznaczny i zrozumiały przekaz. Przykładowo, weźmy
następujące zdanie: „systemy: A, B, C i D”. Czytelnik może mieć wątpliwości, czy
chodzi tu o cztery systemy, czy też o trzy, z których ostatni ma złożoną nazwę
„C i D”. Jeśli dodamy przecinek po „C”, usuniemy niejednoznaczność.

Należy pamiętać, że dokumentacja jest przeznaczona dla człowieka, a nie dla
komputera i dlatego mogą się zdarzać sytuacje, w których uzasadnione jest
odstąpienie od przyjętych standardów. Przykładowo, jeśli chcemy umieścić w
dokumentacji diagram przejścia stanów, ale widzimy że taki diagram byłby bardzo
skomplikowany, czytelnik niewiele by z niego rozumiał i tylko co chwila by
błądził nawigując po plątaninie strzałek, to lepiej w ogóle zrezygnować z
diagramu, a poszczególne stany i warunki przejścia między nimi, opisać słownie.

##### Jeśli dokumentalista przejmuje dokumentację napisaną przez kogoś innego, to zanim zacznie dopisywać nowe rozdziały, powinien:

- przeczytać to, co już jest napisane
- jeśli jest to możliwe, porozmawiać z poprzednim autorem dokumentacji i
  dowiedzieć się czego nie zdążył napisać, co zamierzał zmienić, itp.
- usiąść nad dokumentacją razem z developerami, upewnić się że w dokumentacji
  nie ma błędów oraz dowiedzieć się co nowego pojawiło się w systemie
- samemu obejrzeć opisywany system i stwierdzić na ile pasuje do dokumentacji
- dowiedzieć się, czy odbiorcy dokumentacji zgłaszali jakieś uwagi lub prosili o
  zmiany w dokumentacji.

Kiedy dokumentalista po raz pierwszy uruchamia system, który ma opisywać i
próbuje działać jako użytkownik, powinien zapisywać wszystkie rzeczy, które
sprawiły mu trudność. Jest bardzo prawdopodobne, że rzeczywisty użytkownik
natknie się na takie same trudności, a co za tym idzie jest to okazja do
zlokalizowania miejsc, które warto opisać w dokumentacji szczególnie dokładnie.

Kiedy dokumentalista rozpoczyna opisywanie systemu i otrzymuje dostęp do kodu
źródłowego, powinien upewnić się, że jest to najnowsza wersja kodu rozwojowego,
nad którym prowadzone są prace. Nie może to być stara wersja kodu, a w
szczególności nie może to być kod okrojonej wersji demonstracyjnej. Musi to być
aktualny kod, nawet jeśli codziennie miałby się zmieniać.

Jeśli system, dla którego pisze się dokumentację, podlega rozwojowi w trakcie
pisania dokumentacji, należy zobowiązać developerów do informowania
dokumentalisty o zmianach dokonywanych w kodzie. Nie muszą to być szczegółowe
raporty, wystarczy raz dziennie wysłać mail z informacją: zmieniłem klasę taką i
taką. Dokumentalista sam zdecyduje, czy taka zmiana wymaga modyfikowania
dokumentacji, a jeśli tak to poprosi developera o dokładniejsze informacje.

Jeśli w trakcie prac nad dokumentacją, pojawi się konieczność konsultacji z
developerem, należy na początek zwrócić się do osoby stojącej możliwie nisko w
hierarchii. Czyli np. najpierw należy porozmawiać z programistą, jeśli nie
potrafi udzielić odpowiedzi to z szefem zespołu programistów, a jeśli on też nie
potrafi, to dopiero wtedy należy poprosić o konsultację kierownika całego
projektu. Powód: im wyżej w hierarchii stoi dana osoba, tym bardziej jej czas
jest cenny dla firmy.

Przed pójściem na konsultacje, należy się przygotować, to znaczy samemu
dowiedzieć się tyle na interesujący temat, ile się da. Dzięki temu będzie można
zadawać potem precyzyjne pytania i lepiej rozumieć odpowiedzi. Zawsze warto
przyjść na spotkanie z przygotowaną listą konkretnych pytań. Taką listę warto
również wysłać rozmówcy mailem, przed spotkaniem, żeby mógł się przygotować (nie
musi mieć w głowie gotowej odpowiedzi na każde pytanie).

Jeśli trzeba przeprowadzić konsultacje z osobą, która ma mało czasu, to zamiast
robić notatki w trakcie rozmowy, lepiej użyć dyktafonu. Uwaga: w takiej sytuacji
należy od razu na początku rozmowy położyć dyktafon na stole i wyjaśnić, że
dzięki temu zaoszczędzi się czas. Nie wypada natomiast trzymać dyktafonu w
kieszeni i dopiero w połowie rozmowy, na pytanie czy nie warto byłoby robić
notatki, odpowiedzieć że rozmowa nagrywa się na ukryty magnetofon.

Dla niektórych ludzi może być denerwujące, że w czasie konsultacji muszą co
chwila robić "bezproduktywne" przerwy, żeby dokumentalista mógł robić notatki.
Jednym sposobem na to jest używanie dyktafonu, a innym - spotkanie się w czasie,
gdy konsultant (nie dokumentalista!) będzie jadł obiad. Kiedy dokumentalista
będzie spokojnie robił notatki, konsultant będzie jadł i nie będzie miał
poczucia, że marnuje czas.

Może się zdarzyć, że osoba, z którą dokumentalista chce się skonsultować, nigdy
nie ma na to czasu. W takiej sytuacji należy poprosić, żeby sama wyznaczyła
dogodny dla niej termin. Czasem taką prośbę trzeba powtórzyć wiele razy, żeby
odniosła skutek. Jeśli jednak nic to nie daje, należy zastanowić się czy jest
ktoś inny, od kogo można uzyskać dane informacje. Jeśli to również jest
niemożliwe, należy przedstawić problem swojemu szefowi i poprosić go o
interwencję.

Na koniec konsultacji, po wyjaśnieniu wszystkich wątpliwości, warto zadać
pytanie: czy jest coś jeszcze, o czym powinienem wiedzieć? W ten sposób można
czasem uzyskać informacje o czymś, co samo nie przyszłoby do głowy.

Jeśli kończy się czas zaplanowany na konsultacje, a nie wszystko jeszcze zostało
omówione, to nie należy przeciągać spotkania, tylko zaproponować ustalenie
następnego terminu.

Po zakończeniu konsultacji, najlepiej jest od razu dodać uzyskane informacje do
pisanej dokumentacji. W przeciwnym razie, można mieć później problemy z
rozszyfrowaniem robionych skrótami notatek z rozmowy.

Po przekazaniu dokumentacji do odbiorcy, warto zwrócić uwagę na to, z jakimi
problemami ten odbiorca zwraca się do działu obsługi klienta. Jeśli ma problemy
z czymś, co zostało opisane w dokumentacji, może to znaczyć, że dany fragment
dokumentacji zawiera błędy lub został napisany w sposób niezrozumiały albo
niedostatecznie szczegółowy.

W obrębie całej dokumentacji, należy używać jednolitego zestawu stylów pisma.
Jest to szczególnie ważne wtedy, gdy nad dokumentacją pracuje więcej niż jedna
osoba. Dzięki jednolitemu zestawowi stylów, rozdziały pisane przez różne osoby
nie będą się różnić wyglądem. **Typowe elementy dokumentacji, dla których trzeba
zdefiniować (i konsekwentnie stosować) style, to:**

- nagłówek rozdziału głównego
- nagłówek podrozdziału
- nagłówek pod-podrozdziału i tak dalej...
- "zwykły" tekst
- lista numerowana
- lista wypunktowana
- tekst przesunięty w prawo, stanowiący kontynuację (od nowego wiersza) tekstu z
  listy numerowanej lub wypunktowanej
- fragment kodu źródłowego
- podpis pod rysunkiem.

Kluczowe informacje powinny być wyeksponowane, tak żeby były widoczne od razu po
otworzeniu dokumentacji na danej stronie. Jeśli np. najważniejszym elementem
jakiegoś rozdziału jest opis czynności, które należy wykonać, to lepiej umieścić
w rozdziale numerowaną listę z tymi czynnościami, niż wymienić je po przecinku w
jednym zdaniu, ukrytym wśród innych zdań. Taki sposób jest nie tylko bardziej
elegancki, ale i bardziej praktyczny. Kiedy użytkownik będzie wykonywał te
czynności, odrywając co chwilę wzrok od dokumentacji, dzięki liście będzie mógł
szybciej znaleźć właściwe miejsce, gdy ponownie spojrzy na kartkę.

Duża liczba małych rozdziałów jest lepsza niż niewielka liczba obszernych
rozdziałów. Przy małych rozdziałach użytkownik może łatwiej znaleźć konkretną
informację.

**Zasada KISS**: Keep It Short and Simple. Czytelnik łatwiej rozumie kilka
krótkich, prostych zdań, niż jedno długie zdanie złożone. Analogicznie,
czytelnik łatwiej rozumie kilka krótkich akapitów, niż jeden długi.

Jeśli w dokumentacji występują słowa lub skróty, których użytkownik może nie
znać, należy wyjaśnić ich znaczenie. Można to zrobić na dwa sposoby:
umieszczając na końcu dokumentacji słowniczek ze wszystkimi takimi pojęciami lub
wyjaśniając znaczenie każdego pojęcia przy jego pierwszym wystąpieniu w
dokumentacji. Pierwszy sposób (słowniczek) jest zdecydowanie lepszy.
Dokumentacja to nie powieść i nie można zakładać, że użytkownik będzie czytał
wszystkie rozdziały po kolei.

Żeby uniknąć błędów ortograficznych w dokumentacji, nie wystarczy włączyć w
edytorze opcję sprawdzania pisowni. Zdarzają się błędy, których automatyczna
kontrola nie wykryje (np. jeśli błąd literowy spowoduje zamianę jakiegoś słowa
na inne poprawne słowo).

Przy wyszukiwaniu błędów, które mogły powstać w czasie wprowadzania tekstu,
najlepiej jest wydrukować dokumentację i sprawdzić wydruk. Powód: oko ludzkie
łatwiej wychwytuje błędy na papierze niż na ekranie. W czasie takiego
sprawdzania, szczególną uwagę należy zwrócić na:

- ortografię, gramatykę i interpunkcję
- imiona, nazwiska, inicjały i tytuły
- nazwy firm
- inne nazwy własne
- liczby
- daty.

Wyszukiwania błędów, które mogły powstać w czasie wprowadzania tekstu, nie
należy łączyć z wyszukiwaniem błędów merytorycznych. Za wyszukiwanie błędów
literowych, najlepiej zabrać się dopiero po zakończeniu sprawdzania (i
poprawiania) błędów merytorycznych. Powód: błędy literowe najłatwiej zauważyć,
kiedy człowiek nie zastanawia się nad sensem danego zdania czy akapitu. Jedną z
metod jest sprawdzanie kolejnych akapitów poczynając od końca rozdziału. Pozwala
to skoncentrować się na pisowni, bez zwracania uwagi na treść.

Zanim dokumentalista przekaże dokumentację recenzentom, powinien upewnić się, że
jego własnym zdaniem wszystko w niej jest w porządku. W tym celu, oprócz
sprawdzenia że dokumentacja nie zawiera błędów, powinien zadać sobie następujące
pytania:

- czy dokumentacja jest wystarczająco obszerna, jak na obecny kamień milowy?
- czy informacje są właściwie zorganizowane (ułożone)?
- czy informacje techniczne są dokładne?
- czy pojęcia, których użytkownik może nie znać, są wyjaśnione?
- czy język dokumentacji jest spójny?
- czy przykłady są dobrze dobrane i umieszczone w odpowiednich miejscach?
- czy numery stron w spisie treści i w indeksie są poprawne?

Po zakończeniu pracy nad dokumentacją, bardzo pożyteczne jest zrobienie
podsumowania całego przebiegu pracy. Chodzi o to, żeby ustalić co poszło dobrze,
z czym były problemy i jak można by takich problemów uniknąć w przyszłości.
Jeśli nad dokumentacją pracowało kilka osób, to najlepiej urządzić spotkanie.
Podstawowe pytania, które należy zadać w trakcie takiego spotkania, to:

- ile czasu zajęło napisanie tej dokumentacji, a ile powinno zająć?
- jakie problemy przeszkadzały w pracy lub spowalniały ją?
- co (np. jakie narzędzie) było pożyteczne i pomocne?
- które osoby były uczynne i chętne do pomocy?
- ile czasu pochłonęło samo czekanie na informacje?
- czy komunikacja między osobami piszącymi dokumentację była dobra?
- czy komunikacja z osobami udzielającymi konsultacji była dobra?
- co można zrobić, żeby następną dokumentację napisać lepiej lub szybciej?

Na koniec, chciałbym polecić trzy książki, z których korzystałem przy pisaniu
tego artykułu:

- _The Complete Idiot's Guide to Technical Writing_, Krista Van Laan & Catherine
  Julian, “Alpha Books”, 2001. Tą książkę polecam najbardziej, jeśli ktoś nie
  wstydzi się takiego tytułu na półce.
- _Technical Writing for Dummies_, Sheryl Lindsell-Roberts, “Hungry Minds,
  Inc.”, 2001
- \_The User Manual Manual : How to Research, Write, Test, Edit & Produce a
  Software Manua_l, Michael Bremer, “UnTechnical Press”, 1999
