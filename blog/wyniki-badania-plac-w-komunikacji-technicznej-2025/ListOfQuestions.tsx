import rawData from './rawData.json';

export default function ListOfQuestionsAsHtml() {
  return (
    <ol>
      {Object.keys(rawData[0])
        .filter((key) => key !== 'Sygnatura czasowa')
        .map((key, index) => (
          <li key={index}>{key}</li>
        ))}
    </ol>
  );
}
