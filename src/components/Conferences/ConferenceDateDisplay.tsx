export function ConferenceDateDisplay({ date }: { date: Date }) {
  return (
    <div>
      {date.toLocaleDateString('pl', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </div>
  );
}
