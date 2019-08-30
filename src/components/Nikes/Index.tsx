import React from 'react'
import styled from 'styled-components'
import { ReactComponent as NikeLogo } from './Logo_NIKE.svg'
import { ReactComponent as TwitterLogo } from './TwitterLogo.svg'
import { ReactComponent as FacebookLogo } from './FacebookLogo.svg'
import { ReactComponent as InstagramLogo } from './InstagramLogo.svg'
import { ReactComponent as YoutubeLogo } from './YoutubeLogo.svg'
import { ReactComponent as Star } from './star.svg'
import { ReactComponent as StarOutline } from './star-outline.svg'
interface INikeState {
  activeColor: string
}
export default class Nike extends React.Component<{}, INikeState> {
  constructor(props: any) {
    super(props)
    this.state = { activeColor: '#972b41' }
  }
  render() {
    return (
      <NikeContainer>
        <nav className="nike-nav">
          <NikeLogo className="logo" />
        </nav>
        <div className="nike-container">
          <div className="nike-page-info">
            <div className="nike-socials">
              <TwitterLogo />
              <YoutubeLogo />
              <InstagramLogo />
              <FacebookLogo className="facebook"/>
            </div>
            <main>
              <div>
                <h4>BaskBall Shoe</h4>
                <h1 className="item-name" style={{ color: this.state.activeColor }}>
                  Kyrie 5 <small>x</small> Bandulu
                </h1>
                <p>
                  Designed in collaboration with Pat Peltier, the mind behind up-cycled vintage Bandulu explore process,
                  approach and technique. The brand's signature paint splatters give the shoe an expression that speaks
                  Kyrie's creativity and to his craft - on and off the court.
                </p>
                <p>
                  <span className="label" style={{ color: this.state.activeColor }}>
                    Shown:
                  </span>{' '}
                  Pale Ivory/Dark Orchid
                </p>
                <p>
                  <span className="label" style={{ color: this.state.activeColor }}>
                    Style:
                  </span>{' '}
                  CK5836-100
                </p>
                <p>
                  <span className="label flex" style={{ color: this.state.activeColor }}>
                    Reviews:{' '}<span className="stars"><Star style={{ fill: this.state.activeColor }}/><Star style={{ fill: this.state.activeColor }}/><Star style={{ fill: this.state.activeColor }}/><Star style={{ fill: this.state.activeColor }}/><StarOutline style={{ fill: this.state.activeColor }}/></span>
                  </span>
                </p>
              </div>
              <div className="action-container">
                <button className="btn" style={{ backgroundColor: this.state.activeColor }}>
                  Add to Cart
                </button>
                <button
                  className="btn btn-outline"
                  style={{ borderColor: this.state.activeColor, color: this.state.activeColor }}
                >
                  Favorite 
                </button>
              </div>
            </main>
          </div>
          <div className="nike-page-gallery">
            <div>
              <div className="gallery-item" style={{ backgroundColor: '#d4b49a' }}></div>
              <div className="gallery-item active" style={{ backgroundColor: this.state.activeColor }}></div>
              <div className="gallery-item" style={{ backgroundColor: '#cfc39b' }}></div>
              <div className="gallery-item" style={{ backgroundColor: '#acadb2' }}></div>
            </div>
          </div>
        </div>
      </NikeContainer>
    )
  }
}
const NikeContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  background-color: #feeede;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-y: auto;
  .nike-nav {
    position: absolute;
    height: 60px;
    width: 100%;
    display: flex;
    padding: 2em;
    align-items: center;
    .logo {
      width: 80px !important;
    }
  }
  .nike-container {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .nike-page-info {
    width: 45%;
    height: 100%;
    display: flex;
    h4 {
      margin: 0.5em 0;
    }
    .item-name {
      font-size: 3em;
      margin: 0;
    }
    .nike-socials {
      width: 80px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items:center;
      padding: 2em 0;
      svg {
        width: 22px !important;

      fill: #000;
      &:not(:last-child){
        margin-bottom: 1em;
      }
      &.facebook{
        width: 30px !important;
      }
      }
    }
    .label {
      font-weight: 600;
    }
    > main {
      flex: 1;
      height: 100%;
      display: flex;
      /* align-items: space-around; */
      flex-direction: column;
      justify-content: space-evenly;
    }
    .action-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .btn {
      width: 45%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      border: none;
      border-radius: 2pc;
      font-size: 1.2em;
      &-outline {
        border: 1px solid;
        background-color: transparent;
      }
    }
    .stars{
      margin-left: 1em;
      svg{
        &:not(:last-child){
          margin-right: .5em;
        }
      }
    }
    .flex{
      display: flex;
    align-items: center;
    }
  }
  .nike-page-gallery {
    width: 55%;
    height: 100%;
    position: relative;
    overflow: hidden;
    > * {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: 25% 50% 25% 25%;
      transform: rotate(-20deg) translate(90px, 20px);
    }
    .gallery-item {
      width: 50%;
      background-color: #fff;
      margin-left: auto;
      border-top-left-radius: 5pc;
      border-bottom-left-radius: 5pc;
      box-shadow: -2px 5px 5px #2632380a;
      height: 50px;
      &.active {
        width: 95%;
        border-top-left-radius: 10pc;
        border-bottom-left-radius: 10pc;
        z-index: 2;
        box-shadow: -2px 5px 8px #26323836, -6px -3px 8px #26323836;
        /* animation: move-in 1s linear forwards; */
      }
    }
  }
  @keyframes move-in {
    from {
      width: 50%;
      height: 25%;
    }
    to {
      width: 95%;
      height: 100%;
    }
  }
  @keyframes move-out {
    from {
      width: 95%;
      height: 50%;
    }
    to {
      width: 50%;
      height: 25%;
    }
  }
`
