import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Steps2 from '../components/steps2'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Foolish Practical Stork</title>
        <meta property="og:title" content="Foolish Practical Stork" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10 thq-body-small thq-link">/home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11 thq-body-small thq-link">
              /safety-tips
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12 thq-body-small thq-link">
              /emergency-contacts
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13 thq-body-small thq-link">
              /resources
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15 thq-body-large">Safety Tips</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16 thq-body-large">
              Emergency Contacts
            </span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17 thq-body-large">Resources</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text24 thq-heading-2">
              Stay Aware of Your Surroundings
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text25 thq-heading-2">
              Share Your Location
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text26 thq-heading-2">
              Learn Self-Defense Techniques
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text27 thq-heading-2">
              Report Suspicious Activity
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text28 thq-body-small">
              Always be mindful of the people around you and your environment.
              Trust your instincts if you feel unsafe.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text29 thq-body-small">
              Let a trusted friend or family member know your whereabouts,
              especially when going out alone or to unfamiliar places.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text30 thq-body-small">
              Consider taking self-defense classes to empower yourself with
              skills that can help you protect against potential threats.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text31 thq-body-small">
              If you notice any suspicious behavior or feel threatened,
              don&apos;t hesitate to report it to the authorities or seek help.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text32 thq-body-small">Safety Tips</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text33 thq-body-small">
              Emergency Contacts
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text34 thq-body-small">
              Self-Defense Classes
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text35 thq-body-small">Report Abuse</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text36 thq-body-small">
              Support Resources
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text37 thq-body-small">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text38 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text39 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
