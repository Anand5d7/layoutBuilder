import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="app-controller-container">
          <div className="controller-container">
            <h1 className="controller-heading">Layout</h1>
            <div className="check-box-container">
              <input
                type="checkbox"
                checked={showContent}
                onChange={onChangeContent}
                id="content"
              />
              <label className="label" htmlFor="content">
                Content
              </label>
            </div>
            <div className="check-box-container">
              <input
                type="checkbox"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
                id="left"
              />
              <label className="label" htmlFor="left">
                Left Navbar
              </label>
            </div>
            <div className="check-box-container">
              <input
                type="checkbox"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
                id="right"
              />
              <label className="label" htmlFor="right">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
