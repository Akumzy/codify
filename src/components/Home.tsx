import React from 'react'
import {  Link } from 'react-router-dom'
import styled from 'styled-components'
const designs = [
  {
    title: 'Kyrie 5 x Bandulu',
    image: '/kyrie5-x-bandulu.jpg',
    link: '/kyrie5-x-bandulu',
  },
]
const HomePage: React.FC = () => {
  return (
      <AppWrapper>
        <div className="container">
          {designs.map(design => (
            <Link to={design.link} className="card">
              <div>
                <img src={design.image} alt={design.title} />
              </div>
              <div>
                <h3>{design.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </AppWrapper>
  )
}
const AppWrapper = styled.div`
  .container {
    display: flex;
    padding: 1em;
  }
  .card {
    width: 250px;
    height: 200px;
    display: inline-flex;
    flex-direction: column;
    box-shadow: 0 0 7px #cfd8dc;
    border-radius: 5px;
    padding: 5px;
    > *:first-child {
      height: 50%;
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`
export default HomePage
