const Header = () => {
  return (
    <div>
      <nav className="flex justify-between px-32 py-2">
        <div className="font-bold text-3xl brand">
          <a href="#home">MCA</a>
        </div>

        <div class="flex nav-contain flex-row items-center" id="navbar-default">
          <a href="#home">Home</a>
          <a href="#about" className="mx-10">
            About
          </a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  );
};
export default Header;
