import styles from "../Contact.module.css"

export default function ContactActions() {
  const contactActions = [
    { id: 1, label: "central de ajuda", href: "#" },
    { id: 2, label: "mandar email", href: "#" },
    { id: 3, label: "colaborações", href: "#" }
  ];

  return (
    <nav className={styles.actions}>
      {contactActions.map((action) => (
        <a
          key={action.id}
          href={action.href}
          className={styles.action}
        >
          {action.label}
        </a>
      ))}
    </nav>
  );
}