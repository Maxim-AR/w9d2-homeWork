import React, { useEffect, useState } from 'react';


import api from './utils/api';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { List } from './components/List';
import Logo from './components/Logo';
import { Routes, Route, Link } from "react-router-dom";
import {OnePost} from './components/OnePost'
import './index.css';
import { Info } from './components/Info';
import { ButtonNewPost } from './components/Button';

export const App = () => {
    const [postList, setPostList] = useState(null);
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);


    useEffect(() => {
        api.getPosts().then((list) => setPostList(list))
    }, [])

    useEffect(() => {
        api.getCurentUser().then((user) => setUser(user));
    }, [])

    return (
        <div className='appContainer'>
            <Header>
                <Logo />
                <Info name={user?.name} />
                <ButtonNewPost />
            </Header>
            <div>
                <Routes>
                    <Route path="/" element={<List list={postList} favorites={favorites} setFavorites={setFavorites} />} />
                    <Route path="post/:itemID" element={<OnePost changeList={setPostList}  />} />
                    <Route path="about" element={<div>PAGE ABOUT</div>} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};
