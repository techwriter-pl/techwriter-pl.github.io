---
title: "Help and Manual - opis narzędzia"
authors: admin
date: "2014-01-21"
tags:
  - "narzedzia"
  - "warsztat"
  - "manuale"
  - "on-line-help"
coverImage: "HelpAndManual.jpg"
---

Niniejszym otwieramy nową, długo wyczekiwaną kategorię artykułów - opisy
narzędzi wykorzystywanych przez technical writerów. Czynimy to z tym większą
przyjemnością, że cykl ten został zapoczątkowany przez jednego z naszych stałych
czytelników - mojka. Przeczytajcie jego recenzję i bądźcie mu wdzięczni jako i
my jesteśmy.

<!--truncate-->

Ostatnio zacząłem zastanawiać się jakich narzędzi używają w swojej pracy
dokumentaliści. Dlatego też sam postanowiłem podzielić się swoimi
doświadczeniami w tej kwestii. Być może okaże się to pomocne dla osób
poszukujących odpowiedniego dla siebie oprogramowania. Od razu zaznaczam, że nie
mam na celu reklamowania niczego ani przedstawiania pełnej specyfikacji
produktu, jedynie opisanie własnych subiektywnych odczuć. Dobra, to część
formalną mamy za sobą, więc przejdzmy do konkretów.

Moim podstawowym narzędziem jest Help and Manual 6, wersja Professional. Jest to
HAT (Help Authoring Tool), czyli program typowo skrojony pod tworzenie
dokumentacji. Produkowany jest przez austriacką firmę EC Software. Panowie
podają, że jego pierwsza wersja powstała w 1997.

Wersja Professional kosztuje 595 dolarów nie wliczając podatku. Co za to
dostajemy? Licencja pozwala na instalację jednej kopii programu na komputerze
stacjonarnym i drugiej z tym samym kluczem licencyjnym na laptopie, pod
warunkiem, że korzysta z nich ta sama osoba. Oprócz tego dostajemy wsparcie
techniczne przez e-mail na okres 12 miesięcy. Tutaj ciekawostka: dokopałem się
do informacji, że  ten okres jest tak ustawiony tylko po to, żeby zarysować
jakąś ramę czasową. Po upływie roku nadal możemy liczyć na wsparcie. Potwierdzam
ten stan rzeczy. Programu używam już 2 lata i nadal korzystam z pomocy. Dodam
tylko, że  wsparcie działa naprawdę sprawnie. Przeważnie odpowiedź otrzymujemy
tego samego dnia, a czasami nawet w ciągu pierwszej godziny. Poza tym, jeszcze
się chyba nie zdarzyło, żeby  Panowie nie umieli odpowiedź na jakieś pytanie
rzeczowo. Może jest to oczywiste, ale w cenie otrzymujemy  również za darmo
wszelkie aktualizacje w ramach wersji głównej, czyli mając wersję 6.x
otrzymujemy wszelkie  aktualizacje do numerku po kropce 😊. Obecnie najnowsza
wersja to 6.4.1. Wszelkie aktualizacje do nowej wersji głównej są zazwyczaj 50%
tańsze dla obecnych użytkowników. Dlaczego o tym wspominam? Kiedy szukałem
oprogramowania HAT, takie rzeczy były istotne może nie tyle dla mnie, co dla
mojego pracodawcy, który płacił za oprogramowanie.

Przejdźmy do samego programu. Ogólnie interfejs graficzny nawiązuje mocno do
Worda. Według mnie jest to zaleta, ponieważ nawigacja nie sprawia dzięki temu
większych problemów.  Po lewej stronie mamy tradycyjne drzewko, który daje nam
dostęp do rozdziałów i konfiguracji projektu. Programu używa się przyjemnie,
obsługa jest dość intuicyjna, a interfejs nie sprawia wrażenia przeładowanego
funkcjami i nie onieśmiela przy pierwszym spotkaniu 😉. Nie będę się rozpisywał
o tym jak poruszać się po programie, bo to można sobie wyciągnąć z instrukcji.
Poza tym, ze strony producenta można ściągnąć sobie najnowszą wersję, która
pozwala na testowanie w pełni funkcjonalnego programu przez 30 dni bez
licencji.  Wspomnę tylko o jednej rzeczy, którą uważam za jedną z
najpoważniejszych wad tego programu, mianowicie listy numerowane i punktowane.
Owszem istnieje coś takiego jak automatyczne numerowanie i punktowanie.
Właściwie nie ma problemu kiedy tworzymy taką listę krok po kroku - punkt
pierwszy, enter, punkt drugi, enter, itp. Problem się pojawia w momencie kiedy
chcemy dodać coś np. w środku już istniejącej listy. O ile w Wordzie działanie
list jest naprawdę dobre (kontynuacja numerowania, resetowanie numerowania,
rozpoznawanie, że jest to kolejny element listy), to tutaj jest to słabo
rozwiązane. Trzeba się trochę napocić, żeby to ogarnąć.

Help and Manual umożliwia tzw. single sourcing, czyli tworzenie dokumentacji w
różnych formatach z jednego źródła. Program obsługuje eksport do formatu HTML,
PDF, CHM,  EPUB,  HXS,  RTF i Windows E-book (tworzony jest plik EXE). Osobiście
korzystam z formatów PDF i HTML i okazjonalnie RTF. Dla dokumentów w formacie
PDF i HTML można użyć skórek, które są dostępne w programie. Skórki można
edytować. Jeśli ktoś potrafi pogrzebać w kodzie HTML to można całkiem sporo tam
pozmieniać. Do zmiany skórki PDFa służy Manual Designer, który pozwala na
zaprojektowanie całego szablonu. Ogólnie te dwa formaty są wspierane bardzo
dobrze, czego niestety nie można powiedzieć o RTF. Jednym z braków tego programu
jest właśnie brak eksportu do formatu DOC lub DOCX. Przez to napotkałem taką
trudność, że po eksporcie do RTF muszę wykonać około 4 dodatkowych kroków w
Wordzie, żeby dokument wyglądał przyzwoicie. Trzeba używać konwersji oraz
zachować pliki graficzne w samym dokumencie, ponieważ eksport zapisuje treść
dokumentu w pliku RTF a wszystkie pliki graficzne w osobnych plikach. Co do
reszty formatów to ciężko mi coś powiedzieć, ponieważ na chwilę obecną z nich
nie korzystam.

Jeśli już mowa o generowaniu dokumentów, to warto wspomnieć, że program wspiera
Windowsowe pliki batch. Oznacza to tyle, że za pomocą komend w linii poleceń
Windowsa, można generować dokumenty. Odpalany jest wtedy tylko sam proces Help
and Manual w tle, a nie cały program z interfejsem graficznym. Jest to dodatek
do generowania dokumentów z samego programu. Tak naprawdę można połączyć te dwa
sposoby i skonfigurować zadania w samym projekcie, a komendy odpalające te
zadania już wrzucić do plików batch. Jest kilka opcji i jeśli poświęcimy trochę
czasu na  rozpracowanie tematu proces generowania dokumentów można sobie całkiem
fajnie zautomatyzować. Połączenie tych funkcji programu z jakimś zewnętrznym
narzędziem do automatyzacji procesu budowania, jak np. Jenkins, pozwala na
stworzenie “maszyny”, która generuje dokumenty za pomocą kilku kliknięć.

Kolejną ciekawą rzeczą jest integracja programu Help and Manual z systemem
kontroli wersji, np. TortoiseSVN. Dzięki temu, rozdziały w drzewku po lewej
stronie  posiadają ikonę, która informuje o aktualnym stanie synchronizacji
pomiędzy naszą lokalną kopią projektu , a  kopią w repozytorium na serwerze.
Oczywiście wszelkie zmiany można synchronizować z poziomu programu. Ważne jest
to, że wsparcie dla systemu kontroli wersji można włączać i wyłączać w
ustawieniach Help and Manual według potrzeb.

Program w wersji Professional umożliwia pracę grupową nad projektami. Niestety w
związku z tym, że jestem jedynym dokumentalistą w całej firmie nie miałem okazji
z tego kotrzystać. Jednak chciałem zasygnalizować, że program ma taką
funkcjonalność gdyby ktoś poszukiwał programu dla zespołu dokumentalistów.

Na koniec dodam, że wraz z Help and Manual dostajemy też autorski program Impict
do robienia zrzutów ekranu. Jednak o narzędziach tego typu innym razem 😊

Podsumowując, po 2 latach używania Help and Manual wystawiam mu ocenę 4 na 5.
Jest to oczywiście subiektywna ocena. Zainteresowanych zapraszam na stronę
producenta [www.helpandmanual.com](http://www.helpandmanual.com)

mojk
