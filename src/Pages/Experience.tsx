// @ts-nocheck
import "../App.scss";

import Card from "../Card.tsx";
import HamburgerMenu from "../HamburgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import React from "react";

interface Props {
  navbar: NavBar;
  isMobile: boolean;
}
function Experience({ navbar, isMobile }: Props) {
  const content = (
    <>
      <h1 className="title">Experience</h1>
      <Card
        title="TD Bank at TD Labs"
        desc={
          <p>
            {
              "Created an Accessibility Widget chrome extension that enhances the browsing experience, comprehension, and perception of any website to make it accessible"
            }
            <br />
            <br />
            {
              "I'm also developing a CI/CD Bitbucket pipeline to make tests and deployment efficient"
            }
            <br />
            <br />
            {
              "Using React JS, JavaScript, Tailwind, HTML5, CSS3, SASS, Git, Bitbucket, Cypress, CI/CD Pipeline"
            }
          </p>
        }
      />
      <Card
        title="Entrust"
        desc={
          <p>
            {
              "Advancing the UI/workflow to improve user accessibility and designing solutions to counter multi-factor authentication fatigue attacks for our millions of mobile app and SDK users, as well as developing E2E tests to ensure shipped code works correctly"
            }
            <br />
            <br />
            {
              "Using React Native, JavaScript, TypeScript, Java, Android Studio, Xcode, Jira, Git, Bitbucket, Jenkins, Detox"
            }
          </p>
        }
      />
      <Card
        title="Code Ninjas"
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
      <div className="column2">
        <div className="left-content">{content}</div>
      </div>
      <div className="column">{navbar}</div>
    </div>
  );
}

export default Experience;