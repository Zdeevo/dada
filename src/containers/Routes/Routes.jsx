import React from "react";
import { Router } from "@reach/router";

import Categories from "../../components/Categories";
import SignUp from "../../components/sign-up/register";
import AddChick from "../../components/addChick/AddChick";
import ActivityIdeas from "../../components/Categories/ActivityIdeas";
import VideoList from "../../components/Categories/VideoList";
import ArticleList from "../../components/Categories/ArticleList";

import InputData from "../../components/data/Input";



const Routes = () => {
    return(
        <Router>
            <Categories path="categories" />
            <SignUp path="sign-up" />
            <AddChick path="add-chick" InputData={InputData} />
            <ActivityIdeas path="activity-ideas" />
            <VideoList path="video-list" />
            <ArticleList path="article-list" />
        </Router>
    )
}

export default Routes;