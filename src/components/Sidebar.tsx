import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1626527700008-5caba5b6c042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/GabrielTrojack.png" />

        <strong>Gabriel Trojack</strong>
        <span>O monocromike</span>
      </div>

      <footer>
        <a href="">
          <PencilSimpleLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
}