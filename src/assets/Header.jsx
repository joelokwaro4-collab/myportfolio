function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center fixed top-0 w-full bg- black z-50 pt-5 ">
      <h1 className="text-xl font-bold">portfolio</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}

export default Header;