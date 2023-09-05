---
title: "Za co maszyny lubią autorów"
authors: mojk
date: "2018-08-10"
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
coverImage: "hand-1571851_640.jpg"
---

Po tłumaczach przyszedł czas na maszyny.

<!--truncate-->

Dzisiaj mamy dla Was mały dodatek do serii artykułów "Za co tłumacze lubią
autorów", które przez ostatnie miesiące publikowaliśmy na naszych łamach. Jest
to krótkie podsumowanie a zarazem przedłużenie wątków, które zostały w nich
poruszone. Zapraszamy do lektury.

## Kilka słów o autorce

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

## Za co maszyny lubią autorów

Czwarta część trylogii dla autorów dokumentacji, pomocy i interfejsów ?.

Podsumowując krótki trzyczęściowy przekaz od tłumaczy do autorów technicznych,
chciałabym jeszcze zarekomendować książkę
[„Programiści i tłumacze”](https://helion.pl/ksiazki/programisci-i-tlumacze-wprowadzenie-do-lokalizacji-oprogramowania-agenor-hofmann-delbor-marta-bartnicka,protlu.htm)
wydaną przez Helion w ubiegłym roku, której mam przyjemność być współautorką.

Wątki, które ledwo poruszyłam w poprzednich trzech wpisach – spójność, zmienne,
internacjonalizacja – w „Programistach i tłumaczach” opracowane są znacznie
dokładniej i opatrzone przykładami, najczęściej z praktyki, czy to współautora
(a jest nim dr Agenor Hofmann-Delbor, fachowiec o ogromnym doświadczeniu w
lokalizacji, tłumaczeniach i CAT-ach), czy mojej, czy też znajomych tłumaczy i
testerów, między innymi zgromadzonych w facebookowej grupie
[TŁUMACZENIA](https://www.facebook.com/groups/tlumaczenia).

Przez rok książka się nie postarzała, że przytoczę choćby proroctwo Agenora ze
str. 199: „będziemy mieć bazę na Marsie, a pliki \[do tłumaczenia\] nadal będą
latać w Excelu”. Jeśli coś w branży lokalizacyjnej zmieniło się istotnie od
wydania „Programistów i tłumaczy”, to jakość ogólnodostępnego tłumaczenia
maszynowego. Dlatego na koniec rozważań o „pisaniu pod tłumaczenie” wspomnę
jeszcze, że tworząc treści – czy to po polsku, po angielsku czy niemiecku –
trzeba poważnie liczyć się z tym, że mogą być tłumaczone maszynowo, i to na
języki, o których nie mamy pojęcia. Technologia MT to bodaj najszybciej
rozwijająca się gałąź rynku lokalizacji i tłumaczeń, a fachowcy z tej branży
mówią: nie podoba ci się MT? – przyjdź za rok. I mają rację: przez rok potrafi
się tu naprawdę dużo zmienić, a z całą pewnością zmieniło się wiele w ostatnim
roku.

Pisanie z myślą o MT

### WTEM! mamy neural MT

Przez ostatni rok systemy tłumaczenia maszynowego oparte na sieciach neuronowych
wyszły z laboratoriów i triumfalnie wkroczyły na rynek. W praktyce oznacza to,
że niepostrzeżenie skończyła się epoka, w której MT działało jako-tako w parach
angielski-hiszpański i angielski-chiński, a wszystko inne – np. tłumaczenia
Google na polski – nadawało się głównie do śmiechu. Jesienią 2017 w Europie
wystartował nowy dostawca MT, [DeepL](https://www.deepl.com/translator), który
oprócz bardzo dobrego tłumaczenia maszynowego zaoferował też europejskie warunki
przetwarzania i przechowywania danych – w przeciwieństwie do dawnego Googlowego
„tak, zbieramy wszystko”. Równocześnie Google Translate poprawiło i zasady
prywatności, i jakość tłumaczenia; o ile ochrona danych może być odpryskiem GDPR
i nacisków z Europy, o tyle za skokiem jakościowym w samym tłumaczeniu z całą
pewnością stoi (wisi?) sieć neuronowa. Podobnie dzieje się z MT Facebooka,
Microsoftu i wielu innych graczy na rynku maszynowym. Pełną migrację na neural
MT zakończył też właśnie system
[eTranslation](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/eTranslation)
– MT finansowane przez Unię Europejską na potrzeby sektora publicznego.

### Maszyna nie pyta

O tym, jak wydarzenia ostatniego roku przełożyły się na praktykę branży
lokalizacyjnej, oraz o tym, jak autorzy mogą „pisać pod MT”, opowiadaliśmy
niedawno z Wojciechem Froelichem (Argos Multilingual) na soap! 2018 w Krakowie.

Gdybym miała streścić 40 minut naszego wystąpienia w trzech zdaniach, to
brzmiałyby one:

_MT nie zgadnie, co autor miał na myśli._

_MT nie domyśli się z kontekstu._

_MT o nic nie zapyta._

Więcej szczegółów, w tym oczywiście zalecenia praktyczne dla autorów, można
zobaczyć na nagraniu z naszego wystąpienia.

https://www.youtube.com/watch?v=Q\_if0yBogUQ

Dziękuję za uwagę Czytelnikom, którzy dotarli do tego momentu. Chętnie odpowiem
na wszelkie pytania mailem ([martab@kofeina.net](mailto:martab@kofeina.net))
albo też na żywo – w najbliższym czasie w Pradze w czasie
[Write the Docs](http://www.writethedocs.org/conf/prague/2018) albo w Warszawie
na [Konferencji Tłumaczy](https://www.konferencjatlumaczy.pl/), albo też
jesienią w moim rodzinnym Wrocławiu na którymś spotkaniu z serii MeetContent.
