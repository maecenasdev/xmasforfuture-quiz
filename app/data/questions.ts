// app/data/questions.ts
export type AnswerOption = {
  id: string;
  label: string;
  score: number;
};

export type Question = {
  id: number;
  text: string;
  options: AnswerOption[];
};

const SCORE_SCALE = [0, 1, 2, 3];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Come ti sposti più spesso in città?",
    options: [
      { id: "A", label: "In auto privata", score: SCORE_SCALE[0] },
      { id: "B", label: "Con i mezzi pubblici", score: SCORE_SCALE[1] },
      { id: "C", label: "In bici o monopattino", score: SCORE_SCALE[2] },
      { id: "D", label: "A piedi", score: SCORE_SCALE[3] },
    ],
  },
  {
    id: 2,
    text: "Quali sono le tue abitudini quando fai la spesa?",
    options: [
      { id: "A", label: "Cerco soprattutto convenienza", score: SCORE_SCALE[0] },
      {
        id: "B",
        label: "Scelgo confezioni monouso per praticità",
        score: SCORE_SCALE[1],
      },
      {
        id: "C",
        label: "Porto borse riutilizzabili e riduco gli imballaggi",
        score: SCORE_SCALE[2],
      },
      {
        id: "D",
        label: "Prediligo prodotti sfusi, locali e stagionali",
        score: SCORE_SCALE[3],
      },
    ],
  },
  {
    id: 3,
    text: "In casa, come gestisci l’energia elettrica?",
    options: [
      { id: "A", label: "Non ci penso molto", score: SCORE_SCALE[0] },
      {
        id: "B",
        label: "Spengo le luci quando esco da una stanza",
        score: SCORE_SCALE[1],
      },
      {
        id: "C",
        label: "Uso lampadine LED ed elettrodomestici efficienti",
        score: SCORE_SCALE[2],
      },
      {
        id: "D",
        label: "Ho installato anche fonti rinnovabili (es. pannelli solari)",
        score: SCORE_SCALE[3],
      },
    ],
  },
  {
    id: 4,
    text: "Cosa fai con i rifiuti?",
    options: [
      { id: "A", label: "Li butto tutti insieme", score: SCORE_SCALE[0] },
      { id: "B", label: "Differenzio qualche volta", score: SCORE_SCALE[1] },
      {
        id: "C",
        label: "Faccio regolarmente la raccolta differenziata",
        score: SCORE_SCALE[2],
      },
      {
        id: "D",
        label: "Cerco anche di ridurre e riutilizzare",
        score: SCORE_SCALE[3],
      },
    ],
  },
  {
    id: 5,
    text: "Quali azioni adotti per ridurre il consumo d’acqua?",
    options: [
      { id: "A", label: "Nessuna, non ci penso mai", score: SCORE_SCALE[0] },
      {
        id: "B",
        label: "Chiudo il rubinetto mentre lavo i denti",
        score: SCORE_SCALE[1],
      },
      { id: "C", label: "Faccio docce brevi", score: SCORE_SCALE[2] },
      {
        id: "D",
        label: "Raccolgo acqua piovana o uso sistemi di risparmio",
        score: SCORE_SCALE[3],
      },
    ],
  },
  {
    id: 6,
    text: "Come scegli i prodotti di uso quotidiano?",
    options: [
      {
        id: "A",
        label: "Scelgo i più economici, se si rompono li ricompro",
        score: SCORE_SCALE[0],
      },
      {
        id: "B",
        label: "Preferisco prodotti che durano più a lungo",
        score: SCORE_SCALE[1],
      },
      {
        id: "C",
        label: "Controllo che i materiali siano ecologici",
        score: SCORE_SCALE[2],
      },
      {
        id: "D",
        label: "Scelgo prodotti ecologici e riciclati anche se costano di più",
        score: SCORE_SCALE[3],
      },
    ],
  },
];
