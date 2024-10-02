---
title: 'Tooltips w teorii i praktyce'
authors: [toporek]
date: '2024-09-25'
tags:
  - 'z kraju'
  - 'edukacja'
  - 'dobre-praktyki'
coverImage: 'tooltips cover.png'
---

Jeśli chcecie nadać nowy „wygląd” Waszej aplikacji, wprowadzić nową funkcję lub
ulepszyć istniejącą, tooltipy mogą Wam w tym pomóc. Tooltipy mogą odegrać
kluczową rolę w poprawie użyteczności aplikacji, zmniejszając dezorientację
użytkowników i ułatwiając efektywne wykonywanie zadań. W tym artykule
wyjaśniamy, czym są tooltipy i jak z nich korzystać.

<!--truncate-->

Ten artykuł będzie przewodnikiem krok po kroku, w jaki sposób tooltipy mogą
pomóc użytkownikom uniknąć rozczarowania i pozwolić im kontynuować naukę i
wdrażanie funkcji. Na początek może, małe wprowadzenie.

## Czym dokładnie są tooltipy?

[Tooltipy](https://pl.wikipedia.org/wiki/Tooltip) (podpowiedzi), to krótkie
komunikaty wyświetlane przez użytkownika, które dostarczają dodatkowych
informacji o wybranym elemencie strony i zachęcają użytkowników do podjęcia
działań. Tooltipy są zwykle wyświetlane poprzez najechanie myszą lub poprzez
odpowiednie użycie klawiatury.

## Dlaczego warto ich używać?

Istnieje wiele powodów, dla których warto używać toolipów w aplikacji, oto
niektóre z nich:

- zajmują niewielką ilość miejsca na ekranie, więc nie są uciążliwą formą
  przesyłania wiadomości w aplikacji.
- poprawiają użyteczność i ułatwiają wykonywanie określonych zadań.
- zapewniają użytkownikom informacje na żądanie w momencie, gdy są potrzebne,
  dzięki czemu użytkownicy mogą podejmować decyzje, skuteczniej poruszać się po
  interfejsach i rozumieć funkcjonalność elementów interaktywnych.
- wyświetlają się tylko kontekstowo, dostarczając dodatkowych wyjaśnień i
  wskazówek. Swoją drogą, jeśli byłyby wyświetlane na stałe, zaśmiecałyby
  interfejs użytkownika 😉.
- mogą być nieocenionym wsparciem dla nowych użytkowników, ułatwiając im
  zrozumienie funkcji, ich poszczególnych elementów i umożliwiając im interakcję
  z treściami internetowymi. A jak? Na przykład poprzez przypomnienie, co robi
  dana ikona lub gdy jakaś funkcja jest trudna do wyjaśnienia są pomocne w
  nawigowaniu.
- można je stosować zarówno do prezentacji produktów, wdrażania funkcji, czy też
  szkolenia użytkowników.

## Gdzie warto je stosować?

Wykorzystanie tooltipów może być dość wszechstronne w różnych biznesach, ale
skupmy się na kilku typowych w branży technologicznej. Można do nich zaliczyć
między innymi:

- wycieczki wdrożeniowe – gdy użytkownik po raz pierwszy loguje się do
  aplikacji, może odbyć wycieczkę po aplikacji lub jej funkcjach. Wyświetlane w
  aplikacji podpowiedzi pokazują każdy aspekt danej funkcji i dostarczają
  informacji o tym, co robi dana ikona. Wariantem wycieczek mogą być
  interaktywne przewodniki, czyli podpowiedzi pojawiają się dopiero po
  interakcji użytkownika z poprzednią podpowiedzią, dzięki czemu są bardziej
  angażujące niż ogólna wycieczka po aplikacji.
- wprowadzanie nowych funkcji – z których użytkownicy jeszcze nie korzystali -
  za pomocą podpowiedzi możesz wyróżnić funkcje, które nie były jeszcze używane
  i nauczyć użytkowników, jak z nich korzystać
- zapowiadanie nowych funkcji i zmian w produktach – podpowiedzi doskonale
  nadają się do ogłaszania zmian w aplikacji czy dodawania nowych funkcji.
- zapewnienie pomocy, gdy użytkownik utknie w martwym punkcie – jeśli użytkownik
  nie może ruszyć dalej, tooltipy mogą pomoc w wykonaniu konkretnych czynności
  lub skierować użytkownika do źródeł „samopomocy”. Jeśli użytkownicy potrzebują
  więcej informacji, wówczas mogą skorzystać z podpowiedzi zamiast kontaktować
  się z pomocą techniczną.

## Co jest ważne podczas tworzenia tooltipów?

Chociaż tooltipy nie są nowością w sieci, często są one niewłaściwie stosowane
lub zaimplementowane. Na co zatem warto zwrócić uwagę przy ich tworzeniu?

- dodawajcie krótki tekst – tooltipy z oczywistym lub zbędnym tekstem nie
  przynoszą korzyści użytkownikom. Jeśli nie możecie wymyślić pomocnej treści,
  nie oferujcie podpowiedzi. Dodana podpowiedź powinna być samowystarczalna,
  czyli powinna być zwięźle opisana i nie blokować powiązanych treści… w
  przeciwnym razie zmarnujecie czas użytkownika, który będzie miał pecha
  aktywować tę podpowiedź ☹.
- używajcie podpowiedzi ze strzałkami – gdy elementy znajdują się blisko siebie
  strzałki pomagają uniknąć nieporozumień.
- używajcie tooltipów konsekwentnie w całej aplikacji. Niektóre elementy
  aplikacji są trudne do znalezienia, ponieważ brakuje im wizualnych wskazówek.
  Jeśli podpowiedzi są wyświetlane nieregularnie w całej aplikacji, użytkownicy
  mogą nigdy ich nie odkryć. Ważne jest, aby być konsekwentnym i zapewniać
  podpowiedzi dla wszystkich elementów projektu, a nie tylko wybranych. Jeśli
  tylko niektóre elementy wymagają dodatkowych wyjaśnień, użyj wyskakujących
  podpowiedzi dla tych elementów.
- używajcie podpowiedzi dla niejednoznacznych ikon – ikony mają pewien poziom
  niejednoznaczności, warto więc przemyśleć czy użyć tooltipy dla wszystkich
  ikon lub zapewnić użytkownikowi wersje opisową przycisku.
- zadbajcie o to, aby tooltipy miały umiarkowane tło i czcionkę – umiarkowany
  kontrast jest ważny, aby użytkownicy mogli zobaczyć tekst w podpowiedziach,
  ponadto użytkownicy z dysfunkcjami wzroku mogą mieć trudności z odczytaniem
  podpowiedzi, jeśli tekst i tło mają zbliżone kolory lub tekst jest wyjątkowo
  mały i nieczytelny.
- umieszczajcie tooltipy w taki sposób, aby nie blokowały powiązanej treści nie
  były zbyt rozciągnięte – warto upewnić się czy treść nie zasłania innych
  istotnych informacji związanych z celem użytkownika i nie jest zbyt
  rozciągnięta.
- pokazujcie tylko kontekstowe podpowiedzi, których użytkownicy będą używać
  podczas korzystania z danego elementu - uruchamianie tooltipów które będą
  potrzebne dopiero później, powoduje tylko niepotrzebny bałagan w Waszej
  aplikacji.
- zezwalajcie użytkownikom na zamykanie podpowiedzi w dowolnym momencie - można
  użyć znaku (x) lub kliknięcia w wolnym polu aplikacji, który zamknie
  podpowiedź. W każdym razie dobrze, żeby użytkownik widział co ma zrobić. 😉

No i na koniec do znudzenia powtarzana złota zasada.

- ważne, żeby tooltipy były zwięzłe, spójne z resztą projektu i zbudowane z
  myślą o dostępności, zgodne z wewnętrznymi lub zewnętrznymi standardami oraz
  przewodnikami stylu - często zdarza się, że całe zespoły pracują nad rozwojem
  różnych elementów aplikacji, dlatego ważne jest, aby wszystkie osoby kierowały
  się tymi samymi zaleceniami, aby uniknąć rozbieżności, na przykład w
  terminologii czy stylu tworzenia.

## Kiedy dodawać tooltipy?

Opisaliśmy już czym są podpowiedzi oraz jak i gdzie ich używać. To już połowa
sukcesu jednak najważniejsze i najtrudniejsze do rozwiązania są kwestie drobne i
pozornie błahe, dlatego dodajemy kilka praktycznych wskazówek:

- weźcie pod uwagę pochodzenie użytkowników – zaplanujcie strategię, jak często
  używać podpowiedzi i w jakim celu. Jeśli Wasi użytkownicy znają już waszą
  aplikacje, może nie być konieczne dalsze wyjaśnianie każdej funkcji lub
  działania. Jeśli użytkownicy są początkujący lub zróżnicowani, możecie dodać
  więcej podpowiedzi.
- wczujcie się w rolę użytkowników – możemy śmiało napisać, że jako Tech
  writerzy jesteście najbliżej sposobu myślenia użytkowników, ponieważ
  postrzegacie produkty jako historie, a nie elementy.
- zapomnijcie o tym co wiecie, o parametrach technicznych, możliwościach
  programistycznych – przejdźcie przez Wasz aplikacje i zastanówcie się, gdzie
  się zatrzymaliście lub utknęliście? Lub co jest jeszcze niejasne?
- zorganizujcie sesję użyteczności – warto zdobyć informacje jak użytkownicy
  korzystają z Waszego produktu. Gdzie napotykają na trudności lub w których
  momentach zatrzymują się, próbując coś zrozumieć. To będzie pewnie to miejsce,
  w którym warto dodać wskazówkę 😉.
- skupcie się na funkcjonalności i korzyściach płynących z danej funkcji – jeśli
  próbujecie wyjaśnić działanie produktu, prawdopodobnie nie tędy droga.
  Skuteczny tooltip przechodzi prosto do sedna i pozwala użytkownikom na
  korzystanie z funkcji. Jeśli zastanawiacie się, czy użyć tooltipów warto zadać
  sobie pytanie, czy informacje zawarte w podpowiedzi są niezbędne użytkownikowi
  do wykonania zadania.
- nie zapomnijcie o innych wytycznych projektowych (na przykład, oznaczania
  ikon) – ważne informacje powinny zawsze znajdować się na stronie; dlatego
  podpowiedzi nie powinny być niezbędne do wykonywania zadań, które użytkownicy
  muszą wykonać w witrynie.

## Podsumowując

Prawidłowo użyte tooltipy są niezwykle efektywną pomocą. Sprawiają, że
korzystanie z aplikacji jest płynne, profesjonalne i łatwe. Prowadzi to do
zadowalania użytkowników oraz buduje ich zaufanie do Waszego produktu. Mamy
nadzieję, że ten artykuł pozwolił Wam zapoznać się z różnymi sposobami tworzenia
kontekstowych i angażujących podpowiedzi.

Co tu dużo pisać, zachęcamy do komentowania i dzielenia się Waszymi
przemyśleniami.
