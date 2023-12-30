import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import DictionaryAlphabet from './pages/dictionaryAlphabet';
import Blog from './pages/blog';
import LogIn from './pages/login';
import SignUp from './pages/signUp';
import UniquePage from './pages/uniquePage';
import Faq from './pages/faq';
import Contact from './pages/contact';
import CategoryWords from './pages/categoryWords';
import Profile from './pages/profile';

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>

        <Route index element={<Home/>} />
        <Route path="/dictionary" element={<DictionaryAlphabet/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/sign" element={<SignUp/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<Profile/>}/>

        <Route path="/category/:categoryId/words" element={<CategoryWords/>}/>
        <Route path="/category/:categoryId/words/:wordId" element={<UniquePage/>}/>

       
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
