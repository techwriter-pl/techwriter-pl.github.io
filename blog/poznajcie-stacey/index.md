---
title: 'Poznajcie Stacey'
authors: admin
date: '2014-04-08'
tags:
  - 'narzędzia'
  - 'warsztat'
  - 'zarządzanie-treścią'
coverImage: 'stacey.png'
---

Kim jest Stacey? To lekki system zarządzania treścią lub jak kto woli CMS. W
kręgach branżowych pozostaje w cieniu swoich sławnych kolegów, takich jak
WordPress czy Drupal. Mało kto ją zauważa. Czy słusznie?

<!--truncate-->

Stacey nie jest znana prawdopodobnie dlatego, że jest prosta, niektórzy
powiedzieliby, że wręcz prymitywna. W jej wnętrzu nie kryje się żadna baza
danych ani kolorowy interfejs użytkownika. Całe jej funkcjonowanie opiera się na
folderach i plikach. Ale czy to źle? Zależy od potrzeb. Dla mnie właśnie to była
zaleta.

Stacey poznałem niedawno. Potrzebowałem kogoś kto wykona dla mnie pewne zadanie.
Chodziło o stronę, która wyświetlałaby paczki dokumentacji - ich nazwy, linki do
przeglądania i ściągania oraz informacje o tym co się w nich znajduje.
Dostarczaniem treści dla strony oraz paczek miał się zająć mój dobry kolega
[Jenkins](http://techwriter.pl/jenkins-opis-narzedzia/ 'Jenkins'), z którym
współpracuję od jakiegoś czasu.

Najpierw trafiłem na Stacey 2.3.0. Niełatwo było ją znaleźć. Ktoś kiedyś o niej
wspomniał przy okazji innych lekkich CMSów. Wzbudziła moją ciekawość. Udało mi
się ustalić, że mieszka na [www.staceyapp.com](http://www.staceyapp.com) .
Zaczęliśmy się bliżej poznawać. Wszystko szło w dobrym kierunku. Zrozumiałem jak
działa, poznałem jej potrzeby. Każdą stronę przechowywała w folderze, który
posiadał plik tekstowy z odpowiednio ustrukturyzowaną treścią. Dla świata
zewnętrznego ta treść ujawniała się za pomocą szablonów, które nie były zbyt
urodziwe. Ale przecież liczy się wnętrze, prawda?

Po niedługim czasie okazało, że Stacey ma młodszą siostrę, która ma na imię 3.0.
Bardzo szybko okazało się, że pomimo młodszego wieku jest jednak bardziej
dojrzała. Bez problemu udało nam się znaleźć wspólny język. Zachowałem się jak
świnia i porzuciłem Stacey 2.3.0. Jednak nie żałuję tej decyzji. Co prawda
Stacey 3.0 jest równie nieurodziwa jak jej starsza siostra, ale ma bogatsze
wnętrze.

Wszystko pięknie, ale jak w ogóle rozpocząć znajomość z tą tajemniczą istotą? Po
pierwsze, trzeba złożyć jej wizytę na
[https://github.com/kolber/stacey](https://github.com/kolber/stacey) Po drugie,
trzeba ją pobrać i umieścić na swoim serwerze WWW. Może brzmi brutalnie, ale tak
to działa. Żadnego czarowania w postaci instalatora, po prostu kopiujemy ją jaka
jest.

Pierwsze koty za płoty, więc możemy przejść do bliższego zapoznania. Zacznijmy
od katalogu **content**. Tam Stacey przechowuje swoje wszystkie strony, zarówno
te dobre jak i te złe. Każda strona to katalog, którego nazwa musi zaczynać się
od jakiejś cyfry. Na tej podstawie Stacey decyduje w jakiej kolejności pokazuje
swoje strony. Po cyfrze powinna znaleźć się kropka, a następnie już właściwa
nazwa strony. Każdy katalog strony musi zawierać plik o rozszerzeniu YML. W tym
pliku znajduje się treść strony, zapisana w języku
[YAML](http://www.yaml.org 'YAML'). Nazwa pliku musi zawierać nazwę szablonu, za
pomocą którego zostanie wygenerowana strona. Co poradzić, takie ma fanaberie.
Swoje wdzięki i uroki w postaci szablonów, Stacey ukrywa w
katalogu **templates**. Szablony korzystają z silnika
[Twig](http://twig.sensiolabs.org 'Twig'). Jak już wspomniałem, Stacey nie
została obdarzona zbytnią urodą, dlatego też owe szablony pozostawiają wiele do
życzenia. Cóż, taki jej urok (lub jego brak).

Szkoda mi było bidulki. Zacząłem się martwić, że zostanie sama jak palec z
powodu swoich nikłych walorów estetycznych. Jednak na horyzoncie pojawił się
pewien osobnik gotowy ją wziąć pod swoje opiekuńcze skrzydła. Na imię mu
[Bootstrap](http://getbootstrap.com/ 'Bootstrap'). Przedstawił się jako
platforma do budowy stron. Na początku byłem sceptyczny. Taki elegancik, ładny,
zwiewny i powabny. Mówił, że łatwo się z nim dogadać, że też jest prosty, więc
łatwo znajdą wspólny język. Dałem mu szansę i poznałem go ze Stacey. Od razu
przypadli sobie do gustu, dlatego bardzo szybko pozbyła się starych szablonów.
Bootstrap wniósł w jej życie piękne style CSS okraszone odrobiną JavaScriptu.
Jednak nie przytłoczył jej nadmiarem piękna, do którego nie była przyzwyczajona.
Poznałem ich z Jenkinsem. Wygląda na to, że znajomość będzie się rozwijać,
chociaż muszą się jeszcze "dotrzeć".

Stacey i Bootstrap są chętni do pracy. Nie mają dużych wymagań, więc jeśli macie
wolny kąt na serwerze WWW, to możecie ich tam zaprosić. Kto wie, może zostaną na
dłużej 😊
