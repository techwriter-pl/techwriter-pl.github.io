---
title: "MkDocs - opis narzędzia"
date: "2015-03-06"
tags:
  - "narzedzia"
  - "warsztat"
  - "aplikacje"
  - "on-line-help"
coverImage: "mkdocs.png"
---

Jeśli lubicie proste i darmowe narzędzia, a do tego tworzenie treści w
[Markdownie](http://pl.wikipedia.org/wiki/Markdown) to dla Was chleb powszedni,
to [MkDocs](http://www.mkdocs.org) powinien Wam przypaść do gustu. To prosty i
szybki generator statycznych stron zrobiony z myślą o tworzeniu dokumentacji.
Pliki źródłowe dokumentacji pisane są w Markdownie, a cała konfiguracja
potrzebna do zbudowania strony zawiera się w jednym pliku
[YAML](http://pl.wikipedia.org/wiki/YAML).

## Instalacja

Zanim zainstalujemy właściwą aplikację, musimy dozbroić nasz system operacyjny w
następujące komponenty:

- [Python](https://www.python.org/) (wspierane są wersje 2.6, 2.7, 3.3 i 3.4)
- [pip](http://pip.readthedocs.org/en/latest/installing.html) (wersje Pythona z
  serii 2 od 2.7.9 oraz Pythona z serii 3 od 3.4 posiadają aplikację pip w
  standardzie, więc osobna instalacja nie powinna być potrzebna)

Kiedy mamy już wszystko co potrzeba, możemy przejść do instalacji paczki
**mkdocs** używając do tego **pip**. Wystarczy otworzyć linię komend i uruchomić
poniższą komendę:

`pip install mkdocs`

Dzięki temu, że narzędzie opiera się na Pythonie, instalacja na różnych
platformach nie powinna być problemem. Sami zainstalowaliśmy MkDocs bez problemu
na Windows 7 i Linux Mint 17 Xfce.

## Pierwszy projekt

Po instalacji musimy stworzyć nasz pierwszy projekt. W tym celu w linii komend
przechodzimy do lokalizacji, w której chcemy go utworzyć. Następnie wywołujemy
komendę:

`mkdocs new <nazwa projektu>`

Zostanie utworzony katalog o nazwie jaką podaliśmy, który będzie zawierał
elementy opisane w następnej sekcji.

## Struktura projektu

Każdy projekt to katalog, który zawiera następujące elementy:

- Katalog _docs_ - zawiera pliki źródłowe stron w formacie Markdown (wspierane
  są rozszerzenia plików .markdown, .mdown, .mkdn, .mkd, .md); początkowo
  zawiera tylko plik strony startowej _index.md_
- Plik _mkdocs.yml_ - przechowuje konfigurację projektu zapisaną w formacie YAML

Prosto, przejrzyście i bez zbędnych komplikacji.

## Wbudowany serwer stron WWW

MkDocs posiada wbudowany serwer stron WWW, dzięki któremu mamy podgląd tego jak
będzie wyglądać nasza dokumentacja w formacie docelowym. Żeby zacząć serwować
stronę lokalnie, trzeba w linii komend wejść do katalogu strony i wywołać
komendę:

`mkdocs serve`

Następnie otwieramy przeglądarkę i ładujemy adres **http://127.0.0.1:8000/**.
Powinniśmy zobaczyć stronę startową naszej dokumentacji. Warto wspomnieć, że po
każdej modyfikacji w pliku konfiguracyjnym, w katalogu z plikami źródłowymi albo
w katalogu z motywami, strona przebudowuje się automatycznie. Wystarczy
przeładować stronę w przeglądarce, żeby zobaczyć wprowadzone zmiany.

## Motywy

Do dyspozycji mamy kilka schludnych
[motywów](http://www.mkdocs.org/user-guide/styling-your-docs/#built-in-themes).
Wyboru motywu dokonujemy w pliku konfiguracyjnym. Wystarczy dodać taką linijkę:

`theme: <nazwa motywu>`

Na przykład, żeby użyć motywu Bootstrap, trzeba wpisać:

`theme: bootstrap`

Jeśli chcemy użyć swojego własnego motywu, w pliku konfiguracyjnym musimy podać
ścieżkę do katalogu, w którym się znajduje. Służy do tego parametr
**theme_dir**. Po połączeniu go z parametrem **theme** mamy możliwość użycia
któregoś z domyślnych szablonów i zastąpienia tylko niektórych jego elementów
własnymi. Szczegóły można znaleźć w
[dokumentacji](http://www.mkdocs.org/user-guide/configuration/#build-directories)
narzędzia.

## Budowanie dokumentacji

Kiedy nasza treść jest już gotowa, a parametry zostały odpowiednio ustawione w
pliku konfiguracyjnym, możemy przystąpić do generowania naszej dokumentacji.
Robimy to za pomocą prostej komendy wywoływanej w katalogu naszego projektu:

`mkdocs build`

Zostanie utworzony katalog _site_, w którym znajdzie się nasza wygenerowana
dokumentacja. Są to wyłącznie statyczne strony, dzięku czemu możemy hostować
naszą dokumentację na jakimkolwiek serwerze HTTP. Wystarczy umieścić na nim cały
katalog _site_.

## Werdykt

Niewątpliwie mocną stroną tego narzędzia jest jego prostota, zarówno w kwestii
instalacji jak i obsługi. Dosłownie w kilka minut jesteśmy w stanie zainstalować
aplikację i rozpocząć tworzenie treści. MkDocs na pewno jest propozycją wartą
rozważenia jeśli tworzymy prostą dokumentację w niewielkich ilościach. Według
nas jest to bardzo ciekawa inicjatywa, którą warto śledzić. Miejmy nadzieję, że
twórcom wystarczy zapału i energii, żeby rozwijać to narzędzie. Jeśli MkDocs
wydaje się Wam interesujący i chcielibyście dowiedzieć się więcej na jego temat,
zachęcamy Was do zapoznania się dokumentacją na
[oficjalnej stronie aplikacji](http://www.mkdocs.org/). Jest napisana bardzo
przystępnie, dzięku czemu zapoznanie się z możliwościami narzędzia nie
przysparza trudności.
