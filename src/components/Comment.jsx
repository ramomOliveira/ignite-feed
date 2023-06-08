import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://avatars.githubusercontent.com/u/79678732?v=4"
        alt="Avatar"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ramom Oliveira</strong>
              <time
                title="11 de Abril às 08:13h"
                dateTime="2023-04-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicitibus repellendus.
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={24} />
            Aplaudir <span>02</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
