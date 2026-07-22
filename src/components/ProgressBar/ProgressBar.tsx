import styles from './ProgressBar.module.css'

interface ProgressBarProps {
  completed: number
  total: number
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const pct = total > 0 ? (completed / total) * 100 : 0

  return (
    <div className={styles.wrap}>
      <div className={styles.label}>
        <span>Progresso</span>
        <span>{completed} / {total} concluídas</span>
      </div>
      <div className={styles.barBg}>
        <div className={styles.barFill} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
