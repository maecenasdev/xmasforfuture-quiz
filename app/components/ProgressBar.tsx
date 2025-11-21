// app/components/ProgressBar.tsx
import styles from "./ProgressBar.module.css";

type Props = { current: number; total: number };

export function ProgressBar({ current, total }: Props) {
  const percentage = (current / total) * 100;

  return (
    <div className={styles.track}>
      <div className={styles.value} style={{ width: `${percentage}%` }} />
    </div>
  );
}
