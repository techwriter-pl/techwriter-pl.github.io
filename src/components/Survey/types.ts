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
  | 'Jak bardzo jesteś zadowolony/a ze swojej pracy w skali od 1  do 5 ?'
  | 'Jakie jest Twoje główne wykształcenie?'
  | 'Czy dla Twojego wynagrodzenia zastosowanie mają autorskie koszty uzyskania przychodu (tzw. tax break)?'
  | 'Czy pracujesz zdalnie?';
