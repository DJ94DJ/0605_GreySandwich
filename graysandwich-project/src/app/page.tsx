// 메인 페이지

import Image from 'next/image';
import styles from './page.module.css';
import Todo from './todo/todo';

export default function Home() {
  return (
    <>
      <h2>Gray Sandwich</h2>
      메인 페이지
      <Todo />
    </>
  );
}
