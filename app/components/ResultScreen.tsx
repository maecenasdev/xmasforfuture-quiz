// app/components/ResultScreen.tsx
import styles from "./ResultScreen.module.css";

type Props = { totalScore: number; maxScore: number; onRestart: () => void };

function getResult(totalScore: number, maxScore: number) {
  const ratio = totalScore / maxScore;

  if (ratio < 0.33) {
    return {
      title: "1. Il principiante green",
      text: "Hai ampi margini di miglioramento: ogni piccolo gesto conta!",
      tip: "Prova a usare di più i mezzi pubblici e riduci gli sprechi.",
    };
  } else if (ratio < 0.66) {
    return {
      title: "2. L’apprendista green!",
      text: "Hai già buone abitudini, ma puoi renderle più costanti.",
      tip: "Trasforma i gesti saltuari in routine, come usare la bici o la borraccia.",
    };
  } else {
    return {
      title: "3. L’eroe green!",
      text: "Sei molto attento all’ambiente, continua così!",
      tip: "Condividi le tue buone pratiche con chi ti sta attorno.",
    };
  }
}

export function ResultScreen({ totalScore, maxScore, onRestart }: Props) {
  const { title, text, tip } = getResult(totalScore, maxScore);

  return (
    <div className={styles.result}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <p className={styles.tip}>Consiglio: {tip}</p>

      <button
        onClick={onRestart}
        type="button"
        className={styles.button}
      >
        Finito
      </button>
    </div>
  );
}
