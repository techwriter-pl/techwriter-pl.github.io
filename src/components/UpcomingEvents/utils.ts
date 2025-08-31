import { isDateInFuture } from '@site/src/lib/date-utils';
import { XMLParser } from 'fast-xml-parser';

export type EventDetails = {
  title: string;
  date: Date;
  link: string;
};

function getEventDetails(
  xml: string,
  onlyFutureEvents: boolean
): EventDetails[] {
  const parser = new XMLParser({ ignoreAttributes: false });
  const output = parser.parse(xml);

  const events: EventDetails[] = output.feed.entry
    .slice(0, 3)
    .map((entryInfo) => ({
      title: entryInfo.title['#text'],
      date: new Date(entryInfo.updated),
      link: entryInfo.link['@_href'],
    }));

  if (onlyFutureEvents) {
    return events.filter((event) => isDateInFuture(event.date));
  }

  return events;
}

export async function getFeed(): Promise<EventDetails[]> {
  try {
    const response = await fetch('https://techwriter.pl/wydarzenia/atom.xml');

    if (!response.ok) {
      const problem = await response.text();
      throw new Error(`Cannot get feed ${problem}`);
    }

    const feed = await response.text();
    const upcomingEvents = getEventDetails(feed, true);
    return upcomingEvents;
  } catch (err) {
    console.error(err);
    return [];
  }
}
