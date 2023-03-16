import { PostProps } from '../components/Post/Post'

export default [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/icaroov.png',
      name: 'Ícaro Oliveira',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-11-18 14:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gaearon.png',
      name: 'Dan Abramov',
      role: 'Senior Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },
      {
        type: 'paragraph',
        content: 'Dont uses Redux anymore!!',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-11-18 08:00:00'),
  },
] as PostProps[]
