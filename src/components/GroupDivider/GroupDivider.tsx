import type { Tier } from '../../data/stations'
import styles from './GroupDivider.module.css'

interface GroupDividerProps {
  tier: Tier
  label: string
}

export function GroupDivider({ tier, label }: GroupDividerProps) {
  return (
    <div className={styles.divider}>
      <span className={styles.label}>
        <span className={styles.swatch} style={{ background: `var(--${tier})` }} />
        {label}
      </span>
    </div>
  )
}
