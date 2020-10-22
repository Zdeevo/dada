import React, {useState} from 'react';
import styles from './bookSmartCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp,
         faArrowCircleDown,
         faImage } from "@fortawesome/free-solid-svg-icons";


const BookSmartCard = (props) => {
    const [count, setCount] = useState(0);
    const reduceCount = () => {
        
      setCount(prevCount => prevCount - 1);
    }
    const increaseCount = () => {
      setCount(addCount => addCount + 1)
    }
    const {
        id,
        Title, 
        Author,
        publishDate,
        Votes,
        Img
    } = props.cardData;

    return (
        <section className={styles.cardContainer}>
            <div className={styles.bookSmartInfo}>
                <h3 className={styles.bookTitle}>{Title}</h3>
                <p className={styles.bookAuthor}>{Author}, {publishDate}</p>
                <div className={styles.bookSmartVotes}>
                    <span onClick={increaseCount} class="voteIcon"><FontAwesomeIcon icon={faArrowCircleUp} /></span>
                    <h5 className={styles.voteCounter}>{count}</h5>
                    <span onClick={reduceCount} class="voteIcon"><FontAwesomeIcon icon={faArrowCircleDown} /></span>


                </div> 
            </div> 
            <div className={styles.bookSmartImage}>
                {/* <img src={Img} alt="book-cover-image"></img> */}
                <span class={styles.imagePlaceholder}><FontAwesomeIcon icon={faImage} /></span>
            </div>    
        </section>
    )
} 

export default BookSmartCard;