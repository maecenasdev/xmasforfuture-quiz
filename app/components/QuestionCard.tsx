// app/components/QuestionCard.tsx
import type { Question, AnswerOption } from "@/app/data/questions";
import styles from "./QuestionCard.module.css";

type Props = {
  question: Question;
  selectedId?: string;
  onSelect: (option: AnswerOption) => void;
  onNext: () => void;
  onPrev: () => void;
  isLast: boolean;
};

export function QuestionCard({
  question,
  selectedId,
  onSelect,
  onNext,
  onPrev,
  isLast,
}: Props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{question.text}</h2>

      <div className={styles.options}>
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option)}
            type="button"
            className={`${styles.optionButton} ${
              selectedId === option.id ? styles.optionSelected : ""
            }`}
          >
            <span className={styles.optionPrefix}>{option.id}.</span>
            {option.label}
          </button>
        ))}
      </div>

      <div className={styles.actions}>
        <button onClick={onPrev} type="button" className={styles.secondaryButton}>
          Indietro
        </button>
        <button
          onClick={onNext}
          disabled={!selectedId}
          type="button"
          className={styles.primaryButton}
        >
          {isLast ? "Vedi risultato" : "Avanti"}
        </button>
      </div>
    </div>
  );
}
