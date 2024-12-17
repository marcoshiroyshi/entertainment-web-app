import React from 'react'
import { AsideNav, Container, HomePage } from './styles'
import Search from '../components/SearchInput/Search'
import Trending from '../components/Trending/Trending'
import Recommended from '../components/Recommended/Recommended'

function Home() {
  return (
    <Container>
        <AsideNav>
            <img src="/logo.svg" alt="logo"/>
            <div>
              <img src="/icon-nav-home.svg" alt="logo"/>
              <img src="/icon-nav-movies.svg" alt="logo"/>
              <img src="/icon-nav-tv-series.svg" alt="logo"/>
              <img src="/icon-nav-bookmark.svg" alt="logo"/>
            </div>
        </AsideNav>
        <HomePage>
          <Search/>
          <Trending/>
          <Recommended/>
        </HomePage>
    </Container>
  )
}

export default Home