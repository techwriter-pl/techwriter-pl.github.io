---
title: "Kilka pytań do - część 2"
authors: admin
date: "2015-02-05"
tags:
  - "warsztat"
  - "wywiady"
  - "spolecznosc"
  - "wywiad"
coverImage: "HIS.jpg"
---

Przed Wami kolejny wywiad i kolejny potencjalny kolega na całe życie - Marcin -
cztery lata w zawodzie, zna wiele narzędzi i nie zrzędzi. Zapraszamy do lektury.

<!--truncate-->

#### Jak długo pracujesz jako Tech Writer?

Ponad 4 lata.

#### W jaki sposób zostałeś Tech Writerem?

Firma zaczęła rosnąć i kierownik zdał sobie sprawę z tego, że ktoś musi zadbać o
to, aby wiedza była dostepna poza jirą/bugzillą i umysłami programistów.
Zatrudnił mnie jako wsparciowca/qa/TW. Odrabiałem lekcje z DITA, czytałem
literaturę i praktykowałem. Myślę, że potrzebował też cerbera do pilnowania
jakości dokumentacji. Ludzie często tworzą dokumenty które doskonale
odzwierciedlają ich wiedzę, ale nijak nadają się do czerpania z nich informacji.

#### Czy możesz opowiedzieć coś o swojej firmie i zespole w którym pracujesz?

Firma zajmuje się produkcją systemów HIS, a zespół jest odpowiedzialny za jeden
z modułów z których ów HIS się składa.

#### W jakis sposób jest zorganizowana praca Twoja i Twojego zespołu?

Wypracowaliśmy następującą metodologię: Każda funkcjonalność wniesiona do
aplikacji musi spełniać DoD (definition of done), której część stanowią punkty
„kontrybucja do release notes” i „kontrybucja do instrukcji użytkownika”. Gdy
programista dodaje cokolwiek do któregokolwiek z tych miejsc otrzymuję
notyfikację mailową z naszej platformy dokumentacyjnej, obecnie Confluence. Mogę
wtedy czuwać nad jakością całości. Rozwiązanie to ma kilka zalet:

- Programista utrzymuje więc wiedzę o większej części aplikacji - Często zdarza
  się, że ludzie pracujący z kodem mają blade pojęcie o całości aplikacji i
  perspektywie użytkownika. To podejście pozwala nam to zwalczyć.
- Testowanie – aby dodać coś do instrukcji często należy wyklikać określony już
  w dokumentacji scenariusz. Programista tworzący np. screena do dokumentacji
  musi najpierw wyklikać sytuację już na nim widoczną, która często jest
  zaawansowana.
- Wiedza nie ucieka – historyjki, epiki itd. są piękne, ale często opisane
  powierzchownie, a dodatkowo w czasie pracy nad nimi ewoluują. Pod koniec tylko
  programista i osoba akceptująca historyjkę ma pojęcie co właściwie zaszło,
  jakie obejścia, workarounds i tempfixes zastosowano. Tylko oni mogą je dodać
  do dokumentacji, gdyż w 9 na 10 przypadków w historyjce nie wspomina się o
  tym.

#### Jakich narzędzi używasz i co o nich sądzisz?

Obecnie jira, confluence – jeżeli coś wyszło od Atlassiana to jest to dobre.
Nowszy Confluence (bodaj 4.0 i wyżej) stracił lubiany przez wszystkich wiki
markup editor i pozostała tam tylko htmlowa wersja MsWorda która zachowuje się
czasem dziwnie. Na szczęście jest to Atlassian i istnieje plugin który pozwala
zobaczyć kod źródłowy strony i poprawić wszelkie błędy. Kiedyś bugzilla i
sharepoint – zacne narzędzia, trzeba jednak dobrze rozplanować ich uzycie,
inaczej szybko rozprzestrzeni się w nich bałagan. Po prostu dobrze
odzwierciedlają to, co się z nimi robi. Wszelkiej maści wordy itd. - tak też
bywało. Chyba nie muszę niczego przedstawiać. Z ciekawostek: Fireshot – fajny
plugin do robienia zrzutów ekranu aplikacji webowych. Ma spore możliwości i jest
darmowy.

#### W jaki sposób zdobywasz informacje potrzebne do tworzenia dokumentacji?

Poza tym co napisałem w punkcie 4? Dema. Sprint demo, iteration review itd. No i
autorzy. Trzeba dobrze żyć z ludźmi aby miło się od nich wiedzę zdobywało 😊 No
i jest ocztywiście niezawodne QA – zarówno ludzie z tego działu jak i praca dla
niego to najlepszy psosób aby dowiedzieć się jak działa aplikacja. Zawsze
powtarzam, że aby kogoś nowego wdrożyć dobrze dać mu kilka bugów do weryfikacji.
A i sam przetestuję kilka funkcjonalności na sprint aby wiedzieć co w trawie
piszczy.

#### Jakie dokumenty dostarczasz, w jakiej postaci, w jakim języku/językach i jak są one publikowane?

Co: user manuale, bugi, raporty z testów i dokumentację techniczną aplikacji
oraz narzędzi programistów. Czym: Confluence – word-like editor połączony z
edytorem kodu źródłowego. Jira - narządzie do raportowania testów. Tutaj nadal
króluje wiki markup. Testlink – testowanie historyjek wymaga tworzenie testcases
które pomogą późniejszym użytkownikom ocenić, czy aplikacja działa u nich
poprawnie. Teamviewer – bo czasem trzeba coś komuś pokazać. Skype do
telekonferencji. Tortoise SVN do pracy z aplikacją.

Wszystko w EN.

#### Jakie produkty opisujesz?

Obecnie wyłącznie aplikację tworzoną przez moją firmę. Dawniej bywało inaczej,
teraz wystarczy mi to, co robię na codzień.

#### Jakie są największe wyzwania, które napotykasz w swojej pracy?

Dwa wyzwania:

1. Rozmyta odpowiedzialność - kiedy 6 tworzy całość aplikacji to każdemu zależy
   na stworzeniu czegoś dobrego. Gdy tych osób jest 360 to każdy dba o swój
   kawałek kodu i bywa, że produkt finalny nie trzyma się kupy a każdy twierdzi,
   że wykonał swoją robotę dobrze.
2. Zdobywanie pomocy od programistów – im więcej nas pracuje tym więcej wysiłku
   powinniśmy zainwestować w to, aby nasza wiedza była jak najłatwiej
   przyswajalna i dostępna. Przekonanie do tego programistów nie jest na tyle
   trudne co wywalczenie czasu na to u ich przełożonych. A stąd tylko krok do
   chaosu w firmie.

#### Co najbardziej lubisz w pracy Tech Writera?

To, że uczy jak się komunikować. Jak przekazać coś drugiej osobie aby zrozumiała
co mamy na myśli. Każdy powinien to umieć.

#### Co byś radził osobom, które chciałyby zacząć swoją przygodę z pisaniem dokumentacji?

Weź do ręki książkę kucharską i rzuć okiem na pierwszy przepis z brzegu. Tak ma
wyglądać dobra instrukcja: jeden cel – „Murzynek z Jagodami”, jak się
przygotować, co zrobić krok po kroku i oczekiwany wynik końcowy wraz z
przykładami.

Jeśli chcecie skontakować się z Marcinem to możecie napisać do niego
bezpośrednio na adres skrzynkatofixsa(małpa)gmail.com albo za naszym
pośrednictwem - komentarze poniżej lub adres
[kontakt@techwriter.pl](mailto:kontakt@techwriter.pl) - gorąco zachęcamy!
