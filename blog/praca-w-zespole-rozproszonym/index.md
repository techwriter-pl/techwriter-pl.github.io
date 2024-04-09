---
title:
  'Praca w zespole rozproszonym'
authors: ['mojk', 'pensjonatus`]
date: '2024-01-31'
tags:
  - 'dobre-praktyki'
  - 'praca'
coverImage: ''
---

# Praca w zespole rozproszonym - wyzwania i rozwiązania

Elastyczność w kwestii lokalizacji i godzin pracy to niewątpliwie duży przywilej, który pozwala nam łatwiej zarządzać pracą i życiem prywatnym. Jednak praca w zespole rozproszonym wiąże się również z szeregiem wyzwań. Dlatego postanowiliśmy się podzielić z Wami naszym studium przypadku. Mamy nadzieję, że nasze obserwacje i pomysły okażą się dla Was przydatne i że zainspirują Was do działania.

<!--truncate-->

## Kim jesteśmy

Jesteśmy 4-osobowym zespołem, który w większości pracuje asynchronicznie. Myśląc o pracy asynchronicznej, często skupiamy się na tym, że ktoś jest w innym miejscu na świecie i w innej strefie czasowej. Jednak nawet przebywanie w tej samej strefie czasowej nie gwarantuje pracy synchronicznej, ponieważ mamy różny tryb pracy, różne obowiązki prywatne oraz różne pory, w których możemy i chcemy pracować. Dodatkowo, dochodzi aspekt pracy zdalnej. W naszym przypadku 3 z 4 osób pracuje z domu. Dlatego “przypadkowe” interakcje między członkami naszego zespołu właściwie nie występują. Czasami zdarza się, że spotykamy się w biurze, ale jest to sytuacja sporadyczna i zazwyczaj jest podyktowana koniecznością
wspólnej pracy nad jakimś zagadnieniem.

## Z czym się borykamy

Na początku wszystko wydawało się super, trochę taki miesiąc miodowy. Każdy
pracował według własnych preferencji i dostępności. Praca szła do przodu,
więc nie było większych powodów do zmartwień. Jednak z biegiem czasu zaczęliśmy zauważać pewne mniejsze i większe problemy, które negatywnie wpływały na naszą wydajność i osiąganie celów jako zespół.

### Wiedza zamknięta w głowach poszczególnych osób

Problem stary jak świat, omawiany miliony razy. Wydawałoby się, że wszyscy
wiedzą, że istnieje, więc powinni przeciwdziałać jego występowaniu. Niestety, tak nie jest i my też staliśmy się jego ofiarami. Z biegiem czasu, każdy z nas wyspecjalizował się w jakiejś dziedzinie. Jedna osoba jest ekspertem od dity i wszelkich tematów z tym związanych. Inna osoba jest specjalistą od infrastruktury, automatyzacji i deploymentu w chmurze. Jeszcze inne osoby bardzo dobrze radzą sobie z technologiami frontendowymi. Dobrze jest mieć ekspertów w danej dziedzinie, ale powoduje to sytuacje, w których zadania z konkretnego zakresu zawsze trafiają do tych samych osób. Przez to w zespole mamy single points of failure. Jeśli dana osoba pójdzie na urlop albo nie ma czasu, praca stoi. Ktoś inny nie jest w stanie przejąć obowiązków i pociągnąć tematu ze względu na zbyt małą wiedzę.

### Zbyt mała samowystarczalność w zakresie lokalnego środowiska deweloperskiego

Nie wypracowaliśmy jeszcze całkowicie wytycznych i współdzielonych konfiguracji, które umożliwiałyby szybkie i sprawne rozwijanie i testowanie zmian lokalnie. Przez to tracimy czas na wspieranie siebie nawzajem, debugowanie problemów i wykrywanie różnic w konfiguracji narzędzi.

### Spotkania

Dobrze się rozmawia w miłym towarzystwie, ale nie taki jest cel organizowania spotkań. Zapewne każdy z nas brał udział w takich spotkaniach, podczas których miło się rozmawiało, ale nie
wynikały z nich konkretne rzeczy do zrobienia. Po godzinnym spotkaniu,
rozchodzimy się i nie mamy listy zadań do zrobienia oraz wspólnego zrozumienia tego czym powinniśmy się zajmować w nadchodzącym tygodniu. Kolejny problem to tematy omawiane na spotkaniu. Są tematy techniczne i “biznesowe”, które nie zawsze są istotne dla każdego.

### Zbyt rzadkie i zdawkowe aktualizacje dotyczące wykonywanych zadań

Niska częstotliwość aktualizacji zadań w systemie, niewystarczająca komunikacja z innymi członkami zespołu. W przypadku zespołów rozproszonych
“overcommunication” jest kluczowe ze względu na brak możliwości zdobycia
informacji “przypadkowo”, co ma miejsce w zespołach pracujących ze sobą
na miejscu.

## Co robimy, żeby było lepiej

### Odpowiedzialność za domenę wiedzy

Za domenę wiedzy moglibyśmy uznać wspomniane wcześniej zagadnienia, takie jak infrastruktura, DITA, czy frontend. Jednak mogą to też być bardziej
wyspecjalizowane sprawy, jak autentykacja, czy na przykład kontakty z zespołem globalizacji. Takie domeny wykształcają się naturalnie z biegiem czasu pod wpływem krajobrazu zadań otaczających zespół, ale mają na nie wpływ także
indywidualne preferencje poszczególnych osób oraz ich styl pracy. Jeżeli tylko jedna osoba jest odpowiedzialna za daną domenę, to kiedy jej nie ma, praca stoi. Jeżeli podczas jej nieobecności wydarzy się coś niespodziewanego to zespół jest w tarapatach.

Żeby zapobiegać tego typu problemom, ustaliliśmy kilka zasad związanych z
prowadzeniem domeny.

Po pierwsze, właściciel danej domeny jest odpowiedzialny za zadania z nią
związane. Jednak odpowiedzialność za domenę nie oznacza, że właściciel będzie sam zajmował się tymi zadaniami. Oznacza to, że ma on się zaopiekować danym tematem od momentu zgłoszenia do rozwiązania. W zależności od sytuacji, może on podzielić zadanie na mniejsze, oddelegować zadanie, sparować się z innym członkiem zespołu, itp. Po drugie, właściciel jest również odpowiedzialny za to, żeby mieć backup, który przejmie jego zadania podczas nieobecności. Dzięki temu każdy może wziąć urlop i w pełni się odłączyć od pracy nie martwiąc się, że w każdej chwili może zadzwonić telefon, albo że musi trzymać rękę na pulsie, bo ktoś gdzieś czeka na pomoc.

### Dzielenie się wiedzą

Żeby móc efektywnie rozprowadzić odpowiedzialność po całym zespole, trzeba
dzielić się wiedzą. Wprowadziliśmy więc kilka zasad wokół tego tematu.

Jeśli ma to sens, podziel się informacją o rozwiązaniu problemu z innymi. Wykorzystaj do tego spotkanie zespołowe albo podziel się tą wiedzą na piśmie, na przykład na Slacku albo w komentarzu pod rozwiązaną historyjką w Jirze.

To prowadzi nas do kolejnej zasady: zadbaj o dokumentację. Dobra dokumentacja to najlepsze źródło wiedzy, więc staraj się ją aktualizować na bieżąco. Kiedy to robisz, stosuj starą zasadę biwakowania: “Pozostaw to miejsce lepszym niż go
zastałeś”. Poprawiaj i ulepszaj jak się tylko da. Prowadząc dokumentację,
pamiętaj, żeby opisywać tematy przydatne dla innych. Znasz swoją publikę dośc dobrze, jest to w końcu Twój zespół.

Przy okazji nauczyliśmy się, że robienie dobrych notatek w commitach i ticketach ułatwia późniejsze zrobienie dokumentacji.

Ostatnim filarem dzielenia się wiedzą jest dla nas praca w parach. Jeśli ma to sens, pracuj z inną osobą i staraj się to robić regularnie. Przy czym postaraj się popracować chociaż trochę z każdym.

### Praca asynchroniczna

Ja pracuję teraz, ale kolega poszedł pobiegać i będzie pracował po południu. Jeszcze inny kolega śpi, bo jest u niego teraz noc, a koleżanka ma teraz akurat wizytę u lekarza. Nasza praca asynchroniczna
doprowadziła do sformułowania całego szeregu zasad i prawideł.

Jeśli potrzebujesz odpowiedzi natychmiast, jasno o tym powiedz. Nie możesz
oczekiwać od innych, że zajmą się Twoim pytaniem od razu.

Potrzebujesz, żeby inni sprawdzili Twoją pracę, ale nie chcesz też marnować ich czasu na znajdowanie oczywistych niedoróbek. Dlatego testuj lokalnie przed wystawieniem PRa.

Z drugiej strony, dziel się swoją pracą od razu, nie czekaj aż wszystko będzie idealne. Może Ci się wydawać, że opracowujesz magnum opus i potrzebujesz czasu.
Możesz się też wstydzić i obawiać krytyki ze strony innych. Jednak pamiętaj, że jesteście jednym zespołem i powinniście nauczyć się komunikować na tematy
związane z pracą bez niepotrzebnych napięć. Nawet jeżeli nie prosisz od razu o review, opublikuj przynajmniej brancha, żeby inni mogli się do niego odwołać w razie potrzeby.

Żeby usprawnić komunikację wokół wspólnej pracy, korzystaj z możliwości jakie dają Ci narzędzia typu Bitbucket czy GitHub - pull requesty, komentarze, sugestie, itp. Ich dodatkową zaletą, oprócz komunikacji, jest to, że pozostawiają historię. Jeśli za kilka miesięcy będziesz mieć podobny problem, możesz się do niej odwołać, żeby przypomnieć sobie jak go rozwiązaliście.

Rób review zmian innych. Jest to istotny element dzielenia się wiedzą. Nawet
jeśli zmiana została już zaakceptowana, przejrzyj ją, żeby dowiedzieć się co się wydarzyło.

Używaj systemu do zadań, żeby po Twojej pracy pozostał ślad. Dzięki temu inni będą wiedzieć czym się zajmujesz, a w przyszłości będzie można łatwo przypomnieć sobie dlaczego dana zmiana została zrobiona.

### Spotkania

Mogłoby się wydawać, że w pracy asynchronicznej spotkania to samo dobro. Ale
jedna z pierwszych zasad którą chcemy się tu podzielić to: jeśli spotkanie nie jest potrzebne, odwołaj je. Niepotrzebne spotkanie to strata czasu, który mógłbyś spędzić dużo lepiej.

Oczywiście spotkania są potrzebne, więc organizuj je i przychodź na te zorganizowane przez innych. Ale kiedy już na nich jesteś, skup się na rzeczach, które trzeba omówić. Pogawędka jest dobra na rozgrzewkę, ale potem trzeba trzymać dygresje w ryzach.

Żeby każde spotkanie było produktywne, zakończ je listą zadań i priorytetów na najbliższy czas. Każdy z uczestników musi wiedzieć czym ma się zajmować.

Jeśli spotkanie nie spełnia swojej roli, może warto je podzielić na dwa krótsze. Na przykład, jedno poświęcone technicznym zagadnieniom, a jedno poświęcone celom biznesowym. Wyobraź sobie, że planujecie skomplikowany projekt, ale nie możecie wyklarować pełnej wizji od początku do końca, bo na każdym kroku zaczynacie wnikać w szczegóły techniczne. Na pierwszym spotkaniu skup się tylko na wizji i ucinaj dyskusje o szczegółach. Kiedy już wszystkie etapy są zarysowane, poświęć następne spotkania na omówienie szczegółów każdego z nich.

### Narzędzia

Narzędzia zawsze odgrywają rolę w pracy, a w pracy synchronicznej mogą zrobić
naprawdę dużą różnicę. Odkryliśmy kilka dobrych praktyk, które wiążą się ściśle
z pracą asynchroniczną.

Po pierwsze, testuj automatycznie co tylko się da. Dzięki temu można pracować
szybciej bez czekania na zatwierdzanie zmian przez innych.

Upewnij się, że każdy ma dobrze skonfigurowane lokalne środowisko do pracy.
Dzięki temu wasze zmiany będą bardziej przewidywalne. Jeżeli u mnie na kompie
coś działa, to powinno działać u koleżanki i powinno działać na środowisku
produkcyjnym.

Jeżeli używasz formatera, np. Prettier, podziel się konfiguracją z całym
zespołem i niech formatowanie będzie częścią commita. Wtedy przeglądanie zmian
od innych będzie czytelniejsze, bo nie będzie zawierało “przypadkowych” zmian w
formatowaniu.

Korzystaj z komunikatorów, żeby informować na bieżąco innych nad czym pracujesz.
Wyobraź sobie, że już już kończysz pracę nad fantastyczną nową funkcjonalnością,
a tu nagle ktoś wrzuca PR z tym samym. A mógłby pracować nad czymś innym gdyby
tylko wiedział.

Wykorzystuj narzędzia do organizacji pracy jak Jira i włącz opcje takie jak
automatyczne przypisywanie zadań na podstawie domeny, automatycznie
przypisywanie reviewerów, w zależności od nazwy brancha. Niby mała rzecz, ale w
dłuższej perspektywie oszczędza czas.

## Co dalej?

Myślisz sobie: my mamy podobny zespół i podobne trudności. Co powinniśmy robić?

Naszym zdaniem każdy dobrze działający zespół jest podobny, ale każdy zespół z
problemami jest inny. Nie mamy jednej recepty na uzdrowienie każdego z nich, ale
wierzymy, że opis naszej drogi może posłużyć Wam za drogowskaz.

A więc co robimy?

Po pierwsze robimy rachunek sumienia i zaczynamy działać. Dzielimy listę
problemów na kawałki, które są strawne. Dzięki temu łatwiej nam będzie podjąć
działanie. Po drugie poszerzamy wiedzę w zakresie pracy w zespole, nie tylko
rozproszonym. W tej kwestii mogą Wam się przydać następujące źródła:

- Książka "Software Engineering at Google" (autorzy: Titus Winters, Tom
  Manshreck, Hyrum Wright)
- Artykuł z garścią rekomendacji:
  https://jacobian.org/2023/sep/29/rto-wfh/?utm_source=changelog-news
- Odcinki naszego podcastu “Tech Writer koduje”: “#56 Tech Writer robi
  inżynierię oprogramowania, czyli dobre praktyki prosto od Google” oraz “#58
  Tech Writer pracuje w zespole rozproszonym - wyzwania i rozwiązania”
