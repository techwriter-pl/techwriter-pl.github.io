export type NumericQuestion = {
  [label: string]: number;
};

export type Dataset = {
  [header: string]: number | string;
}[];

export type ResponseWithCount = {
  response: string;
  count: number;
};

export type Question =
  | 'Który opis najbardziej pasuje do wykonywanej przez Ciebie pracy?'
  | 'W którym województwie jest siedziba Twojej firmy?'
  | 'Ile wynosi Twój staż pracy w branży komunikacji technicznej?'
  | 'Jakie masz przygotowanie do pracy w branży?'
  | 'W jakiego rodzaju firmie pracujesz?'
  | 'Jaka jest Twoja forma zatrudnienia?'
  | 'Jak duża jest Twoja firma?'
  | 'Jakiego rodzaju dokumentację tworzysz?'
  | 'Ile wynosi Twoje miesięczne wynagrodzenie brutto?'
  | 'Jak bardzo jesteś zadowolony/a ze swojej pracy w skali od 1 do 5?'
  | 'Jakie jest Twoje główne wykształcenie?'
  | 'Czy dla Twojego wynagrodzenia zastosowanie mają autorskie koszty uzyskania przychodu (tzw. tax break)?'
  | 'Czy pracujesz zdalnie?'
  | 'Płeć'
  | 'Jak oceniasz zadowolenie ze swojej pracy w skali od 1 do 5?'
  | 'W roku 2024, przez ile miesięcy dotknęło Cię bezrobocie?'
  | 'W roku 2025, przez ile miesięcy dotknęło Cię bezrobocie?'
  | 'Czy w roku 2024 Twoje całkowite wynagrodzenie brutto się zmieniło?'
  | 'Czy w roku 2025 Twoje całkowite wynagrodzenie brutto wzrosło, zmalało, czy pozostało na tym samym poziomie?';

export type NumberOfPeopleAndEarnings = {
  [responseLabel: string]: string;
  Mediana: string;
  Minimalne: string;
  Maksymalne: string;
};
