import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-b border-stone-600 py-5 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
