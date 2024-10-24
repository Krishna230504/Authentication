import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="header-logo-mobile">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <button className="mobile-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-img"
          />
        </button>
      </div>
      <div className="nav-content header-larger-devices">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">Products</li>
          <li className="nav-item">Cart</li>
        </ul>
        <button className="logout-btn" type="button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list">
        <li className="nav-menu-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-item-img"
          />
        </li>
        <li className="nav-menu-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-item-img"
          />
        </li>
        <li className="nav-menu-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-item-img"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
