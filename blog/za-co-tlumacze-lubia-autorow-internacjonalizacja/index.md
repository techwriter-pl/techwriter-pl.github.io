---
title: "Za co tłumacze lubią autorów - internacjonalizacja"
date: "2018-07-02"
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
coverImage: "countries-1301799_640-e1530121311958.png"
---

Z przyjemnością publikujemy kolejny wpis gościnny traktujący o tym w jaki sposób
specjaliści tworzący dokumentację mogą ułatwić życie tłumaczom.

[Pierwszy wpis](http://techwriter.pl/za-co-tlumacze-lubia-autorow-spojnosc/) z
cyklu "Za co tłumacze lubią autorów" podkreślał jak ważna jest spójność w
tworzeniu dokumentacji. W
[drugiej części](http://techwriter.pl/za-co-tlumacze-lubia-autorow-skladaki/)
autorka skupiła się na zagrożeniach związanych ze stosowaniem zmiennych i
fragmentów tekstu do wielokrotnego użycia (snippetów). Trzeci i zarazem ostatni
wpis w tym cyklu rzuca trochę światła na zagadnienia związane z
internacjonalizacją.

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

# Za co tłumacze lubią autorów - internacjonalizacja

## Długość tekstu (w procentach)

Jednym z aspektów „pisania pod lokalizację” jest długość tekstu, zwłaszcza jeśli
tworzymy go w języku angielskim. Gdybym miała podać jedną liczbę, to byłoby nią
30: o tyle procent przeciętny tekst przetłumaczony na polski jest dłuższy od
angielskiego oryginału – i jest to jeden z większych procentów „spuchnięcia”
tekstu w przekładzie. Pół biedy, kiedy to dokumentacja lub pomoc – więcej
pułapek kryje się w interfejsie użytkownika i w tym, czy projektujemy go z myślą
o lokalizacji na różne języki. Dla różnych par językowych współczynnik ten
wypada różnie, ale jedno jest pewne: projektując interfejs z tekstami o
ograniczonej długości, uwzględnijmy zawsze bufor na „dłuższe języki”. Dotyczy to
nie tylko ograniczeń narzuconych w kodzie (limit długości tekstu powinien być
przynajmniej o 30% większy niż faktyczny tekst angielski), ale również projektu
interfejsu. Najlepiej, żeby etykiety czy przyciski mogły się rozszerzać nie
zachodząc na inne pola – jak ilustruje to świetny przykład, który zaczerpnęłam
od Angeliki
Zerfass:[![](images/Picture1.png)](http://techwriter.pl/wp-content/uploads/2018/06/Picture1.png)

Więcej szczegółów na ten temat można znaleźć w
[IBM Globalization Guidelines](https://www-01.ibm.com/software/globalization/guidelines/a3.html)
– między innymi przydatną informację, że im krótszy tekst, tym bardziej może
„spuchnąć” w tłumaczeniu:

Ze swojej praktyki pamiętam na przykład pewien panel drukarki, w którym
developer wziął sobie do serca pozostawienie 30% zapasu, zatem na
przetłumaczenie tekstu „ALL” dał aż 4 znaki. Można zgadywać, jakie tłumaczenie
na polski okazało się najbardziej czytelne ?

## Kolor łupkowy oraz czy bać się czerwieni

Pozostawiając temat interfejsu, przyjrzyjmy się jeszcze kilku zagadnieniom tak
zwanej internacjonalizacji (względnie globalizacji) tworzonych produktów – czyli
tego, na jakich rynkach da się je sprzedać bez przeróbek.

Jakiego koloru jest łupek? W Polsce większość zapytanych po namyśle odpowie, że
chyba brunatnego. W krajach z kręgu anglosaskiego łupek (_slate_) był
tradycyjnym pokryciem dachów i dla osób z tej kultury jest oczywiste, że chodzi
o kolor szaroniebieski (po polsku nazywany _gołębim_).

Kolory to nie tylko kwestia przekładu, ale też symboliki. Dla nas, osób z Europy
Środkowej, czerwony jest kolorem kojarzonym z zagrożeniem, a czarny – z żałobą.
Uniwersalne? Nie całkiem. W Chinach czerwony to kolor dobrobytu i radości, a w
Indiach kolorem żałoby jest raczej biały.

Pozostając przy symbolice, nie wszędzie na świecie sowa oznacza mądrość, otwarta
dłoń – powitanie, a budynek czy auto z czerwonym krzyżem – służby medyczne.
Wprowadzając do tworzonych treści symbole, trzeba sprawdzać, czy na pewno są
uniwersalne. Najbezpieczniejsze okazują się podstawowe znaki drogowe i symbole
matematyczne.

## Zamienię żonę na piłkę plażową

Internacjonalizując treści, lepiej nie iść na skróty. Pouczających
(anty)przykładów dostarcza świat reklamy, w którym na rynek amerykański
domalowuje się sportowcom dłuższe spodenki, a na rynki arabskie – zamienia się w
basenie żonę na piłkę plażową. Poprawność rasowa czy genderowa robiona za pomocą
gotowych zdjęć i pośpiesznego kopiuj-wklej też staje się raczej źródłem memów
niż przychodów.  Rozwiązania są dwa: albo przerabiać materiał po dokładnym
zbadaniu kultury docelowej, albo zawczasu przeanalizować go pod kątem kulturowym
i przygotować możliwie uniwersalnie.

Jeszcze trochę przykładów internacjonalizacji (i anegdot na ten temat) pokazałam
na soap! 2017.

https://www.youtube.com/watch?v=5FcpDgEt1DQ

Podsumowując, im bardziej globalnie – tym więcej czynników trzeba wziąć pod
uwagę. Wiele aspektów internacjonalizacji znajduje się najbardziej w zakresie
działania autorów (długość tekstów, symbolika, określenia slangowe i
regionalne); na inne pozostaje zwrócić uwagę projektantom czy marketingowi.
