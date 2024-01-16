import React from "react";
import { styled } from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import { Header } from "./components/blocks/header/Header";
import { Footer } from "./components/blocks/footer/Footer";
import { Watch } from "./pages/watch/Watch";
import { About } from "./pages/about_us/About";
import { SignIn } from "./pages/register/sign_in/SingIn";
import { SignUp } from "./pages/register/sign_ up/SignUp";
import { Saved } from "./pages/saved/Saved";
const StyledMain = styled.main`
  overflow: hidden:
`

function App() {
  const getItem = (key) => {
    return localStorage.getItem(key);
  };

  const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  };

  React.useEffect(() => {
    const cards = getItem("cards")
    const movie_data = getItem("movie_data")

    if (!cards) setItem("cards", [])
 
    if (!movie_data) setItem('movie_data', {})

  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={ <Root /> } />
        <Route path="/watch" element={ <Watch /> } />
        <Route path="/about-us" element={ <About /> } />
        <Route path="/saved" element={ <Saved /> } />
        <Route path="/sign-in" element={ <SignIn /> } />
        <Route path="/sign-up" element={ <SignUp /> } />
        <Route path="/get-premium" element={ '' } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
