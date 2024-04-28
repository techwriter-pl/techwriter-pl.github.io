import { ResponseWithCount } from './types';

type SurveyBulletedListProps = {
  entries: ResponseWithCount[];
  showCount?: boolean;
};

export default function SurveyBulletedList({
  entries,
  showCount,
}: SurveyBulletedListProps) {
  return (
    <ul>
      {entries.map(({ count, response }, key) => (
        <li key={key}>
          {response}
          {showCount && ` (${count})`}
        </li>
      ))}
    </ul>
  );
}
