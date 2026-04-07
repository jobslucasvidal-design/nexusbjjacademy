import styles from './Footer.module.css';
import SectionHeader from '../../../components/sectionHeader/sectionHeader.jsx';

import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Button from '../../../components/button/Button.jsx';
import nexusLogo from '../../../assets/icons/nexus-logo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
          <div className={styles.footerDiv}>
            <SectionHeader
              title="Pronto para começar no Jiu-Jitsu?"
              description="Agende uma aula experimental gratuita"
            />
            <Button url="#" text="agendar aula" />
          </div>


        {/* GRID */}
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img src={nexusLogo} alt="Nexus BJJ Academy" />
            <Paragraph
              text="Academia especializada em Jiu-Jitsu focada em
              evolução técnica, disciplina e comunidade."
            />
          </div>

          <div>
            <h4>Navegação</h4>
            <ul>
              <li>
                <a href="#aulas">Aulas</a>
              </li>
              <li>
                <a href="#sobrenos">Sobre</a>
              </li>
              <li>
                <a href="#horarios">Horários</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <span>São Roque - SP</span>
              </li>
              <li>
                <a href="tel:+5511989906816">(11) 98990-6816</a>
              </li>
              <li>
                <a href="mailto:contato@nexus.com">contato@nexus.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Redes</h4>

            <div className={styles.socials}>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className={styles.bottom}>
          <p>© 2026 Nexus BJJ Academy</p>
          <span>Desenvolvido por Lucas Vidal</span>
        </div>
      </div>
    </footer>
  );
}
