import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const designs = [
  {
    title: "Kyrie 5 x Bandulu",
    image: "/kyrie5-x-bandulu.jpg",
    link: "/kyrie5-x-bandulu",
    credit: {
      link: "#",
      name: ""
    },
    views: ["Desktop"]
  },
  {
    title: "Nanya Music landing page",
    image: "/nanya-music-landing-page.jpg",
    link: "/nanya-music-by-sky-micheal-ajah",
    credit: {
      link: "https://dribbble.com/naijatechguy",
      name: "Sky Micheal Ajah"
    },
    views: ["Desktop"]
  },
  {
    title: "iFlight a flight search booking landing page",
    image: "/iflight.png",
    link: "/iFlight-A-Flight-Search-Booking-Landing-Page",
    credit: {
      link:
        "https://dribbble.com/shots/8505230-iFlight-A-Flight-Search-Booking-Landing-Page",
      name: "Sky Micheal Ajah"
    },
    views: ["Desktop"]
  }
];
const HomePage: React.FC = () => {
  return (
    <AppWrapper>
   
      <div className="container">
        {designs.map((design, index) => (
          <Link to={design.link} className="card" key={index.toString()}>
            <div>
              <img src={design.image} alt={design.title} />
            </div>
            <div className="p-4">
              <h3>{design.title}</h3>
              {design.credit.name ? (
                <p className="text-gray-600">
                  By{" "}
                  <a
                    href={design.credit.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={ev => {
                      ev.preventDefault();
                      ev.stopPropagation();
                      window.open(design.credit.link, "_blank");
                    }}
                  >
                    {design.credit.name}
                  </a>
                </p>
              ) : null}
              <div className="pt-4">
                {design.views.map(v => (
                  <span
                    className="px-4 py-2 text-base-text rounded-lg mr-4 cursor-pointer hover:shadow-md text-light"
                    style={{
                      background: "#FDFCFA 0% 0% no-repeat padding-box",
                      boxShadow: "0px 2px 4px #00000007"
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AppWrapper>
  );
};
const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  .container {
    display: grid;
    padding: 1em;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 300px));
    grid-template-rows: 300px;
    grid-gap: 1em;
    max-width: 1000px;
    margin: auto;
  }
  .card {
    display: inline-flex;
    flex-direction: column;
    box-shadow: 0 0 7px #cfd8dc73;
    border-radius: 5px;
    padding: 5px;
    &:hover {
      box-shadow: 0 0 7px #cfd8dc;
    }
    > *:first-child {
      height: 50%;
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export default HomePage;
