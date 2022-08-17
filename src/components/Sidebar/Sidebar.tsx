import { PencilLine } from 'phosphor-react'

import { Avatar } from '../Avatar/Avatar'

import styles from './Sidebar.module.css'

const sourceImg =
  'https://images.unsplash.com/photo-1658208193219-e859d9771912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={sourceImg} />

      <div className={styles.profile}>
        <Avatar src='https://github.com/icaroov.png' />

        <strong>Ícaro Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
