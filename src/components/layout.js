import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

import HeaderSlim from '@massds/mayflower-react/dist/HeaderSlim';
import FooterSlim from '@massds/mayflower-react/dist/FooterSlim';
import SiteLogo from '@massds/mayflower-react/dist/SiteLogo';
import './layout.scss';
import logo from '@massds/mayflower-assets/static/images/logo/stateseal.png';
import "github-markdown-css/github-markdown.css";

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Layout = ({ children, pre }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          url
        }
      }
      allMdx {
        nodes {
          fileAbsolutePath
          headings {
            value
          }
        }
      }
    }
  `);
  const { description, title, url } = data.site.siteMetadata;
  const { nodes } = data.allMdx;
  const siteLogoProps = {
    url: {
      domain: url
    },
    image: {
      src: logo,
      alt: 'Massachusetts state seal',
      width: 45,
      height: 45
    },
    title: description
  };
  // Makes sure that header and footer don't use the same
  // SiteLogo component instance.
  const headerProps = {
    siteLogo: <SiteLogo {...siteLogoProps} siteName={title} />
  };

  const footerProps = {
    title: 'Executive Office of Technology Security and Services (EOTSS)',
    contact: {
      address: '1 Ashburton Place, 8th Floor, Boston, MA 02108',
      phone: '(617) 626-4400',
      online: {
        href: 'https://www.mass.gov/orgs/massachusetts-digital-service',
        title: 'Massachusetts Digital Service official website'
      }
    },
    siteLogo: <SiteLogo {...siteLogoProps} />,
    description: ''
  };

const getStringBetween = (fullStr, firstStr, secondStr) => {
  return fullStr.substring(
      fullStr.lastIndexOf(firstStr) + firstStr.length,
      fullStr.lastIndexOf(secondStr))
}
  return(
    <div id="page-wrapper">
      <HeaderSlim {...headerProps} />
        <nav id="main-nav">
          <h3>Table of Content</h3>
            {
              nodes.map((node) => {
                const path = getStringBetween(node.fileAbsolutePath, "src/pages/", ".md");
                const title = node.headings[0].value
                return(<Link to={path =="index" ? "/" : path} >{title}</Link>)
              })
            }
        </nav>
        <main id="main-content">
          <div className="ma__container markdown-body">
            {children}
          </div>
        </main>
      <FooterSlim {...footerProps} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
