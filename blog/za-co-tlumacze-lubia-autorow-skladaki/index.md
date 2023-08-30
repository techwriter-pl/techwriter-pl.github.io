---
title: "Za co tłumacze lubią autorów - składaki"
authors: mojk
date: "2018-05-07"
tags:
  - "dobre-praktyki"
  - "przyklady"
  - "warsztat"
  - "instrukcje"
  - "jezyk"
  - "manuale"
  - "on-line-help"
  - "pomoc-uzytkownika"
  - "tlumaczenia"
coverImage: "duplo-1981724_640.jpg"
---

Z przyjemnością publikujemy kolejny wpis gościnny traktujący o tym w jaki sposób
specjaliści tworzący dokumentację mogą ułatwić życie tłumaczom.

<!--truncate-->

[Pierwszy wpis](http://techwriter.pl/za-co-tlumacze-lubia-autorow-spojnosc/) z
cyklu "Za co tłumacze lubią autorów" podkreślał jak ważna jest spójność w
tworzeniu dokumentacji. W drugiej części autorka skupia się na zagrożeniach
związanych ze stosowaniem zmiennych i fragmentów tekstu do wielokrotnego użycia
(snippetów).

# Kilka słów o autorce

Marta Bartnicka jest kierowniczką działu tłumaczeń dla Europy Środkowej w IBM. Z
działem tym związana jest od 20 lat, zajmując się między innymi tłumaczeniem,
weryfikacją, testowaniem lokalizacji, prowadzeniem projektów lokalizacyjnych dla
jednego i wielu języków, terminologią, a od kilku lat także wdrażaniem tłumaczeń
maszynowych oraz modelu Continuous Delivery. Obecnie koordynuje lokalizację
oprogramowania, dokumentacji i stron WWW na kilkanaście języków
środkowoeuropejskich (w tym polski). W pracy zebrała – i nieustająco zbiera
nadal - doświadczenie w poruszaniu się na styku kultur, na pograniczu polityki
korporacyjnej i lokalnych norm oraz zwyczajów. Z wykształcenia mgr inż.
informatyki (Systemy Informacji Naukowo-Technicznej, Politechnika Wrocławska).
Hobby w kolejności alfabetycznej: biegówki, dzieci, ogrodnictwo, Tatry.

[![](images/marta_bartnicka-295x300.jpg)](http://techwriter.pl/wp-content/uploads/2018/03/marta_bartnicka.jpg)

Jeśli chcecie skontaktować się z Martą, możecie wysłać jej maila
na [martab@kofeina.net](mailto:martab@kofeina.net).

# Za co tłumacze lubią autorów - składaki

Krótki cykl opowieści o tym, za co tłumacze lubią autorów dokumentacji, pomocy i
interfejsów.

Tworząc treści – czy to po polsku, po angielsku, czy niemiecku – warto mieć z
tyłu głowy myśl, że ktoś to kiedyś zechce przełożyć na inne języki. W idealnym,
dobrze zaprojektowanym świecie pomyślał już o tym zleceniodawca czy też
zamawiający dany content; w praktyce często nie przewiduje w ogóle publikowania
treści w innych językach, ale „za rok, za dzień, za chwilę” stanie przed taką
koniecznością.

Przyjrzyjmy się zatem kilku zagadnieniom, dzięki którym tłumacze nie będą
wbijali niczego w laleczki voodoo wyobrażające tech writera.

## Jak zaoszczędzić parę bajtów i zepsuć tekst

W
[poprzednim artykule](http://techwriter.pl/za-co-tlumacze-lubia-autorow-spojnosc/)
na temat pisania przyjaznego tłumaczom zachwalałam snippety i stałe tekstowe
jako dobre praktyki w zakresie wstawiania do tekstu fragmentów, które będą się w
nim powtarzać. Jest tu jedno małe ale, które z perspektywy tłumacza okazuje się
ALE całkiem potężnym. Zanim mu się przyjrzymy, umówmy się na taki oto sposób
zapisywania elementów dynamicznie wstawianych do tekstu: $string, $number. W
rzeczywistości może to być programistyczne {0} względnie starsze %s lub %d,
conref w formacie DITA czy jakikolwiek inny sposób odniesienia; z punktu
widzenia tłumacza logika jest podobna (i problemy też).

Przede wszystkim: nie buduj zdań ani słów z fragmentów. Dlaczego? Ponieważ
odpowiadasz za poprawność złożenia tylko w języku, w którym piszesz, ewentualnie
w jeszcze jednym, dwóch albo trzech, które znasz. W wielu innych językach Twój
składak nie pojedzie!

Weźmy prosty przykład złożony z trzech komunikatów i jednej zmiennej.

_$string = database_

_Open the $string._

_No $string found._

_Add new $string(s) to the configuration._

Oszczędne i eleganckie, prawda? W razie potrzeby zmienimy definicję $string na
‘repository’ lub cokolwiek innego, cała reszta bez zmian. A teraz spróbujmy to
przetłumaczyć na… no, choćby polski.

_$string = baza danych_

_Otwórz $string._

_Nie znaleziono $string._

_Dodaj nowy… o cholera_ _☹_

Zastanawiacie się czasem, dlaczego aplikacja wyświetla po polsku coś tak
kulawego jak _Otwórz baza danych_, _Nie znaleziono bazę danych_ albo _Dodaj do
konfiguracji nowy obiekt typu baza danych_? Prawdopodobnie dlatego, że autor był
sprytny i zaoszczędził parę bajtów, a tłumacz robił co mógł.

Składanie tekstów odradza poradnik
[IBM Globalization Guidelines](https://www-01.ibm.com/software/globalization/guidelines/a7.html).
W praktyce uniknąć składaków się nie da, polecam natomiast kilka sprawdzonych
zasad jak robić to dobrze.

Do wstawiania (jako stałe, conrefy, symbole, snippety…) najlepiej nadają się:

- Znaki towarowe, nazwy produktów, URL-e i inne elementy, których w ogóle się
  nie tłumaczy.
- Pełne zdania lub akapity, których tłumaczenie nie zależy od kontekstu.
- Odwołania do elementów interfejsu, tytułów rozdziałów itd., które nie są
  odmieniane.

Natomiast stanowczo odradzam takie rozwiązania jak:

- Wstawianie pojedynczych słów lub fraz, które muszą być tłumaczone i podlegają
  odmianie.
- Dodawanie do symboli przedrostków lub przyrostków (w języku angielski: s, ing,
  ed).

## Zmienne bywają konieczne

No dobrze, a co ze zmiennymi, które muszą być wstawione, na przykład do
komunikatu lub raportu? Mogą to być wszelkie liczby, daty, kwoty, nazwy plików,
nazwiska użytkowników. Najlepszą praktyką jest tu wstawianie zmiennej tak, żeby
była w formie podstawowej (w mianowniku), w razie potrzeby ratując się
dwukropkiem.

Na pierwszy rzut oka poniższy zapis jest poprawny:

_The action was performed by $number person(s)._

W tłumaczeniu jest on kłopotliwy, bo spora część zdania zależy od tego, jaką
wartość przyjmie zmienna $number:

_Czynność wykonała/y/o $number osoba/osoby/osób._

Lepiej będzie na przykład tak:

_Persons who performed the action: $number._

Tłumaczenie na polski – i na wiele innych języków – robi się bezproblemowo:

_Liczba osób, które wykonały tę czynność: $number._

## Czy wiesz, ile znasz języków fleksyjnych?

Mamy to szczęście, że językiem fleksyjnym (takim, gdzie wyrazy się odmienia)
mówimy od dzieciństwa, co więcej, nasz język ma też rodzaje i w ogóle należy do
bardziej skomplikowanych, więc – w porównaniu np. z Amerykanami – mamy super
wyobraźnię lingwistyczną. Z wieloletniego doświadczenia muszę powiedzieć, że na
tę wyobraźnię trochę szkodzi poznanie popularnych technik operacji na tekście,
jakie są dostępne w narzędziach programistycznych i dokumentacyjnych.

Podsumowując, autor może i powinien stosować zmienne i inne elementy, które
zaoszczędzą mu pracy, ale w taki sposób, który generuje jak najmniej problemów
po stronie tłumaczy (a raczej ułatwia pracę na ich odcinku). Chodzi o to, żeby
zawartość wstawianego elementu jak najmniej wpływała na treść całego zdania czy
opcji interfejsu. Conref niech będzie pełnym akapitem albo znakiem towarowym, a
zmienna niech będzie jak najmniej zaplątana w treści zdania.

W pewnych przypadkach może się jednak okazać, że wyobraźnia lingwistyczna nie
wystarczy – czasem trzeba uwzględnić takie aspekty, jak narodowy kolor szczęścia
albo tradycyjne pokrycie dachu! O czym w następnej części…
