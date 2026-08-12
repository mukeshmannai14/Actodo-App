function Header({ username, onLogout }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-500/20">
              <span className="text-white text-xl font-bold">
                ✓
              </span>
            </div>

            <div>
              <h1 className="font-bold text-lg text-slate-900">
                Actodo
              </h1>

              <p className="text-xs text-slate-400 hidden sm:block">
                Activity Manager
              </p>
            </div>

          </div>

          {/* User */}
          <div className="flex items-center gap-3">

            <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-xl">

              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">
                {username.charAt(0).toUpperCase()}
              </div>

              <span className="text-sm font-semibold text-slate-700">
                {username}
              </span>

            </div>

            <button
              onClick={onLogout}
              className="px-3 sm:px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;