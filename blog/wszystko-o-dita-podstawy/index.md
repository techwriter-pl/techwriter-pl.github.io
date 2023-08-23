---
title: "Wszystko o DITA – Podstawy (2)"
authors: pensjonatus
date: "2016-05-04"
tags:
  - "dobre-praktyki"
  - "narzedzia"
  - "warsztat"
  - "dita"
  - "manuale"
  - "on-line-help"
  - "pomoc-uzytkownika"
coverImage: "Darwin.png"
---

W sieci można natknąć się na całkiem sporo materiałów dotyczących DITA, jednak
znalezienie czegoś w języku polskim jest dość trudne. Chcąc zmienić ten stan
rzeczy, postanowiliśmy stworzyć dla Was niniejsze kompendium wiedzy o tym
standardzie.

Pierwszy artykuł z tej serii uchylił rąbka ditowej tajemnicy. W tym odcinku
znajdziecie pogłębione informacje o języku znaczników wykorzystywanym w dicie,
poznacie jakie są rodzaje topików i czym się wyróżniają. Będziecie mogli także
zajrzeć przez ramię „technicznego pisarza”, a to za sprawą przykładowego topika.

# Od XML do DITA

Żeby rozwiać wszystkie wątpliwości na starcie - DITA to tylko XML i nic więcej.
Ale jednocześnie, DITA to dużo więcej niż XML.

[XML to standard](https://pl.wikipedia.org/wiki/XML) pozwalający oznaczać tekst
semantycznymi tagami, na przykład tak:

```xml
<title>Wszystko o DITA - podstawy</title>
```

Dzięki temu zabiegowi, możemy nadać strukturę dokumentowi tak, że ludzie i
maszyny będą rozumiały jaka jest rola danego fragmentu tekstu. W tym wypadku,
ten fragment tekstu to tytuł, więc możemy zaprogramować przeglądarkę (używając
CSS) tak, żeby wyświetliła go większą czcionką. Możemy też na przykład
przeszukać całą masę dokumentów i wyłuskać z nich tytuły. To trochę trywialny
przykład, ale zastosowanie tego typu semantycznych oznaczeń jest ograniczone
tylko naszą wyobraźnią.

W standardzie XML możemy tworzyć własne słowniki semantyczne i nazywać elementy
jak chcemy. Te elementy nazywamy tagami. Nota bene, z reguły używa się
angielskich nazw tagów, ale nic nie stoi na przeszkodzie, żeby pisać w dowolnym
języku. Angielski ma tą przewagę, że powinien być zrozumiały jeżeli ktoś z
innego kraju będzie pracował z naszym dokumentem.

Oto przykład innego zastosowania tagów XMLa:

```xml
<step>Wyjmij <part>baterię</part> z urządzenia.</step>
```

W tym wypadku opisujemy jeden z listy kroków w procedurze. Ponieważ oznaczyliśmy
słowo "baterię" tagiem `<part>`, zapisujemy informację, że jest ona częścią.
Dzięki temu, możemy na przykład pobrać listę części z całego zbioru dokumentów.
Możemy też umożliwić wyszukanie typu "pokaż procedury, które dotyczą
następujących części" i pod spodem wyświetlić listę checkboxów wygenerowaną ze
słów w tagu `<part>`.

Taka dowolność w tworzeniu słowników XMLowych daje wiele możliwości, ale też
stwarza problemy:

- Musimy opracować cały słownik
- Musimy stworzyć mechanizmy, które ten słownik obsłużą
- Jeżeli mamy dokumenty używające różnych słowników, musimy obsłużyć
  transformację i porównanie

Ponieważ większość projektów dokumentacji jest w miarę powtarzalna, powstały
pewne standardowe słowniki XML i idące z nimi w parze narzędzia, takie jak
edytory, systemy zarządzania treścią (CMS) czy mechanizmy publikacji. Dzięki
standardom, nie musimy zaczynać od zera i tworzyć wszystkiego sami, ale możemy
czerpać korzyści z doświadczenia innych ludzi. W taki oto sposób dochodzimy do
Darwin Information Typing Architecture, czyli DITA, która jest właśnie jednym ze
standardów XML.

# Darwin Information Typing Architecture

DITA definiuje dwa duże typy pliku - topic i mapa. Topic odpowiada pojedynczemu
samodzielnemu artykułowi, zaś mapa zbiera te artykuły w całość. Istnieją różne
rodzaje topików, na przykład:

- Concept - opisuje zagadnienie, na przykład filozofię uprawnień użytkowników
- Task - opisuje procedurę, na przykład tworzenie zabezpieczonego folderu
- Reference - gromadzi informacje podręczne związane z jednym zagadnieniem, na
  przykład tabelę poziomów dostępu

Istnieją też różne rodzaje map, na przykład bookmapa, która zawiera spis treści,
rozdziały, kolofon, i inne elementy związane z książką. Używamy jej kiedy
dokument ma docelowo być drukowany lub wysłany jako PDF lub e-book.

Pojęcie **Information Typing** pochodzi właśnie od tych rodzajów plików,
ponieważ tworząc dokumentację w DITA zakładamy, że podzielenie informacji na
różne typy pozwoli czytelnikowi rozeznać się lepiej w tym co może zrobić z
dokumentacją. Jeżeli ktoś musi dowiedzieć się jak coś zrobić to będzie szukał
artykułu z listą kroków (task). Jeśli ktoś wie jak coś zrobić i musi tylko
sprawdzić jakie ma dostępne opcje to będzie szukał listy lub tabeli z opisem
parametrów (reference). Jeżeli z kolei będzie chciał się dowiedzieć więcej o
samym zagadnieniu to będzie szukał opisu i diagramów (concept). Idea różnych
rodzajów informacji jest centralnym punktem filozofii DITA, pomimo tego, że
pojawiła się zanim powstał ten standard.

# Przykłady

Dla tych, którzy najlepiej uczą się na przykładach, poniżej prezentujemy prosty
task w formacie DITA opisujący procedurę parzenia herbaty. Kroki potrzebne do
jej wykonania są banalne, ponieważ naszym głównym celem jest
zilustrowanie użycia elementów semantycznych, takich jak step. Taką przykładową
procedurę zapisujemy w pliku z rozszerzeniem DITA,
np. **robienie_herbaty.dita**.

```xml
<task>
<title>Robienie herbaty</title>

 <taskbody>

 <steps>
   <step>
     <cmd>Zagotuj wodę.</cmd>
   </step>

   <step>
     <cmd>Włóż torebkę herbaty do kubka.</cmd>
   </step>

   <step>
     <cmd>Zalej herbatę wodą.</cmd>
   </step>

 </steps>
 </taskbody>
</task>
```

Task pozwala na użycie wielu innych elementów, na przykład:

```xml
<step>
<note type-"warning">
Woda jest gorąca i może oparzyć.
</note>
<cmd>Zalej herbatę wodą.</cmd>
</step>
```

Jakie elementy są dozwolone i gdzie? To
definiuje [Document Type Definition (DTD)](https://pl.wikipedia.org/wiki/Document_Type_Definition).
Jeśli chcemy sobie ułatwić życie, to warto użyć edytora, który rozumie standard
DITA i pozwoli nam wstawić tylko te elementy, które są zgodne z DTD. Dla tych,
którzy szukają na początek czegoś darmowego, polecamy Eclipse z wtyczką DITA
Maven. Mała demonstracja [tutaj](https://www.youtube.com/watch?v=hp6uY6vRn5Y).

Kiedy już mamy napisane kilka topików, możemy stworzyć ich zbiór, czyli mapę. W
mapie umieścimy taga topicref odwołującego się do naszego pliku:

```xml
<topicref href="robienie\_herbaty.dita" type="task"></topicref>
```

Dzięki temu, nasz mechanizm generujący dokument na wyjściu (PDF, lub stronę
internetową) będzie wiedział skąd pobrać treść i jak ją ustrukturyzować. Mapa
ditowa jest analogiczna do spisu treści lub listy podstron.

```xml
<map title="Śniadanie">
 <topicref href="bats.dita" type="topic">
 <topicref href="robienie\_herbaty.dita" type="task"></topicref>
 <topicref href="robienie\_kanapek.dita" type="task"></topicref>
 <topicref href="zmywanie\_naczyn.dita" type="concept"></topicref>
 <topicref href="lokalizacja\_rzeczy\_w\_szafkach.dita" type="reference"></topicref>
 <topicref href="tabela\_kalorii.dita" type="reference"></topicref>
 </topicref>
</map>
```

# Co dalej?

No dobra, XML jest coraz bardziej atrakcyjny, topiki figlarnie do nas mrugają.
Następnym krokiem jest, jak to zwykle bywa w takiej sytuacji, strategia
działania! Dlatego właśnie nie lękajcie się, bo załoga TechWriter przybywa na
ratunek...

- [Wszystko o DITA — Wprowadzenie (1)](http://techwriter.pl/wszystko-o-dita-wprowadzenie-1/)
- Wszystko o DTA — Podstawy (2)
- [Wszystko o DITA — Strategia (3)](http://techwriter.pl/wszystko-o-dita-strategia/)
- [Wszystko o DITA — Narzędzia (4)](http://techwriter.pl/jak-zaczac-pisac-w-dita-narzedzia/)
- [Wszystko o DITA — Struktura topików (5)](http://techwriter.pl/wszystko-o-dita-struktura-topikow-5/)
