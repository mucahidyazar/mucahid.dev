/* eslint-disable react/react-in-jsx-scope */
import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

interface Container {
  children: any
}

const Container: FunctionComponent<Container> = ({ children, ...props }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container;