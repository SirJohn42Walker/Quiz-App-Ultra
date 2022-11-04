import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <img
            src="/Icons/home-pngrepo-com.png"
            alt="Home Button"
            className="icon"
          />
        </li>
        <li>
          <img
            src="/Icons/bookmark-pngrepo-com.png"
            alt="Bookmark Button"
            className="icon"
          />
        </li>
        <li>
          <img
            src="/Icons/doc-add-pngrepo-com.png"
            alt="Add Card Button"
            className="icon"
          />
        </li>
        <li>
          <img
            src="/Icons/user-hand-drawn-outline-in-a-rectangle-pngrepo-com.png"
            alt="Profile Button"
            className="icon"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
