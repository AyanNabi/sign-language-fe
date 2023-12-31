import React from 'react'
import Layout from '../components/Layout/layout'
import WelcomeBg from '../components/home-components/welcomeBg'
import meetTeamSlider from '../components/home-components/meetTeamSlider'
import AboutSlider from '../components/home-components/aboutSlider'
import MeetTeamSlider from '../components/home-components/meetTeamSlider'
import Colloborations from '../components/home-components/colloborations'
import Subscribe from '../components/footer-component/subscribe'

  export default function Home() {
    return(
        <Layout>
          <WelcomeBg></WelcomeBg>
          <AboutSlider></AboutSlider>
          <MeetTeamSlider></MeetTeamSlider>
          <Colloborations></Colloborations>
          <Subscribe></Subscribe>
        
        </Layout>
        
       
    )
}

