---
title: 'Wdrażanie narzędzia w organizacji - szybki kurs pilotażu'
authors: mojk
date: '2026-04-22'
tags:
  - 'dobre-praktyki'
  - 'narzędzia'
  - 'warsztat'
coverImage: 'szybki-kurs-pilotażu.png'
---

Po tym jak wybierzemy narzędzie może pojawić się pokusa, żeby od razu przejść do
pełnego wdrożenia go w swojej organizacji. Ale moje doświadczenie i wiedza
pozwoliły mi już dawno temu dojść do wniosku, że nie jest to najlepszy pomysł.

<!-- truncate -->

Nieistnięjaca już organizacja [ITCQF](https://techwriter.pl/koniec-itcqf/)
pozostawiła po sobie dużo cennej wiedzy, m.in. o wprowadzaniu nowego narzędzia
do organizacji. Z grubsza ten proces można podzielić na takie trzy etapy:

1. Wybór narzędzia na podstawie wymagań. Możecie poczytać o tym więcej w naszym
   artykule
   ["Jak wybierać narzędzia"](https://techwriter.pl/jak-wybierac-narzedzia).
2. Projekt pilotażowy. Tutaj jesteś.
3. Pełne wdrożenie.

Podobnie jak w pokerze, żeby nie stracić wszystkich żetonów z powodu blefu
drugiej strony, trzeba powiedzieć "sprawdzam" w odpowiednim momencie. Pilotaż
daje nam właśnie możliwość sprawdzenia wybranego narzędzia w warunkach bojowych.
Nic tak nie weryfikuje teorii i założeń jak praktyczne zastosowanie rozwiązania.

Taki projekt pilotażowy ma sens zarówno w przypadku narzędzi płatnych jak i
darmowych, bo koszt wdrożenia jest wielowymiarowy. Ale o tym więcej w dalszej
części artykułu.

## Pieniądze to nie wszystko

Przenalizuj dokładnie ile wydasz na wybrane narzędzie.

Licencja to najbardziej oczywisty koszt wdrożenia. Dowiedz się:

1. Jaki model licencyjny obowiązuje - jednorazowa płatność czy subskrypcja
2. Czy liczba użytkowników ma znaczenie
3. Na jak długo musisz podpisać umowę? Czy jest wymóg czasowy czy płacimy kiedy
   korzystamy, a jak nie chcemy to możemy zrezygnować od razu?

Ponadto, czas poświęcony na instalację, konfigurację, szkolenia i późniejsze
utrzymanie to duża część naszego budżetu narzędziowego. Kiedy nasz zespół
writerski jest duży, takie koszty rosną znacząco. Weź to pod uwagę przygotowując
przysłowiowego Excela.

## Narzędziowy escape room

A co z ewentulaną migracją na inny system? Nikt z nas nie chce znaleźć się w
sytuacji, w której używamy narzędzia tylko dlatego, że nie da się przejść na
inne. Na początku wszystko może być w porządku, ale z biegiem czasu zaczniemy
odkrywać nowe potrzeby, nowe problemy i nowe możliwości. Jeśli rozwój narzędzia
nie nadąży za naszymi potrzebami, możemy chcieć je zmienić. Wtedy vendor lock-in
spowoduje, że przejście na inne rozwiązanie będzie jak próba wyjścia z escape
roomu. Bez zaangażowania grupy ludzi i rozwiązania skomplikowanych zagadek nie
uda się otworzyć drzwi, które pozwolą nam opuścić pomieszczenie. Taki lock-in
może też mieć miejsce w przypadku darmowych narzędzi, chociaż prawdopodobieństwo
jest niższe.

Vendor lock-in to awers, ale zostaje jeszcze rewers, czyli sytuacja, że to
vendor z jakiegoś powodu przestaje utrzymywać narzędzie. Na przykład, biznes
przestaje być dla niego opłacalny. W najgorszym wypadku zostaniemy bez
narzędzia, a w najlepszym z narzędziem, które nie będzie rozwijane, ulepszane i
naprawiane. Czy mamy jakiś okres ochronny?

Jeśli jest to usługa chmurowa, istnieje ryzyko, że produkt może zostać po prostu
wyłączony. Jeśli to aplikacja instalowana lokalnie, to możemy stracić część
funkcji, bo np. łączy się z jakimś serwisem, albo z narzędziem, które z biegiem
czasu stanie się coraz gorsze przez brak utrzymania ze strony producenta.

## Pomoc potrzebna od zaraz

Życie lubi nas zaskakiwać, szczególnie na początku naszej przygody z nowym
rozwiązaniem. Jeśli nie lubisz przykrych niespodzianek to dowiedz się dokładnie
o koszt i dostępność wsparcia technicznego.

Przykładowa lista pytań:

1. Czy istnieje wsparcie techniczne? Jeśli to narzędzie open source, to czy
   istnieją miejsca, do których możemy pójść po pomoc kiedy napotkamy problem?
2. Co mamy w cenie narzędzia? Czy dostajemy jakieś wsparcie techniczne? A jeśli
   tak to w jakiej formie? Może się okazać, że za wsparcie techniczne trzeba
   dopłacić ekstra.
3. Jak zgłosić problem i jakie jest SLA na jego rozwiązanie?
4. Jaki jest model dodawania i zmiany funkcji w narzędziu? Ile to kosztuje?

Lepiej dmuchać na zimne, bo nie jeden klient już się sparzył na swoich błędnych
założeniach.

## Oczekiwania kontra rzeczywistość

Mamy całą listę pytań i rzeczy do sprawdzenia, ale jakie są główne cele naszego
projektu pilotażowego? Z pomocą przychodzi tutaj
[syllabus](https://www.gasq.org/files/content/gasq/downloads/certification/ITCQF/ITCQF_Syllabus_v2_0Jun2020.pdf)
wspomnianej wcześniej fundacji ITCQF, który wymienia takie punkty:

1. Ocena czy balans korzyści i poniesionych kosztów jest rozsądny
2. Lepsze poznanie narzędzia
3. Ocena jak narzędzie wpisuje się w istniejące procesy i praktyki oraz ustalenie
4. Uzgodnienie jak narzędzie i jego dokumentacja mają być używane, zarządzane,
  przechowywane i utrzymywane (np. ustalenie zasad nazewnictwa plików i sekcji)

Po odhaczeniu powyższej listy dostaniemy solidną porcję danych, która pomoże nam
podjąć ostateczną decyzję czy wchodzimy w testowane rozwiązanie.

## Operacja się nie udała, pacjent przeżył

Po zebraniu danych z testów może pojawić się u nas pokusa "dopasowania" ich do
decyzji, którą podświadomie podjęliśmy przed rozpoczęciem projektu. Nie tędy
droga.

Celem pilotażu nie jest za wszelką cenę udowodnić, że wybraliśmy właściwe
narzędzie, tylko zderzenie teorii z praktyką, a następnie chłodna ocena wyniku
tego zderzenia. Żeby nie wpaść w pułapkę myślenia tunelowego, przed rozpoczęciem
pilotażu, trzeba jasno określić kryteria, które zdecydują czy testowane
narzędzie jest tym właściwym. Jeśli okaże się nasz wybór nie był dobry, to nie
oznacza, że pilotaż się nie udał. Porażka to też forma zwycięstwa.

Lepiej odkryć w trakcie testów, że coś nie działa tak jak chcemy niż dojść do
tych samych wniosków już po wdrożeniu na produkcję. W szerszej perspektywie,
oszczędza nam to sporo czasu i pieniędzy. Jeśli Twój pilotaż pokazał, że wybrane
narzędzie jednak nie spełnia wymagań, wracasz do początku. A może nawet cofasz
się jeszcze bardziej, czyli ponownie analizujesz swoje wymagania i założenia,
żeby mieć pewność, że Twoje oczekiwania są realne i przystające do
rzeczywistości. Potem powtarzasz proces wyboru narzędzia.

## Pilotaż to dopiero początek

Jeśli miałeś nosa i Twój pilotaż zakończył się wnioskiem, że testowane narzędzie
jest właściwym rozwiązaniem, to masz powód do zadowolenia. Ale nie rozsiadaj się
na długo, bo to nie koniec. Sukces odtrąbiony, czas zakasać rękawy i
brać się do roboty.

Droga od projektu pilotażowego do rozwiązania produkcyjnego jest przeważnie
długa i kręta. Nie chcę tutaj brzmieć jak Pan Maruda Niszczyciel Dobrej Zabawy,
ale przechodziłem ją kilka razy i rzadko kiedy wszystko idzie jak po maśle.

W kalkulacjach i dalszym planowaniu weź to pod uwagę, bo ktoś będzie musiał
zainwestować w to czas i pieniądze. Zapewne wyjdzie trochę większych i
mniejszych problemów, których nie przewidziałeś. To normalne, więc nie martw się
tylko skup się na szukaniu rozwiązań.

Powodzenia!

Zdjęcie wykonane przez
[Kristophera Allisona](https://unsplash.com/@kristopher_allison?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
i pobrane z
[Unsplash](https://unsplash.com/photos/man-flying-aircraft-under-cloudy-sky-KU4zYj4u0mo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
