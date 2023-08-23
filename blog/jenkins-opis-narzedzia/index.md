---
title: "Jenkins - opis narzędzia"
date: "2014-03-20"
categories:
  - "narzedzia"
  - "warsztat"
tags:
  - "aplikacje"
  - "automatyzacja"
coverImage: "Jenkins.jpg"
---

Wasi koledzy programiści i testerzy używają Jenkinsa do budowania i testowania oprogramowania? Wy również możecie wykorzystać to narzędzie aby zautomatyzować tworzenie dokumentacji technicznej. Przeczytajcie poniższy opis podesłany przez naszego czytelnika.

Dzisiaj chciałbym przybliżyć kolejne narzędzie którego używam w swojej pracy, Jenkins CI. Nie jest ono związane z samym pisaniem dokumentacji, tylko z jej generowaniem, a dokładniej automatyzowaniem tego procesu. Od razu zaznaczam, że w żadnym wypadku nie jestem ekspertem w tej kwestii. Moim celem jest tylko ogólne przedstawienie narzędzia i przykładu jego zastosowania.

W skrócie Jenkins umożliwia automatyzację procesu budowania, np. oprogramowania, poprzez skonfigurowanie zadań (w programie nazywane “jobs”). Jakiś czas temu doszliśmy do wniosku, że ta aplikacja może być również pomocna w przypadku generowania dokumentacji do różnych formatów. Okazało się, że jak najbardziej mieliśmy rację. Za pomocą plików wsadowych (batch files) i skryptów napisanych w Pythonie udało nam się “pożenić” Jenkinsa z [Help and Manualem](http://techwriter.pl/help-and-manual-opis-narzedzia/) i póki co ten związek ma się całkiem dobrze ;) Postaram się w skrócie przedstawić zastosowanie Jenkinsa na tym właśnie przykładzie.

Zacznijmy od konfiguracji. Jenkins jest wieloplatformowy, więc można go zainstalować na Windowsie, Linuxie czy Mac OSie. W naszym przypadku, aplikacja działa na Windows 7 Enterprise SP1, 64-bit, na którym mamy serwer HTTP (Apache). Od ponad pół roku wszystko działa bez zarzutu.

Do konsoli Jenkinsa dostajemy się przez przeglądarkę. Dostęp dla użytkowników można skonfigurować według uznania, np. zezwolić na uruchamianie zadań wszystkim, ale ograniczyć konfigurację do konkretnych użytkowników. Interfejs jest dość prosty, jednak poruszanie się po aplikacji wymaga trochę przyzwyczajenia. Na stronie producenta można zobaczyć interaktywny przykład, gdzie można sobie poklikać: [https://ci.jenkins-ci.org/view/All%20Disabled/](https://ci.jenkins-ci.org/view/All%20Disabled/)

Jenkins posiada całkiem obszerną listę wtyczek różnej maści, które można instalować z poziomu programu. Myślę, że każdy znajdzie coś dla siebie. Na Wiki programu można zaznajomić się z dostępnymi wtyczkami: [https://wiki.jenkins-ci.org/display/JENKINS/Plugins#Plugins-Pluginsbytopic](https://wiki.jenkins-ci.org/display/JENKINS/Plugins#Plugins-Pluginsbytopic)

Same zadania można ustawić w różny sposób. Może to być zadanie, które po uruchomieniu od razu zacznie wykonywać skonfigurowane operacje lub też zadanie z parametrami, które należy podać przed wykonaniem operacji. Dla lepszego zobrazowania drugiej sytuacji podam przykład z życia wzięty.

Jedna z wersji naszego oprogramowania (nazwijmy ją 2.2) może występować w dwóch odmianach (przyjmijmy, że będzie to opcja podstawowa i rozbudowana). W repozytorium Subversion (SVN) mamy wszystkie dokumenty dostępne  dla wersji 2.2. W zależności od odmiany oprogramowania, poszczególne dokumenty wchodzą w skład paczki lub nie. Ponadto, musimy mieć możliwość wygenerowania dokumentacji nieoficjalnej (czyli takiej, która ciągle jest w fazie rozwoju) i oficjalnej (czyli takiej, która potencjalnie nadaje się do publikacji dla klienta) w trzech formatach: HTML, PDF i RTF. Scenariusz mamy opisany, teraz jak to wygląda od strony Jenkinsa. Konfigurujemy zadanie, które korzysta z parametrów. W tym wypadku będą to: rodzaj dokumentacji (wartości: nieoficjalna, oficjalna), zestaw dokumentów (wartości: wszystkie, opcja podstawowa, opcja rozbudowana), format HTML (wartości: Tak, Nie), format PDF (wartości: Tak, Nie) i format RTF (wartości: Tak, Nie). Następnie podajemy ścieżkę do repozytorium SVN, skąd program będzie pobierał źródła do generowania dokumentów. Kolejny krok to skonfigurowanie operacji, które mają zostać wykonane w zależności od wybranych opcji. Program umożliwia wykonanie m. in. plików wsadowych i skryptów napisanych w Pythonie. Można podać scieżkę do danego pliku lub po prostu wpisać komendy w samym zadaniu. W naszym wypadku powyższy przykład jest skonfigurowany poprzez połączenie skryptów w Pythonie i plików wsadowych. Co się stanie po zapisaniu zadania i uruchomieniu? Najpierw program wyśtwietli ekran, gdzie trzeba będzie zaznaczyć żądane opcje. Następnie, po uruchomieniu zadania, zacznie je wykonywać z odpowiednimi parametrami. Na początku z SVNa zostaną “wyciągnięte” pliki źródłowe, z których będzie generowana dokumentacja. Potem dzieją się te rzeczy, która zostały skonfigurowane w zadaniu. Na przykład, wybieramy dokumentację nieoficjalną dla opcji podstawowej i formaty HTML oraz PDF. Program wybiera dokumenty, które mają się znaleźć w paczce dla oprogramowania w wersji podstawowej (w naszym przypadku ta informacja pobierana jest z Help and Manuala, gdzie użyte są flagi), następnie generuje te dokumenty do wybranych formatów. Dodatkowo w naszym zadaniu, po zakończeniu procesu generowania, paczka kopiowana jest na serwer HTTP do odpowiedniego katalogu.

Jak widać, za pomocą paru kliknięć udało się stworzyć kompletną paczkę dokumentówi umieścić ją na serwerze, dzięki czemu jest ona dostępna dla użytkowników od razu.

Żeby nie było tak pięknie, na koniec dodam, że przygotowanie całego rozwiązania zajęło nam całkiem sporo czasu. Oprócz samego Jenkinsa, trzeba było skonfigurować projekty w Help and Manualu w odpowiedni sposób. Oczywiście wszystko zależy od przyjętego rozwiązania i umiejętności osób zaangażowanych, jednak trzeba się liczyć z tym, że czasami musi być ciężko, żeby potem było łatwo. Ot taka mądrość :)

Osoby zainteresowane zgłębieniem tematu odsyłam do strony [http://jenkins-ci.org/](http://jenkins-ci.org/).

mojk
