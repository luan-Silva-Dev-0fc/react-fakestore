import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';

const App = () => {

  const [produtos, setProdutos] = useState([]);
  const [produtosExibidos, setProdutosExibidos] = useState([]);

  function buscarProdutos() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => { return response.json() })
      .then((response) => {
        setProdutos(response)
        setProdutosExibidos(response)
      })
  }

  function filtrarProdutos(categoria) {
    if (categoria != "All") {
      let produtosFiltrados = produtos.filter((produto) => {
        return produto.category == categoria.toLowerCase();
      });
      setProdutosExibidos(produtosFiltrados);
    } else {
      setProdutosExibidos(produtos);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [])


  return (
    <>
      <Header filtrarProdutos={filtrarProdutos} />
      <main className="p-15 bg-slate-200">
        <div className="grid grid-cols-4 gap-4">
          {produtosExibidos.map((produto) => (
            <Card
              key={produto.id}
              title={produto.title}
              image={produto.image}
              category={produto.rating.rate}
              price={10}
              rate={4}


            />
          ))}

        </div>
        <Card
          title={"titulo"}
          image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"}
          category={"teste"}
          price={10}
          rate={4}


        />
      </main>

    </>
  );
};

export default App;