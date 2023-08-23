---
title: "Noty wydania (Release Notes) - co, jak, dla kogo?"
date: "2017-06-14"
tags:
  - "przyklady"
  - "warsztat"
  - "praca"
  - "release-notes"
coverImage: "adult-2242164_640.jpg"
---

Dość dawno temu [pisaliśmy](http://techwriter.pl/noty-wydania/) pokrótce o
notach wydania (release notes). Dzisiaj przyjrzymy się im trochę bliżej.

Zapewne każdy z Was miał okazję zetknąć się z notami wydania w takiej czy innej
formie. I zapewne w wielu sytuacjach nie zwróciliście na nie szczególnej uwagi.
Aktualizując aplikacje na swoim telefonie, niekoniecznie czujemy potrzebę
zapoznawanania się ze wszystkimi usprawnieniami, jakie pojawiają się w nowej
wersji. Jednak jeśli chodzi o aplikacje dla biznesu sytuacja jest zgoła
odmienna.

## Czym są noty wydania?

Według [ITCQF](http://itcqf.org/), noty wydania są jednym z typów dokumentacji
produktu. Ich celem jest przedstawienie użytkownikom zarysu tego co się zmieniło
w danej wersji. Noty wydania nie opisują szczegółowo funkcji produktu tak jak,
na przykład, podręczniki użytkownika.

## Komu i do czego mogą być potrzebne?

Noty wydania mogą być pomocne dla:

- Administratorów systemu podczas podejmowania decyzji o tym, czy zaktualizować
  produkt
- Osób decyzyjnych podczas podejmowania decyzji o zakupie danej aplikacji,
  ponieważ mogą one nam dać odpowiedź na to, czy produkt spełni nasze wymagania.
- Tech Writerów podczas planowania i tworzenia innych rodzajów dokumentów, które
  zostaną dostarczone wraz z nową wersją produktu
- Testerów przy opracowywaniu scenariuszy testowych.

## W jakiej formie są dostarczane?

Odpowiedź jest krótka - w prostej. W związku z tym, że noty wydania mają
zazwyczaj kilka stron są one często zintegrowane z produktem lub dostarczane
jako pojedynczy plik w formacie TXT, HTML lub PDF.

## Co zawierają?

Zazwyczaj noty wydania opisują nowe funkcje naszego produktu, usprawnienia,
naprawione problemy (bug fixes) oraz znane ograniczenia ("known issues").
Oczywiście nie oznacza to, że powinniśmy zawierać w nich wszystko, co znajdziemy
w naszym systemie do obsługi zgłoszeń ("issue tracking system"). To, co powinno
się znaleźć w naszych notach wydania jest po części decyzją biznesową czy, jak
kto woli, marketingową. Tutaj z pomocą może nam przyjść Menedżer Produktu lub
inna osoba odpowiedzialna za kontakt z klientem.

Na pewno nie chcemy dzielić się z klientami informacją o jakimś poważnym
problemie w naszym produkcie, który sami wykryliśmy i naprawiliśmy. Jeśli
istnieje duże prawdopodobieństwo, że klient sam natknąłby się na ten problem,
możemy proaktywnie umieścić w naszych notach informację, że go naprawiliśmy.

Na pewno powinny się w nich znaleźć problemy, które zgłosili nam klienci. Jeśli
to możliwe, przy każdym problemie opisanym w notach wydania powinniśmy umieścić
numer referencyjny powiązanego z nim zgłoszenia. Dzięki temu nasz klient będzie
w stanie łatwo sprawdzić, czy zgłoszony przez niego problem został naprawiony w
danej wersji produktu.

## Struktura

Każdy ma swój pomysł na ten rodzaj dokumentacji, ale możemy przyjąć, że ogólnie
noty wydania mają taką strukturę:

1. Opis nowych funkcji. Często szczegółowy opis poszczególnych funkcji
   poprzedzony jest krótkim tekstem reklamującym najważniejsze dodatki do nowej
   wersji ("features marketing").
2. Opis wprowadzonych usprawnień.
3. Opis naprawionych problemów.
4. Opis znanych ograniczeń.

## Jak je tworzyć?

Sposób w jaki tworzymy noty wydania często zależy od tego, jak rozbudowany jest
nasz produkt, ile zgłoszeń obsługujemy oraz jak często wypuszczamy nową wersję.

Jeśli pracujemy w małej firmie, która obsługuje stosunkowo niewielką liczbę
klientów i wypuszcza nową wersję oprogramowania raz do roku, istnieje szansa, że
będziemy mogli tworzyć noty wydania ręcznie. Wtedy możemy posłużyć się jakimś
ogólnodostępnym szablonem, np.
[szablonem w formacie Word od TechWhirl](https://techwhirl.com/release-notes-template/).

W przypadku większej firmy produkującej bardziej rozbudowany produkt, który
aktualizowany jest kilka razy do roku, możemy pomyśleć o wdrożeniu jakiejś
automatyzacji procesu tworzenia not wydania. Zapewne w takiej firmie korzysta
się z jakiegoś systemu do obsługi zgłoszeń, jak
[JIRA](https://www.atlassian.com/software/jira) czy
[Team Foundation Server (TFS)](https://www.visualstudio.com/tfs/). Do formularza
zgłoszenia możemy dodać specjalne pola, które będą nam służyły do wpisywania
tekstu, który później trafi do not wydania. W najprostszej formie, mogą to być
dwa pola: pierwsze do ustawienia czy noty wydania są wymagane dla tego
zgłoszenia, a drugie do wpisania tekstu takiej noty, jeśli jest ona potrzebna.
Można też dodać więcej pól do wpisania tekstu i dokładniej określić, co powinno
się w nich znaleźć. Na przykład: podsumowanie problemu, przyczyna, okoliczności
w jakich występuje, rozwiązanie. Następnie możemy użyć raportu lub zapytania do
bazy danych, żeby wyciągnąć z naszego systemu informacje z tych dodatkowych pól.
Jeśli dołożymy do tego szablon (np. stworzony w XSLT), który wtłoczy te
informacje do odpowiedniego formatu, to mamy "linię produkcyjną", która
dostarczy nam gotowy dokument. Możemy też skorzystać z gotowych wtyczek, takich
jak
[Automated Release Notes for JIRA](https://marketplace.atlassian.com/plugins/amoeboids.releasenotes/cloud/overview)
czy [GitReleaseNotes](https://github.com/GitTools/GitReleaseNotes). Pod
[tym linkiem](http://blog.viacom.tech/2017/02/27/release-notes-automation/)
znajdziecie propozycję automatyzacji procesu dostarczania release notes. Może
będzie dla Was inspiracją.

Oczywiście dodatkowe pola w systemie do obsługi zgłoszeń to tylko początek.
Wszystkie te pola nie będą miały dla nas żadnej wartości, jeśli będą puste.
Dlatego kolejnym, bardzo ważnym krokiem, jest wprowadzenie procesu, który
określi kto, kiedy i w jaki sposób powinien te pola wypełniać. Możemy ustalić,
że wypełniają je programiści, którzy rozwiązują problemy, a następnie zgłoszenie
trafia do Tech Writera, który sprawdza wprowadzone informacje, edytuje je według
potrzeby i dopiero wtedy trafiają one do publikacji.

## Przykłady

Na koniec mamy dla Was kilka przykładów:

- [CentOS](https://wiki.centos.org/Manuals/ReleaseNotes/CentOS7)
- [Atlassian Confluence](https://confluence.atlassian.com/doc/confluence-6-2-release-notes-894219485.html)
- [Adobe Acrobat DC](http://www.adobe.com/devnet-docs/acrobatetk/tools/ReleaseNotes/DC/dccontinuousapril2017.html)
- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/53.0/releasenotes/)
- [Elastic Search](https://www.elastic.co/guide/en/elasticsearch/reference/current/release-notes-5.4.1.html)
- [MySQL](https://dev.mysql.com/doc/relnotes/mysql/5.6/en/news-5-6-36.html)

Jeśli chcecie dowiedzieć się więcej na temat not wydania, polecamy
artykuł [Let’s All Appreciate These Great Release Notes Together](https://www.prodpad.com/blog/writing-release-notes/).
