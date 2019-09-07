import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const designs = [
  {
    title: 'Kyrie 5 x Bandulu',
    image: '/kyrie5-x-bandulu.jpg',
    link: '/kyrie5-x-bandulu',
    credit: {
      link: '#',
      name: ''
    }
  },
  {
    title: 'Nanya Music landing page',
    image: '/nanya-music-landing-page.jpg',
    link: '/nanya-music-by-sky-micheal-ajah',
    credit: {
      link: '#',
      name: 'Sky Micheal Ajah'
    }
  }
]
const HomePage: React.FC = () => {
  return (
    <AppWrapper>
      <div className="container">
        {designs.map((design, index) => (
          <Link to={design.link} className="card" key={index.toString()}>
            <div>
              <img src={design.image} alt={design.title} />
            </div>
            <div>
              <h3>{design.title}</h3>
              {design.credit.name ? (
                <p>
                  Design By: <a href={design.credit.link}>{design.credit.name}</a>
                </p>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </AppWrapper>
  )
}
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
`
export default HomePage
