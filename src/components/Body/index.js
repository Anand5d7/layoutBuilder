// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="left-ul-container">
                <li className="left-li-item">Item 1</li>
                <li className="left-li-item">Item 2</li>
                <li className="left-li-item">Item 3</li>
                <li className="left-li-item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit and then fall in love with someone. A
                beauty with a girl and showing her cuteness. They are no. of
                girls addict for mobile phones. The web applications are
                powerful in this situation. Lorem ipsum dolor sit and then fall
                in love with someone.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar-container">
              <h1 className="right-navbar-heading">Right Navbar</h1>
              <div className="paragraph-container">
                <p className="para">Ad 1</p>
                <p className="para">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
