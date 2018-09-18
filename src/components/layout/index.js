import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Icon } from 'semantic-ui-react'

import './index.scss'
import Footer from './Footer'
import config from '../../../config'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: config.description },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <link
              rel="stylesheet"
              href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
            />
          </Helmet>

          <div id="wrap">
            <header id="header">
              <div className="title">
                <Link to="/">
                  <div className="profile-img">
                    <img src={config.profileImg()} alt="profile_photo" />
                  </div>
                  <h1>{config.title}</h1>
                </Link>
              </div>

              <div className="menu">
                <div className="home">
                  <Link to="/">
                    <Icon name="home" />
                    Home
                  </Link>
                </div>

                <div className="tags">
                  <Link to="/taglist">
                    <Icon name="tags" />
                    Tags
                  </Link>
                </div>

                <div className="search">
                  <Link to="/search">
                    <Icon name="search" />
                    Search
                  </Link>
                </div>
              </div>
            </header>

            <article id="article">{children}</article>

            <footer id="footer">
              <Footer />
            </footer>
          </div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/*
          <div className="wrap">
            <div className="menu">
              <div className="bio">
                <div className="profile-img">
                  <img src={config.profileImg()} alt="profile_photo" />
                </div>
                <div className="profile-text">
                  <p className="profile-name">{config.author}</p>
                  <div className="profile-msg">
                    <span>{config.bio}</span>
                  </div>
                </div>
              </div>

              <div className="submenu">
                <div className="home">
                  <Link to="/">
                    <Icon name="home" />
                    Home
                  </Link>
                </div>
                <div className="tags">
                  <Link to="/taglist">
                    <Icon name="tags" />
                    Tags
                  </Link>
                </div>
                <div className="search">
                  <Icon name="search" />
                  <Link to="/search">Search</Link>
                </div>
                </div>
                </div>
    
                <div>{children}</div>
              </div>
*/
