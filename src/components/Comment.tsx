import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }:CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeletecomment() {
    onDeleteComment(content)
  }
  function handelLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/GabrielTrojack.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Trojack</strong>
              <time title="28 de fevereiro às 20:37" dateTime="2023-02-13 20:36:00">cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeletecomment} title="deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handelLikeComment}>
            <ThumbsUp />
            Curtir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}