'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Container from '../container/Container';
import styles from './ScrollToTop.module.scss'
import toTop from '@/assets/svg/toTop.svg'

interface Props {}
const ScrollToTop = (props: Props) => {
  const [show, setShow] = useState(false)
  const showLength = 300

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > showLength){
      setShow(true)
    } 
    else if (scrolled <= showLength){
      setShow(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, [])
  

  return (
    <Container className={`${styles.scrollButton} ${show && styles.scrollButton__show}`}>
      <button className={styles.scrollButton__button} onClick={scrollToTop}><Image src={toTop} alt='Go to top' /></button>
    </Container>
  )
}
export default ScrollToTop