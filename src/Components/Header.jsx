

function Header() {
  return (
    <div className="header fixed w-full">
        <div className="nav bg-white py-2">
          <div className="container mx-auto text-[36px] font-bold">
            LAMPUNG TV
          </div>
        </div>
        <div className="nav bg-primary">
          <div className="container mx-auto text-white py-3 flex gap-4">
          <a href="/" className={`text-lg ${location.pathname === '/' ? 'font-semibold' : ''} text-white`}>Beranda</a>
                <a href="/tentang" className={`text-lg ${location.pathname === '/tentang' ? 'font-semibold' : ''} text-white`}>Tentang</a>
                <a href="/kontak" className={`text-lg ${location.pathname === '/kontak' ? 'font-semibold' : ''} text-white`}>Kontak</a>
          </div>
        </div>
    </div>
  );
}

export default Header;
