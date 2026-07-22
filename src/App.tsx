import { useState } from 'react'
import { GroupDivider } from './components/GroupDivider/GroupDivider'
import { ProgressBar } from './components/ProgressBar/ProgressBar'
import { StationCard } from './components/StationCard/StationCard'
import { groupDividerLabels, stations, tierLegend, type Tier } from './data/stations'
import { useProgress } from './hooks/useProgress'
import styles from './App.module.css'

const TIER_ORDER: Tier[] = ['tier1', 'tier2', 'tier3']

function App() {
  const { completed, toggle } = useProgress()
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Trilha de IA — 12 Habilidades</h1>
        <p>Baseada no documento "12 Habilidades de IA que Você Deve Aprender em 2026"</p>
        <div className={styles.tierLegend}>
          {tierLegend.map(({ tier, range, description }) => (
            <div className={styles.tierPill} key={tier}>
              <span className={styles.swatch} style={{ background: `var(--${tier})` }} />
              <strong>{range}</strong>&nbsp;{description}
            </div>
          ))}
        </div>
      </div>

      <ProgressBar completed={completed.size} total={stations.length} />

      <div className={styles.track}>
        {TIER_ORDER.map((tier) => (
          <div key={tier}>
            <GroupDivider tier={tier} label={groupDividerLabels[tier]} />
            {stations
              .filter((station) => station.tier === tier)
              .map((station) => (
                <StationCard
                  key={station.id}
                  station={station}
                  isOpen={openId === station.id}
                  isCompleted={completed.has(station.id)}
                  onToggleOpen={() =>
                    setOpenId((current) => (current === station.id ? null : station.id))
                  }
                  onToggleCompleted={() => toggle(station.id)}
                />
              ))}
          </div>
        ))}
      </div>

      <p className={styles.sourceNote}>
        Conteúdo extraído e ancorado no documento enviado pelo usuário: "12 Habilidades de IA que
        Você Deve Aprender em 2026" (PDF). Progresso salvo localmente no navegador (localStorage).
      </p>
    </div>
  )
}

export default App
