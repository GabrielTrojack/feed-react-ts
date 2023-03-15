import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'


import styles from "./App.module.css";
import './global.css'

const posts:PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GabrielTrojack.png',
      name: 'Gabriel Trojack',
      role: 'O monocromike '
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcar', },
    ],
    publishedAt: new Date('2022-05-09 17:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/GabrielTrojack.png',
      name: 'Monocromacromike ',
      role: 'Ele mesmo o gabriel'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcar', },
    ],
    publishedAt: new Date('2022-06-09 07:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>

  )
}
