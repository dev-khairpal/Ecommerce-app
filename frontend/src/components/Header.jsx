const Header = () => {
  return (
    <header className="bg-[#0C0A09] text-white p-4">
      <nav className="w-4xl mx-auto flex justify-between">
        <div className="text-2xl">Shop It</div>
        <div>
          <ul className="flex gap-4 text-md">
            <li>Cart</li>
            <li>Sign in</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
