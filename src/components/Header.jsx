const Header = ({ filtrarProdutos, pesquisarProdutos, ordenarProdutos }) => {
    return (
        <header className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4 sm:px-8 lg:px-15 py-4 bg-linear-to-r from-orange-500 via-amber-500 to-rose-500 animate-gradient shadow-md">
            {/* Gradiente animado: */}
            <div className="w-full lg:w-auto">
                <input
                    type="text"
                    placeholder="Digite o nome do produto"
                    onChange={(e) => pesquisarProdutos?.(e.target.value)}
                    className="w-full sm:w-96 md:w-110 lg:w-120 h-10 rounded bg-white px-4 text-gray-800 outline-none focus:ring-2 focus:ring-orange-300 transition-all"
                />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full lg:w-auto">
                <select

                    defaultValue=""
                    onChange={(event) => filtrarProdutos(event.target.value)}
                    className="w-full sm:w-auto h-10 rounded bg-white px-4 text-gray-800 outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
                >
                    <option value="" disabled>Filtrar produtos</option>
                    <option value="All">All</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="women's clothing">Women's clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                </select>

                <select

                    defaultValue=""
                    onChange={(e) => ordenarProdutos?.(e.target.value)}
                    className="w-full sm:w-auto h-10 rounded bg-white px-4 text-gray-800 outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
                >
                    <option value="" disabled>Ordenar produtos</option>
                    <option value="preco">Ordenar por Preço</option>
                    <option value="nota">Ordenar por Avaliação</option>
                </select>
            </div>
        </header>
    );
}

export default Header;