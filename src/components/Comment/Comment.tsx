import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'

import { Avatar } from '../Avatar/Avatar'

import styles from './Comment.module.css'

export type CommentType = {
  id: number
  createdAt: Date
  content: string
}

type CommentProps = {
  comment: CommentType
  onDelete: (id: number) => void
}

export function Comment({ comment, onDelete }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  const handleLike = () => {
    setLikeCount((prev) => prev + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar src='https://github.com/icaroov.png' hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Icaro Oliveira</strong>
              <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:00'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário' onClick={() => onDelete(comment.id)}>
              <Trash size={20} />
            </button>
          </header>

          <p>{comment.content}</p>
        </div>

        <footer>
          <button onClick={handleLike}>
            <ThumbsUp />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
