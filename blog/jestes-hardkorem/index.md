---
title: "Jesteś hardkorem?"
authors: mojk
date: "2014-06-20"
tags:
  - "news"
  - "z-kraju"
  - "ze-swiata"
  - "praca"
  - "webinarium"
coverImage: "apisdkcodesamples.png"
---

Nie boisz się wyzwań jakie stawia dokumentacja techniczna? Jeśli tak, to na
pewno zainteresuje Cię webinarium zorganizowane 29 maja przez
[soap!](http://www.soapconf.com).
[Tom Johnson](http://idratherbewriting.com/author/tomjohnson1492/), znany i
ceniony Technical Writer, autor blogu
[I'd Rather Be Writing](http://idratherbewriting.com/), poprowadził prezentację
internetową pod nazwą **"Creating code samples for API/SDK documentation"**. Tom
od ponad roku zajmuje się dokumentacją dla interfejsów programowania aplikacji
(API) i zestawów narzędzi dla programistów (SDK). Studiował język angielski,
nigdy nie był programistą, dlatego rozumie wątpliwości osób, które zaczynają
swoją przygodę z dokumentacją dla programistów. W swojej prezentacji starał się
odpowiedzieć na 20 pytań dotyczących umieszczania próbek kodu w dokumentacji
API/SDK. Poniżej prezentujemy najciekawsze według nas zagadnienia.

<!--truncate-->

### Po co umieszczać przykładowy kod?

Przykłady są bardziej efektywne niż opisywanie składni i metod. Programiści
często przechodzą od razu do przykładu, żeby zobaczyć jak wykonać zadanie.
Przykłady pokazują w sposób jasny i bezpośredni jak działa Twój produkt.

### Jakiego języka programowania użyć w przykładach?

Przynajmniej połowa dokumentacji API nie zawiera próbek kodu, ponieważ podanie
przykładu w jednym języku, często powoduje, że programiści oczekują przykładów
także w innych językach, a to jest mało praktyczne dla osoby piszącej
dokumentację. Zamiast próbek kodu, dokumentacja podaje przykładowe żądania
(request) i odpowiedzi (response).

### Czy muszę być programistą, żeby tworzyć próbki kodu?

Musisz mieć wystarczająco dużą wiedzę na temat programowania, żeby umieć czytać
i rozumieć kod oraz umieć tworzyć własne przykłady kodu do dokumentacji. Nie
musisz być programistą, jednak musisz mieć solidną wiedzę na temat
programowania. Bycie programistą może też być wadą, ponieważ programiści z
reguły nie lubią pisać dokumentacji i przeceniają wiedzę użytkowników. Jeśli z
kolei nauczyłeś się języka programowania jako dodatkowej umiejętności i nie
jesteś wykształcony w tym kierunku, wtedy masz lepsze poczucie tego z czym się
mierzą użytkownicy.

### Skoro jestem w stanie tworzyć kod, to dlaczego nie mogę zostać programistą?

Kod przedstawiony w przykładzach to nie to samo co kod w gotowym produkcie.
Próbka kodu to tylko przykład poprawnego kodu, który ilustruje funkcjonalność i
używanie API lub innego narzędzia programistycznego. To taki pomost pomiędzy
koncepcją w dokumentacji a skomplikowaną implementacją wymaganą do stworzenia
gotowej aplikacji. Można to porównać do sytuacji, w której któs mówi "Umiem
napisać zdanie", a my zapytamy "To czemu nie napiszesz powieści?".

### Skąd wiedzieć co jest ważne bez wiedzy programistycznej?

Czy tworząc przykład użycia metody EACH w JQuery dla użytkowników, którzy znają
Javascript, możemy założyć, że znają oni JQuery i metodę EACH? Musimy mieć
wiedzę programistyczną, żeby wiedzieć czy takie założenie jest poprawne czy nie.
Jeśli mamy dylemat czy użytkownicy powinni posiadać wiedzę na jakiś temat, to
zawsze możemy zapytać programistę. Problemem jednak jest to, że programiści
często przeceniają poziom wiedzy użytkowników.

### Czy nie mogę po prostu dostać wszystkich próbek kodu od inżynierów?

Tak możesz. To dobry początek, ale nie gotowe rozwiązanie. Inżynier może dać ci
próbkę kodu, wyjaśni jak to działa, a na podstawie tego możesz wywnioskować
resztę i stworzyć inne przykłady. Niekiedy próbki kodu od inżynierów są zbyt
skomplikowane. Poza tym, inżynierowie nie lubią za bardzo tworzyć dokumentacji,
ale za to niektórzy lubią rozmawiać o kodzie - jeśli znajdziesz taką osobę to
możesz od niej sporo wyciągnąć.

### Jak mogę nauczyć się programowania?

Nie ma prostej odpowiedzi. Jeśli szukasz informacji w internecie, poniższe
strony mogą być przydatne:

- [safariflow.com](http://www.safariflow.com)
- [safaribooksonline.com](http://www.safaribooksonline.com)
- [lynda.com](http://www.lynda.com)
- [teamtreehouse.com](http://www.teamtreehouse.com)
- [codeschool.com](http://www.codeschool.com)
- [udemy.com](http://www.udemy.com)

### Jak dodawać komentarze do próbki kodu?

Można wstawiać komentarze pomiędzy części kodu rozpoczynając od znaku komentarza
(są różne w zależności od języka programowania, np. //). Trzeba jednak pamiętać,
że kod przerywany komentarzami jest ciężki do czytania. Można temu zaradzić do
pewnego stopnia poprzez użycie mniej wyrazistego koloru dla komentarzy, tak żeby
kod wyróżniał się na pierwszym planie, a komentarze były tłem. Kolejną
możliwością jest dodanie komentarzy obok kodu. Wstawienie takich "dymków" czy
przypisów powoduje, że kod musi być obrazkiem. To z kolei sprawia, że jest
trudniejszy w użyciu (nie można go skopiować z dokumentu i zmienić) i
trudniejszy do aktualizacji (kiedy np. zapomnimy o przecinku albo kropce i
chcemy ją dopisać). Jednak pomimo tych trudności, takie podejście pozwala na
łatwe czytanie kodu i odwoływanie się do komentarzy kiedy istnieje taka
potrzeba. Niektórzy twierdzą, że kod nie wymaga dodatkowego objaśniania, a jeśli
tak nie jest, to trzeba go przepisać. Ta logika jest prawdziwa wyłącznie w
przypadku użytkowników zaawansowanych. Ogólna zasada jest taka, że co każde 5-10
linii kodu dobrze jest dodać komentarz wyjaśniający.

### Jak pisać instrukcje dla dłuższych próbek kodu?

Są dwa podejścia. Pierwsze to zbudować historię. Prowadzisz użytkownika krok po
kroku i pokazujesz co musi zrobić. Na końcu dodajesz cały kod, który został
omówiony wcześniej, żeby pokazać jak to wygląda w całości. Drugie podejście to
podanie całej próbki kodu na samym początku, a potem opisanie go kawałek po
kawałku. Wydaje się, że ta metoda jest trochę lepsza, bo jeśli ktoś jest
użytkownikiem zaawansowanym, to kod jest dla niego zrozumiały i może opuścić
czytanie opisu, a jeśli któs jest nowicjuszem to chętnie skorzysta z
wyjaśnienia.

### Gdzie umieszczać próbki kodu?

Sa trzy możliwości:

1. W innym miejscu niż opis. Dzięki temu opis jest minimalistyczny i
   przejrzysty, ale nie tak dobrze zintegrowany.
2. W opisie każdej klasy lub metody. Z punktu widzenia organizacyjnego ma to
   sens, ale sprawia, że dokumenty stają się bardzo obszerne.
3. Krótkie przykłady w opisie, a dłuższe przykłady w osobnym miejscu. Jest to
   chyba najbardziej popularna metoda.

### Czy można używać żartobliwego tonu w dokumentacji dla programistów?

Kod dla niektórych może być trochę stresujący. Dlatego nie bójmy się dorzucić
trochę humoru do dokumentacji. Jeśli nie jest ona tłumaczona na inne języki i
jeśli polityka firmy nie narzuca jakichś wytycznych w tej kwestii, umiarkowana
doza humoru jest w porządku.

### Jeśli mój kod działa, to po co go sprawdzać?

Nawet jeśli Twój kod działa, nie oznacza to, że jest napisany w zgodzie z
dobrymi praktykami. Może być zbyt zasobożerny lub za mało wydajny, mieć za dużo
niepotrzebnych linii. Jeśli piszesz próbki kodu samemu, warto je dać inżynierom
do sprawdzenia.

Po zakończeniu prezentacji, przyszedł czas na pytania uczestników. Ze względu na
ograniczoną ilość czasu, Tom mógł odpowiedzieć tylko na niektóre. Poniżej
przedstawiamy dwa wybrane pytania.

### W przypadku SDK dla wielu języków programowania, czy lepiej napisać dokumentację dla każdego języka osobno czy stworzyć jedną dokumentację z przykładami dla wszystkich języków i dodać przyciski do przełączania się pomiędzy przykładami w różnych językach?

Są różne podejścia. Patrząc na [RethinkDB.com](http://rethinkdb.com) i ich
dokumentację do API, widzimy świetne przykłady przełączania się pomiędzy różnymi
językami, takimi jak Python czy Ruby. Jest to sprytne rozwiązane. Jeśli istnieje
możliwość łatwego przełączania się między językami to warto z niej skorzystać.
Jeśli próbki kodu są krótkie, to przełączanie się jest dobre. Jeśli są to
złożone próbki kodu, warto je umieścić gdzie indziej. To jest głębszy temat.
Patrząc na dokumentację API dochodzimy do wniosku, że nie ma jednego standardu,
który dawałby jasne wytyczne jak pisać taką dokumentację. Jest tam więcej
różnorodności i dowolności niż w przypadku innej dokumentacji. Trzeba próbować
różnych podejść, żeby dojśc do odpowiedniego rozwiązania.

### Co myślisz o pseudokodzie? Czy używałeś go kiedyś czy raczej nie polecasz stosowania go?

Inżynierowie często pisząc kod zaczynają od pseudokodu, żeby nakreślić jak coś
będzie działać. Widziałem sporo przykładów pseudokodu w serii książek Headstart,
gdzie często najpierw pojawia się pseudokod, żeby pokazać logikę działania, a
potem dopiero przedstawiane są szczegóły techniczne. To bardzo dobre podejście.
W przypadku API/SDK ważna jest koncepcja jak coś działa i może to być ważniejsze
od samych detali technicznych. Dla bardziej skomplikowanego kodu, wstęp z
pseudokodem wydaje się być dobrym rozwiązaniem.

Nagranie wideo, plik mp3 oraz slajdy z prezentacji można znaleźć
[tutaj](http://idratherbewriting.com/2014/05/30/creating-code-samples-webinar-recording-slides-and-audio/).

Podziękowania dla [soap!](http://www.soapconf.com) za ciekawe webinarium, które
doskonale wpisuje się w obecne trendy w komunikacji technicznej. Czekamy na
kolejne prezentacje ekspertów.
