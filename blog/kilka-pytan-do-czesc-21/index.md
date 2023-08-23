---
title: "Kilka pytań do - część 21"
date: "2020-12-09"
categories: 
  - "warsztat"
  - "wywiady"
tags: 
  - "dokumentacja"
  - "spolecznosc"
  - "wywiad"
coverImage: "Wywiad_21.png"
---

Pora na kolejny, już 21 odcinek, cyklu _Kilka pytań do_.

Naszym gościem jest dziś Abigail Sutherland, Information Architect z działu NAV w firmie TomTom. Urodziła się w Stanach Zjednoczonych, mieszkała przez 15 lat w Szkocji, obecnie przebywa w Holandii. W ramach swojej roli w TomTomie uczy nowego podejścia do dokumentowania. Dzięki jej staraniom kolejne osoby angażują się w sprawy dotyczące dokumentacji. Spędziła sporo czasu w łódzkim biurze TomToma, ale wciąż po polsku nie potrafi powiedzieć wiele więcej niż "tak", "nie", "dzień dobry" i oczywiście "dziękuję".

Zapraszamy!

#### How long have you been working as an Information Architect?

I’ve been in this role for a little over four years. But I’ve been writing for work on the side for much longer. Whenever anyone’s needed something polished, or been unable to express themselves clearly in a crucial document, they’ve come to me.

#### How did you become an Information Architect?

It wasn’t a normal way of getting the job. But TomTom is not always a normal company.

What happened was that I saw that documentation was a big problem in my organizational unit. Our company culture encourages people to speak up when they see a problem, and when possible to find ways to solve it. So I spoke up, and helped when I could (I did have a different job to do after all).

After a while, the leadership team in my department decided to create the role of Information Architect. Or, more properly, they decided to create a role with the _title_ of Information Architect. They didn’t really know how to describe the problem, much less solve it. So my first task was to try to understand what the problems were, even as I started solving them.

I didn’t have a job description for almost two years. Then I wrote my own.

#### Can you say something about the company you work for and your team?

TomTom is a tech company. We make software and maps for navigation applications, mostly to run in cars. It’s a rarity in that it’s a European-owned tech company. Although it’s been around since the last century, it still has a very start-up mindset, encouraging people to take responsibility and start their own initiatives when they see a gap. The result of that is that it’s also a very fractal organization…quite often you find the same things being done or started up in different areas as people see similar problems and try out their own ways to solve them.

The writing world within TomTom is certainly like that. We have little clusters of people throughout the organization that do various forms of writing, from map specifications to documentation to strings inside applications. We’re starting to get into better contact with one another in a Documentation Guild.

As for me, strictly speaking, I don’t have a team. There are no other technical writers in my organizational unit. But I knew this was going to happen – there wasn’t budget to hire a team of tech writers. So I started teaching my colleagues how to write.

You could say that I don’t have a team, but considering how TomTom works, how the Documentation Guild is growing, and how many people in my organizational unit have learned to be writers at one level or another…I have a _community_.

#### How is your work organized?

I organize my work myself. It falls roughly into three streams:

- **Reviewing and polishing technical writing done by my colleagues.** Mostly this takes the form of pull request reviews, because we do a lot of docs as code (I’ll talk about this below), but it can also be things emailed to me. These are generally small jobs, half an hour or so per piece. I try to keep turnaround times very short so that I’m not a bottleneck on processes, partly because if I make things harder, people will not involve me.
- **Requested projects.** Teams will ask me to write things or to organize information. (The Information Architect role is about deciding how and where things are stored, and the processes we use for producing documentation, as well as technical writing itself.) These tend to last a few weeks, sometimes taking all of the time I’m not using in reviewing and polishing, sometimes taking a few hours a week at most. My goal there is to create sustainable things – documents that teams can keep up to date themselves, processes and tools that the teams own and understand.
- **Long-term initiatives.** My role is more than just fire-fighting. I’m trying to put systems and processes in place that make writing easier and better. I always have a couple of projects that I’m doing on the side to achieve that. These are things I choose and prioritize myself. At the moment I’m doing the last stages of cleaning up our enormous and chaotic Confluence space and adapting the writing teaching that I used to do in person to online instruction.

#### What tools do you use and what do you think about them?

Because a lot of my work is about getting others to write, the tools I use have to be ones that they can use as well. This excludes both specialist technical writing protocols such as DITA and software with a high per-seat license cost.

We use a docs as code approach, which means that as much as possible, we use the same processes to create and change documentation that we do to create and change software. We keep a lot of our documentation in the repository and update it with pull requests. This means we’re using a workflow that the teams already understand, and that is already tooled up and maintained.

To do this, we keep our documentation in a markup language – AsciiDoc. One of my first initiatives as an Information Architect was the selection exercise that ended up with it. AsciiDoc can render documentation into a variety of formats, including HTML and PDF. (It can even create Word documents if you’re willing to hack a little.) I really like AsciiDoc, because it is both simple enough to work with very directly and subtle enough to produce good outputs automatically.

The other thing I work with a lot is Confluence, which is our internal Wiki in TomTom. It’s not a documentation format like AsciiDoc, but rather a publication platform. It’s very feature-poor…simple, but in a bad way. The search functionality is frustrating and hard to use well, and you often have to choose between doing things _easily_ and doing them _well_. That’s very painful.

#### How do you get the information you need to prepare/create documentation?

Since most of our documentation is written by the subject matter experts themselves, I don’t need to do a lot of interrogation…excuse me, I mean interviewing for that.

When I do need to get information for something I’m writing, I usually set up a half-hour or hour meeting with the person, record it, and use very open questions. I focus on understanding the background and key concepts before jumping into the specifics. I keep the meeting light and friendly. Then when I’ve written up what I’ve learned I send it to them and ask for comments. There’s usually another half-hour meeting somewhere in there for clarifications that go faster in person.

#### What documents do you deliver, in what form, in which language/languages and how are they published?

- The main documents that I deliver, or contribute to the delivery of, are:
- Product documentation in PDF form that is supplied alongside our software development kits (SDKs).
- Product documentation in HTML form for the online APIs on our Developer Portal.
- Microcopy (strings) for our apps, which appears in the apps themselves.
- Process documentation for how we work, which is published on Confluence.
- Educational materials such as slides, which I am currently migrating to a new platform (see below).

All of these are in English.

#### Do you participate in any other activities besides documentation writing (e.g. creation of marketing materials)? If yes, what is it and what tools do you use?

I’ve mentioned it above, but there are two that I’d like to explain in more detail.

- I write strings for our apps. This is done in Confluence, which is probably the worst tool imaginable for the job, but it’s the one everyone in the process has access to. This kind of writing – microcopy – is fascinating, because it’s like poetry. Every single word carries a lot of weight, and has to both give the user the right high-level information and teach/reinforce the underlying mental models that they need to use the app easily. Oh, and it also has to convey the right kind of friendly tone, and it has to be able to be translated into lots of different languages! It’s a huge challenge.
- The other thing I do that’s pretty far off of standard technical writing work is teaching writing. Most of the people in TomTom are not native speakers of English, but that is our language of communication. So I teach the basics of technical writing. I was doing it in person to groups of people, using a PowerPoint slide deck, but the world has changed. So now I’m creating materials to use online – either slide decks or online exercises, to cater for different learning styles. I’m doing it in AsciiDoc, because there’s a way to create presentations with it (using reveal-js), but I can _also_ use the same material in webpages. And I’m keeping it all in a repository, so I don’t have to worry about versioning.

#### What are the biggest challenges at your work?

To be honest, the biggest challenge is the amount that I have to manage my own work. That requires a lot of confidence that I’m making the right choices, and that the work I’m doing is any good. Without a team around me, that all has to come from me.

Most of the time, I trust my instincts, and those instincts are generally good (or good enough, anyway.) But it’s definitely the hardest part of my job.

#### What do you like the most in technical writing?

The feeling when I take someone else’s writing where the _content_ is good but the expression is not clear, and turn it into simple, understandable writing.

#### What is your advice for those who want to begin their adventure with writing documentation?

I’m a terrible person to ask this of, because my path into technical writing was so strange. But the one thing you really need to do to be a good technical writer is be a good writer. So write! Write in your native language, write in English. Read good writing, and ask yourself what makes it good.

#### What does the labor market look like for Tech Writers in the Netherlands? Are there any organizations that unite Technical Writers in the Netherlands?

I won’t be able to give good answers about tech writing in the Netherlands. I didn’t come to this by the straight path. But the place to go for these kinds of questions is the [Write The Docs community](https://www.writethedocs.org/slack/), which is worldwide and very, very friendly. I recommend them unconditionally. WTD is the place to go. They do an annual salary survey, there’s a channel for tech writing jobs, and there are tons of people who can answer questions about getting into the business.

#### Do you have any diploma or certificate in technical writing? If yes, did it help you in your career?

No…I have a bachelor’s degree in classical Latin and a postgraduate certificate in software technology. But I grew up in a household that spoke highly educated English (both of my parents were lawyers). And I’ve been writing in various ways, online and offline, throughout my life.

#### Do you have an idea about how the technical writer role is going to evolve in the near future? Where is it headed, and what are the biggest trends on the horizon?

I think that the trend of having subject matter experts write the first draft of some documents is going to continue, and we need to work with that. Docs as Code is here to stay, not just because it uses well-understood workflows but because it’s flexible and portable.

But the most interesting thing on the horizon is video. So many teenagers and young adults just entering the workforce prefer to get their content in video form. At the moment, we don’t have good tools for creating and managing video content, though one side-effect of the pandemic is that more people are getting good at working with their webcams. Note that this doesn’t replace written content – some people still prefer to read. It’s that we need to cater for a wider range of ways of getting information.

#### Thank you for your insights.
