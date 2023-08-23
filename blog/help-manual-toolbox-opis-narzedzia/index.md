---
title: "Help & Manual Toolbox - opis narzędzia"
date: "2014-07-08"
categories:
  - "narzedzia"
  - "warsztat"
tags:
  - "manuale"
  - "on-line-help"
coverImage: "hmtoolbox.png"
---

Help and Manual to aplikacja do tworzenia dokumentacji, która oferuje całkiem sporo możliwości. Jakiś czas temu opisywaliśmy to [narzędzie](http://techwriter.pl/help-and-manual-opis-narzedzia/). Tym, którzy szukają dodatkowych funkcji proponujemy zapoznanie się z aplikacją Help & Manual Toolbox.

Jest to narzędzie stworzone przez producenta Help and Manuala, firmę EC Software. Jednak próżno go szukać na [stronie programu](http://www.helpandmanual.com). Żeby ściągnąć Toolbox, trzeba odwiedzić forum programu, a konkretnie ten [wątek](http://helpman.it-authoring.com/viewtopic.php?f=4&t=12586). W momencie pisania tego artykułu, najnowszą wersją była wersja 1.1.5 Beta. Program jest przeznaczony dla doświadczonych użytkowników, którzy chcą edytować swoje projekty w sposób, którego nie oferuje Help and Manual. Program został stworzony przez Tima Greena, który jest częścią zespołu EC Software, początkowo na własny użytek. Jego głównym celem była możliwość zmiany szablonów HTML przy użyciu zewnętrznego, w pełni funkcjonalnego edytora, zamiast kopiować kod z szablonu, zmieniać go i potem wklejać ponownie do szablonu. Od tego czasu Help & Manual Toolbox zyskał sporo dodatkowych funkcji. Postaramy się pokrótce przybliżyć Wam to sprytne narzędzie.

## Wymagania, instalacja i konfiguracja

Help & Manual Toolbox wymaga aplikacji Help and Manual 6 (nie działa z poprzednimi wersjami) oraz aplikacji Microsoft .NET Framework w wersji przynajmniej 4. Narzędzie podczas instalacji domyślnie tworzy swój katalog wewnątrz katalogu instalacyjnego EC Software. To jest najlepsze miejsce do instalacji. Przed rozpoczęciem korzystania z programu, trzeba wybrać edytor plików. Autor narzędzia poleca popularny i ceniony, darmowy edytor [Notepad++](http://notepad-plus-plus.org/). Oprócz tego, potrzebny jest edytor plików graficznych, który będzie używany do obróbki plików dołączonych do projektów (baggage files). Domyślnie ustawiony jest program Impict, który opisywaliśmy [tutaj](http://techwriter.pl/zrzucanie-ekranu-opis-narzedzi/).

## Ograniczenia

Obecnie program nie wspiera plików repozytorium z rozszerzeniem HMXR, jedynie pliki projektów z rozszerzeniami HMXZ i HMXP oraz pliki skórek z rozszerzeniem HMSKIN. Narzędzie nie rozpoznaje też projektów podrzędnych (child projects), które zostały załadowane do projektu głównego (master project).

## Możliwości

Help & Manual Toolbox oferuje nam całkiem sporo. Po załadowaniu projektu jest on automatycznie sprawdzany pod kątem błędów. Program ostrzega o niepoprawnych ścieżkach do folderów (project search paths) i duplikatach plików w tych folderach. Oprócz tego można wyszukać obrazki osadzone w projekcie, które należy przekonwertować na zewnętrzne pliki.

Szablony HTML w skórkach można edytować za pomocą zewnętrznego edytora. Co więcej, Toolbox daje nam możliwość dodania do skórki prawie wszystkich ustawień normalnego projektu, co nie jest możliwe z poziomu Help and Manuala. Dzięki temu skórka może kontrolować więcej rzeczy, np. ścieżki do folderów. Po wprowadzeniu zmian do skórki, można od razu opublikować jakiś dokument z nowymi ustawieniami. Jest to wygodne, ponieważ nie musimy opuszczać programu, żeby sprawdzić czy wszystko działa jak należy. Pliki dołączone do projektu (baggage files) można edytować za pomocą zewnętrznego edytora graficznego. Domyślnie jest to Impict, który instaluje się razem z Help and Manualem.

Jedną z bardziej przydatnych funkcji jest eksport komentarzy do pliku w formacie TXT, RTF lub CSV. Komentarze dodane do projektu w Help and Manualu są pomijane podczas generowania dokumentu. Przez to nie można dostarczyć gotowego dokumentu z komentarzami. Funkcja eksportu daję nam częściowe rozwiązanie tego problemu, ponieważ możemy do dokumentu dołączyć plik z komentarzami, który podaje numer danego komentarza, datę dodania, rozdział do którego się odnosi i jego treść.

Kolejną użyteczną funkcją jest usuwanie i dodawanie prefiksów w plikach rozdziałów (topic files). Jeśli korzystamy z projektów modularnych (modular projects), gdzie projekty są podpięte pod jeden projekt główny (master project), zalecane jest dodanie unikatowego prefiksu do nazwy każdego pliku rozdziału w każdym projekcie, żeby uniknąć konfliktu nazw. Normalnie, żeby zmienić prefiks, musimy otworzyć Help and Manuala i przejść ustawienia każdego rozdziału z osobna (jeśli wykonamy tą operację na plikach XML w katalogu projektu, zostanie utracony link pomiędzy rozdziałem w spisie treści a samym plikiem rozdziału). Toolbox pozwala nam wyszukać oraz zmienić prefiks wszystkich plików rozdziału w projekcie, co zaoszczędza nam sporo czasu.

Jeśli korzystamy ze zmiennych (variables) to na pewno zderzyliśmy się z problemem zmiany ich nazwy. Zmiana wartości zmiennej jest jak najbardziej możliwa z poziomu Help and Manuala, ale nie da się zmienić jej nazwy. Jedyna możliwość to usunięcie zmiennej i dodanie kolejnej z nową nazwą. Jednak taka operacja powoduje, że stara zmienna nadal jest widoczna w miejscach, w których została użyta, np. w treści, spisie treści czy ustawieniach projektu. Help and Manual Toolbox rozwiązuje ten problem. Po zmianie, nazwa zmiennej jest aktualizowana w całym projekcie. Podobną operację zmiany nazwy można też wykonać na opcjach budowania (custom builds).

Help and Manual Toolbox to bardzo dobre uzupełnienie dla Help and Manuala, dające użytkownikom dużą większą kontrolę nad projektami. Trzeba jednak pamiętać, że niektóre zmiany są znaczącą ingerencją w kod źródłowy plików, dlatego należy korzystać z tego narzędzia z rozwagą. Dobrą praktyką jest stworzenie kopii zapasowej modyfikowanego projektu czy skórki przed wprowadzeniem zmian. Rozsądek przede wszystkim.
