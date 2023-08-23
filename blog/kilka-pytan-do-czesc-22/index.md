---
title: "Kilka pytań do - Część 22"
date: "2021-01-11"
categories:
  - "warsztat"
  - "wywiady"
tags:
  - "dokumentacja"
  - "spolecznosc"
  - "wywiad"
coverImage: "wywiad-22.png"
---

Witajcie w nowym roku! Rozpoczynamy od wywiadu numer 22 ;-).

Naszym rozmówcą jest Andrzej Niewiarowski, który niedawno dołączył do naszej redakcji.

Zapraszamy!

#### W jaki sposób zostałeś Specification Engineerem?

Zanim nim zostałem, ukończyłem filologię angielską ze specjalnością translatoryki ogólnej. W trakcie studiów i po nich zdobyłem spore doświadczenie jako tłumacz. Jednymi z ciekawszych pozycji jakie tłumaczyłem były książki z dziedziny sportu i zdrowia. Bardzo dobrze też wspominam epizody z tłumaczeniem ustnym.

Od 2010 roku pracuję w firmie [TomTom](https://www.tomtom.com/pl_pl/). Zaczynałem jako "Documentation and Training Developer" tworząc po angielsku tool manuale i kursy e-learning. "Seniorem" zostałem w 2014 roku. Na przestrzeni lat sposób organizacji dokumentacji mocno się zmieniał. Pierwsze kroki stawiałem w centralnym zespole przyjmującym zlecenia od różnych grup operacyjnych i inżynieryjnych. Po latach wprowadzono sporą rewolucję, w wyniku której każdy "dokumentalista" odpowiadał za większy blok tematyczny, co pozostaje obecnie obowiązującym modelem.

W 2018 zostałem zaproszony przez koleżankę, z którą pracowałem już wcześniej w centralnym zespole, do wzięcia udziału w nowym, ekscytującym projekcie Autonomous Driving. Tu również tworzę dokumenty po angielsku, choć widzę duże różnice między pisaniem dokumentacji i specyfikacji.

#### Na czym właściwie polega Twoja rola?

Wcześniej odgrywałem rolę w tworzeniu dokumentów definiujących zmiany modelu produktu mapy. Obecnie opisuję ten model korzystając z diagramów UML, jak również przedstawiam to, jak wyglądają dane produktu. Do moich zadań należy opisywanie zasad, zgodnie z którymi tworzona jest mapa, np.: które rzeczywiste obiekty zapisywane są jako informacja w bazie danych i jak daną kombinację obiektów reprezentujemy na mapie.

Do moich obowiązków należy również odpowiadanie na pytania klientów zewnętrznych i przeprowadzanie analiz.

#### Czy możesz opowiedzieć coś o swojej firmie i zespole, w którym pracujesz?

Firma TomTom znana jest jako producent map i urządzeń do nawigacji samochodowej. Nic więc dziwnego, że TomTom stanął do wyścigu polegającego na opracowaniu niezwykle dokładnej mapy dla pojazdów autonomicznych.

Zespół osób tworzących [HD Mapę](https://www.tomtom.com/products/hd-map/) jest rozbudowany i składa się z architektów, product managerów, inżynierów oprogramowania, testerów, specjalistów od jakości, ekspertów operacyjnych. Osoba na moim stanowisku potrzebuje być z nimi w stałym kontakcie.

Pracuję w oparciu o metodologię Kanban. Sytuacja bywa dynamiczna i dlatego mam regularne spotkania z koleżanką po fachu. Dzięki temu mogę się skonsultować, poprosić o recenzję, dostosować plan w taki sposób, by dostarczyć na czas najbardziej priorytetowe zadania.

#### W jaki sposób zdobywasz informacje potrzebne do tworzenia specyfikacji?

Informacje o zapotrzebowaniu na nowe funkcjonalności płyną od product managera i architekta. Szczegóły techniczne otrzymuję od inżynierów oprogramowania, a detale operacyjne - od przedstawicieli operacji. Jestem w stałym kontakcie z osobami z działu zapewnienia jakości. Pytania i sugestie zmian przychodzą również od klientów.

#### Jakich narzędzi używasz i co o nich sądzisz?

- Do utrzymywania diagramów UML wykorzystuję aplikację Enterprise Architect. Narzędzie słynie z tego, że jest bardzo nieintuicyjne i potrzeba sporo czasu, żeby się w nie wdrożyć. Szczęśliwie wydeptałem już w nim potrzebne mi ścieżki, więc nie sprawia mi już większych problemów. Dodam jeszcze w tym miejscu, że sam model aktualizujemy w tym samym repozytorium Bitbucket, na którym pracują inżynierowie rozwijający narzędzia do tworzenia produktu.
- Do robienia zrzutów ekranu i schematycznych ilustracji stosuję Snagit. Jestem z niego bardzo zadowolony. Choć nie jest to wszechpotężny kombajn graficzny, to w zupełności wystarcza mi do tego, co potrzebuję osiągnąć, a jest przy tym szybki i wygodny. Jeśli chcecie dowiedzieć się o nim więcej, zapraszam do przeczytania: [Snagit: Znacznie więcej niż zrzuty ekranu](http://techwriter.pl/snagit-znacznie-wiecej-niz-zrzuty-ekranu/) i [Snagit 2021 – pierwsze wrażenia](http://techwriter.pl/snagit-2021-pierwsze-wrazenia/).
- Korzystam z szablonów w MS Word. Przestrzenią, w której współpracujemy jest OneDrive z Office 365. Gotowe dokumenty publikuję do PDF i udostępniam na Sharepoint. Jestem zadowolony z platform z których korzystamy, szczególnie, że dochodzą do nich nowe funkcjonalności, które jeszcze bardziej usprawniają pracę. Patrzę ostatnio w kierunku pakietu Power Automate, który pozwala na automatyzację niektórych operacji na dokumentach.

#### Jakie produkty opisujesz?

Najogólniej rzecz biorąc, jest to mapa zawierająca pasy jezdne z uwzględnieniem namalowanych pasów i barier. Oprócz tego, dostarczamy różne dodatkowe informacje na podstawie wymagań klientów z sektora motoryzacji.

Dzięki HD mapie pojazdy autonomiczne będą mogły bezpiecznie przemierzać drogę, zwłaszcza, gdy skuteczność działania zainstalowanych sensorów będzie ograniczona. Sensory (kamery wideo, radar czy wykorzystujący wiązkę laserową [LiDAR](https://pl.wikipedia.org/wiki/Lidar)) gorzej radzą sobie w pewnych warunkach. Kamera, podobnie jak ludzkie oko, źle funkcjonuje przy ostrym świetle. Sensory nie będą w stanie "zobaczyć" pełnego obrazu sytuacji, jeśli widok jest zasłonięty przez wysoki pojazd na sąsiednim pasie; nie widzą, co jest za zakrętem. W takich sytuacjach posiadanie wirtualnej mapy w jakości HD jest nieodzowne. Technologie pojazdów autonomicznych i map HD dynamicznie się rozwijają. Jesteśmy dopiero na początku tej drogi, nie zobaczyliśmy jeszcze wszystkiego.

#### Jakie są największe wyzwania, które napotykasz w swojej pracy?

- Zrozumienie zawiłych problemów technicznych.
- Ilość napływających informacji i potrzeba szybkiej reakcji na nie, co wymaga dużej elastyczności i zdolności ustalania priorytetów.
- Ilość czasu jaki należy poświęcić na konsultacje i liczba ekspertów, którzy potrzebują się wypowiedzieć.
- Przedstawienie złożonych informacji w sposób jasny dla odbiorców.

#### Co najbardziej lubisz w pracy na stanowisku Specification Engineera?

- Nie mogę narzekać na nudę. Jestem częścią projektu, w którym tworzone są nowe, bardzo obiecujące technologie.
- Choć nie jestem osobą z wykształceniem technicznym, współpracuję ze świetnej klasy specjalistami z wielu dziedzin, którzy zawsze mają cierpliwość, by tłumaczyć mi problemy, z którymi się mierzymy.
- Cieszy mnie, kiedy wspólnie udaje się rozwiązać problem klienta, a specyfikacja jest częścią tej układanki.
- Uzyskanie odpowiedzi na kluczowe pytania to moment, w którym specyfikacja pisze się praktycznie sama ;)
- Odczuwam dużą satysfakcję, gdy udaje się przedstawić informacje tak, że osoba nie znająca specyfiki naszych projektów jest w stanie je zrozumieć.

#### Co możesz poradzić osobom, które chciałyby zacząć swoją przygodę z pisaniem dokumentacji i specyfikacji?

Jeśli chcesz zacząć pracę w dokumentacji, potrzebujesz kompetencji językowych i samozaparcia. Przyda się też otwarta głowa, by starać się zrozumieć nowe tematy.

Studia z informatyki pomogą, ale nawet jeśli nie masz takiego wykształcenia to nie przejmuj się, tylko aplikuj :)

Nawet jeśli masz już doświadczenie z innej firmy, prawdopodobnie i tak przez jakiś czas będziesz uczyć się specyfiki nowego projektu.

Jak już zaczniesz, to zadawaj dużo pytań, żeby dobrze zgłębiać tematy.

Pisząc, nie identyfikuj się ze swoim "dziełem". To tylko kawałek tekstu, który można bardzo długo ulepszać i modyfikować. Wszelkie uwagi do tekstów służą poprawie ich jakości i rozwinięciu Twojego warsztatu. Z biegiem czasu będziesz dostawać mniej uwag.

Pisanie specyfikacji ma wiele wspólnego z pisaniem dokumentacji: ogólny proces zbierania informacji, tworzenia, recenzowania i publikowania dokumentu jest taki sam. Różnica polega na większym poziomie szczegółowości, trzeba mocniej zagłębić się w aspekty techniczne narzędzia lub produktu. Wymagane są spore pokłady cierpliwości i samozaparcia, by wyjaśnić daną kwestię i wydać zaktualizowany opis. Myślę, że ważne jest, by lubić pisanie, bo spędzisz dużo czasu na recenzjach i poprawkach.

Więcej w tym momencie nie przychodzi mi do głowy. Życzę powodzenia wszystkim tym, którzy stawiają pierwsze kroki w technical writingu. Chwytajcie za pióra i do dzieła! Jest obecnie duże zapotrzebowanie na ludzi, którzy potrafią precyzyjnie i przystępnie opisywać coraz to nowe narzędzia i produkty, które mają szansę odmienić nasze życie na lepsze.
