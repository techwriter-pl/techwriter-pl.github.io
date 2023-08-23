---
title: "Naucz się sam(a) - część 4"
date: "2014-06-03"
categories: 
  - "dobre-praktyki"
  - "przyklady"
  - "warsztat"
tags: 
  - "edukacja"
  - "kariera"
  - "literatura"
coverImage: "414JSZMPX8L.jpg"
---

Zgodnie z obietnicą, prezentujemy drugą porcję przydatnych informacji z książki **„Technical Writing 101: A Real-World Guide to Planning and Writing Technical Documentation”** autorstwa **Alana S. Pringle** i **Sarah S. O’Keefe**. Jest to kontynuacja dobrych rad, które przedstawiliśmy w poprzednim [wpisie](http://techwriter.pl/naucz-sie-sama-czesc-3/) z cyklu **"Naucz się sam(a)"**.

# Jak tworzyć indeks?

1. Nie umieszczaj w indeksie każdego wystąpienia danego słowa, tylko miejsca gdzie pojawiła się nowa ważna informacja.
2. Jeśli słowo jest akronimem, dodaj do indeksu pozycję dla rozwinięcia tego akronimu, np. Digital Subscriber Line, _patrz_ DSL
3. Wpisy w indeksie można zagnieżdżać, dzięki temu łatwiej znaleźć dane hasło. Zaleca się stosowanie dwóch poziomów zagnieżdżenia. Można użyć trzeciego poziomu, jednak jest to zalecane jeśli instrukcja ma 500 lub więcej stron.
4. Stosowanie "patrz" i "patrz również":
    
    - Patrz - odsyła użytkownika do szukanej informacji bez duplikowania wpisów, np. zmiana, _patrz_ modyfikacja
    - Patrz również - odsyła użytkownika do powiązanych wpisów, np.
        
        dodawanie, _patrz również_ tworzenie indeksu 126 stron 30 spisu treści 125
        
        tworzenie _patrz również_ dodawanie nowego dokumentu 32 tabeli 51 zmiennych użytkownika 98
        
5. W przybliżeniu indeks powinien zawierać około 1 stronę z dwoma kolumnami na każde 20 stron dokumentacji.
    

# Jak pisać dokumentację, która jest tłumaczona na inne języki?

1. Używaj przejrzystej, spójnej i jednoznacznej terminologii. Jeśli słowo może być zarówno rzeczownikiem i czasownikiem, w całym dokumencie używaj go tylko w jednej z tych form, np. słowo "Enter" (press Enter, Enter your password).
2. Używaj prostych konstrukcji zdań:
    
    - Unikaj stylu twórczego pisania, czyli np. zdań złożonych i odwróconej składni
    - Nie omijaj opcjonalnych części mowy, np. zaimków względnych w języku angielskim
3. Nie używaj metafor, aluzji i idiomów, które są specyficzne dla danej kultury. Skup się raczej na właściwym znaczeniu słów.
4. Nie nawiązuj do sportu, znanych osób lub polityki.
5. Nie wtrącaj żartów - tak jak aluzje, idiomy i metafory, humor jest zależny od danej kultury. To co jednych śmieszy, może być obraźliwe dla innych.
6. Nie używaj imion lub odwołań do płci. Używanie liczby mnogiej często pomaga wyeliminować odwołania do płci.
7. Stosowanie grafiki:
    
    - Łatwiej przetłumaczyć tekst niż obrazek
    - Obrazki są interpretowane różnie w zależności od kultury, np. skrzynka pocztowa na listy w USA wygląda inaczej niż w Europie, więc jej ikona może nie zostać rozpoznana
    - W niektórych kulturach sposób prezentowania osób na obrazkach może być obraźliwy:
        
        - Zachodni styl ubierania kobiet
        - Długość zarostu
        - Pozycja mężczyzny i kobiety w trakcie interakcji
        - Pozycja rąk i stóp w odniesieniu do odbiorców, np. lewa dłoń uznawana jest za nieczystą w niektórych kulturach, wiec pokazywanie jej na obrazkach może być nie na miejscu
        - Kolory też mogą mieć znaczenie symboliczne lub polityczne
8. Przetłumaczony tekst jest zazwyczaj dłuższy od oryginału. Wynika to z różnic w składni języków. Można założyć, że przetłumaczony tekst jest dłuższy od tekstu źródłowego o ok. 20-30%. Trzeba o tym pamiętać projektując szablony.
9. Tabele o stałej szerokości mogą czasami przysporzyć problemów, ponieważ w przetłumaczonych tekście słowa mogą zostać podzielone kilka razy.
10. Używanie w tabelach nagłówków, które rozpoczynają zdanie nie jest dobrym pomysłem, np.

| Jeśli | Wtedy |
| --- | --- |
| nie świecą się żadne kontrolki i drukarka nie działa | sprawdź czy drukarka jest podpięta do prądu i czy włącznik znajduje się w pozycji "ON" |

Składnia języka docelowego może być tak różna od składni języka źródłowego, że ciężko będzie dopasować zdania do tabelki z takim nagłówkami. Lepiej jest użyć w nagłówkach rzeczowników, które uporządkują elementy w kategorie, np.

| Problem | Rozwiązanie |
| --- | --- |
| Nie świecą się żadne kontrolki i drukarka nie działa | Sprawdź czy drukarka jest podpięta do prądu i czy włącznik znajduje się w pozycji "ON" |

# Jedno źródło i wiele formatów

1. Single sourcing - tworzenie dokumentacji w wielu formatach z jednego zestawu plików.
2. Tradycyjna organizacja pracy beż użycia single sourcingu:
    
    - Rozwijanie równoległe - dokumenty w różnych formatach rozwijane są jednocześnie w osobnych plikach:
        
        - Wszystkie formaty są gotowe w tym samym czasie
        - Osoba rozwijająca dany format może się w nim wyspecjalizować i zoptymalizować informacje dla tego formatu
        - Duży nakład pracy, tworzenie tych samych informacji dwa razy co może powodować rozbieżności w terminologii
    - Rozwijanie seryjne - najpierw rozwijane są dokumenty w jednym formacie, a następnie kolejne formaty. Pomimo podobieństwa do single sourcingu to nie to samo, ponieważ kopiujemy informacje z jednego formatu do innego i poprawiamy:
        
        - Informacje tworzone są tylko raz
        - Kolejne formaty są tworzone po ukończeniu poprzednich, przez co informacje są pełne
        - Prostsze utrzymywanie dokumentów - konwersja robiona jest tylko raz podczas publikacji nowej wersji produktu
        - Kolejne formaty są dostarczane sporo później niż pierwszy format, co może prowadzić do problemów z planowaniem
3. Korzystając single sourcingu można użyć tekstu warunkowego - odpowiednie znaczniki powodują, że jakiś tekst pojawia się lub nie w danym formacie dokumentu.
4. Ocena czy single sourcing jest właściwą strategią dla danego projektu:
    
    - Jeśli zawartość dokumentów w poszczególnych formatach różni się znacząco, wtedy nie ma to sensu
    - Jeśli zawartość dokumentów w różnych formatach w większości pokrywa się oraz jeśli budżet i czas są ograniczone, wtedy może to być korzystne
5. Korzyści płynące z single sourcingu:
    
    - Nie trzeba utrzymywać kilku zestawu plików - mniej wysiłku oraz mniejsze prawdopodobieństwo pomyłki przy wprowadzaniu poprawek
    - Oszczędność pieniędzy - jest jeszcze większa jeśli dokumenty są tłumaczone na inne języki, ponieważ tłumaczenie wykonuje się na jednym zestawie plików
6. Przeciwnicy single sourcingu twierdzą, że dokumenty w wersji online i drukowanej są tak różne, że nie da się ich wyprodukować z jednego źródła. Autorzy książki uważają jednak, że solidne planowanie i użycie odpowiednich narzędzi umożliwia stworzenie jednej treści, która będzie odpowiednia dla kilku formatów.

Na koniec jeszcze rada dotycząca aplikowania na stanowisko Technical Writera: sprawdź dokładnie swoje CV pod kątem błędów - aplikacja z literówkami albo błędami gramatycznymi na wstępie wyeliminuje Cię jako potencjalnego kandydata lub kandydatkę :)
