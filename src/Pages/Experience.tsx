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
        title="theScore / ESPN - Software Engineer Intern"
        desc={
          <p>
            {
              "Developed components for launch of a new critical rewards feature that led to a increase in user bets, driving substantial improvements in user engagement and platform revenue by collaborating with 4 cross-functional product teams"
            }
            <br />
            <br />
            {
              "Redesigned key features during product rebranding using React, TypeScript, Tailwind, and GraphQL, resulting in a significantly enhanced user experience for more than 5 million active users across web platforms"
            }
            <br />
            <br />
            {
              "Optimized analytic pipelines to track millions of transactions daily, enhancing reporting insights"
            }
          </p>
        }
      />
      <Card
        title="Coursera - Software Engineer Intern"
        desc={
          <p>
            {
              "Engineered full-stack React admin dashboard with GraphQL queries + mutations using SSM AWS Parameter Store and Jenkins API to allow developers to configure deployments, E2E tests, and manage IAM roles during incidents"
            }
            <br />
            <br />
            {
              "Added GPT-4, Claude, + Bard LLMs to increase chat quality & length by 5000% for self-hosted AI chatbot in Next.js"
            }
            <br />
            <br />
            {
              "Optimized GitHub actions to manage CODEOWNERS on 200% more components, improving cross-team PR review"
            }
          </p>
        }
      />
      <Card
        title="GetQuorum - Junior Software Developer Intern"
        desc={
          <p>
            {
              "Created full-stack Vue.js page to manage outsourced print vendors with ExpressJS REST API and PostgreSQL table"
            }
            <br />
            <br />
            {
              "Developed SQS system to automate bulk S3 file operations with Lambda functions for seamless data management"
            }
            <br />
            <br />
            {
              "Reduced CircleCI CI/CD end-to-end test time by 200% by decoupling 3000+ tests across 4 parallel environments"
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
            {"Architected end-to-end the new "}
            {makeLink(
              "TD Accessibility Adapter",
              "https://chrome.google.com/webstore/detail/td-accessibility-adapter/gojenooamlnamkmglonclikkdnakpjoe/related"
            )}
            {
              ", a Chrome extension with settings to increase accessibility of any website’s UI - scaled from whiteboard to pilot with 95,000+ TD employees to official release"
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
