import styles from './Horarios.module.css';
import { useState } from 'react';
import SectionHeader from '../../../components/sectionHeader/sectionHeader.jsx';


const schedule = {
  group1: [
    {
      title: 'Adulto Gi',
      days: 'Seg • Qua • Sex',
      times: ['07:00', '15:00', '20:00'],
    },
    {
      title: 'Kids',
      days: 'Seg • Qua • Sex',
      times: ['09:00', '18:00', '19:00'],
    },
  ],
  group2: [
    {
      title: 'No Gi',
      days: 'Ter • Qui',
      times: ['07:00', '20:00'],
    },
    {
      title: 'Feminino',
      days: 'Ter • Qui',
      times: ['19:00'],
    },
  ],
};

const dayMap = {
  seg: 'group1',
  qua: 'group1',
  sex: 'group1',
  ter: 'group2',
  qui: 'group2',
};

export default function Horarios() {
  const [day, setDay] = useState('seg');

  const currentGroup = dayMap[day];
  const currentData = schedule[currentGroup];

  return (
    <section className={styles.sectionHorarios} id="horarios">
      <div className="container">
        <SectionHeader
          title="horários de aula"
          description="Escolha o melhor dia para treinar"
        />
        {/* 🔥 Dias */}
        <div className={styles.days}>
          {['seg', 'ter', 'qua', 'qui', 'sex'].map((d) => (
            <button
              key={d}
              className={day === d ? styles.active : ''}
              onClick={() => setDay(d)}
            >
              {d.toUpperCase()}
            </button>
          ))}
        </div>

        {/* 🔥 Cards */}
        <div className={styles.grid}>
          {currentData.map((item, i) => (
            <div key={i} className={styles.card}>
              <h3>{item.title}</h3>

              <p className={styles.daysLabel}>{item.days}</p>

              <div className={styles.times}>
                {item.times.map((t, index) => (
                  <span key={index}>{t}</span>
                ))}
              </div>

              <span className={styles.cta}>Agendar aula →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
