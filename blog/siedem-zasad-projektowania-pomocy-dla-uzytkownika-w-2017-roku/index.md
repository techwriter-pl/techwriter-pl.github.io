---
title: "Siedem zasad projektowania pomocy dla użytkownika w 2017 roku"
date: "2017-02-01"
categories:
  - "dobre-praktyki"
  - "warsztat"
tags:
  - "instrukcje"
  - "knowledge-base"
  - "konferencje"
  - "on-line-help"
  - "pomoc-uzytkownika"
coverImage: "7-zasad.jpg"
---

Dziś na naszych łamach gościnny wpis przygotowany przez Matthew Ellisona. Matthew jest organizatorem corocznej konferencji [UA Europe](http://www.uaconference.eu/), której jesteśmy patronem medialnym. W tym artykule, napisanym specjalnie dla techwriter.pl, Matthew prezentuje siedem zasad tworzenia efektywnej pomocy dla użytkownika. Zachęcamy do lektury i do rozważenia - może zechcecie wybrać się na tę konferencję? Do zobaczenia w Harrogate!

# Seven Golden Rules of User Assistance Design for 2017

Matthew Ellison for techwriter.pl

I've been working in software documentation and user assistance for 30 years – which makes me feel very old!  It's been interesting to see trends develop over time, and design patterns pass in and out of fashion.  In the late 80s and early 90s it was all about platform-specific features: pop-ups, secondary windows, non-scrolling regions, browse sequences, and so on, all supported by early Windows Help viewers such as WinHelp (which predated HTML and the World Wide Web).  These days many of us need to cater for a range of different platforms and there is a trend towards the adoption of standard mark-up languages (including DITA, DocBook, and AsciiDoc), and open-source tools and techniques.  However many of the core issues remain the same:  the needs of the audience are still paramount, content is still king, and the organisation and presentation of content remain key to effective learning.

In October 2004, I published an article in the ISTC's Communicator journal entitled "Seven golden rules of online Help design".  You can find a copy of that article in PDF format at [http://bit.ly/2jfKxuj](http://bit.ly/2jfKxuj).  Recently I re-read that article, and was pleasantly surprised to find that most of the golden rules still hold true today, more than 12 years later.  However, there are some tweaks and additions that I would like to make as a result of recent trends within the technical communication community.

There are two key industry trends that have had an impact on the design of software user assistance.  The first is the explosive growth of the Mobile Web, with Web content consumption on mobile devices such as tablets and phones recently having overtaken that on laptops or desktop computers (see [http://gs.statcounter.com/press/mobile-and-tablet-internet-usage-exceeds-desktop-for-first-time-worldwide](http://gs.statcounter.com/press/mobile-and-tablet-internet-usage-exceeds-desktop-for-first-time-worldwide)).  This means it's now essential that our content displays at least as effectively on small screens as it does on full-size desktop screens. We don't want to have to publish two different sets of content for mobile and desktop screens, so our user assistance has to be _responsive_, and should automatically play to the strengths of the medium on which it is displayed.  This means, for example, hiding the left-hand navigation panel on small screens and making it available through a menu button.  We might also take advantage of the location awareness of a mobile device, and display content that is customised for a specific country or office location.

The other important trend that I have noticed over recent years is the convergence of tools and practices used for API/code/developer documentation (usually written by software developers) and for end-user documentation (often written by technical authors). One of the reasons for this is the adoption of the Agile methodology which means technical authors being integrated more tightly within development teams, and results in all forms of documentation being considered part of the product.  This "docs as code" approach has seen documentation being stored in source control systems such as Git or SVN and being published as part of the overall software build process.  More than that, there is an increasing adoption of open-source text-based authoring tools and technologies, with simple mark-up methods such as Markdown and AsciiDoc becoming increasing common.  These tools do not have the content re-use capabilities of proprietary Help Authoring Tools such as Adobe FrameMaker and MadCap Flare, and nor do they have the same rich features for easily implementing full-text search, advanced layouts, and pop-up hyperlinks.  However, they do have the advantage of simplicity, and they arguably enable the author to focus more on the quality of the content rather than obsessing about fancy features and the level of content re-use.

Let's take a brief look at each of my seven rules from the 2004 article:

## 2004 Rule 1 - Don't force users to move between topics to solve a problem

This is all about making each topic a self-contained solution to the user's needs.  I still believe this is critical to helping users in the most effective and time-efficent way, so it's definitely going to remain one of my top rules.  This idea has been developed by technical communication guru Mark Baker is his book "Every Page is Page One", which I strongly recommend.

## 2004 Rule 2 - Only index the main theme of each Help topic

Given that most modern Help systems no longer expose A-Z indexes within the nagivation pane, this rule may appear redundant.  However, it can be adapted in the light of the Semantic Web to say that you should include meta data within each Help topic that expresses that the information type, audience, and main theme of the topic.  Effective Search will increasinly rely on content being marked up with this kind of standard semantic metadata.

## 2004 Rule 3 - Don’t require users to make a conscious decision to access Help

This means that we should be maximising the "scent of information" associated with our content, making the links to our user assistance more meaningful and compelling.  Arguably this is becoming less important as user assistance is increasingly embedded within the UI itself, but there are still plenty of examples of separate Help systems that are under-used because the access points are not sufficiently obvious or compelling.

## 2004 Rule 4 - Only include images when they add value

I believe this still to be true today.  There is no point in including screenshots or diagrams merely as decoration, and each time we add an image we should be thinking hard about its purpose and about the information that it is conveying.  The same goes for video and other forms of multimedia, which are increasingly popular as a way of demonstrating complex procedures and techniques.

## 2004 Rule 5 - Write topics that answer users’ questions

I don't know why I didn't make this rule number 1 because it expresses the fundamental purpose of user assistance.  I'd go further than this now by saying that it is important to base the topic (answer) on a typical situation that a user might be experiencing.  In other words, provide meaningful examples rather than just abstract information.

## 2004 Rule 6 - Don’t be a slave to consistency

Although it's important to use consistent formatting, writing style, signposting conventions, and terminology, there is no need to extend this to the selection of features that you write about. We should be guided by the needs of the user -- and these days, we have far more sophisticated ways of identifying these needs.  We can use Analystics to track users' behaviour, and we can also monitor user forums and social networks to find out which are the most common problems and issues associated with our products.

## 2004 Rule 7 - Don’t be tempted to provide too much information

With hindsight, I think this should have been rule number 2. We have to be concise and _focussed_ in what we write or else we risk losing our readers.

What other additions and updates to these rules would I make in the light of changes within the IT technical communication community over the past 12 years?  With the demise of the A-Z Index and the advances in Search technology, I would recommend focussing on Search as the primary mechanism that users use to locate the information they need.  Consider implementing faceted search (where users narrow down the seach results by incrementally applying multiple search criteria) if it is available, investigate the possibilities of synonyms and metadata for improving search results, and educate users on how to get the most from their searches.

Secondly, no set of design rules would be complete in the light of today's Mobile Web without a reference to responsive design.  I recommend embracing minimalism by designing for small screens first (this is known as the Mobile First approach) and then adapting the layout responsively for larger screens.

Next, I'd like to refer to the findings of the developer education team at Twilio, one of the API industry’s leaders (see [https://pronovix.com/blog/5-things-learn-twilios-documentation-overhaul](https://pronovix.com/blog/5-things-learn-twilios-documentation-overhaul)).  They have recently conducted a series of user tests on their technical documentation, and concluded that developers primarily look for example code and solutions to fix a problem.  Whilst I realise that end-user documentation is slightly different, I am increasingly convinced that examples have a vital role to play.  They bring information to life and demonsrate how to apply tasks and techniques in a very practical way.

And finally: designs for user assistance and documentation have gained popularity and lost favour over the years in the same way as clothing designs have gone in and out of fashion over the years.  We've seen pop-up windows, tri-pane layouts, guided help, natural language search, video demonstrations, blogs, UI overlays, and more. What's important, in my view, is to be guided by the needs of our users rather than by the currently fashionable design.

So, to summarise, my revised set of seven golden rules of user assistance design for 2017 is as follows:

- 2017 Rule 1: Research the needs of users, and write topics that answer users’ real questions
- 2017 Rule 2: Be focussed and concise
- 2017 Rule 3: Write every topic as if it was the first topic viewed by the user
- 2017 Rule 4: Use examples
- 2017 Rule 5: Focus on Search and supporting metadata
- 2017 Rule 6: Use responsive design so that your content can be consumed on all screen sizes
- 2017 Rule 7: Include images and multimedia when they add value

Matthew Ellison is an independent UK-based consultant and trainer who works in the field of software user assistance.  He organises the annual [UA Europe](http://www.uaconference.eu/) conference for user assistance professionals.

# Podziękowanie od techwriter.pl

Dziękujemy Matthew za napisanie tego artykułu. Zdecydowanie daje do myślenia fakt, że w naszej branży raczej nie ma złotych zasad, które się nie zmieniają.

Jeżeli macie pomysły na artykuły, lub gotowe teksty, dajcie nam znać. Bardzo chętnie publikujemy treści kolegów po fachu, a dla Was to świetna okazja podzielić się ze światem swoją wiedzą i przemyśleniami.
