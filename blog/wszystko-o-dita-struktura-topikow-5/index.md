---
title: "Wszystko o DITA – Struktura topików (5)"
date: "2019-06-21"
tags:
  - "dobre-praktyki"
  - "narzedzia"
  - "warsztat"
  - "dita"
  - "topic"
coverImage: "evolution-206670_1920.jpg"
---

W sieci można natknąć się na całkiem sporo materiałów dotyczących DITA, jednak
znalezienie czegoś w języku polskim jest dość trudne. Chcąc zmienić ten stan
rzeczy, postanowiliśmy stworzyć dla Was niniejsze kompendium wiedzy o tym
standardzie.

W tym artykule pochylimy się nad strukturą poszczególnych elementów, które
budują naszą techniczną epopeję. Weźmy zatem do ręki metaforyczną lupę i
przyjrzyjmy się z bliska małym bestiom biegającym po mapach, a którym na imię
"topic".

# Topik ogólny, a topiki wyspecjalizowane

Wszystkie topiki wyspecjalizowane standardu DITA powstają na bazie topika
ogólnego (generic topic). Topik ogólny służy jako podstawa podczas tworzenia
topików wyspecjalizowanych. Wiele elementów topika ogólnego znajduje się także w
topikach wyspecjalizowanych, zatem wszystkie topiki będą miały następujące
znaczniki:

```xml
<topic>
  <title></title>
  <shortdesc></shortdesc>
  <body></body>
</topic>
```

Krótki opis powyższych tagów:

- `<title>` - jest to jedyny znacznik, który musi być obecny w każdym topiku.
- `<shortdesc>` - pozwala wprowadzić kilku zdaniowe podsumowanie tego, co
  znajduje się w topiku
- `<body>` - wewnątrz tego znacznika znajduje się większość elementów. W
  topikach wyspecjalizowanych znacznik ten zmienia nazwę, zależnie od typu
  topika. Przykłady: `<conbody>`, `<taskbody>`.

Na koniec tego rozdziału opisującego topik ogólny warto podkreślić, że zawsze
istnieje możliwość korzystania z topików ogólnych podczas tworzenia treści,
jednak zaleca się, aby korzystać z topików wyspecjalizowanych.

# Topik typu Concept

Topik typu Concept odpowiada na pytanie "Dlaczego?" i zawiera podstawowe
informacje, które czytelnik powinien posiadać.

Koncepty z reguły zawierają w sobie paragrafy z tekstem i listami, ale mogą
zawierać także uwagi, tabele i grafiki konieczne, aby czytelnik mógł zrozumieć
ideę kryjącą się za poszczególnym tematem.

Elementy najczęściej używane w konceptach:

- `<conbody>` - znacznik, który zawiera większość elementów danego topika
- `<p>` - (paragraph), paragraf zawierający tekst
- `<ul>` - (unordered list), nieponumerowana lista
- `<ol>` - (ordered list), ponumerowana lista
- `<li>` - (list item), poszczególny punkt/numer w liście
- `<fig>` - (figure), element, który może zawierać dodatkowy tytuł
- `<image>` - element zawierający grafikę, który znajduje się w tagu `<fig>`
- `<section>` - podział wewnętrzny topika, który może zawierać tytuł

# Topik typu Task

Topik typu Task odpowiada na pytanie "Jak?" i zawiera instrukcję krok po kroku
prowadzącą do wykonania pewnej procedury. DITA pozwala także na wprowadzenie
rezultatu konkretnego kroku, grafiki, uwagi oraz dodatkowy poziom kroków.

Treść techniczna często zawiera wiele tasków.

Warto także zauważyć, że istnieją dwa typy tasków, jednak nie zawsze są one
wykorzystywane.

- Strict task
- General task

Strict task wymusza, aby wszystkie jego elementy pojawiały się w określonej
kolejności oraz dopuszcza jedynie jeden element `<example>`. Pozwala także na
dwa bardzo formalne elementy zagnieżdżone w elemencie `<steps>` - `<steps>` oraz
`<steps-unordered>`. Strict task dobrze nadaje się do fragmentów opisujących
procedurę krok po kroku.

General task, zwany potocznie w języku angielskim "loose task", wprowadza
większą dowolność w kwestii kolejności elementów oraz pozwala także na
wprowadzenie wielu elementów `<example>`. W elemencie `<steps>` może dodatkowo
pojawić się `<steps-informal>`, który zawiera w sobie bardziej zróżnicowaną
treść. General task sprawdza się podczas tworzenia ogólnego opisu procedury.

Elementy najczęściej używane w taskach:

- `<taskbody>` - znacznik, który zawiera większość elementów danego topika
- `<steps>` - opisuje sekwencję czynności do wykonania
- `<step>` - każdy z tych znaczników zawiera jedną, poszczególną czynność do
  wykonania
  - `<cmd>` - zawiera czynność, którą wykonuje użytkownik; ten znacznik jest
    elementem koniecznym w znaczniku `<step>`
  - `<info>` - można w nim znaleźć dodatkowe informacje o danym kroku
  - `<stepresult>` - przedstawia rezultat, jaki otrzymamy po wykonaniu danego
    kroku
  - `<stepxmp>` - podaje przykład jak można wykonać dany krok
- `<example>` - podaje przykład jak można wykonać cały proces

# Topik typu Reference

Topik typu Reference odpowiada na pytanie "Co to jest?" i zawiera fakty
opisujące nasz produkt, takie jak składnia polecenia, wywołanie funkcji API,
tabela zawierająca cechy operacyjne, tolerancję urządzenia czy też tabelę z
obiektami widocznymi na ekranie oprogramowania.

Topiki reference nie zawierają kroków ani informacji podstawowych o produkcie.
Treść tego topika przypomina definicje słownikowe podając jedynie suche fakty.

Elementy najczęściej używane w topikach reference:

- `<refbody>` - znacznik, który zawiera większość elementów danego topika
- `<section>` - podział wewnętrzny topika, który może zawierać tytuł
- `<table>` - tabela
- `<fig>` - (figure), element, który może zawierać dodatkowy tytuł
- `<properties>` - lista właściwości
- `<refsyn>` - diagram składni

# Topik typu Glossary entry

Topik Glossary entry odpowiada na pytanie "Co to słowo / fraza oznacza?" i
najczęściej zawiera jedno pojęcie oraz jedną, lub więcej definicji.

Elementy najczęściej używane w topikach Glossary entry:

- `<glossentry>` - podstawowy znacznik topiku Glossary entry
- `<glossterm>` - zawiera słowo lub frazę, którą należy objaśnić
- `<glossdef>` - zawiera definicję słowa lub frazy przytoczonej w znaczniku 
  `<glossterm>`

# Co dalej?

Podsumowując, w standardzie DITA posiadamy zarówno topik ogólny dający nam
zupełną swobodę działania jak i cztery podstawowe topiki wyspecjalizowane,
które, dobrze zastosowane, pomogą nam stworzyć treść tak, aby była czytelna,
przejrzysta i spójna. Pamiętajcie, że DITA umożliwia doświadczonym użytkownikom
tworzenie nowych, wyspecjalizowanych topików tak, aby jak najbardziej dostosować
ten standard do potrzeb waszej organizacji. Nowe, wyspecjalizowane topiki
tworzymy na bazie istniejących elementów.

Jeżeli chcecie się dowiedzieć więcej, zachęcamy do przeczytania kolejnych
artykułów.

Cała seria składa się z następujących wpisów:

- [Wszystko o DITA – Wprowadzenie (1)](http://techwriter.pl/wszystko-o-dita-wprowadzenie-1/)
- [Wszystko o DITA – Podstawy (2)](http://techwriter.pl/wszystko-o-dita-podstawy/)
- [Wszystko o DITA – Strategia (3)](http://techwriter.pl/wszystko-o-dita-strategia/)
- [Wszystko o DITA – Narzędzia (4)](http://techwriter.pl/jak-zaczac-pisac-w-dita-narzedzia/)
- Wszystko o DITA – Struktura topików (5)
