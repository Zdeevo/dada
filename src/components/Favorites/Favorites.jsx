import React, { useState, useEffect } from "react";
import styles from "./Favorites.module.scss";
import FavoritesVideoList from "../FavoritesVideoList";
import FavoritesArticleList from "../FavoritesArticleList";

import BottomNavBar from "../../components/BottomNavBar";

const Favorites = (props) => {

  const [filterChosen, setFilterChosen] = useState("");
  const [toggleList, setToggleList] = useState(true);   
  
  const user = props.user;
  
  
  const showClickedList = toggleList ?
    <FavoritesVideoList filterChosen={filterChosen} user={user} /> :
    <FavoritesArticleList filterChosen={filterChosen} user={user} />

  const showButtons = toggleList ?
    <>
      <button className={styles.secondaryBtn} onClick={() => setToggleList(true)}>Videos</button>
      <button className={styles.primaryBtn} onClick={() => setToggleList(false)}>Articles</button>
    </> :
    <>
      <button className={styles.primaryBtn} onClick={() => setToggleList(true)}>Videos</button>
      <button className={styles.secondaryBtn} onClick={() => setToggleList(false)}>Articles</button>
    </>

  const showFilterAll = filterChosen === "" ?
    <li><span className={styles.filterOn} onClick={() => setFilterChosen("")}>ALL</span></li>
    : <li><span onClick={() => setFilterChosen("")}>ALL</span></li>

  const showFilterIndoor = filterChosen === "indoor" ?
    <li><span className={styles.filterOn} onClick={() => setFilterChosen("indoor")}>INDOOR</span></li>
    : <li><span onClick={() => setFilterChosen("indoor")}>INDOOR</span></li>

  const showFilterOutdoor = filterChosen === "outdoor" ?
    <li><span className={styles.filterOn} onClick={() => setFilterChosen("outdoor")}>OUTDOOR</span></li>
    : <li><span onClick={() => setFilterChosen("outdoor")}>OUTDOOR</span></li>

  const showFilterSocialSkills = filterChosen === "social skills" ?
    <li><span className={styles.filterOn} onClick={() => setFilterChosen("social skills")}>SOCIAL SKILLS</span></li>
    : <li><span onClick={() => setFilterChosen("social skills")}>SOCIAL SKILLS</span></li>

  const showFilterLanguage = filterChosen === "language" ?
    <li><span className={styles.filterOn} onClick={() => setFilterChosen("language")}>LANGUAGE</span></li>
    : <li><span onClick={() => setFilterChosen("language")}>LANGUAGE</span></li>

  const showFilterStrength = filterChosen === "strength" ?
    <li><span className={styles.filterOn} onClick={() => setFilterChosen("strength")}>STRENGTH</span></li>
    : <li><span onClick={() => setFilterChosen("strength")}>STRENGTH</span></li>

    useEffect(() => {

    }, [filterChosen]);

  return (
    <>
      <div className={styles.smHeader}>
        <h1>Favorites</h1>
      </div>
      <div className={styles.pageContainer}>
        <div className={styles.btnContainer}>{showButtons}</div>
        <div className={styles.filterTagsContainer}>
          <ul className={styles.filterTags}>
            {showFilterAll}
            {showFilterIndoor}
            {showFilterOutdoor}
            {showFilterSocialSkills}
            {showFilterLanguage}
            {showFilterStrength}
          </ul>
        </div>
        <div>{showClickedList}</div>
      </div>
      <BottomNavBar />
    </>
  );
};
export default Favorites;
