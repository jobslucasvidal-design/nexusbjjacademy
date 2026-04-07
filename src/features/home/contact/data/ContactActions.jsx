import styles from "../Contact.module.css";

export default function ContactActions() {
  const contactActions = [
    {
      id: 1,
      label: "Central de ajuda",
      desc: "Tire suas dúvidas",
      href: "#",
    },
    {
      id: 2,
      label: "Mandar email",
      desc: "Fale com a equipe",
      href: "#",
    },
    {
      id: 3,
      label: "Colaborações",
      desc: "Parcerias e projetos",
      href: "#",
    },
  ];

  return (
    <div className={styles.actionsWrapper}>
      {contactActions.map((action) => (
        <a
          key={action.id}
          href={action.href}
          className={styles.actionCard}
        >
          <div>
            <h4>{action.label}</h4>
            <p>{action.desc}</p>
          </div>

          <span className={styles.arrow}>→</span>
        </a>
      ))}
    </div>
  );
}