---
title:
  '„Ciemność, widzę ciemność, ciemność widzę” - czyli jak poskromić linię komend'
authors: mojk
date: '2026-02-04'
tags:
  - 'dobre-praktyki'
  - 'narzędzia'
  - 'warsztat'
coverImage: 'linia-komend.png'
---

[Bash (Bourne Again Shell)](https://pl.wikipedia.org/wiki/Bash) to złoty
standard w świecie rozwoju oprogramowania. Ta powłoka systemowa, a upraszczając
na potrzeby zrozumienia tematu, ta linia komend pozwala nam na wykonanie
rozmaitych operacji na naszym komputerze.

<!-- truncate -->

Za pomocą poleceń tekstowych możemy uruchomić przydatne narzędzia, dzięki którym
będziemy mogli np. skopiować lub usunąć pliki. Czyli właściwie to co robimy w
interfejsie graficznym naszego systemu operacyjnego, tyle, że trudniej :) W
takim razie, po co sobie zaprzątać głowę tym czarnym okienkiem?

## Po co mi ta wiedza?

Podczas gdy świat technologii pędzi do przodu dostarczając nam każdego dnia tonę
nowych rozwiązań i apek, które mają nam ułatwiać życie, ja wciąż uparcie
twierdzę, że warto znać podstawy. Podobnie jak w życiu codziennym - mamy
kalkulator i Wikipedię, ale jednak dobrze jest posiadać podstawy matematyki i mieć
ogólną wiedzę o świecie.

Pomimo tego, że większość rzeczy możemy już zrobić w interfejsach graficznych,
linia komend wciąż nie odeszła do lamusa. Są sytuacje, w których przychodzi nam
z pomocą. Poza tym, nowe rozwiązania, które cały czas się pojawiają na rynku
oprogramowania, wciąż często oferują możliwość używania ich za pomocą linii
komend.

Bash powstał pod koniec lat 80. i doczekał się już swoich następców, np.
[Zsh](https://pl.wikipedia.org/wiki/Zsh). Pomimo tego, jest on wciąż
wszechobecny w świecie software developmentu i dlatego warto się z nim
zaprzyjaźnić. Jako tech writerowi, da Ci to kolejną super moc podczas pracy z
programistami. Wyobraź sobie zaskoczenie deva z Twojego zespołu kiedy powiesz:

> Nie ma problemu, odpalę Basha i sprawdzę na serwerze, które pliki są dostępne
> dla użytkownika i co w nich jest.

## Jak uruchomić

W systemach macOS i Linux, Bash jest dostępny od razu. Jeśli używasz Maca,
wystarczy, że otworzysz aplikację **Terminal** i wpiszesz komendę `bash`.

Niestety, na Windowsie Bash nie jest dostępny jako część systemu operacyjnego.
Na szczęście można to całkiem łatwo zmienić, np. instalując
[Gita](https://git-scm.com/install/windows), który zawiera w sobie paczkę **git
bash**.

## Jak używać

Tak jak wspomniałem na początku, Bash oferuje nam możliwość uruchomienia
kwadryliona narzędzi. Ale od czegoś trzeba zacząć, dlatego skupię się na
absolutnych podstawach.

### Pokaż o czym myślisz

Żeby wyświetlić na ekranie jakiś tekst albo wartość jakiegoś elementu, użyj
komendy `echo`. Jak w każdym szanującym się poradniku, zacznij od przywitania
się ze światem:

```bash
~$ echo "Hello World!"
Hello World!
```

### Powtórz

Nikt z nas nie lubi się powtarzać. Ale czasem trzeba i jest to przydatne. W
Bashu jeśli chcesz powtórzyć ostatnio użytą komendę, naciskasz
`strzałkę do góry`. Prosta rzecz, a oszczędza sporo czasu.

```bash
~$ echo "Hello World!"
Hello World!
~$ echo "Hello World!"
Hello World!
```

### Działaj szybciej

Wpisywanie komend tekstowych może być uciążliwe, szczególnie jeśli zawierają one
długie ciągi znaków, np. ścieżkę do pliku. Na szczęście ktoś wymyślił
autouzupełnianie.

Żeby zobaczyć podpowiedzi, podczas wpisywania komendy, naciśnij `Tab`. Jeśli
istnieje tylko jedna możliwość uzupełnienia komendy, Twój wpisywany ciąg znaków
od razu się wypełni. Jeśli jest ich więcej, to po pierwszym naciśnięciu nic się
nie stanie. Wtedy naciśnij `Tab` drugi raz, a pod komendą, którą wpisujesz
dostaniesz listę dostępnych opcji. To pomoże Ci zdecydować co dalej wpisać.

Na każdym etapie wpisywania komendy warto użyć podpowiedzi, czasami kilka razy,
bo np. dopiero w połowie komenda staje się jednoznaczna i `Tab` doklei nam
brakującą część.

### Ustal swoją lokalizację

Żeby sprawdzić, w którym obecnie folderze jesteś, użyj polecenia `pwd`.

```bash
~/Documents$ pwd
/Users/docdeveloper/Documents
```

### Zmień lokalizację

Jeśli z jakiegoś powodu nie odpowiada Ci Twoje obecne położenie, możesz to łatwo
zmienić za pomocą polecenia `cd`.

Żeby przejść do jakiegoś folderu, wpisz `cd nazwa_folderu` (pamiętaj o
ułatwieniu sobie życia tabem). Na poziom wyżej możesz wskoczyć używając `..`. Na
przykład, jeśli jesteś w folderze `/Users/docdeveloper/Documents/Notes` a chcesz
przeskoczyć do `/Users`, wpisz `cd ../..`.

```bash
~/Documents/Notes$ pwd
/Users/docdeveloper/Documents/Notes
~/Documents/Notes$ cd ../..
~$ pwd
/Users/docdeveloper
```

### Pokaż mi co tam masz

Żeby sprawdzić zawartość folderu, w którym się znajdujesz, użyj komendy `ls`.
Jeśli chcesz zobaczyć też ukryte pliki, dodaj parametr `-a`. Jeśli chcesz więcej
szczegółów na temat poszczególnych elementów, np. uprawnienia i właściciel,
dorzuć `-l`.

Czyli, żeby zobaczyć szczegółową listę zawartości folderu, użyj komendy
`ls -la`. Jeśli chcesz sprawdzić zawartość innego folderu niż tego, w którym
obecnie jesteś, po prostu dodaj ścieżkę do polecenia. Np.
`ls -la /Users/docdeveloper/tmp`.

```bash
~/tmp$ ls -la
total 16
drwxr-xr-x   4 docdeveloper  staff   128 Feb  2 12:00 .
drwxr-xr-x   6 docdeveloper  staff   192 Feb  2 11:00 ..
-rw-r--r--   1 docdeveloper  staff    50 Feb  2 12:01 .gitignore
-rw-r--r--   1 docdeveloper  staff  1024 Feb  2 12:05 notatki.txt
```

### Zajrzyj w głąb

Sprawdzanie zawartości folderu to jedna rzecz. Ale jak sprawdzić szybko
zawartość pliku? Trzeba poprosić kota o pomoc ;)

A tak serio, to trzeba użyć komendy `cat sciezka_do_pliku`. Tylko pamiętaj, że
taki podgląd działa tylko dla plików typu tekstowego, np. `txt` albo `md`.
Niestety zdjęć nie będziesz w stanie przeglądać.

```bash
~$ cat notatki.txt
To jest przykładowa zawartość pliku.
Bash jest bardzo przydatny!
```

:::tip Pro tip
Jeśli dorzucisz do komendy opcję `-n`, to zobaczysz zawartość
pliku z ponumerowanymi linijkami
:::

### Stwórz coś

Tworzenie folderów nie wymaga dużego wysiłku. Wystarczy użyć
`mkdir nazwa_folderu` i gotowe.

Jeśli chcesz stworzyć folder w innej ścieżce niż obecna, to warto dodać opcję
`-p`. To spowoduje stworzenie wszystkich brakujących folderów w ścieżce. Na
przykład, chcesz dodać folder `/Users/docdeveloper/kurs_basha/notatki`. Zarówno
folder `kurs_basha` i `notatki` nie istnieją, więc odpalasz komendę
`mkdir -p /Users/docdeveloper/tmp/kurs_basha/notatki`. Zrobione! Pominięcie
opcji `-p` spowoduje błąd, że folder `kurs_basha` nie istnieje.

```bash
~$ mkdir -p /Users/docdeveloper/tmp/kurs_basha/notatki
~$
```

Jeśli chodzi o pliki, to można by rzec, że tworzy się je jak za dotknięciem
magicznej różdżki ;) Wystarczy odpalić `touch sciezka_do_pliku`, żeby dodać
pusty plik.

```bash
~/kurs_basha$ touch nowy_plik.md
```

Nowy plik możesz też stworzyć za pomocą komendy `echo`. Ta metoda pozwala Ci
stworzyć nie tylko pusty plik, ale też plik z jakimś tekstem. Pusty plik
tworzysz komendą `echo > sciezka_do_pliku`, a plik z zawartością
`echo "tekst" > sciezka_do_pliku`.

```bash
~$ echo "Lista zadań" > todo.txt
```

### Ogarnij się

Porządek musi być. Czasem trzeba coś usunąć, skopiować albo przenieść. Tutaj
przyjdą nam z pomocą komendy:

- `cp` - kopiowanie
- `mv` - przenoszenie
- `rm` - usuwanie

Kopiowanie pliku albo całego folderu to prosta sprawa -
`cp sciezka_zrodlowa sciezka_docelowa`.

Jednak kopiowanie samej zawartości folderu, wymaga już użycia opcji
rekursywności i "dzikiej karty" - `cp -r sciezka_zrodlowa/* sciezka_docelowa`.
Drobna uwaga - standardowo `*` nie obejmuje plików ukrytych (zaczynających się
od kropki, np. `.env` lub `.gitignore`).

```bash
~$ cp -r projekt_v1/* projekt_finalny/
```

Przenoszenie w inne miejsce to podobna historia -
`mv sciezka_zrodlowa sciezka_docelowa`.

Przydatną funkcją jaką nam daje komenda `mv` jest zmiana nazwy. Na przykład,
jeśli chcemy zmienić nazwę pliku to można go po prostu przenieść, nawet wewnątrz
tej samej lokalizacji. Na przykład, żeby zmienić nazwę pliku w obecnej
lokalizacji, użyj komendy `mv obecna_nazwa_pliku nowa_nazwa_pliku`

```bash
~$ mv notatka_stara.txt notatka_nowa.txt
```

Usunięcie pliku to też krótka piłka - `rm sciezka_do_pliku`.

Usunięcie folderu wymaga dodania opcji rekursywności -
`rm -r sciezka_do_folderu`. Jeśli dostaniesz jakiś błąd usuwania a i tak nadal
chcesz usunąć ten plik lub folder, możesz "użyć siły", czyli opcji `-f`.

```bash
~$ rm -r folder_do_usuniecia
```

### Skomponuj coś

Każde polecenie w Bashu to jak odpalenie małego narzędzia. Naciskanie `Enter` po
każdym wpisanym poleceniu jest ok, ale można sobie oszczędzić trochę naciskania
klawiszy za pomocą operatorów `&&`, `||` i `|`. Pozwalają one na budowanie
potężnych jednolinijkowców.

Najczęściej używanym jest `&&` (oznacza spójnik "i"), który wykonuje kolejną
komendę tylko wtedy, gdy pierwsza się uda.

```bash
~$ mkdir nowy_folder && cd nowy_folder && echo "Bardzo mi się podoba ten artykuł" > opinia.txt && cat opinia.txt
```

Powyższy tasiemiec najpierw stworzy nowy folder, potem do niego wejdzie i
stworzy plik z zawartością, a na końcu wyświetli tę zawartość.

Operator `||` wykonuje kolejną komendę tylko wtedy, jeśli poprzednia się nie uda
(oznacza spójnik "lub").

```bash
~$ mkdir nowy_folder || mkdir nowy_folder_1
```

Operator `|` (Pipe) przekazuje informację wyjściową z polecenia po lewej stronie
jako informacje wejściową dla polecenia po prawej stronie.

```bash
~$ ls | cat -n
     1	dokumenty
     2	zdjecia
     3	notatki.txt
```

### Odśwież swoją pamięć

Ciężko jest sobie przypomnieć obiad sprzed dwóch dni, a co dopiero komendy
wywoływane w Bashu.

Jeśli potrzebujesz przywołać zapis swoich poczynań, użyj do tego komendy
`history`.

```bash
~$ history
  501  cd projekty
  502  mkdir nowa_strona
  503  ls -la
  504  touch index.html
```

Każdy wpis w historii ma swój numer. Ułatwia to czytanie loga, ale też ma inną
przydatną funkcję. Żeby ponownie odpalić jakąś komendę z historii, wpisz
`!numer`.

```bash
~$ !503
ls -la
```

:::tip Pro tip
Żeby odpalić ostatnią użytą komendę, wpisz `!!`.
:::

### Zostań hardkorem

Lubisz zawsze iść pod wiatr? Nie uznajesz kompromisów? W takim razie mam coś dla
Ciebie - edytor [VI lub VIM](https://pl.wikipedia.org/wiki/Vim) dostępny w terminalu.

Tyle samo osób go kocha co nienawidzi z powodu bardzo specyficznego sposobu
obsługi. Wszystko robisz na klawiaturze, całkowicie inaczej niż w nowoczesnych
edytorach, i nie używasz w ogóle myszki. Kiedyś podjąłem wyzwanie nauczenia się
podstawowej obsługi tego edytora. Na początku był pot, krew i łzy, ale po jakimś
czasie stwierdziłem, że to wszystko ma sens i zrozumiałem dlaczego można
polubić VI. Do tej pory zdarza mi się robić jakieś proste zmiany w plikach
tekstowych lub skryptach za pomocą tego edytora.

Jeśli chcesz spróbować to odpal poniższą komendę, która utworzy nowy plik i
otworzyć go w VI.

:::warning Ostrzegam!
Wyjście z programu może okazać się pierwszym poważnym
wyzwaniem na jakie natrafisz. W świecie programistów krążą nawet o tym żarty
;)
:::

```bash
~$ vi plik_konfiguracyjny.txt
```

## Co dalej?

Każde z opisanych wyżej narzędzi to królicza nora, którą można dalej
eksplorować. Wiele z nich ma różne parametry, które dają Ci dodatkowe funkcje.

Jeśli temat Basha Cię zainteresował, poszukaj w internecie jakie jeszcze ciekawe
komendy istnieją. Sztuczny asystent dobrze sprawdza się w generowaniu poleceń,
których potrzebujesz.

Jak już zaczniesz sprawnie poruszać się w ciemnościach tego magicznego okienka,
spróbuj stworzyć jakiś prosty skrypt, czyli plik z rozszerzeniem `.sh`, w którym
umieścisz potrzebne komendy. Na przykład coś takiego:

```bash
#! /bin/bash

cd /Users/docdeveloper
ls
```

Ta dziwna pierwsza linijka to wiadomość dla systemu operacyjnego, żeby odpalił
nasz skrypt w powłoce Bash. Na przykład w macOS od jakiegoś czasu domyślną linią
komend jest Zsh. Brak tej linijki spowoduje, że skrypt zostanie odpalony z
automatu w Zsh.

Powodzenia i miłej zabawy!
