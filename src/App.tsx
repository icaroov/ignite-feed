import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'

import './styles/global.css'
import styles from './styles/App.module.css'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
