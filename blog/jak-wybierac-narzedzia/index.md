---
title: 'Jak wybierać narzędzia?'
authors: pensjonatus
date: '2026-03-30'
tags:
  - 'narzędzia'
coverImage: 'jak-wybierac.png'
---

Jedni piszą w Wordzie, drudzy piszą w DITA, a trzeci twierdzą, że tylko
docs-as-code ma sens. Tak naprawdę nie ma jednego uniwersalnego i **zawsze
najlepszego** wyboru, a frazes "to zależy" niewiele wnosi. Dzisiaj nie będziemy
odpowiadać na pytanie, jakie narzędzie jest najlepsze, tylko jak je wybrać.

<!--truncate-->

## Zacznij od celu

"W poprzedniej pracy używaliśmy Oxygena i fajnie to śmigał. Powinniśmy tutaj
użyć Oxygena," mówi wyimaginowany ktoś. Co myślisz, kiedy to czytasz? Bo mi się
nasuwa kilka myśli.

Oxygen to nie jest pełna odpowiedź na pytanie "jak tworzymy dokumentację", bo
Oxygen to tylko edytor. A jak ta dokumentacja jest dostarczana do odbiorców? Jak
SMEsi robią review? Gdzie są przechowywane pliki źródłowe? Ale nawet to sa
wszystko pytania taktyczne, które tak naprawdę powinny nam wskazać, że ponad
taktyką jest większa całość, czyli strategia. Więc każda rozmowa, która zaczyna
się od "Oxygen" albo "Docusaurus", albo "IXIA Soft" tak naprawdę zaczyna się
złej strony.

![](./images/cel.png)

Gdzie więc powinna się zacząć? Moim zdaniem powinna się zacząć od celu. Na
początek zastanówmy się:

- **Co robimy?** - Tworzymy dokumentację techniczną. Czy coś jeszcze oprócz
  tego? Na przykład, czy piszemy posty na blogu albo teksty w UI? Prowadzimy
  szkolenia? Tworzymy kursy online?
- **Dla kogo?** - Czy to jedna grupa odbiorców czy wiele? Czy mają różne
  potrzeby?
- **Po co?** - Celem dokumentacji może być zmniejszanie liczby zapytań do działu
  wsparcia technicznego. Dokumentacja może zachęcać ludzi do kupowania produktu,
  pokazując jak produkt rozwiązuje skomplikowane problemy techniczne.
  Dokumentacja może służyć łatwiejszemu wdrożeniu nowych użytkowników i
  utrzymaniu istniejących. Celów może być jeszcze więcej.
- **Kto tworzy dokumentację?** - Tworzyć dokumentację mogą technical writerzy,
  programiści, technicy, product managerowie (PM), marketingowcy, sprzedawcy,
  projektanci różnego rodzaju (w tym UX), prawnicy, i wiele innych ról. Każda z
  nich ma inny zestaw kompetencji i inne cele nadrzędne. Dodam jeszcze, że przez
  "tworzenie" rozumiem tu faktyczne tworzenie od zera, potem utrzymywanie, ale
  też okazjonalny wkład mniejszych fragmentów, no i wreszcie review.
- **Dlaczego potrzebujemy narzędzia?** - Możemy próbować obniżyć koszty albo
  podnieść jakość. Ale warto na to pytanie odpowiedzieć trochę bardziej
  szczegółowo, czyli zastanowić się w jaki sposób narzędzie ma obniżyć koszty
  lub podnieść jakość.

Czyli innymi słowy, musimy się zastanowić kto jest odbiorcą dokumentacji i jak
narzędzie ma temu odbiorcy pomóc, albo jak narzędzie pomoże działowi
dokumentacji. Tak czy inaczej, przyjęcie lub zmiana narzędzia musi być w jakimś
celu. Dopiero gdy go znamy, możemy zacząć zastanawiać się jakie narzędzie
wybrać.

Dodam tutaj jeszcze, że sformułowanie celu w stylu "musimy wybrać narzędzie, bo
każdy proces wymaga narzędzia" jest _sensu stricto_ prawdą, ale nie jest zbyt
pomocne.

## Sformułuj wymagania

Jeżeli już wiemy jakie cele nam przyświecają, to możemy zabrać się za listę
wymagań. Z lotu ptaka może wydawać się, że odpowiadamy na pytania typu: Reuse
czy nie? Web czy print? Wiele releasów czy zawsze tylko najnowsze docsy? Ale w
rzeczywistości lista wymagań powinna być bardzo długa i szczegółowa.

![](./images/wymagania.png)

Weźmy na przykład pytanie o reuse. To czy dokumentacja powinna reusować treści w
jakimś mechanicznym sensie nie jest oczywiste, bo możemy przyjąć
[strategię nigdy nie powtarzania niczego](../reuse-zly-dla-searcha/index.md).
Ale jeżeli dojdziemy do wniosku, że reuse jest jednak potrzebny, to może on
oznaczać różne rzeczy. Z jednej strony można reusować mniejsze lub większe
kawałki tekstu przez jakieś sztuczki w plikach źródłowych (np. _conrefy_ w
dicie), albo kopiować i wklejać bloki ze wspólnej biblioteki. Z drugiej, reuse
może być ograniczony do poziomu szablonów. Więc kiedy formułujemy wymaganie w
stylu "narzędzie musi wspierać reuse", powinniśmy napisać szczegółowo co to dla
nas oznacza. Na przykład:

> Nasza dokumentacja musi zawierać szablonowe ostrzeżenia dotyczące ochrony
> zdrowia i życia użytkowników. Ostrzeżenia muszą mieć konkretną treść i wygląd
> (kolory, wyróżnienia, itp.) i nie odbiegać od nich w żadnych okolicznościach,
> bo zostały bardzo starannie sformułowane przez dział prawny. Treść tych
> ostrzeżeń może się zmienić i wtedy wszystkie ostrzeżenia muszą zawierać tę
> nową treść, ale będzie się to zdarzać bardzo rzadko, raz na kilka lat.

Wymaganie tak rozpisane nie mówi ogólnie "reusujemy bloki tekstu" czy nawet
"reusujemy notki". Mówi ono o **konkretnych typach** ostrzeżeń.

Nie chcę podawać listy "typowych wymagań", bo wydaje mi się, że może być ona na
tyle różna (w zależności od celów), że uogólnienia nie mają sensu. Chciałem
tylko podkreślić, że wymaganie to więcej niż jednozdaniowe podsumowanie.

## Dopasuj do rzeczywistości

Teraz kiedy już opracowaliśmy listę wymarzonych wymagań i jesteśmy w siódmym
niebie snując plany na przyszłość, schodzimy kilka kroków w dół, na ziemię, i
patrzymy na otaczające nas realia. Część realiów będziemy musieli dodać do
wymagań, a część sprawi, że zmienimy lub obetniemy niektóre wymagania.

Wydaje mi się, że najważniejsze realia to:

- Kto ma pisać docsy i kto ma robić review?
- Jakie narzędzia i infrastruktura już istnieją w firmie?

To nie są jedyne realia, ale z mojego doświadczenia, te mają największy wpływ.

![](./images/rzeczywistosc.png)

Pytanie o to **kto** pomoże nam sformułować kluczowe wymaganie o dostępność
procesu pisania i review. Jeśli **wyłącznie** tech writerzy piszą docsy i robią
review, to opcje takie jak DITA czy jakieś zaawansowane CCMSy dla tech writerów
są realne. Ale jeżeli w tej grupie znajdzie się ktokolwiek inny, to musimy do
wymagań dodać informacje o tym jak te osoby mogą kontrybuować. Czy potrzebujemy
edytora online w stylu Google Docs? Czy godzimy się z tym, żeby wysyłać PDFy
mailem?

Pytanie o to **jakie narzędzia już działają** w firmie pozwoli nam zacząć
ugruntowywać się w realiach biznesowych, ale też pomoże nam odpowiedzieć na
pytanie: czy możemy użyć narzędzi, które już mamy. Na przykład, w firmach
software'owych często istnieje już system kontroli wersji i system automatycznej
publikacji do internetu. Czy ta istniejąca infrastruktura to pierwszy krok do
stworzenia infrastruktury dla docsów?

Poza tym, jeżeli w firmie juz jest ktoś utrzymujący istniejące narzędzia, to
jest szansa, że te osoby pomogą nam w utrzymaniu narzędzi do dokumentacji. Czy
tak będzie naprawdę? Odpowiedź na to pytanie powinna być wpleciona w nasz proces
poszukiwania narzędzia.

## Rozważ realia biznesowe

![](./images/biznes.png)

Ta część bywa najbardziej bolesna: czy można uzasadnić koszt tego narzędzia?
Często dokumentacja sama w sobie jest traktowana jako koszt, więc ciężko
przekonać zarząd, żeby inwestował w nią dodatkowe pieniądze. I nie próbujmy się
łudzić, że kosztu nie będzie, bo nawet całkowicie darmowe narzędzie będzie
wymagało pracy, żeby je wdrożyć i utrzymywać.

Ten problem można rozwiązać na dwa sposoby:

1. Wybrać jak najtańsze rozwiązanie.
1. Wykazać jak narzędzie ograniczy koszty.

Dodatkowe punkty zdobywamy, jeśli pokażemy jak poprawa jakości dokumentacji może
przynieść zyski. Ale jakby nie było, te czynniki wpłyną na proces doboru
narzędzia.

Dodatkowym czynnikiem, który musimy wziąć pod uwagę jest to kto będzie wyrażał
zgodę na narzędzie i jak te osoby przekonać. Różne argumenty trafiają do różnych
osób w zależności od ich doświadczeń i celów. Przy wyborze narzędzia powinniśmy
się zastanowić jak cele naszego dzielnego sponsora (managera, dyrektora,
właściciela) można osiągnąć usprawniając pracę działu dokumentacji. Na jednych
zadziała argumentacja typu "dzięki narzędziu będzie mniej kłopotów" (np.
dlatego, że w dokumentacji będzie mniej karalnych błędów), a na innych lepiej
zadziała "dzięki narzędziu oszczędzimy lub zarobimy X dolarów".

Ostatnim aspektem biznesowym, na który zwrócę uwagę jest kwestia zajmowania się
narzędziem: czy wiemy kto będzie za to odpowiedzialny? Czy ja chcę być tą osobą?
Czasem to oznacza, że zmieniam pracę z "technical writer" na "wsparcie
narzędzi". Czy to jest moja wymarzona ścieżka kariery? A jeśli nie ja, to czy
jest ktoś inny, kto o tym marzy?

## Robi to zespół

Tutaj pierwszy raz w tym artykule zwrócę się do Ciebie bezpośrednio. Chciałbym
przestrzec Cię przed tworzeniem wymagań samodzielnie. Nawet jeśli jesteś jedynym
tech writerem w firmie i CEO zlecił Ci wybór narzędzia, nie rób tego
samodzielnie. Konsultuj swoje pomysły z innymi, weryfikuj z nimi założenia i
proś o review. Co dwie głowy to nie jedna! Im więcej głów, tym więcej uda się
zauważyć. Myślimy i pamiętamy jako grupa, a nie jako jednostki.

## "Najlepsze" nie zawsze znaczy to samo

Czasem uda nam się znaleźć idealne rozwiązanie, które wyniesie nasz komfort
pracy na nowe poziomy, jednocześnie podnosząc jakość i obniżając koszty. Czasem
może się okazać, że wybrane narzędzie będzie oznaczało mniejszy lub większy
kompromis.

Niestety, czasem możemy dojść do smutnej konkluzji, że najlepszym narzędziem
jest to, które już mamy. I to nie dlatego, że jest dobre, tylko dlatego, że
cokolwiek innego byłoby zbyt kosztowne, zbyt trudne, lub nikt nie jest
zainteresowany utrzymaniem go.

![Dwóch mężczyzn biznesmenów sobie rękę, jeden mówi "Czyli Word?"](./images/kompromis.png)
