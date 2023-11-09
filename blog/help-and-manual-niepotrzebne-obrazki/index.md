---
title: 'Help and Manual - niepotrzebne obrazki'
authors: mojk
date: '2014-08-22'
tags:
  - 'narzedzia'
  - 'warsztat'
  - 'manuale'
  - 'on-line-help'
coverImage: 'hm.gif'
---

[Help and Manual](http://techwriter.pl/help-and-manual-opis-narzedzia/ 'Help and Manual – opis narzędzia')
posiada dużo przydatnych funkcji, których nie widać gołym okiem. Jedną z nich
jest możliwość sprawdzenia, które obrazki nie są używane w projekcie.

<!--truncate-->

Rzadko kiedy dokument, który stworzyliśmy pozostaje niezmieniony przez dłuższy
okres czasu. Przeważnie jest on regularnie aktualizowany, zmieniany i ulepszany.
To prowadzi do sytuacji gdzie mamy mnóstwo starych zrzutów ekranu, które nie są
nam potrzebne, ale nie za bardzo mamy ochotę przeglądać je i usuwać. Jest to
bardzo czasochłonne i po prostu nudne. W takiej sytuacji możemy skorzystać z
narzędzia do tworzenia raportów, które jest częścią Help and Manuala. Raport
wygenerowany za pomocą opcji **Full Report including Image References** zawiera
sekcję z nieużywanymi obrazkami. Poniżej krótka instrukcja.

1. Otwórz projekt w Help and Manual.
2. W zakładce **Project** wybierz **Report Tool**.

![2014-08-16 08_40_43-Projekt1.hmxz in E__Projekt1 - Help & Manual](images/2014-08-16-08_40_43-Projekt1.hmxz-in-E__Projekt1-Help-Manual.png)

Pojawi się okno z wyborem opcji generowania raportu.

![2014-08-16 08_41_53-Project Report](images/2014-08-16-08_41_53-Project-Report.png)

3. W polu **Report Type**, wybierz opcję **Full Report including Image
   References**.

![2014-08-16 10_10_24-Project Report](images/2014-08-16-10_10_24-Project-Report.png)

Opcjonalnie, zmień pozostałe parametry. Naciśnij _OK_.

W przeglądarce otworzy się wygenerowany raport.

4. Przewiń raport do końca i znajdź sekcję **Unused Images**.

![2014-08-16 10_14_32-127.0.0.1_8000__fcid_605E73E7-7F99-45F7-BF31-82DBF4CCD307](images/2014-08-16-10_14_32-127.0.0.1_8000__fcid_605E73E7-7F99-45F7-BF31-82DBF4CCD307-1024x281.png)
W tej sekcji wyświetlone są obrazki, które nie są wykorzystywane w projekcie.
Sprawdzane są tylko katalogi dodane w ustawieniach projektu, w Configuration ->
Common Properties -> Project Search Path. Odniesienia dodane ręcznie do szablonu
HTML oraz pliki dołączone do projektu (baggage files) nie są uwzględniane w
raporcie.

Miłego korzystania 😊
