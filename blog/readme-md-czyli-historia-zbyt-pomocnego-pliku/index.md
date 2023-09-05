---
title: "README.md, czyli historia zbyt pomocnego pliku"
authors: mojk
date: "2018-10-03"
tags:
  - "dobre-praktyki"
  - "przyklady"
  - "warsztat"
  - "dokumentacja"
  - "pomoc-uzytkownika"
coverImage: "key-2323278_640.jpg"
---

Kiedy tworzymy dokumentację przyświeca nam cel, żeby dostarczyć użytkownikowi
jak najdokładniejsze informacje.

<!--truncate-->

Chodzimy, pytamy, analizujemy jak działa produkt, żeby nasze instrukcje były
pomocne. Ale czy zastanawialiście się kiedyś czy Wasza dokumentacja nie zawiera
zbyt dużo szczegółów? Okazuje się, że istnieją przypadki kiedy dokumentacja jest
aż nadto dokładna i zawiera informacje, które mogą pozwolić osobom niepowołanym
uzyskać dostęp do zasobów naszej firmy. Sprawa jest poważna, dlatego też
poprosiliśmy eksperta od testowania bezpieczeństwa oprogramowania o wpis
gościnny na temat zagrożeń jakie może nieść dokumentacja.

## Kilka słów o autorze

[![](images/DSC_7675_fot_klaudyna_schubert-200x300.jpg)](http://techwriter.pl/wp-content/uploads/2018/10/DSC_7675_fot_klaudyna_schubert.jpg)Mateusz
Olejarka, starszy specjalista ds. bezpieczeństwa IT w krakowskiej firmie
[SecuRing](https://www.securing.pl). Zawodowo zajmuje się testowaniem
bezpieczeństwa aplikacji webowych oraz mobilnych. Wcześniej, stał po drugiej
stronie barykady. Jako programista brał udział w rozwoju i utrzymaniu platformy
klasy BPMS wdrożonej w wielu polskich instytucjach finansowych i
ubezpieczeniowych. Mateusz jest również trenerem mającym za sobą kilkadziesiąt
przeprowadzonych szkoleń związanych z tworzeniem i testowaniem bezpieczeństwa
oprogramowania. Prelegent na wielu krajowych i zagranicznych konferencjach.
Znajduje się na listach Hall of Fame firm takich jak: Adobe, Algolia, GM, Jet,
Netflix, Tesla, Twitter, Yahoo. Ma na swoim koncie wystąpienia na konferencjach
4Developers, Black Hat Asia, Code Europe, CONFidence, Hacktivity, NGSec,
Security Case Study, SEMAFOR, SkładQA, Testing Cup, TestWarez, TestWell oraz na
spotkaniach OWASP i KraQA. Jeśli chcecie się skontaktować z Mateuszem, to
możecie go znaleźć na [LinkedIn](https://www.linkedin.com/in/molejarka),
[Twitterze](https://twitter.com/@molejarka) i
[Medium](https://medium.com/@mateusz.olejarka).

## README.md, czyli historia zbyt pomocnego pliku

README.md to plik, który w założeniu ma pomagać. To pierwsze miejsce, do którego
zaglądamy jeśli chcemy wypróbować nowe narzędzie z serwisu
[GitHub](https://www.google.pl/search?q=inurl%3AREADME.md+site%3Agithub.com). W
takim właśnie celu powstał.

Czasami jednak takie pliki trafiają ze środowiska testowego do produkcyjnego bez
uprzedniego sprawdzenia czy nie zawierają poufnych informacji, które mogłyby
zagrozić bezpieczeństwu firmy. Jakiś czas temu trafiłem na plik README.md, który
był aż nadto pomocny. Zdecydowanie nie powinien być udostępniony publicznie.

Plik zaczynał się całkiem niewinnie:

The first thing you need is to install aws-cli, which is a simple command line
tool that provides a client interface to AWS services. You can find it here:
http://docs.aws.amazon.com/cli/latest/userguide/installing.html Once installed,
you will need to provide some information to authenticate and be able to upload
files to the bucket.

Wszystko OK, po prostu jeden programista pomagający drugiemu. Zainstaluj to i
poczytaj sobie tamto.

SANDBOX AWS Access Key ID: A\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*A AWS Secret
Access Key: P\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*G Default region name: us-east-1
Default output format \[None\]: I have created a testing bucket for you in our
sandbox environment, the bucket URI is
s3://\*\*\*\*\*\*\*\*\*\*\*-sandbox.\*\*\*\*\*\*\*\*.com And to get you started
with service, you can simply sync all the content of a specific folder to the S3
bucket by executing: aws s3 sync/path/to/your/folder
s3://\*\*\*\*\*\*\*\*\*\*\*-sandbox.\*\*\*\*\*\*\*\*.com

Zaczęło się robić coraz ciekawiej! Miałem tu bucket S3 Amazon i
najprawdopodobniej działające klucze. Cytując
[dokumentację Amazona](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html):

> Access keys consist of an access key ID and secret access key, which are used
> to sign programmatic requests that you make to AWS. If you don’t have access
> keys, you can create them from the AWS Management Console.

Bucket sandbox wyglądał interesująco, miałem też klucze... albo i nie. Moja
radość była przedwczesna. Bucket jednak nie istniał, a klucze nie działały. Więc
czytałem dalej.

PROD aws configure AWS Access Key ID: A\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*Q
Secret Access Key: k\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*u Default region name:
us-east-1 Default output format \[None\]: aws s3 sync ~/data/AWS/
s3://\*\*\*\*\*\*\*\*\*\*\*.com/ new path aws s3 sync ~/data/WORK/AWS/
s3://\*\*\*\*\*\*\*\*\*\*\*.com/ aws s3 sync ~/data/AWS/
s3://\*\*\*\*\*\*\*\*\*\*\*.com/

Było lepiej niż myślałem. Już nie był to sandbox tylko środowisko produkcyjne. I
jeszcze jeden cytat z pliku:

Please go through this documentation, it is a great way to start with AWS S3:
http://docs.aws.amazon.com/cli/latest/reference/s3/index.html If you have any
questions, please don't hesitate contacting me, I am available on Slack as well
if you needed some instant responses.

Zgodnie z instrukcją pobrałem i skonfigurowałem aws-cli. W celu sprawdzenia czy
klucze działają, wgrałem testowy plik:

aws configure AWS Access Key ID: A\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*Q Secret
Access Key: k\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*u Default region name: us-east-1
Default output format \[None\]: aws s3 cp .\\\\\*\*\*\*\*\*\*\*.txt
s3://\*\*\*\*\*\*\*\*\*\*\*.com/\*\*\*\*\*\*\*\*.txt

Operacja zakończyła się sukcesem - klucze działały i udało mi się wgrać testowy
plik. Plik README.md okazał się bardzo pomocny, ale niestety dla niewłaściwych
osób, które nie powinny wejść w posiadanie takich poufnych informacji. Dlatego
trzeba przywiązać dużą wagę do tego jakie informacje udostępniamy w dokumentacji
w środowisku produkcyjnym.
