---
title: 'Wszystko o DITA – Strategia (3)'
authors: pensjonatus
date: '2016-06-08'
tags:
  - 'dobre-praktyki'
  - 'narzędzia'
  - 'warsztat'
  - 'dita'
  - 'manuale'
  - 'on-line-help'
  - 'pomoc-użytkownika'
  - 'technologie'
coverImage: 'wszystko-o-dita-strategia.jpg'
---

W sieci można natknąć się na całkiem sporo materiałów dotyczących DITA, jednak
znalezienie czegoś w języku polskim jest dość trudne. Chcąc zmienić ten stan
rzeczy, postanowiliśmy stworzyć dla Was niniejsze kompendium wiedzy o tym
standardzie.

<!--truncate-->

Jeżeli zabierasz się właśnie do pracy w tym standardzie, w jednej ręce dzierżysz
edytor, w drugiej CMSa, a w głowie przewijają się treści, coraz dokładniej
poukładane w topiki, zatrzymaj się na chwilę weź głęboki oddech . Zanim
przystąpisz do pisania, opracuj strategię.

Strategia powinna zawierać odpowiedzi na następujące pytania:

1. Po co i dla kogo piszemy?
2. Jakie wersje produktu opisujemy?
3. Czy współdzielimy treść między publikacjami?
4. Czy tłumaczymy?
5. Jakie formaty publikujemy?

W tym artykule rozwiniemy każde z powyższych zagadnień w odniesieniu do dity i
wspomnimy o pewnych funkcjonalnościach, ale bez wdawania się w szczegóły
techniczne. Te będziemy wyjaśniać w kolejnych wpisach.

## Po co i dla kogo piszemy?

Pytamy o to, żeby zdecydować jakie rodzaje treści będziemy publikować. Czy
będzie to instrukcja obsługi urządzenia lub aplikacji, dokumentacja podręczna
API, metody usuwania awarii, często zadawane pytania, a może materiały
szkoleniowe? Ma to znaczenie w standardzie DITA, który daje nam różne rodzaje
topików.

### Typy topików DITA

Podstawowymi typami topików są:

- concept
- task
- reference

Pokrywają one potrzeby większości instrukcji obsługi. Concept opowiada o
zagadnieniu, task wymienia kroki potrzebne do wykonania zadania, a do reference
zaglądamy, żeby sprawdzić komendę, listę parametrów, współczynniki czy wartości.

Istnieje jeszcze czwarty ogólny typ "topic", który jeszcze nie wie kim chce być
i może być kimkolwiek. Używa się go często jako tekstu wprowadzającego do
rozdziału lub czegoś co nie ma określonego celu. Więc po co go piszemy?

Czym właściwie różni się concept od tasku? W tym pierwszym mamy miejsce na
akapity, grafiki, tabele, itp. W drugim, kroki, ostrzeżenia, przykłady,
rezultaty. Dlatego stosujemy typy topików, żeby przyzwyczaić użytkownika, że jak
widzi ścianę tekstu, to tłumaczy ona jakieś zagadnienie, a jak widzi listę
kroków, to powinien je wykonać.

DITA pozwala nam na tworzenie **dowolnych typów** których jest bardzo wiele.
Niektóre z nich są dosyć popularne, na przykład **troubleshooting**. Ten rodzaj
topiku opisuje typowe problemy i jak z nich wybrnąć. Zawiera elementy takie jak:

- `<tsSymptoms>`
- `<tsCauses>`
- `<tsEnvironment>`
- `<tsDiagnose>`
- `<tsResolve>`
- [i tak dalej, i tak dalej...](https://www.oasis-open.org/committees/download.php/40204/troubleshootingdoc.pdf)

Nasza strategia powinna definiować typy topików i ewentualne rozszerzenia bądź
restrykcje, bo dzięki temu DITA będzie nam pomagać w pisaniu oferując gotową
strukturę. Pisanie topików będzie wtedy przypominało wypełniane formularza,
przez co my nie zapomnimy czegoś napisać, a czytelnik będzie wiedział czego się
spodziewać.

## Jakie wersje produktu opisujemy?

Nasz produkt może być oprogramowaniem, które jest udostępniane online i wszyscy
zawsze używają jego najnowszej wersji. Nasz produkt może być też pralką, która
ma różne modele, podobne do siebie ale jednak inne. W końcu może piszemy
dokumentację do samochodów Tesla - nie tylko są różne modele, ale każdy z nich
jest aktualizowany.

DITA sama w sobie nie rozwiąże problemu wersjonowania, dlatego musimy mieć je na
uwadze używając treści warunkowych, conrefów (wyjaśnienie poniżej), linków, i
tym podobnych, bo mogą one bardzo skomplikować sprawę.

W prostych, liniowych scenariuszach, wystarczy nam system wersjonowania plików,
jak Git czy SVN, ale w bardziej złożonych przypadkach może przydać się
specjalistyczny CMS. Na rynku istnieje wiele rozwiązań i wybór odpowiedniego to
temat na osobny artykuł. Dlatego w tym miejscu wymienimy tylko dwa bardzo tanie,
ale kompleksowe rozwiązania: [easyDITA](http://easydita.com/) i
[DITAToo](http://ditatoo.com/).

### Czy współdzielimy treść między publikacjami?

W dicie możemy używać jednego topiku w wielu mapach, albo stosować conrefy i
różne ich odmiany. Warto to robić, jeżeli jakaś treść jest powtarzana bez zmian
lub z drobnymi zmianami, jednak musimy pamiętać, żeby dostosować ilość
współdzielonych topików do rozmiaru dokumentacji i zespołu. Coś co bardzo obniży
koszt napisania jednego słowa (które jest potem powielone w wielu miejscach)
może nam podnieść koszt zarządzania zmianą. Czy nowa funkcjonalność odnosi się
do wszystkich wersji i modeli? Czy ten topik nie jest przypadkiem używany w
wersji administratora i klienta? Czy możemy to teraz zmienić, kiedy
kilkadziesiąt książek właśnie poszło do tłumaczenia?

Poza tym, zidentyfikowanie, które treści warto współdzielić to też nie lada
wyzwanie. Możliwe, że mamy bardzo dużo dokumentacji pisanej przez bardzo długi
okres czasu przez różnych ludzi. Nie ma fizycznie osoby, która wie co jest gdzie
napisane i czy nie ma czegoś podobnego w innych miejscach. Wprowadzenie
współdzielenia może być stopniowe, ale zawsze wymaga starannego przemyślenia.

## Czy tłumaczymy?

Jeżeli tak, to musimy bardzo uważnie podejść do tematu conrefów i treści
warunkowej. Conref to specjalny atrybut używany w dicie, który pozwala nam użyć
fragmentów tekstu pochodzących z innych topików. Na przykład jeżeli używamy taga
`<uicontrol>`, który oznacza element interfejsu, możemy wpisać w niego treść:

```xml
<uicontrol>volume knob</uicontrol>
```

Lub możemy stworzyć plik zbierający wszystkie elementy danego interfejsu, np.
panelu, i umieścić w nim nazwy tych elementów do ponownego wykorzystania. Możemy
stworzyć taki oto przykładowy topik o nazwie **panel.dita**:

```xml
<uicontrol id="volknob">volume knob</uicontrol> <uicontrol id="bandcon">band
control`<uicontrol>` <uicontrol id="basscon">bass control</uicontrol>
<uicontrol id="powbutton">power button</uicontrol>
```

Jeżeli chcemy użyć tekstu, wstawiamy do naszego topiku analogiczny tag z
atrybutem @conref, gdzie wartością jest ścieżka do pliku oraz @id elementu, do
którego się odwołujemy, na przykład tak:

```xml {2}
<uicontrol
  conref="panel.dita/volknob"
>volume knob</uicontrol>
```

Jednakże, umieszczenie conrefu w środku zdania może doprowadzić do błędów w
tłumaczeniu, na przykład:

**EN:**

```xml
<p>Turn the <uicontrol conref="panel.dita/volknob">volume knob</uicontrol> all the way to 11.</p>
```

**PL:**

```xml
<p>Przekręć <uicontrol conref="panel.dita/volknob">
**gałka kontroli głośności**
</uicontrol> do pozycji 11.</p>
```

Tłumacz nie mógł zmodyfikować frazy "gałka kontroli głośności" i napisać
"**gałkę** kontroli głośności", bo została ona pobrana z innego pliku w czasie
budowania dokumentu.

Nasza strategia powinna obejmować zagadnienia techniczne wynikające z użycia
zaawansowanych funkcjonalności dity. Nawet jeżeli teraz nie tłumaczymy naszej
treści, to możliwe, że kiedyś zaczniemy, dlatego warto się nad tym dobrze
zastanowić opracowując strategię.

## Jakie formaty publikujemy?

DITA pozwala nam publikować praktycznie do dowolnego formatu elektronicznego, od
HTML, poprzez e-booki, po Word czy PDF i wszystko pomiędzy. Możemy nawet
publikować tekst jako obrazek, jeżeli mamy taką chęć i kogoś, kto to
oprogramuje. Jednak nasza wyobraźnia musi się liczyć z kosztami, bo
oprogramowanie publikacji treści to skomplikowane zadanie. Nawet jeżeli
publikujemy broszury w formacie PDF, musimy pamiętać, że napisaliśmy je w XMLu i
nie będziemy mogli po opublikowaniu dodać gdzieś linijki, albo wymusić łamania
strony w danym miejscu. Dlatego dopracowane wizualnie strony czy slajdy
prezentacyjne nie są dobrym kandydatem do automatycznego publikowania. Jeżeli
zależy nam na pełnej kontroli nad efektem wizualnym, lepiej użyć narzędzi do
desktop publishingu typu
[Adobe Illustrator](http://www.adobe.com/products/illustrator.html) czy
[InDesign](http://www.adobe.com/pl/products/indesign.html).

## Ustalanie strategii

Strategia nie powstanie zaocznie w salce konferencyjnej, nawet podczas
całodniowego spotkania. Właściwie to nawet kilkudniowy wyjazd strategiczny do
Kotliny Kłodzkiej to za mało, ponieważ solidna strategia musi składać się z
następujących elementów:

1. Zrozumienie standardu DITA.
2. Zrozumienie dostępnych narzędzi.
3. Zrozumienie struktury zespołu.
4. Zrozumienie budżetu.
5. Znajomość treści.
6. Znajomość celów organizacji.

Dlatego nie oszukujmy się - ustalanie strategii będzie trwało długo i będzie się
wiązało z próbowaniem rzeczy w praktyce. Jeżeli wydaje nam się inaczej, to
znaczy, że coś pominęliśmy.

## Przykład strategii

Tworzymy serię książeczek stanowiących instrukcje obsługi do sprzętu AmplePower
Tectonic Sound Megablast Megasystems. Instrukcje będą czytać ludzie pracujący
przy organizacji koncertów i podobnych wydarzeń, technicy dźwiękowcy
przygotowujący sprzęt, lub potencjalnie prywatni użytkownicy domowi. Mamy siedem
zestawów sprzętu, każdy podobny, ale z inną liczbą elementów i innymi modelami,
oraz innymi parametrami technicznymi typu moc. Raz opisane produkty nie będą się
zmieniać, mogą najwyżej pojawić się na rynku nowe wersje.

Na podstawie tych pytań tworzymy naszą strategię:

1. Będziemy pisać w DITA i użyjemy trzech podstawowych rodzajów topików:
   - Concept, żeby opisywać zagadnienia takie jak wzmacniacz, wygłuszacz i
     preambulator
   - Task, żeby opisywać krok po kroku zadania takie jak podłączanie konsolety,
     mierzenie poziomu echa, stabilizacja niskich tonów, itp.
   - Reference, żeby podać parametry takie jak pobór mocy, zakres filtra, czy
     impedancja mikrofonu
2. Tłumaczymy na siedem języków, nie możemy więc ponownie wykorzystywać
   elementów poniżej poziomu zdania. To znaczy, możemy użyć całego zdania, np.
   "Turn the volume knob up to 11.", ale nie możemy wstawić frazy "volume knob"
   do zdania jako conref.
3. Zidentyfikujemy elementy wspólne, takie jak:
   - Koncepcje, które występują w każdym zestawie, jak wzmacniacz, itp.
   - Zadania, które zawsze wykonujemy tak samo, np. zabezpieczanie kabli
   - Struktury, które się powtarzają, np. tabela impedancji (mimo, że będzie
     zawierać różne wartości)
4. Zidentyfikujemy elementy, których można używać warnukowo, na przykład w
   zależności od zestawu, albo modelu urządzenia. Stworzymy więc listę zestawów,
   urządzeń, i innych wariacji.
5. Każda książeczka będzie opisywać jeden z siedmiu zestawów.
6. Każda książeczka będzie sfinalizowana zanim zaczniemy tłumaczenie całości.
   Dzięki ponownemu wykorzystaniu treści oszczędzimy na kosztach sprawdzania
   powtarzającego się tekstu.
7. Każda książeczka będzie publikowana w formacie PDF, z odpowiednią wielkością
   strony i znakami dla drukarni, które pomogą w wycinaniu odpowiedniego
   formatu. Dlatego częścią przygotowania projektu będzie dostosowanie arkuszy
   stylów DITA Open Toolkit do produkcji właśnie takich PDFów.
8. Użyjemy prostego systemu wersjonowania Git, bez użycia branchy.

Ta lista to absolutna podstawa kiedy myślimy o projekcie DITA. Wspominany
na niej o wielu aspektach, które możliwe, że nie są Wam jeszcze znane, ale
będziemy o nich mówić w kolejnych odsłonach cyklu.

## Co dalej?

Strategia jest niezwykle ważnym elementem całego procesu tworzenia dokumentacji.
Dlatego zanim przystąpimy do pisania, musimy być w stanie sobie odpowiedzieć na
takie pytania:

1. Po co i dla kogo piszemy?
2. Jakie wersje produktu opisujemy?
3. Czy współdzielimy treść między publikacjami?
4. Czy tłumaczymy?
5. Jakie formaty publikujemy?

Kiedy nasza strategia jest już gotowa, możemy przejść do narzędzi, które
omawiamy w kolejnym wpisie naszej ditowej serii.

- [Wszystko o DITA — Wprowadzenie (1)](../wszystko-o-dita-wprowadzenie-1/index.md)
- [Wszystko o DTA — Podstawy (2)](../wszystko-o-dita-podstawy/index.md)
- Wszystko o DITA — Strategia (3)
- [Wszystko o DITA — Narzędzia (4)](../jak-zaczac-pisac-w-dita-narzedzia/index.md)
- [Wszystko o DITA — Struktura topików (5)](../wszystko-o-dita-struktura-topikow-5/index.md)
