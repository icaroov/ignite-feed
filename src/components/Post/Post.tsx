import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'

import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/icaroov.png' />

          <div className={styles.authorInfo}>
            <strong>Ícaro Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='19 de Julho as 14:23h' dateTime='2022-07-19 14:21:30'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>
          <a href='#'>Join Us</a>
        </p>
        <p className={styles.tags}>
          <a href='#'>#novoprojeto</a>
          <a href='#'>#novo</a>
          <a href='#'>#react</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário'></textarea>

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className='commentList'>
        <Comment />
      </div>
    </article>
  )
}
