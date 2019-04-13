import React from 'react'

import styles from './PageLayout.module.css'

export function PageLayout(props) {
  return <div className={styles.container}>{props.children}</div>
}
