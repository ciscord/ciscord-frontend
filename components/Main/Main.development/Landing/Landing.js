import Head from 'next/head';
import * as S from './Landing.styled';
import "./index2.css"

export default ({ children }) => (
  <S.Container>
    <div>
      <div className="first-block">
        <h1>Community for any websites.</h1>
        <p>
        Save time building community pages. You can easily build your perfect community.
        </p>
        <a href="https://shants-tech.com" target="_blank">
          Watch Demo
        </a>
        <img src={'/assets/img/index2-img/user-left1.png'} alt="" />
        <img src={'/assets/img/index2-img/user-left2.png'} alt="" />
        <img src={'/assets/img/index2-img/user-left3.png'} alt="" />
        <img src={'/assets/img/index2-img/user-left4.png'} alt="" />
        <img src={'/assets/img/index2-img/user-left5.png'} alt="" />
        <img src={'/assets/img/index2-img/user-right1.png'} alt="" />
        <img src={'/assets/img/index2-img/user-right2.png'} alt="" />
        <img src={'/assets/img/index2-img/user-right3.png'} alt="" />
        <img src={'/assets/img/index2-img/user-right4.png'} alt="" />
        <img src={'/assets/img/index2-img/user-right5.png'} alt="" />
      </div>
      {/* first block end */}
      {/* second block */}
      <div className="second-block">
        <h2>Fast. Covenient. Effortless.</h2>
        <div className="second-block__wrapper">
          <ul className="second-block__tabs">
            <li>
              Over 20
              <br />
              Communities
            </li>
            <li>
              Ask, Interview
              <br />
              &amp; Learn
            </li>
            <li className="active">
              Third Party
              <br />
              Integrations
            </li>
            <li>
              API
              <br />
              Support
            </li>
            <li>
              Export Your
              <br />
              Data
            </li>
          </ul>
          <div className="second-block__slider">
            <img
              src={'assets/img/index2-img/second-block-img.png'}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* second block end */}
      {/* third block */}
      <div className="third-block__wrapper">
        <div className="third-block">
          <h3>A better way for community</h3>
          <p>Here are some ways we can help you build community.</p>
          <div className="third-block__row">
            <ul>
              <li className="caption calendar">Finding problems</li>
              <li>
                Most of business websites want to build community pages, but it will take effort to develop <br />
              </li>
            </ul>
            <ul>
              <li className="caption control">Finding solutions</li>
              <li>
                Discord can be a community platform for startups, but 
                users don't like manage his discord account <br />
              </li>
            </ul>
            <ul>
              <li className="caption flexible">Generate ideas</li>
              <li>
                We are here to build community plugin for any websites
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* third block end */}
      {/* fourth block */}
      <div className="fourth-block">
        <div className="fourth-block__wrapper">
          <h4>
            Understand diversity and
            <br />
            be what people need
          </h4>
          <p>
            Every community is different. Engage and <br /> convert users into
            fans.
          </p>
        </div>
      </div>
      {/* fourth block end */}
      {/* fifth block */}
      <div className="fifth-block">
        <h5>Secure. Scalable. Efficient.</h5>
        <div className="fifth-block__info">
          <div className="info-block">
            <p>
              Secure your privacy and data
              <br />
              with Ciscord
            </p>
            <span>
              With Ciscord, your data is secured beyond global security and
              privacy standards.
            </span>
          </div>
          <div className="info-block">
            <p>
              Automate your research
              <br />
              and feedback collection
            </p>
            <span>
              Use our tools to automate all your campaigns, so you can turn
              hours of research into minutes.
            </span>
          </div>
          <div className="info-block">
            <p>
              Scalable pricing to help you run more research at lower cost.
              <br />
            </p>
            <span>
              Get more research done, so you can generate more value and save
              cost.
            </span>
          </div>
        </div>
      </div>
      {/* fifth block end */}
      {/* sixth block */}
      <div className="sixth-block">
        <div className="sixth-block__wrapper">
          <h6>Find your solution</h6>
          <p>Experience the best way to do research.</p>
          <a href="https://shants-tech.com">Watch Demo</a>
        </div>
      </div>
      {/* sixth block end */}
    </div>
    {children}
  </S.Container>
);
