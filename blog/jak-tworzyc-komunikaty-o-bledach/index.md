---
title: 'Jak tworzyć komunikaty o błędach?'
authors: mojk
date: '2015-05-05'
tags:
  - 'dobre-praktyki'
  - 'przykłady'
  - 'warsztat'
  - 'aplikacje'
  - 'pomoc-użytkownika'
  - 'użyteczność'
coverImage: 'error-102075_640-e1430287810378.jpg'
---

Czy do Was też przychodzą programiści z pytaniami co napisać w wyskakującym
okienku, które i tak nigdy się przecież nie pokaże? Jeśli tak, to dzisiejszy
wpis może Was zainteresować. Niedawno trafiliśmy na
[artykuł](http://www.ihearttechnicalwriting.com/write-error-messages/)
poruszający właśnie to zagadnienie. Pisanie krótkich komunikatów to tak naprawdę
rodzaj sztuki - w małym okienku musimy zawrzeć wszystkie niezbędne informacje
zachowując przy tym poprawność językową i jasność przekazu. Zasada jest prosta -
im mniej mamy miejsca, tym więcej czasu spędzimy pisząc komunikat. Warto jednak
poświęcić czas na stworzenie komunikatów dobrej jakości, ponieważ są one
istotnym elementem każdego systemu. Pełnią one rolę pierwszej linii wsparcia,
dlatego jeśli są słabej jakości, negatywnie wpływają na jakość produktu oraz
powodują frustrację użytkowników, co z kolei przekłada się bezpośrednio na
koszty wsparcia technicznego. Jak powszechnie wiadomo, każda terapia zaczyna się
od przyznania, że mamy problem. Tak samo jest w przypadku oprogramowania. Każdy
system ma swoje problemy, dlatego dopiero kiedy to zaakceptujemy, możemy zabrać
się do tworzenia komunikatów o błędach z odpowiednim nastawieniem. Naszym celem
jest przede wszystkim pomoc użytkownikom. Poniżej garść wytycznych jak tworzyć
dobre komunikaty o błędach (bynajmniej nie takie, jak komunikat w grafice do
tego wpisu). Są one skierowane zarówno do dokumentalistów jak i programistów.

<!--truncate-->

### Definicja

Komunikat o błędzie (error message) to informacja o tym co powoduje, że
użytkownik lub system nie są w stanie wykonać zadania.

### Treść

Dobrze skonstruowany komunikat powinien zawierać takie informacje:

- Jaki jest problem i dlaczego wystąpił
- Jaki ma to wpływ na użytkownika
- Co można zrobić, żeby problem się nie powtórzył

Ogólnie, komunikat powinien zawierać na tyle dużo informacji o problemie, żeby
użytkownik mógł go sam rozwiązać.

### Typy

Komunikaty o błędach można podzielić na cztery kategorie:

- Błąd (Error)
- Ostrzeżenie (Warning)
- Potwierdzenie (Confirmation)
- Powiadomienie (Notification)

### Zasady

Tworząc komunikaty kieruj się poniższymi wytycznymi:

- Podawaj tylko konkretne informacje.
- Ucz użytkownika jak używać aplikacji (podawaj przykłady).
- Wskaż problem, a następnie jego rozwiązanie.
- Dostosuj poziom informacji do stopnia zaawansowania użytkownika.
- Oszczędź pracy użytkownikowi - pozwól na poprawienie błędu, zamiast kazać
  zaczynać od początku.
- Używaj pozytywnego tonu, nie potępiaj.
- Zachowaj spójność w terminologii, gramatyce, skrótach, formatowaniu i
  rozkładzie wizualnym.
- Używaj prostego języka (spójnego, bez niepotrzebnych słów) i zrozumiałej
  terminologii.

### Popularne błędy

Unikaj poniższych błędów:

- Nie wzbudzaj poczucia winy - jeśli użytkownik popełnił błąd, nie wytykaj mu
  tego, tylko napisz w czym leży problem.
- Unikaj zbyt ogólnych stwierdzeń i zagadkowych liczb, np. "błąd 724".
- Unikaj żargonu, żartów, slangu, skrótów i negatywnych zwrotów, takich jak:
  zły, nieprawidłowy, niedopuszczalny.
- Ogranicz czerwony kolor tam gdzie to możliwe, z wyjątkiem sytuacji kiedy
  działania użytkownika mogą mieć poważne konsekwencje; wtedy należy
  niezwłocznie powiadomić użytkownika w wyraźny sposób, że stanie się coś
  poważnego.
- Nie używaj słowa "błąd" w tytule okna.
- Nie stosuj antropomorfizacji - nie sugeruj, że oprogramowanie ma uczucia lub
  myśli.
- Unikaj zwrotów, które mogą zostać uznane za obraźliwe w niektórych kulturach.

### Jak tworzyć lepsze komunikaty?

Nasze komunikaty mogą być jeszcze bardziej przyjazne dla użytkowników jeśli
będziemy trzymać się poniższych zasad:

- Zmień tymczasowe komunikaty, które zostały stworzone w trakcie testów i
  odnoszą się do klas, obiektów i innych elementów kodu.
- Zmień komunikaty, które pozostawiają użytkownika w stanie zawieszenia - nie
  informują dokładnie co spowodowało problem i jak odzyskać utracone dane.
- Jeśli to możliwe, dodaj linki do pomocy, która zawiera więcej informacji o
  problemie i o tym jak skontaktować się ze wsparciem technicznym.
- **Wskazówka dla osób niezwiązanych z tworzeniem dokumentacji:** Zaangażuj
  dokumentalistę w pisanie i ulepszanie komunikatów; jeśli w firmie nie ma
  takiej osoby, powierz to zadanie komuś kto najlepiej radzi sobie z pisaniem
  tekstów.

### Proces tworzenia komunikatów

Komunikaty błędów można tworzyć w następujący sposób:

- Stwórz arkusz, np. w Excelu, dodaj kolumny dla komunikatów i głównych przyczyn
  ich wystąpienia.
- Ponumeruj błędy.
- Stwórz zespół kontrolujący jakość komunikatów.
- Stwórz zbiór dobrych praktyk i podziel się nimi z zespołem.
- Stwórz wytyczne dotyczące pisania komunikatów, które można łatwo wcielić w
  życie, wraz z przykładami.
- Uwzględnij komunikaty pojawiające się w aplikacji na etapie projektowania
  oprogramowania.
- Dołącz komunikaty do systemu kontroli wersji.
- Recenzuj komunikaty w trakcie rozwoju oprogramowania.
- Postaraj się wyeliminować potrzebę tworzenia komunikatów na tyle na ile to
  możliwe.
- Przeprowadzaj testy akceptacyjne na komunikatach.
- Okresowo sprawdzaj komunikaty.

### Dobre praktyki

Tworząc komunikaty

- Unikaj słowa "nieprawidłowy". Używaj bardziej opisowych stwierdzeń, żeby
  poinformować użytkownika co jest nie tak, np. unikaj komunikatów takich jak
  "Nieprawidłowy rozmiar". Zamiast tego, poinformuj użytkownika jakich kryteriów
  powinien użyć podając rozmiar.
- Unikaj słowa "proszę". Może ono zostać zinterpretowane w taki sposób, że
  wymagana czynność jest opcjonalna.
- Nie używaj dużych liter i wykrzykników.
- Wyjaśnij co jest rozwiązaniem problemu. Jeśli zawiera więcej niż jeden krok,
  podaj link do strony z pomocą, która opisuje procedurę szczegółowo.
- Wstaw deskryptory przed właściwymi terminami, żeby wyjaśnić znaczenie zdania,
  np. "Określ ID kiedy Detect jest ustawione na No" powinno być zmienione na
  "Określ parametr ID jeśli opcja Detect jest ustawiona na No".
- Używaj pełnych zdań i strony czynnej jeśli to możliwe.
- Użyj przycisku "Anuluj", żeby zatrzymać operację i zamknąć okienko z
  informacją.
- Użyj przycisku "Zamknij", żeby zamknąć okienko z informacją.
- Użyj przycisku "Szczegóły", żeby dostarczyć więcej informacji o przyczynie
  problemu.
- Użyj przycisku "Pomoc", żeby dostarczyć więcej informacji o rozwiązaniu
  problemu.
- Używaj czasu teraźniejszego do opisywania okoliczności, które spowodowały
  problem.
- Zapisuj błędy krytyczne w dzienniku zdarzeń.
- Zapisuj osobne komunikaty o błędach dla każdego znanego problemu.

### Co na to koledzy Billa?

Microsoft zaleca następujące rzeczy:

- Unikaj niejasnych sformułowań i podawaj konkretne nazwy i lokalizacje dla
  obiektów.
- Nie odwołuj się do implementacji detali, które nie są widoczne dla
  użytkownika, np. nie odwołuj się do nazw funkcji lub obiektów w programie.
- Unikaj stwierdzeń, które mogą zostać odebrane jako nieprofesjonalne, takie jak
  "nieoczekiwany błąd".
- Unikaj wstawiania zmiennych, które mają być wypełniaczami: ciężko je potem
  zlokalizować i zamienić na właściwą treść.

Zachęcamy do zapoznania się z
[oryginalnym artykułem](http://www.ihearttechnicalwriting.com/write-error-messages/).
Oprócz powyższych zasad, znajdziecie tam jeszcze trochę przykładów komunikatów
stosowanych przez takie firmy jak IBM, Oracle czy Google.
