---
title: "Jak nauczyłem się wszystkiego co wiem o DITA"
authors: mojk
date: "2016-01-19"
tags:
  - "narzedzia"
  - "przyklady"
  - "warsztat"
  - "technologie"
coverImage: "dita-logo.png"
---

Nie tak dawno publikowaliśmy
[wywiad z Pawłem Kowalukiem](http://techwriter.pl/kilka-pytan-do-czesc-8/),
który opowiedział nam o swoim doświadczeniu w branży komunikacji technicznej.
Niedługo po tym otrzymaliśmy od niego artykuł, którym dzisiaj się z Wami
dzielimy - krótka historia o przygodzie z
[DITA](https://en.wikipedia.org/wiki/Darwin_Information_Typing_Architecture).

\*\*\*

Kolega mnie niedawno spytał czy mogę polecić jakiś dobry kurs DITA (może być
online) albo jakąś książkę. Jest tego sporo w sieci, ale nie mogę nic polecić,
bo nie korzystałem z niczego takiego. Pozwólcie, że opowiem Wam jak wyglądała
moja nauka DITA do tej pory.

## DITA jest mesjaszem

Było wczesne lato, hotel gdzieś na wyspach brytyjskich, sala pełna ludzi. Moja
pierwsza konferencja o komunikacji technicznej. Głowa pełna nowych pomysłów i
inspiracji, serce pełne emocji. Przecież ta branża jest tak bogata i można
zrobić tak wiele! Być online! Content is king! Tear down the silos! A zaraz
zaczyna się następne wystąpienie, które w tytule ma zagadkowy skrót DITA.

Siadam z kawą i słucham. W nazwie jest coś o Darwinie, potem mowa o typach
informacji, potem o XMLu. Wreszcie lista korzyści: bo to standard, bo wiele
kanałów publikacji, bo reuse, bo narzędzia dostępne za darmo. Ciągle jeszcze
mało rozumiem.

Kilka miesięcy później, w pracy. Wielka korporacja, wielkie procesy, wielkie
projekty. Przez te kilka miesięcy opanowałem XMLa, XSLT, stawiam pierwsze kroki
w języku skryptowym Arbortexta, no i znam firmowy standard XML jak własną
kieszeń. Wiem, że jest oparty o DocBooka, oraz pozwala na publikacje w wielu
kanałach, reuse, i tym podobne. Ale to nie DITA. Na spotkaniu zabiera głos
kolega i mówi, że DITA mogłaby nas wynieść na wyższy poziom. Manager kiwa głową
i mówi, że trzeba zrobić pilota.

## DITA to ciężka praca

Niektóre narzędzia obsługują DITA, inne mogą obsłużyć, jak się zapłaci
vendorowi, jeszcze inne trzeba dostosować. Wszystkie trzy rzeczy mają znaczenie
w naszym pilocie, więc zakasujemy rękawy i zabieramy się do roboty. Po pierwsze
trzeba zrozumieć modularność i strukturę książki. Czytamy co się da w sieci.
Najwięcej czasu spędzam na stronie OASIS czytając specyfikację. „Potrzebne są te
atrybuty?” ktoś pyta. Patrzę do specyfikacji.

Pod koniec pilota każdy z nas wie co się z czym je - ja się specjalizuję w XMLu,
kolega w architekturze, koleżanka w metodologii pisania. Spod igły wychodzi
pierwszy zestaw manuali, wygląda dobrze, a reuse jest na poziomie dwucyfrowych
procent, więc manager mówi: „Wdrażamy dla całej dokumentacji!”

## Niektórzy nie lubią DITA

Znowu sala pełna ludzi, tym razem w malowniczym niemieckim miasteczku. Wszyscy
mają siwe brody i sto lat doświadczenia za paskiem. Nie pracują w niepoważnych
nowoczesnych technologiach. Oni tu wytwarzają elementy pociągów i suwnice do
tłoków wielkości bloku z wielkiej płyty. I piszą do tego manuale. Robili to jak
mnie jeszcze nie było na świecie.

Zaczyna się wystąpienie i szybko się orientuję, że mówiący nie lubi DITA. Uważa,
że nie jest ona takim dobrym pomysłem, jeżeli ma się już specyfikację XML i
działające narzędzia i procesy.

Chodzę po sali targowej i oglądam CMSy. Niektóre obsługują też DITA, bo to
przecież XML, ale wystawcy patrzą na mnie sceptycznie.

Wracam do pracy. Przede mną poważne zadanie - DITA na skalę całej organizacji.
Muszę zadbać o narzędzia i silnik produkcyjny, bo okazuje się, że manuale
generują się powoli i trzeba to robić kilka razy, zanim wyjdą dobrze. Uczę się
pisać pluginy do DITA OT i tworzę GUI do jego obsługi.

Tymczasem naszego XMLa jest bardzo dużo, a ma być więcej, więc piszę
jednocześnie aplikację, która pomoże w konwersji. Wygląda na to, że to musi być
wizard, bo jest kilka etapów, na których technical writer musi podejmować
decyzje. Poza tym jest kilka kroków przed i kilka kroków po automatycznej
konwersji.

Ale koledzy z zespołu mają poważniejsze zadanie: nauczyć kilkadziesiąt osób jak
pisać w DITA. Kilkadziesiąt osób, które nie chcą pisać w DITA, bo to im stwarza
więcej pracy, jest nieintuicyjne i trudne, i w ogóle niektórzy z nich mają 100
lat doświadczenia i kiedyś tego nie było. Management wysyła twarde komunikaty
wzmagając tylko poczucie buntu.

Koledzy z zespołu tworzą kursy, warsztaty i seminaria. Tworzą komitety, piszą
style guide, zamawiają zewnętrzne szkolenia. Koledzy z zespołu się wypalają i
odchodzą. Ich miejsce zajmują inni, którzy mają pozytywne doświadczenia z DITA z
innych miejsc pracy. Nie rozumieją dlaczego tutaj wszyscy nienawidzą DITA.

## Czasem DITA to sukces

Prawie pięć lat później management pierwszy raz ogłasza sukces - wszystko
przekonwertowano do DITA! Uczę się „ostatniego” aspektu DITA - strony
biznesowej. Muszę wyliczyć ROI (return on investment), więc kompiluję dziesiątki
czynników i tworzę niekończące się Excele. Z koleżanką tworzymy formułę, która
pokazuje zwrot z inwestycji w reuse. Analizujemy setki tysięcy powiązań miedzy
mapami a topikami. Konwersja z naszego XMLa, nowe narzędzia, nowe procesy, setki
godzin szkoleń, tysiące maili od niezadowolonych. Dopiero teraz widzę, że cała
ta praca się opłaciła.

Przed nami jeszcze wymiana CMSa, to będzie następna lekcja. A już myślałem, że
była ostatnia.
