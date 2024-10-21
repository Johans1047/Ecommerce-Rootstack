export default function Header() {
    return (
        <header id="website-header" className="bg-white sticky top-0 z-50 py-4 border-b border-neutral-400">
            <div id="header-content" className="mx-12 flex items-center justify-between">
                <a href="/" id="header-title" className="flex items-center gap-6">
                    <i className="bi bi-brightness-high-fill flex-center text-3xl"></i>
                    <h1 className="font-semibold text-2xl">Voyage</h1>
                </a>
                <div id="header-navigation" className="flex items-center gap-12">
                    <nav id="header-navbar" className="flex gap-6">
                        <a href="/" className="px-2 py-1 rounded hover:bg-neutral-200 active:bg-neutral-300 duration-150">Inicio</a>
                        <a href="/commerce" className="px-2 py-1 rounded hover:bg-neutral-200 active:bg-neutral-300 duration-150">Comercio</a>
                        <a href="/about-us" className="px-2 py-1 rounded hover:bg-neutral-200 active:bg-neutral-300 duration-150">Acerca de nosotros</a>
                    </nav>
                    <div id="signup-container">
                        <a href="/signup" className="px-4 py-2 rounded bg-voyage-400 hover:bg-voyage-500 active:bg-voyage-600 text-white duration-150">Regístrate</a>
                    </div>
                </div>
            </div>
        </header>
    );
}