import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar/Avatar'
import { Comment, CommentType } from '../Comment/Comment'

import styles from './Post.module.css'

type AuthorType = {
  name: string
  avatarUrl: string
  role: string
}

enum ContentTypeEnum {
  PARAGRAPH = 'paragraph',
  LINK = 'link',
}

type ContentType = {
  type: ContentTypeEnum
  content: string
}

export type PostProps = {
  id: number
  author: AuthorType
  content: ContentType[]
  publishedAt: Date
}

const MAX_COMMENT_LENGTH = 160

export function Post({ author, content, publishedAt }: PostProps) {
  const [commentsList, setCommentsList] = useState<CommentType[]>([])
  const [comment, setComment] = useState('')

  const formattedTitleDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const relativeDate = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!comment) return

    setCommentsList((prev) => {
      const newComment = {
        id: Math.ceil(Math.random() * 1000),
        createdAt: new Date(),
        content: comment,
      }

      return [...prev, newComment]
    })

    setComment('')
  }

  const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > MAX_COMMENT_LENGTH) return

    setComment(e.target.value)
  }

  const handleDeleteComment = (id: number) => {
    setCommentsList((prev) => prev.filter((comment) => comment.id !== id))
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedTitleDate} dateTime={publishedAt.toISOString()}>
          {relativeDate}
        </time>
      </header>

      {content.map((line, index) => {
        switch (line.type) {
          case ContentTypeEnum.PARAGRAPH:
            return <p key={index}>{line.content}</p>

          case ContentTypeEnum.LINK:
            return (
              <p key={index}>
                <a href='#'>{line.content}</a>
              </p>
            )

          default:
            return null
        }
      })}

      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <div className={styles.labelContainer}>
          <strong>Deixe seu feedback</strong>
          {comment.length >= MAX_COMMENT_LENGTH ? (
            <span className={styles.error}>{`Limite de ${MAX_COMMENT_LENGTH} caracteres atingido`}</span>
          ) : (
            <span>{`${comment.length}/${MAX_COMMENT_LENGTH}`}</span>
          )}
        </div>

        <textarea
          name='comment'
          value={comment}
          placeholder='Deixe um comentário'
          onChange={handleChangeComment}
          required
        />

        <footer>
          <button type='submit' disabled={!comment}>
            Publicar
          </button>
        </footer>
      </form>

      <div className='commentList'>
        {commentsList.map((comment) => (
          <Comment key={comment.id} comment={comment} onDelete={handleDeleteComment} />
        ))}
      </div>
    </article>
  )
}
