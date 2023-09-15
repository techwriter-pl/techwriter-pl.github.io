---
title: 'Dokumentacja API – Część 1: Definicja i rodzaje API'
authors: admin
date: '2018-10-08'
tags:
  - 'dobre-praktyki'
  - 'przyklady'
  - 'warsztat'
  - 'api'
  - 'dokumentacja'
coverImage: 'ApiMosaic.gif'
---

Z otwartymi ramionami witamy na naszych stronach nowego autora a wraz z nim
nowy, jakże aktualny temat! Marcin przygotował dla Was artykuł otwierający cykl
i obiecał, że na tym nie koniec!

<!--truncate-->

### O autorze

Jako absolwent anglistyki, **Marcin Pierzchała** zaczynał swoją karierę jako
tłumacz języka angielskiego. Po sześciu latach przeszedł jednak na techniczną
stronę komunikacji, dołączając do zespołu Dassault Systèmes, gdzie nadal
pracuje. W zawodzie dokumentalisty najbardziej zajmują go aspekty techniczne,
takie jak automatyzacja i rozwój narzędzi na potrzeby zespołu. Ze względu na
zainteresowanie programowaniem Marcin specjalizuje się w dokumentacji API, która
łączy pracę dokumentalisty z aspektami pracy programisty. Prowadzi także
szkolenia w tym zakresie. Po godzinach podróżuje, robi zdjęcia i realizuje
amatorskie projekty z użyciem Arduino.

Z radością oddajemy mu głos:

### Dokumentacja API – Część 1: Definicja i rodzaje API

Podręczniki użytkownika, online helps czy release notes to rodzaje dokumentacji,
które chyba każdy technical writer zna znakomicie. Zadomowiły się one na dobre
na firmowych serwerach i w świadomości użytkowników. Ostatnio jednak w branży
sygnalizuje się coraz większe zapotrzebowanie także na inne rodzaje
dokumentacji, między innymi dokumentację API, którą chciałbym się tutaj zająć.

Ze względu na swój specyficzny, wysoce techniczny charakter, a także na
docelowych użytkowników takiej dokumentacji, czyli przede wszystkim programistów
i amatorów programowania, obowiązek dokumentowania API najczęściej przypada
właśnie piszącym kod. Same narzędzia używane do tworzenia dokumentacji API,
które dodatkowo są zwykle wplecione w środowiska programistyczne jako integralna
część procesu dostarczania oprogramowania, wymagają sporej wiedzy technicznej od
osób, które się nimi posługują.

Czy to wszystko oznacza, że dokumentacja API jest wyłącznie domeną deweloperów?
Absolutnie nie! Umiejętność pisania kodu nie jest konieczna, aby uczestniczyć w
procesie tworzenia dokumentacji API, a potrzebne narzędzia nie są aż takie
trudne do opanowania. Piszę “uczestniczyć”, ponieważ nawet najbardziej
technicznie rozwinięty dokumentalista będzie musiał polegać na wkładzie
dostarczonym przez osoby, które zaprojektowały dokumentowaną funkcjonalność.
Programista pisze kod i “okrasza” go odpowiednimi komentarzami, a dokumentalista
wyciąga z komentarzy odpowiednie informacje, redaguje, a następnie publikuje w
formie dokumentacji API. Taka współpraca pozwala stworzyć dokumentację, która
jest nie tylko technicznie poprawna, ale także czytelna, spójna i zrozumiała.

Niniejszy artykuł rozpoczyna cykl, w którym nakreślę główne wyzwania związane z
dokumentacją API, rolę technical writera w procesie jej tworzenia, a także
dostępne narzędzia. Na początek odpowiem jednak na pytanie, które zapewne
nurtuje większość czytających – co to jest API?

### Czym jest API?

W dużym uproszczeniu mianem API (_Application Programming Interface_) można
określić zestaw rozwiązań, dzięki którym dwie aplikacje mogą porozumiewać się ze
sobą. Taki interfejs programistyczny udostępnia “punkty zaczepienia”, dzięki
którym inne aplikacje i usługi mogą korzystać z jakiegoś przewidzianego przez
programistę zakresu funkcjonalności aplikacji wystawiającej API. Brzmi
skomplikowanie? Sięgnijmy po konkretny przykład.

Chyba każdy z nas korzysta regularnie z Google Maps lub odpowiednika tej usługi.
Sięgamy po nią, gdy chcemy się dowiedzieć, gdzie w pobliżu można dobrze zjeść,
jak najlepiej dojechać w dane miejsce, czy też zorientować się w nieznanym przez
nas mieście.

<iframe style={{border: 2}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJX4B9qBtbFkcR4hg5zRO0-V4&key=AIzaSyAmW63A0BsrstGLvhXXn-kbowRdGJPSlYM" width={500} height={350} frameBorder={1} />

Na stronach internetowych knajp można znaleźć małe mapki, które pokazują
lokalizację lokalu, jego oceny i np. obszar, w którym restauracja oferuje
dostawę jedzenia. Zastanawialiście się kiedyś, skąd biorą się te mapki?
Odpowiedź jest prosta. Google udostępnia szereg API umożliwiających korzystanie
z funkcjonalności map przez twórców stron internetowych.

Dla przykładu, aby otrzymać mapę danego miejsca, wystarczy do takiego API wysłać
następujące żądanie (_request_) HTTP:

https://www.google.com/maps/embed/v1/place?q=place\_id:ChIJ0RhONcBEFkcRv4pHdrW2a7Q&key=1234

Spróbujmy je rozłożyć na czynniki pierwsze:

- https://www.google.com/maps/embed/v1/ to bazowy adres URL (_base URL_), czyli
  część wspólna dla każdego żądania, jakie wysyłamy do danego API.
- /place to tzw. _endpoint_, czyli punkt dostępowy. Większość API oferuje szereg
  różnych punktów dostępowych odpowiadających różnym zasobom. W wypadku
  omawianego Google Maps API inne możliwe endpointy to np. /search (zwracający
  wyniki wyszukiwania dla danego obszaru), /directions (wytyczający trasę z
  punktu A do punktu B), czy /streetview (pokazujący widok z poziomu ulicy).
- Symbol “?” sygnalizuje początek _query string_, czyli łańcucha zapytania. Po
  nim następuje szereg parametrów. Składające się z nazwy (klucza) i wartości w
  formacie “klucz=wartość”  parametry oddzielane są od siebie znakiem “&”.
  Wymagane parametry zależą od użytego _endpointu_ i powinny być starannie
  opisane w dokumentacji.
- q=place*id:\_ChIJX4B9qBtbFkcR4hg5zRO0-V4* to parametr określający
  identyfikator miejsca – w naszym przykładzie jest to Dworzec Kraków Główny
  (każde miejsce posiada unikalny identyfikator, dzięki czemu można odróżnić
  miejsca noszące taką samą nazwę).
- key=1234 to parametr zawierający unikalny klucz, który identyfikuje stronę
  internetową lub aplikację wołającą API. W większości przypadków klucze do
  publicznych API wydawane są “od ręki” po założeniu konta deweloperskiego. Jest
  to jeden z kilku możliwych sposobów ograniczenia dostępu do API.

Żądania kierowane do API mogą być oczywiście znacznie bardziej rozbudowane. Na
przykład gdy konieczne jest przekazanie lub odebranie dużych ilości danych, dane
te zamieszcza się nie w ścieżce URL jak powyżej, lecz w ciele (_body_)
wiadomości. Dodatkowo stosuje się nagłówki (_headers_) sygnalizujące np. format
przesyłanych danych (JSON, XML) bądź określające inne aspekty relacji między
klientem, czyli aplikacją wołającą API, a podmiotem udostępniającym API.

### Rodzaje API

Interfejs programistyczny Google Maps to przykład tak zwanego web API, czyli
takiego API, w którym do komunikacji pomiędzy aplikacjami (tutaj przez aplikację
rozumiemy stronę internetową) wykorzystywany jest protokół HTTP. Niemal każda
duża organizacja udostępnia jakieś API tego rodzaju. W obszernym rejestrze
prowadzonym przez serwis
[ProgrammableWeb](https://www.programmableweb.com/category/all/apis) znajdziemy
nie tylko przedstawicieli mediów społecznościowych, takich jak Facebook czy
Twitter, portali aukcyjnych (eBay, Allegro), ale też masę instytucji rządowych i
badawczych (NASA), które za darmo bądź odpłatnie umożliwiają użytkownikom dostęp
do swoich zasobów danych za pośrednictwem web API. Tak niezwykłą popularność
webowe API zawdzięczają swojej dużej elastyczności i uniwersalnemu formatowi,
bowiem protokół HTTP nie jest przywiązany do jednego systemu operacyjnego czy
języka programowania.

![](images/api.png)

Źródło: [https://xkcd.com/](https://xkcd.com/)

Sytuacja ma się zupełnie inaczej w przypadku “natywnych” API. Przez natywne
interfejsy programistyczne można rozumieć biblioteki kodu, które ułatwiają
programiście wykonanie pewnych zadań. Na przykład pisząc aplikację dla
środowiska Windows, deweloper nie musi bawić się w niskopoziomowe programowanie
takich podstawowych funkcjonalności jak okienka, menu kontekstowe czy okna
dialogowe, ponieważ służą temu odpowiednie biblioteki systemowe. Innym
przykładem natywnego API może być popularna biblioteka jQuery, która umożliwia
programowanie w języku JavaScript w wygodny i przejrzysty sposób. Jeżeli chodzi
o potrzeby dokumentacyjne, natywne API wymagają zupełnie innego podejścia i
zestawu narzędzi. W związku z tym w niniejszym cyklu skupię się wyłącznie na
webowych API.

W kolejnym odcinku przyjrzymy się narzędziom przydatnym podczas dokumentowania
API oraz odpowiemy na pytanie “to HAT or not to HAT?”.
