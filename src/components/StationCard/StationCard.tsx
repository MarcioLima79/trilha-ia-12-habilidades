import type { Station } from '../../data/stations'
import styles from './StationCard.module.css'

interface StationCardProps {
  station: Station
  isOpen: boolean
  isCompleted: boolean
  onToggleOpen: () => void
  onToggleCompleted: () => void
}

export function StationCard({
  station,
  isOpen,
  isCompleted,
  onToggleOpen,
  onToggleCompleted,
}: StationCardProps) {
  const panelId = `station-panel-${station.id}`

  return (
    <div
      className={[
        styles.station,
        styles[station.tier],
        isCompleted ? styles.done : '',
        isOpen ? styles.open : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className={styles.stationHead}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggleOpen}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            onToggleOpen()
          }
        }}
      >
        <div className={styles.dot}>{station.id}</div>
        <div className={styles.stationTitle}>
          <h2>{station.title}</h2>
          <span>{station.subtitle}</span>
        </div>
        <div className={styles.chevron}>▸</div>
      </div>

      <div id={panelId} className={styles.stationBody}>
        {station.sections.map((section, index) => (
          <div key={index}>
            <h3>{section.heading}</h3>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.projectBox}>
          <strong>{station.projectLabel ?? 'Projeto para iniciantes'}:</strong> {station.project}
        </div>
        <div className={styles.criteriaBox}>
          <strong>Critério de conclusão:</strong> {station.criteria}
        </div>

        <button type="button" className={styles.markBtn} onClick={onToggleCompleted}>
          Marcar como concluído
        </button>
      </div>
    </div>
  )
}
