// app/components/Quiz.tsx
"use client";

import { useState } from "react";
import { QUESTIONS } from "@/app/data/questions";
import type { AnswerOption } from "@/app/data/questions";
import styles from "./Quiz.module.css";

type AnswerState = { [questionId: number]: string }; // es. {1: "A", 2: "C"}

// HEADER (freccia + logo + progress bar)
function QuizHeader({
  step,
  total,
  onBack,
}: {
  step: number;
  total: number;
  onBack: () => void;
}) {
  const percentage = (step / total) * 100;

  return (
    <header className={styles.quizHeader}>
      <div className={styles.quizHeaderBar}>
        <button onClick={onBack} type="button" className={styles.backButton}>
          <img src="/freccia.png" className={styles.backIcon} alt="Indietro" />
        </button>

        <img
          src="/logo.png"
          className={styles.quizLogo}
          alt="Xmas For Future"
        />

        <div></div>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressTrack}>
          <div className={styles.progressValue} style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </header>
  );
}

// SCHERMATA DOMANDA
function QuestionScreen({
  question,
  onAnswer,
}: {
  question: (typeof QUESTIONS)[number];
  onAnswer: (opt: AnswerOption) => void;
}) {
  return (
    <div className={styles.questionScreen}>
      <h2 className={styles.questionTitle}>{question.text}</h2>

      <div className={styles.answerList}>
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option)}
            type="button"
            className={styles.answerButton}
          >
            {option.id}. {option.label}
          </button>
        ))}
      </div>


    </div>
  );
}

// QUIZ COMPLETO
export default function Quiz() {
  const [step, setStep] = useState(0); // 0 = intro, 1..6 = domande, 7 = risultato
  const [answers, setAnswers] = useState<AnswerState>({});

  const totalQuestions = QUESTIONS.length;

  const handleAnswer = (questionId: number, option: AnswerOption) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option.id }));
    setStep((prev) => Math.min(prev + 1, totalQuestions + 1));
  };

  const goNext = () => {
    setStep((s) => Math.min(s + 1, totalQuestions + 1));
  };

  const goPrev = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
  };

  // calcolo punteggio per la schermata finale
  const totalScore = QUESTIONS.reduce((sum, q) => {
    const selectedId = answers[q.id];
    const opt = q.options.find((o) => o.id === selectedId);
    return sum + (opt?.score ?? 0);
  }, 0);

  const maxScore = QUESTIONS.reduce(
    (sum, q) => sum + Math.max(...q.options.map((o) => o.score)),
    0
  );

  const ratio = totalScore / maxScore;

  let resultTitle = "";
  let resultText = "";
  let resultTip = "";
  if (ratio < 0.25) {
    resultTitle = "1. Il Distratto Ecologico / La Distratta Ecologica";
    resultText =
      "Non presti molto attenzione alla sostenibilità, ma non è mai troppo tardi per cominciare!";
    resultTip =
      "Inizia con piccole azioni facili, come differenziare i rifiuti o ridurre l’uso di plastica monouso. Ogni gesto conta!";
  } else if (ratio < 0.5) {
    resultTitle = "2. L’Apprendista Green";
    resultText =
      "Hai già qualche buona abitudine, ma non è ancora una costanza. L’importante è continuare a migliorare!";
    resultTip =
      "Trasforma i gesti saltuari in routine, usa la bici o vai a piedi per i brevi spostamenti e porta con te una borraccia.";
  } else if (ratio < 0.75) {
    resultTitle = "3. Super Eco!";
    resultText =
      "Congratulazioni! Adotti abitudini attente e coerenti, che riducono davvero l’impatto ambientale.";
    resultTip =
      "Condividi le tue buone pratiche con amici e famiglia: il cambiamento è più forte se contagioso!";
  } else {
    resultTitle = "4. Green Ambassador";
    resultText =
      "Complimenti! Ti impegni molto per vivere in modo sostenibile, sei un esempio per chi ti circonda.";
    resultTip =
      "Continua così e approfondisci temi come autoproduzione, orto urbano o gruppi di acquisto solidale.";
  }

  return (
    <div className={styles.quiz}>
      {/* contenuto verticale "tipo mobile" */}
      <main className={styles.quizMain}>
        {step > 0 && step <= totalQuestions && (
          <QuizHeader step={step} total={totalQuestions} onBack={goPrev} />
        )}

        {/* Schermata iniziale */}
        {step === 0 && (
          <div className={styles.introSection}>
            <img
              src="/logo.png"
              alt="Xmas For Future"
              className={styles.introLogo}
            />
            <h1 className={styles.introTitle}>
              <span id="first"> Quanto </span>
              <span id="second">sei </span>
              <span className={styles.italic} id="third" >green?</span>
            </h1>
            <p className={styles.introText}>
              Fai il <span id="bold" className={styles.italic}>test</span>, misura la tua impronta verde e ottieni consigli per un futuro più
              <span id="bold" className={styles.italic}>sostenibile</span>.
            </p>
            <button onClick={goNext} type="button" className={styles.primaryButton}>
              Inizia
            </button>
          </div>
        )}

        {/* Schermate domande */}
        {step > 0 && step <= totalQuestions && (
          <QuestionScreen
            question={QUESTIONS[step - 1]}
            onAnswer={(opt) => handleAnswer(QUESTIONS[step - 1].id, opt)}
          />
        )}

        {/* Schermata finale */}
        {step === totalQuestions + 1 && (
          <div className={styles.resultSection}>
            <img
              src="/logo.png"
              alt="Xmas For Future"
              className={styles.introLogo}
            />
            <h2 className={styles.resultTitle}>{resultTitle}</h2>
            <p className={styles.resultText}>{resultText}</p>
            <p className={styles.resultAdvice}>
              <strong>Consiglio:</strong> {resultTip}
            </p>
            <button onClick={restart} type="button" className={styles.primaryButton}>
            Finito
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
