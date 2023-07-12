'use client'
import styles from './UserGallery.module.scss'
import { UserPreview } from '@/types/userPreview'
import UserCard from './UserCard'
import { useEffect } from 'react'

interface Props {}

const users:UserPreview[] =[
  { avatar: '1.jpg', name: 'Alex', age: 21, place: 'Israel, Haifa' },
  { avatar: '2.jpg', name: 'Kate', age: 32, place: 'USA, New York' },
  { avatar: '3.jpg', name: 'Jessy', age: 28, place: 'Spain, Madrid' },
  { avatar: '4.jpg', name: 'Mona', age: 40, place: 'Israel, Tel Aviv' },
  { avatar: '5.jpg', name: 'Jane', age: 31, place: 'USA, Chicago' },
  { avatar: '6.jpg', name: 'Maxine', age: 22, place: 'Canada, Toronto' },
  { avatar: '7.jpg', name: 'Serge', age: 44, place: 'Spain, Barcelona' },
  { avatar: '8.jpg', name: 'Lacey', age: 19, place: 'Portugal, Lisbon' },
  { avatar: '9.jpg', name: 'Nami', age: 30, place: 'UK, London' },
  { avatar: '10.jpg', name: 'John', age: 21, place: 'USA, San Diego' },
  { avatar: '11.jpg', name: 'Toma', age: 43, place: 'Germany, Berlin' },
  { avatar: '12.jpg', name: 'Raily', age: 37, place: 'Portugal, Lisbon' },
  { avatar: '13.jpg', name: 'Jin', age: 29, place: 'Germany, Hamburg' },
  { avatar: '14.jpg', name: 'Michael', age: 33, place: 'UK, Bristol' },
  { avatar: '15.jpg', name: 'Ness', age: 22, place: 'USA, San Francisco' },
  { avatar: '16.jpg', name: 'Iren', age: 19, place: 'Canada, Vancouver' },
  { avatar: '17.jpg', name: 'Barry', age: 30, place: 'Spain, Grenada' },
  { avatar: '18.jpg', name: 'Joane', age: 19, place: 'Israel, Jerusalem' },
]

const UserGalley = (props: Props) => {
  useEffect(() => {
    const element = document.getElementById('usersGallery')
    
    if (element !== null) { 
      if (window.innerWidth > 720) {
        element.scrollLeft = (element.scrollWidth -window.innerWidth) / 2
      } else {
        element.scrollLeft = (((element.scrollWidth + 16) / 2) - window.innerWidth) / 2
      }
    }
  }, [])
  return (
    <div className={styles.container} id='usersGallery'>
      {users.map((user, id) => <UserCard key={id} user={user} id={id} />)}
    </div>
  )
}
export default UserGalley