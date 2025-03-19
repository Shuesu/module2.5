import { useState } from "react";
import styles from './controlPanel.module.css'
import { Button } from '../button/button'

export const ControlPanel = ({ onTodoAdd }) => {
   const [searchPhrase, setSearchPhrase] = useState('');
   const [isSortingEnabled, setIsSortingEnabled] = useState(false);

   const onSearchPhraseChange = (target) => {
      setSearchPhrase(target.value);
   }
   const onSortingChange = (target) => {
      setIsSortingEnabled(target.value);
   }

   return (
      <div className={styles.controlPanel}>
         < input
            className={styles.search}
            type="text"
            value={searchPhrase}
            placeholder="Поиск..."
            onChange={onSearchPhraseChange}
         />
         < input
            className={styles.sortingButton}
            type="checkbox"
            checked={isSortingEnabled}
            onChange={onSortingChange}
         />
         < Button onClick={onTodoAdd}>
            ✚
         </Button>
      </div >
   )
}