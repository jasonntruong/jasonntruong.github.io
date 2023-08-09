// @ts-nocheck
import "../App.scss";

import Card from "../Card.tsx";
import { FadeIn } from "react-slide-fade-in";
import HamburgerMenu from "../HamburgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import React from "react";
import { makeLink } from "../Helpers.tsx";

interface Props {
  navbar: NavBar;
  isMobile: boolean;
}
function Experience({ navbar, isMobile }: Props) {
  const content = (
    <>
      <h1 className="title">Experience</h1>
      <Card
        title="Coursera - Incoming Software Engineer Intern"
        desc={<p>{"Incoming ..."}</p>}
      />
      <Card
        title="GetQuorum - Junior Software Developer Intern"
        desc={
          <p>
            {
              " Optimized CircleCI CI/CD pipeline by decoupling and distributing 3000+ tests across 4 parallel processing environments, resulting in 200% faster average end-to-end test time and faster feedback loops"
            }
            <br />
            <br />
            {
              "Developing JOI validation schemas and Vuetify text field rules to ensure data entry quality for the SQL database"
            }
            <br />
            <br />
            {
              "Technologies: Vue.js, JavaScript, Vuetify, ExpressJS, AWS SQS and S3, Twilio, Git, CircleCI, MySQL, and Kanban"
            }
          </p>
        }
      />
      <Card
        title="TD Bank at TD Lab - Software Developer Intern"
        desc={
          <p>
            {"Architected and scaled the new "}
            {makeLink(
              "TD Adapted Accessibility tool",
              "https://ca.finance.yahoo.com/news/td-launches-accessibility-tool-drive-100000726.html?guccounter=1"
            )}
            {
              ", a browser plugin with settings to manipulate any website’s UI to the needs of 1000+ TD employees - with planned distribution for 27+ million TD customers"
            }
            <br />
            <br />
            {
              "Streamlined and automated E2E testing to achieve faster testing by developing Cypress test cases that run in a Bitbucket CI/CD pipeline leveraging Docker images, artifacts, cache, and parallelization strategies"
            }
            <br />
            <br />
            {
              "Implemented front-end, text-to-speech, and user profiles by refactoring codebase to ReactJS, Redux, and Tailwind"
            }
            <br />
            <br />
            {
              "Technologies: : ReactJS, JavaScript, Redux, Tailwind, HTML5, CSS3, SASS, Git, Bitbucket, Cypress, and Agile"
            }
          </p>
        }
      />
      <Card
        title="Entrust - Mobile Software Developer Intern"
        desc={
          <p>
            {
              "Spearheaded development of multi-factor authentication solutions for the "
            }
            {makeLink(
              "mobile app",
              "https://play.google.com/store/apps/details?id=com.entrust.identityGuard.mobile&hl=en_CA&gl=US&pli=1"
            )}
            {
              " and SDK, protecting 1,000,000+ users from MFA fatigue by implementing security challenges users complete with validated devices"
            }
            <br />
            <br />
            {
              "Redesigned camera and QR code functionalities by integrating new React Native packages and improving resource management, resulting in CPU utilization for the mobile app, deprecating old packages"
            }
            <br />
            <br />
            {
              "Overhauled push notification system by refactoring APNS and API functions to fix app-breaking Android 13 update"
            }
            <br />
            <br />
            {
              "Technologies: React Native, TypeScript, Java, Swift, Android Studio, Xcode, Jira, Git, Bitbucket, Jenkins, and Detox"
            }
          </p>
        }
      />
      <Card
        title="Code Ninjas - Coding Instructor"
        desc={
          <p>
            {
              "Responsible for the engagement and education of complex programming concepts for over 30 elementary school students"
            }
            <br />
            <br />
            {
              "Organizing lessons in Java, JavaScript, Roblox, Lua, HTML, and CSS to train young elementary students’ programming logic and thinking skills"
            }
          </p>
        }
      />
      <br />
    </>
  );

  if (isMobile) {
    return (
      <div>
        <HamburgerMenu />
        <div className="mobileInfo">{content}</div>
      </div>
    );
  }
  return (
    <div className="row">
      <FadeIn>
        <div className="column2">
          <div className="left-content">{content}</div>
        </div>
      </FadeIn>
      <div className="column">{navbar}</div>
    </div>
  );
}

export default Experience;
