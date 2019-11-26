import React from 'react'
import styled from 'styled-components'
import { ReactComponent as TwitterLogo } from '../social/TwitterLogo.svg'
import { ReactComponent as FacebookLogo } from '../social/FacebookLogo.svg'
import { ReactComponent as InstagramLogo } from '../social/InstagramLogo.svg'
import { ReactComponent as YoutubeLogo } from '../social/YoutubeLogo.svg'

const NanyaMusic: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <nav>
          <a href="#NANYA MUSIC" className="logo">
            NANYA MUSIC
          </a>
          <div className="links">
            <a href="#About">About</a>
            <a href="#Music">Music</a>
            <a href="#Videos">Videos</a>
            <a href="#Events">Events</a>
            <a href="#Booking">Booking</a>
          </div>
        </nav>
        <main>
          <section className="site-info">
            <div>
              <h1 className="intro">
                I AM <span>NANYA</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consectetur distinctio voluptatum
                eveniet laboriosam numquam velit eaque obcaecati nisi tempore! Dicta alias possimus quae nam magnam,
                deserunt laudantium nihil esse.
              </p>
              <div className="action-buttons">
                <a href="#Watch Videos" className="btn">
                  Watch Videos
                </a>
                <a href="#Buy Music" className="btn outline">
                  Buy Music
                </a>
              </div>
            </div>
            <div className="socials">
              <a href="https://twitter.com/deakumzy">
                <TwitterLogo />
              </a>
              <a href="https://youtube.com">
                <YoutubeLogo />
              </a>
              <a href="https://instagram.com">
                <InstagramLogo className="instagram" />
              </a>
              <a href="https://facebook.com">
                <FacebookLogo className="facebook" />
              </a>
            </div>
          </section>
          <section className="shot"></section>
        </main>
      </div>
      <aside>
        <div className="thumbnail">
          <div className="thumbnail-mask">
            <div className="play-button" role="button"></div>
          </div>
        </div>
        <div className="up-coming">
          <h3>UPCOMING SHOWS</h3>
          <div className="venue">
            <h4>June 19th, 2020</h4>
            <address>Felabration 2020, 02 Arena London</address>
          </div>
          <div className="venue">
            <h4>June 19th, 2020</h4>
            <address>Felabration 2020, 02 Arena London</address>
          </div>
          <div className="venue">
            <h4>June 19th, 2020</h4>
            <address>Felabration 2020, 02 Arena London</address>
          </div>
          <div style={{ marginTop: '1em', display: 'inline-flex' }}>
            <a href="#More Events" className="btn more">
              More Events
            </a>
          </div>
        </div>
      </aside>
    </Container>
  )
}
const Container = styled.div`
  --pink: #e25371;
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  > .content {
    flex: 1;
    height: 100%;
    > nav {
      height: 120px;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2em;
      a {
        text-decoration: none;
      }
      .logo {
        color: var(--pink);
        font-size: 20px;
        font-weight: bold;
      }
      .links {
        > a {
          padding: 0 1em;
          color: #222;
        }
      }
    }
    > main {
      display: flex;
      height: calc(100% - 120px);
      > .site-info {
        flex: 1;
        height: 100%;
        padding: 2em;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .intro {
          font-size: 4em;
          margin: 0;
          > span {
            color: var(--pink);
          }
        }
        .action-buttons {
          margin-top: 2em;
          display: flex;
          > .btn {
            padding-left: 2em;
            padding-right: 2em;
            &:not(:last-child) {
              margin-right: 2em;
            }
          }
        }
        .socials {
          a {
            background-color: var(--pink);
            display: inline-flex;
            width: 30px;
            height: 30px;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            &:not(:last-child) {
              margin-right: 1em;
            }
          }
          svg {
            width: 16px !important;
            height: 16px !important;
            fill: #fff !important;
            &.instagram {
              path,
              circle {
                fill: #fff !important;
              }
            }
            &.facebook {
              width: 20px !important;
              height: 20px !important;
            }
          }
        }
      }
      > .shot {
        width: 40%;
        background-image: url(./nanya/nanya-2.jpg);
        background-size: cover;
        background-position: center;
      }
    }
  }
  > aside {
    height: 100%;
    width: 350px;
    background-color: var(--pink);
    > div {
      height: 50%;
      width: 100%;
      &.thumbnail {
        background-image: url(./nanya/nanya.jpg);
        background-size: cover;
        background-position: center center;
        position: relative;
        .thumbnail-mask {
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.25);
          display: flex;
          justify-content: center;
          align-items: center;
          .play-button {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: Center;
            box-shadow: 0 0 0 4px #ffffff70;
            cursor: pointer;
            transition: transform 200ms ease;
            &:hover {
              transform: scale(1.1);
            }
            &::before {
              content: '';
              border: 5px solid transparent;
              border-right-color: var(--pink);
              border-bottom-color: var(--pink);
              transform: rotate(-45deg) translate(-2px, -1px);
            }
          }
        }
      }
      &.up-coming {
        padding: 2em;
        color: #fff;
        h3 {
          margin-top: 0;
        }
        h4 {
          margin: 0;
        }
        .venue:not(:last-child) {
          margin-bottom: 1em;
        }
      }
    }
  }
  .btn {
    text-decoration: none;
    color: #fff;
    background-color: var(--pink);
    padding: 0.5em 1em;
    border: 2px solid var(--pink);
    border-radius: 5px;
    &.more {
      border-color: #fff;
    }
    &.outline {
      background-color: transparent;
      border-color: var(--pink);
      color: var(--pink);
    }
  }
`
export default NanyaMusic
