---
title: "Dekalog Tech Writera"
authors: mojk
date: "2014-11-12"
tags:
  - "dobre-praktyki"
  - "warsztat"
  - "instrukcje"
  - "manuale"
  - "on-line-help"
  - "praca"
coverImage: "Homer-Simpson-commandments.jpg"
---

[Tom Johnson](http://idratherbewriting.com/aboutme/) jakiś czas temu pokusił się
o stworzenie listy dziesięciu zasad, których według niego powinniśmy się trzymać
kiedy tworzymy dokumentację. Poniżej prezentujemy streszczenie tego dekalogu
oraz nasze krótkie przemyślenia na jego temat. Oryginalny artykuł dostępny jest
[tutaj](http://idratherbewriting.com/2014/06/20/10-technical-writing-principles-to-live-by/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+TomJohnson+%28I%27d+Rather+Be+Writing%29).

## Pierwsze - testuj swoje instrukcje

Ciężko ocenić wartość stworzonej instrukcji bez przejścia samemu przez zadania,
które opisuje. Wydaje się to oczywiste i bardzo często nie stanowi to problemu w
przypadku opisywania interfejsu graficznego. Jednak czasami nie tak łatwo
sprawdzić samemu to co napisaliśmy, ponieważ może to wymagać skonfigurowania
jakiegoś specjalnego środowiska lub bardziej zaawansowanej wiedzy. Niekiedy
ograniczenia mogą być też finansowe - tak jak w przypadku tworzenia instrukcji
dla sprzętu wartego miliony dolarów, którego nie możemy użyć. Od razu widać
kiedy autor instrukcji stworzył ją na podstawie informacji, które otrzymał od
kogoś innego, a kiedy na podstawie osobistego doświadczenia, dlatego zawsze
starajmy się sprawdzać to co napisaliśmy.

## Drugie - współpracuj z działem jakości

Testerzy to nasi najlepsi przyjaciele, bo nikt tak jak oni nie zna całego
systemu. Poza tym mają oni środowiska testowe dla oprogramowania z gotowymi
przypadkami testowymi. Kiedy piszemy dokumentację dla API może być to dla nas
nieoceniona pomoc, ponieważ często testerzy mają gotowe przykłady wywołania
funkcji, dzięki czemu jest nam łatwiej. Należy jednak pamiętać, że testerzy mogą
nie mieć wiedzy na temat tego jak dana funkcja systemu będzie wykorzystywana,
ponieważ ich głównym zadaniem jest sprawdzenie czy coś działa czy nie. Takie
informacje musimy już wyciągać od manadżerów produktu.

## Trzecie - nie przeceniaj poziomu wiedzy użytkowników

Programiści bardzo często zakładają, że użytkownicy posiadają większą wiedzę na
temat stosowanej przez naszą firmę technologii niż w rzeczywistości. Prawda jest
taka, że użytkownicy potrzebują czasami "prowadzenia za rękę", prostych
instrukcji i próbek kodu, które mogą skopiować. Zawsze powinniśmy zakładać, że
użytkownicy wiedzą zdecydowanie mniej niż się programistom wydaje. Lepiej jest
napisać dokumentację, która jest zbyt dokładna niż niejasna i naszpikowana
niezrozumiałymi skrótami.

## Czwarte - słuchaj opinii użytkowników

Nie da się ocenić prawdziwej wartości dokumentacji bez opinii użytkowników. To
czy instrukcje są zrozumiałe i czy spełniają oczekiwania ludzi, którzy je
czytają to nic więcej jak tylko zgadywanie bez opinii rzeczywistych
użytkowników.

Żeby uwzględnić uwagi, potrzebny jest jakiś mechanizm umożliwiający interakcję i
ocenę wartości dokumentacji. Nasze doświadczenie to za mało. Nawet jeśli sami
przeszliśmy przez wszystkie instrukcje i okazały się one poprawne, nie oznacza
to, że dokumentacja nie ma sporych braków.

## Piąte - zawsze miej na względzie pracę grupową

Nawet jeśli obecnie nie potrzebujemy rozwiązania, które umożliwia tworzenie
dokumentacji przez grupę osób, najpewniej w którymś momencie pojawi się taka
potrzeba. Założenie, że jedna osoba, mająca jeden punkt widzenia jest w stanie
tworzyć dokumentację, która ma zastosowanie dla każdego w każdej sytuacji, na
wszystkich platformach i urządzeniach jest bardzo niepraktyczne.

Pomimo tego, że możemy być jedynymi dokumentalistami w pewnym momencie firma
może zatrudnić więcej takich osób lub włączyć w proces tworzenia dokumentacji
innych pracowników. W każdym przypadku, metoda tworzenia dokumentacji, która nie
pozwala na współpracę to na dłuższą metę kiepskie rozwiązanie.

## Szóste - skup się bardziej na treści niż formie

Łatwo się zatracić w konfiguracji narzędzi dotyczącej publikacji dokumentów.
Jednak w większości przypadków problemem jest treść a nie samo narzędzie. To czy
instrukcja przetrwa czy zginie zależy w głównej mierze od treści jaką ze sobą
niesie, a nie od jej wyglądu. Tak naprawdę narzędzia tylko w niewielkim stopniu
wpływają na to jak odbieramy dokumentację.

Oczywiście istnieją pewne standardy. Dokumentacja powinna mieć opcję wyszukwania
informacji, spis treści i innego tego typu elementy. Jednak jeśli to możliwe,
wybierzmy narzędzie, które nie wymaga poświęcania dużej ilości czasu na
konfigurację. Wybierzmy łatwą metodę, a zaoszczędzony czas poświęćmy na pisanie.

## Siódme - dodaj trochę grafiki

Żeby podnieść poziom atrakcyjności instrukcji, dodajmy do nich elementy
wizualne, takie jak diagramy, ilustracje czy opisane zrzuty ekranu. Dzięki temu
dodamy przeciwwagę dla tekstu oraz dodatkowy format, który może ułatwić
zrozumienie opisanych zagadnień. Czasami stworzenie grafiki jest czasochłonne,
ale wysiłek się opłaca.

Wiadomo, jeśli instrukcje są tłumaczone na inne języki albo jeśli skupiamy się
bardziej na próbkach kodu niż na grafice, możemy nie potrzebować dużej ilości
elementów wizualnych. Niemniej jednak starajmy się komunikować z użytkownikiem
wizualnie kiedy to tylko możliwe.

## Ósme - stosuj przykłady

Jeśli opisujemy coś skomplikowanego, najlepszym sposobem na wyjaśnienie jest
zazwyczaj podanie przykładu. Każdy przykład sprawia, że nasz opis jest bardziej
przejrzysty.

Jeśli dodamy trzy przykłady zamiast jednego, użytkownicy na pewno szybciej
załapią o co chodzi. Oczywiście nie wszystko da się oprzeć na przykładach, ale
pamiętajmy że jest to narzędzie, które umożliwia komunikowanie skomplikowanych
treści w zrozumiały sposób.

## Dziewiąte - nie przestawaj się uczyć

Szybki rozwój technologiczny powoduje, że uczenie się powinno być procesem
regularnym, który jest integralną częścią dnia każdego Tech Writera. Obecnie
mamy bardzo spore zasoby informacji dostępne online przez co proces uczenia się
jest dużo łatwiejszy.

Dokumentaliści, którzy przez kilka lat pracują z tymi samymi produktami mogą
ulec przekonaniu, że wiedzą już wystarczająco dużo na temat technologii. Praca w
różnych projektach, z różnymi platformami i językami daje możliwość bycia na
biężąco i nie powoduje "rdzewienia". Dokumentalista, który jest głównie pisarzem
i nie ma za dużej wiedzy technicznej z pewnością będzie miał większe trudności
ze znalezieniem pracy niż dokumentalista z dużą wiedzą techniczną. Jest to
szczególnie prawda w przypadku osób tworzących dokumentację dla programistów.

## Dziesiąte - dostarczaj dokumentację głównie w formacie strony internetowej

Za długo funkcjonujemy w "książkowym" sposobie myślenia. Jeśli skupimy się na
stronie internetowej jako naszym głównym formacie, wtedy będziemy w stanie pisać
w sposób odpowiedni do tego w jaki użytkownicy będą pracować z naszą treścią.

Pisanie na potrzeby takiego formatu, to pisanie stron, które zawierają kompletny
zestaw informacji potrzebny użytkownikom do osiągnięcia celu (podejście, które
Mark Baker nazywa ["Every page is page one"](http://everypageispageone.com/)),
wykorzystywanie elementów interaktywnych (takich jak wbudowane zakładki czy
filtry, które umożliwiają przełączanie się pomiędzy próbkami kodu w różnych
językach programowania), optymalizacja wyszukiwania pod kątem trafności wyników
(co może wymagać zastosowania metadanych lub dynamicznego filtrowania). Pisząc
na potrzeby drukowanych instrukcji, bardzo często nie korzystamy z możliwości
jakie daje nam strona internetowa.

Przedstawiony powyżej zestaw zasad to z pewnością dobre podsumowanie tego o czym
w swojej pracy powinien pamiętać każdy Technical Writer. Jeśi chodzi o pierwsze,
czwarte, siódme, ósme i dziewiąte "przykazanie", to w pełni się z nimi zgadzamy.
Jeśli to tylko możliwe, zawsze testujmy to co piszemy, uwzględniajmy uwagi
użytkowników dokumentacji, oczywiście z zachowaniem zdrowego rozsądku, stosujmy
elementy graficzne i przykłady oraz nieustannie zdobywajmy nową wiedzę. Bazując
na własnym doświadczeniu, potwierdzamy drugie "przykazanie". Testerzy to nie
tylko świetne źródło informacji, ale także nieoceniona pomoc w kwestiach
technicznych. Kiedy dokumentalista jest częścią zespołu testerów, tak jak to
bywa w mniejszych firmach gdzie jest tylko jeden Tech Writer, koledzy testerzy
często wspierają go w sytuacjach awaryjnych, gdzie nagle środowisko, na którym
sobie klikał przestaje działać. Wtedy można kontynuować pisanie, bo rozwiązaniem
problemu zajmie się ktoś inny. Punkt trzeci doskonale oddaje jeden z grzechów
programistów. Ale dokumentaliści też nie są święci. My z kolei miewamy tendencję
do przesady w drugą stronę, czyli do opisywania każdego najprostszego szczegółu,
przez co instrukcja jest bardzo zrozumiała, ale za to przesadnie długa i
miejscami irytująca dla użytkowników bardziej zaawansowanych. Trzeba znaleźć
złoty środek. Jeśli chodzi o piąte "przykazanie" to również należy tutaj
zachować zdrowy rozsądek. Nauczeni doświadczeniem wiemy, że małe firmy mają
przez kilka lat jednego Tech Writera, który ogarnia cały proces tworzenia
dokumentacji i nie ma potrzeby pracy grupowej. Oczywiście nawet w takim
przypadku warto mieć taką furtkę, ale wtedy trzeba się zastanowić jakie koszty
niesie ze sobą takie rozwiązanie. Tak jak głosi punkt szósty, treść jest
najważniejsza. Jednak pamiętajmy też, że ludzie ogólnie lubią przyjemne dla oka
rzeczy, dlatego może warto w luźniejszym momencie upiększyć trochę szablon
naszej dokumentacji. Tutaj dochodzimy do ostatniego "przykazania". Podsumujemy
go starym dobrym stwierdzeniem "to zależy". Zależy od tego dla kogo dostarczamy
dokumentację i jakie są wymagania takiego użytkownika. Niekiedy dokumentacja
jest wykorzystywana w warunkach gdzie lepiej się sprawdza forma drukowana. Każdy
z nas zapewne chce iść z duchem czasu, ale niestety nie zawsze ma taką
możliwość.

Może chcielibyście coś dopisać do listy Toma?
