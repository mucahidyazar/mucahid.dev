/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

interface titleInterface {
  first: string;
  second: string;
}

const Title: FunctionComponent<titleInterface> = ({ first, second }) => {
  return (
    <h3 className={styles.title}><span>{first}</span> {second}</h3>
  )
}

export default Title;