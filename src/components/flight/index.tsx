import React from "react";
import styled from "styled-components";
type ILink = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type IButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

const LinkButton: React.FC<ILink> = props => (
  <a className="px-4 text-base-text" {...props}></a>
);
const LogoButton: React.FC<ILink> = props => (
  <a
    className="h-16 w-32 bg-red text-white inline-flex justify-center items-center rounded shadow-md font-extrabold heebo-extrabold"
    {...props}
  ></a>
);
const TagButton: React.FC<ILink> = props => (
  <a
    className="px-4 py-2 text-base-text rounded-lg mr-4 cursor-pointer hover:shadow-md text-light"
    style={{
      background: "#FDFCFA 0% 0% no-repeat padding-box",
      boxShadow: "0px 2px 4px #00000007"
    }}
    {...props}
  ></a>
);
interface ICategoryButton extends IButton {
  active?: boolean;
}
const CategoryButton: React.FC<ICategoryButton> = props => (
  <button
    className={`bg-transparent px-4 h-full inline-flex items-center text-sm sm:w-1/6 ${
      props.active ? "text-red" : " text-light"
    }`}
    {...props}
  ></button>
);
const Flight: React.FC = () => {
  return (
    <Container className="flex flex-wrap w-full h-full text-base-text fixed overflow-y-auto">
      <div className="flex  w-full" style={{ height: "calc(100% - 4rem)" }}>
        <div className="h-full w-1/2">
          <nav className="flex justify-between items-center px-8 h-16">
            <div>
              <LogoButton href="#">iFlight</LogoButton>
            </div>
            <div className="flex items-center h-full justify-center h-full">
              <LinkButton href="">How it Works</LinkButton>
              <LinkButton href="">Find a Flight</LinkButton>
              <LinkButton href="">Login</LinkButton>
              <LinkButton href="" className="text-red">
                Sign Up
              </LinkButton>
            </div>
          </nav>
          <main className="flex flex-1 flex-col justify-center h-full px-8">
            <h1 className=" font-black text-4xl heebo-medium text-black">
              Find Flights Heading To <br /> Any Destination
            </h1>
            <div className="flex h-16 sm:w-5/6 shadow-md hover:shadow-lg rounded-lg mt-10 rounded overflow-hidden">
              <div className="flex-1 flex h-full items-center">
                <span className="px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                  >
                    <path
                      fill="#72767D"
                      d="M58,780.6l-8-2.5v5.5l2,1.5v1.5l-3.5-1-3.5,1v-1.5l2-1.5v-5.5l-8,2.5v-2l8-5v-5.5a1.5,1.5,0,0,1,.4-1.1,1.5,1.5,0,0,1,2.6,1.1v5.5l8,5Z"
                      transform="translate(786.6 -39) rotate(90)"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="flex flex-1 h-full text-base outline-transparent"
                  placeholder="Enter A Destination"
                />
                <span className="px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.137"
                    height="14.137"
                    viewBox="0 0 14.137 14.137"
                  >
                    <path
                      fill="#72767D"
                      d="M7.7,14.137H6.437V12.813A5.549,5.549,0,0,1,4,11.966a5.9,5.9,0,0,1-1.817-1.825A5.754,5.754,0,0,1,1.324,7.7H0V6.437H1.324A5.755,5.755,0,0,1,2.187,4,5.9,5.9,0,0,1,4,2.171a5.548,5.548,0,0,1,2.433-.847V0H7.7V1.324a5.606,5.606,0,0,1,2.441.847A5.881,5.881,0,0,1,11.966,4a5.6,5.6,0,0,1,.847,2.441h1.324V7.7H12.813a5.606,5.606,0,0,1-.847,2.441,5.881,5.881,0,0,1-1.825,1.825,5.6,5.6,0,0,1-2.441.847v1.324ZM7.069,2.587a4.44,4.44,0,0,0-2.264.6A4.549,4.549,0,0,0,3.188,4.8a4.566,4.566,0,0,0,0,4.528A4.549,4.549,0,0,0,4.8,10.949a4.566,4.566,0,0,0,4.528,0,4.549,4.549,0,0,0,1.617-1.617,4.566,4.566,0,0,0,0-4.528A4.549,4.549,0,0,0,9.333,3.188,4.44,4.44,0,0,0,7.069,2.587Z"
                    />
                  </svg>
                </span>
              </div>
              <button className="heebo-medium bg-red text-white w-32 inline-flex justify-center items-center">
                Find Flight
              </button>
            </div>
            <div className="mt-12">
              <TagButton>Abuja to Lagos</TagButton>
              <TagButton>Uyo</TagButton>
              <TagButton>Owerri to Lagos</TagButton>
              <TagButton>Abuja To PH</TagButton>
            </div>
          </main>
        </div>
        <div className="banner w-1/2 h-full flex"></div>
      </div>
      <footer
        className="h-16 flex w-full px-8"
        style={{ backgroundColor: "#00000009" }}
      >
        <div className="flex items-center h-full w-full">
          <CategoryButton active={true}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
            >
              <rect fill="currentColor" width="6" height="6" rx="3" />
              <rect
                fill="currentColor"
                width="6"
                height="6"
                rx="3"
                transform="translate(0 8)"
              />
              <rect
                fill="currentColor"
                width="6"
                height="6"
                rx="3"
                transform="translate(0 17)"
              />
              <rect
                fill="currentColor"
                width="6"
                height="6"
                rx="3"
                transform="translate(9)"
              />
              <rect
                fill="currentColor"
                width="6"
                height="6"
                rx="3"
                transform="translate(9 8)"
              />
              <rect
                fill="currentColor"
                width="6"
                height="6"
                rx="3"
                transform="translate(9 17)"
              />
              <rect
                fill="currentColor"
                width="6"
                height="6"
                rx="3"
                transform="translate(17)"
              />
              <rect
                fill="currentColor"
                width="6"
                height="6"
                rx="3"
                transform="translate(17 8)"
              />
              <rect
                fill="currentColor"
                width="6"
                height="6"
                rx="3"
                transform="translate(17 17)"
              />
            </svg>
            <span className="ml-6">All Categories</span>
          </CategoryButton>
          <CategoryButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.5"
              height="17.6"
              viewBox="0 0 17.5 17.6"
            >
              <path
                fill="currentColor"
                d="M15.5,1161.4l5,5-1.5,1.5-5-5v-.8l-.3-.3a6.362,6.362,0,0,1-4.2,1.5,6.039,6.039,0,0,1-4.6-1.9,6.6,6.6,0,0,1-1.9-4.6,6.039,6.039,0,0,1,1.9-4.6,6.6,6.6,0,0,1,4.6-1.9,6.19,6.19,0,0,1,4.6,1.9,6.6,6.6,0,0,1,1.9,4.6,6.361,6.361,0,0,1-1.5,4.2l.3.3h.7Zm-9.2-1.3a4.224,4.224,0,0,0,3.2,1.3,4.377,4.377,0,0,0,3.2-1.3,4.588,4.588,0,0,0,0-6.4,4.224,4.224,0,0,0-3.2-1.3,4.377,4.377,0,0,0-3.2,1.3,4.224,4.224,0,0,0-1.3,3.2A4.626,4.626,0,0,0,6.3,1160.1Z"
                transform="translate(-3 -1150.3)"
              />
            </svg>
            <span className="ml-6">Find Flights</span>
          </CategoryButton>
          <CategoryButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.543"
              height="34.291"
              viewBox="0 0 33.543 34.291"
            >
              <g transform="translate(-20.7 -10)">
                <g transform="translate(20.7 10)">
                  <path
                    fill="currentColor"
                    d="M612.985-500.943c-.194.032-.226.065-.194.21.024.1.073.388.105.647l.057.477.242-.049a3.962,3.962,0,0,1,.59-.049h.356V-501l-.461.008C613.421-500.984,613.106-500.959,612.985-500.943Z"
                    transform="translate(-592.062 501)"
                  />
                  <path
                    fill="currentColor"
                    d="M721.192-488.916a5.569,5.569,0,0,0-.162.606,4.779,4.779,0,0,0,1.1.4,7.332,7.332,0,0,0,.517-1.132,6.246,6.246,0,0,0-1.246-.4A2.423,2.423,0,0,0,721.192-488.916Z"
                    transform="translate(-696.525 489.854)"
                  />
                  <path
                    fill="currentColor"
                    d="M502.421-479.455l-.5.251.251.558a1.47,1.47,0,0,0,.324.55,4.84,4.84,0,0,0,1.027-.469c0-.024-.073-.291-.162-.59C503.165-479.811,503.133-479.819,502.421-479.455Z"
                    transform="translate(-485.082 480.442)"
                  />
                  <path
                    fill="currentColor"
                    d="M168.62-444.883v.647h6.47v-1.294h-6.47Z"
                    transform="translate(-163.444 447.471)"
                  />
                  <path
                    fill="currentColor"
                    d="M816.36-440.781l-.34.534.178.121a4.045,4.045,0,0,1,.437.356c.138.129.291.226.331.21a3.349,3.349,0,0,0,.453-.477l.38-.445-.348-.307a4.549,4.549,0,0,0-.558-.421C816.691-441.314,816.683-441.306,816.36-440.781Z"
                    transform="translate(-788.191 443.353)"
                  />
                  <path
                    fill="currentColor"
                    d="M406.961-422.4l-.5.469.493.437.493.429.437-.429.437-.437-.421-.469-.429-.477Z"
                    transform="translate(-392.962 425.613)"
                  />
                  <path
                    fill="currentColor"
                    d="M168.62-369.022v2.548h1.294v-1.051c0-1.019.008-1.068.2-1.254.194-.2.21-.2,1.739-.2s1.545,0,1.739.2c.194.186.2.234.2,1.254v1.051h1.294v-5.1h-6.47Z"
                    transform="translate(-163.444 376.099)"
                  />
                  <path
                    fill="currentColor"
                    d="M891.514-359.719c-.242.162-.477.324-.518.356s.089.283.267.558l.34.493.566-.291c.316-.154.558-.307.542-.348a8.537,8.537,0,0,0-.712-1.06A3.538,3.538,0,0,0,891.514-359.719Z"
                    transform="translate(-860.539 364.943)"
                  />
                  <path
                    fill="currentColor"
                    d="M242.58-260.014v.606h1.294v-1.213H242.58Z"
                    transform="translate(-234.816 269.031)"
                  />
                  <path
                    fill="currentColor"
                    d="M936.686-255.6a4.39,4.39,0,0,0-.518.194,3.806,3.806,0,0,0,.073.6c.1.574.105.582.324.542.121-.024.413-.073.639-.105l.421-.057-.049-.332c-.1-.631-.218-1.019-.315-1.011A4.635,4.635,0,0,0,936.686-255.6Z"
                    transform="translate(-904.134 264.354)"
                  />
                  <path
                    fill="currentColor"
                    d="M21.274-188.833a1.269,1.269,0,0,0-.421.38c-.146.234-.154.461-.154,3.138v2.9h3.866l.033-1.2a3.492,3.492,0,0,1,.178-1.472,2.516,2.516,0,0,1,.979-.995c.315-.17.4-.178,3.356-.178,2.976,0,3.041,0,3.364.178a2.467,2.467,0,0,1,.623.518c.436.51.542.906.542,2.111v1.035h3.882v-2.855c0-3.187-.008-3.259-.566-3.551-.267-.138-.663-.146-7.845-.146C22.22-188.97,21.525-188.954,21.274-188.833Z"
                    transform="translate(-20.7 199.888)"
                  />
                  <path
                    fill="currentColor"
                    d="M939.246-142.75a4.783,4.783,0,0,1-.1.6c-.024.1.121.162.606.291l.647.17.041-.291c.178-1.189.234-1.092-.615-1.181l-.526-.057Z"
                    transform="translate(-907.009 155.739)"
                  />
                  <path
                    fill="currentColor"
                    d="M169.025-75.864c-.332.17-.4.421-.4,1.488v.995h6.47v-.971c0-1.06-.073-1.327-.413-1.5A33.844,33.844,0,0,0,169.025-75.864Z"
                    transform="translate(-163.444 90.851)"
                  />
                  <path
                    fill="currentColor"
                    d="M902.369-40.555a1.492,1.492,0,0,0-.226.558,3.369,3.369,0,0,0,.526.356l.485.291.251-.413c.477-.768.477-.768-.129-1.035a4.774,4.774,0,0,0-.582-.242A1.828,1.828,0,0,0,902.369-40.555Z"
                    transform="translate(-871.296 57.135)"
                  />
                  <path
                    fill="currentColor"
                    d="M649.38-1.1v.647h3.882V-1.75H649.38Z"
                    transform="translate(-627.382 19.219)"
                  />
                  <path
                    fill="currentColor"
                    d="M20.7,41.473c0,6.058.008,6.26.162,6.51.251.421.526.509,1.537.509h.889V44.086c0-4.2.008-4.424.162-4.828a2.59,2.59,0,0,1,1.132-1.245c.267-.146.55-.154,4.529-.154,4.222,0,4.246,0,4.578.178a2.6,2.6,0,0,1,1.124,1.343,29.414,29.414,0,0,1,.121,4.764v4.351h.889c1.011,0,1.286-.089,1.537-.509.154-.251.162-.453.162-6.51V35.23H20.7Z"
                    transform="translate(-20.7 -16.467)"
                  />
                  <path
                    fill="currentColor"
                    d="M538.43,74.151v1.941h3.882v-.445c0-.372.033-.485.2-.647.194-.2.21-.2,1.739-.2s1.544,0,1.739.2c.17.162.2.275.2.647v.445H548.6c2.823,0,2.96-.024,3.518-.647.461-.518.542-.817.542-2.135v-1.1H538.43Z"
                    transform="translate(-520.314 -52.153)"
                  />
                  <path
                    fill="currentColor"
                    d="M132.149,146.425a1.094,1.094,0,0,0-.509.906v.307H140.7v-.283a1.39,1.39,0,0,0-.121-.526c-.251-.485-.226-.485-4.424-.477C134.05,146.352,132.247,146.385,132.149,146.425Z"
                    transform="translate(-127.758 -123.699)"
                  />
                  <path
                    fill="currentColor"
                    d="M686.36,183.8v.647h1.294V183.15H686.36Z"
                    transform="translate(-663.068 -159.211)"
                  />
                  <path
                    fill="currentColor"
                    d="M552.391,201.8a3.754,3.754,0,0,1-.76.324,9.887,9.887,0,0,1-2.968.162H546.2v.445c0,.372-.033.485-.2.647-.194.2-.21.2-1.739.2s-1.545,0-1.739-.2c-.17-.162-.2-.275-.2-.647v-.445H538.44v5.176h14.234v-2.912c0-1.6-.008-2.912-.016-2.912A2.06,2.06,0,0,0,552.391,201.8Z"
                    transform="translate(-520.324 -177.054)"
                  />
                  <path
                    fill="currentColor"
                    d="M131.64,223.527v3.4H140.7V220.13H139.4v1.294H138.11V220.13h-6.47Z"
                    transform="translate(-127.758 -194.897)"
                  />
                  <path
                    fill="currentColor"
                    d="M85.893,451.422a.464.464,0,0,0,.307.809.584.584,0,0,0,.5-.485.459.459,0,0,0-.809-.323Z"
                    transform="translate(-83.466 -417.939)"
                  />
                  <path
                    fill="currentColor"
                    d="M409.473,451.422a.464.464,0,0,0,.307.809.584.584,0,0,0,.5-.485.459.459,0,0,0-.809-.323Z"
                    transform="translate(-395.724 -417.939)"
                  />
                </g>
              </g>
            </svg>
            <span className="ml-6">Travel Destinations</span>
          </CategoryButton>
          <CategoryButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37.25"
              height="29.8"
              viewBox="0 0 37.25 29.8"
            >
              <g transform="translate(-10 -108)">
                <path
                  fill="currentColor"
                  d="M33.144,121.756l1.813-.186a2.5,2.5,0,0,0-.125.756,1.941,1.941,0,1,0,3.862,0,2.238,2.238,0,0,0-.3-1.118l6-.635,2.855-1.292H33.182a5.8,5.8,0,0,0-.7-1.676h2.855l2.174-1.106H31.632a5.268,5.268,0,0,0-2.049-1.353L28.959,108H28.45l-.46,7.154a4.922,4.922,0,0,0-2.087,1.353H19.9l2.186,1.106h2.991a5.768,5.768,0,0,0-.684,1.676H10l3.018,1.479,5.933.559a2.265,2.265,0,0,0-.224,1.007,2.035,2.035,0,0,0,1.923,2.136,2.047,2.047,0,0,0,1.939-2.136,2.391,2.391,0,0,0-.1-.669l1.961.186A4.621,4.621,0,0,0,28.8,125.39,4.618,4.618,0,0,0,33.144,121.756Z"
                  transform="translate(0 0)"
                />
                <path
                  fill="currentColor"
                  d="M10,640.632H24.949l2.718-9.932H22.912Z"
                  transform="translate(0 -502.832)"
                />
                <path
                  fill="currentColor"
                  d="M510.5,630.7l2.718,9.932h14.265L514.571,630.7Z"
                  transform="translate(-481.476 -502.832)"
                />
              </g>
            </svg>
            <span className="ml-6">Airport Locations</span>
          </CategoryButton>
          <CategoryButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.26"
              height="29.26"
              viewBox="0 0 29.26 29.26"
            >
              <path fill="transparent" d="M0,0H29.26V29.26H0Z" />
              <path
                fill="currentColor"
                d="M16.625,24H2.375A2.39,2.39,0,0,1,0,21.6V2.4A2.39,2.39,0,0,1,2.375,0h14.25A2.39,2.39,0,0,1,19,2.4V21.6A2.39,2.39,0,0,1,16.625,24ZM5.343,10.2h0L8.313,12V2.4H2.375V12l2.968-1.8Z"
                transform="translate(5.261 2.289)"
              />
            </svg>
            <span className="ml-6">Buy Tickets</span>
          </CategoryButton>
          <CategoryButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
            >
              <path
                fill="currentColor"
                d="M58,780.6l-8-2.5v5.5l2,1.5v1.5l-3.5-1-3.5,1v-1.5l2-1.5v-5.5l-8,2.5v-2l8-5v-5.5a1.5,1.5,0,0,1,.4-1.1,1.5,1.5,0,0,1,2.6,1.1v5.5l8,5Z"
                transform="translate(786.6 -39) rotate(90)"
              />
            </svg>
            <span className="ml-6">Airlines</span>
          </CategoryButton>
        </div>
      </footer>
    </Container>
  );
};

export default Flight;
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Heebo:400,500,800&display=swap");

  *,
  a {
    font-family: "Heebo", Regular, sans-serif;
  }
  .heebo-medium {
    font-family: "Heebo", medium, sans-serif;
  }
  .heebo-extrabold {
    font-family: "Heebo", ExtraBold, sans-serif;
  }
  .banner {
    background: transparent url("/flights/kari-shea-207221.png") 0% 0% no-repeat
      padding-box;
  }
  .outline-transparent {
    outline-color: transparent !important;
  }
`;
