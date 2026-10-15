const Header = ({ filtrarProdutos, pesquisarProdutos, ordenarProdutos }) => {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-orange-500">
            <div>
                <input
                    type="text"
                    placeholder="Digite o nome do produto"
                    onChange={(e) => pesquisarProdutos?.(e.target.value)}
                    className="w-80 md:w-120 h-10 rounded bg-white px-4 text-gray-800 outline-none focus:ring-2 focus:ring-orange-300"
                />
            </div>
            <div className="flex items-center gap-4">
                <select

                    defaultValue=""
                    onChange={(event) => filtrarProdutos(event.target.value)}
                    className="h-10 rounded bg-white px-4 text-gray-800 outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
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
                    className="h-10 rounded bg-white px-4 text-gray-800 outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
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