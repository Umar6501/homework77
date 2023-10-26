function Footer() {
  return (
    <footer className="right-0 bottom-0 left-0 absolute h-24 ">
      <nav className="text-dark bg-stone-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img src="/logo.svg" alt="" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium text-slate-500"
                      aria-current="page"
                    >
                      Каталог
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      О нас
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Контакты
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button type="button" className="flex gap-4">
                <img src="/facebook.svg" alt="" />
                <img src="/c.svg" alt="" />
                <img src="/twiter.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-center mx-auto gap-96 mb-3">
          <div className="flex">
            <h1>Maroon</h1>
            <img src="/instg.svg" alt="" />
            <h1>2020 Все права защищены</h1>
          </div>
          <div className="">
            <h1>Политика конфиденциальности</h1>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
