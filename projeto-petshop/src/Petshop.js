import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Home() {
  const [trocar, setTrocar] = useState(1);
  if (trocar == 1) {
    return (
      <div>
        {botao(setTrocar, 2, <i class="fas fa-plus-circle"></i>)}
        <TelaPrincipal />
      </div>
    );
  } else if (trocar == 2) {
    return (
      <div>
        {botao(setTrocar, 1, "Voltar")}
        <TelaCadastro />
      </div>
    );
  }
}

let listaProdutos = [
  {
    id: 1,
    nome: "Ração Golden Special Sabor Frango e Carne para Cães Adultos",
    valor: "120,00",
    imagemLink: "https://staticpetz.stoom.com.br/fotos/1614090145261.jpg",
  },
  {
    id: 2,
    nome: "Ração GranPlus Choice para Gatos Adultos Sabor Frango e Carne 10,1kg",
    valor: "118,00",
    imagemLink: "https://staticpetz.stoom.com.br/fotos/1603901892437.jpg",
  },
  {
      id: 3,
      nome: "Ração Premier Nattu para Cães Adultos de Raças Pequenas Sabor Mandioca",
      valor: "89,99",
      imagemLink: "https://staticpetz.stoom.com.br/fotos/1596029538936.jpg"
  },
  {
      id: 4,
      nome: "Ração Golden para Cães Adultos Seleção Natural Abóbora",
      valor: "58,90",
      imagemLink: "https://staticpetz.stoom.com.br/fotos/1579639511045.jpg"
  },
  {
      id: 5,
      nome: "Ração Max Cat Para Gatos Adultos Sabores",
      valor: "239,99",
      imagemLink: "https://staticpetz.stoom.com.br/fotos/1571425080348.jpg"
  },
  {
      id: 6,
      nome: "Alimento Roedor Petz Frutas, Legumes e Sementes para Hamster e Gerbil - 300g",
      valor: "26,99",
      imagemLink: "https://staticpetz.stoom.com.br/fotos/1625170057042.jpg"
  },
  {
      id: 7,
      nome: "Casa Ferplast Para Hamsters Kuci",
      valor: "47,99",
      imagemLink: "https://staticpetz.stoom.com.br/fotos/1450458887797.jpg"
  },
  {
      id: 8,
      nome: "Caixa de Transporte Chalesco Gulliver Cinza Com Rodinhas",
      valor: "909,99",
      imagemLink: "https://staticpetz.stoom.com.br/fotos/1451321013183.jpg",
  },
  {
      id: 9,
      nome: "Refil de Grama Para Banheiro Pet Park Médio Chalesco Para Cães",
      valor: "107,79",
      imagemLink: "https://staticpetz.stoom.com.br/fotos/1457717382544.jpg"
  },
  {
      id: 10,
      nome: "Coleira Kiltix Grande",
      valor: "88,90",
      imagemLink: "https://staticpetz.stoom.com.br/fotos/1507744134414.jpg"
  }
];

const TelaPrincipal = () => {
  return (
    <Container>
      <h1>PetShop</h1>
      <p>Bem vindo(a)</p>
      <ul>{listaItensTelaPrincipal(listaProdutos)}</ul>
    </Container>
  );
};

const TelaCadastro = () => {
  const [lista, setLista] = useState(listaProdutos);

  const [nomeProduto, setNomeProduto] = useState("");
  const [valor, setValor] = useState("");
  const [imagemLink, setImagemLink] = useState("");
  const [editando, setEditando] = useState(false);
  const [idxEditando, setIdxEditando] = useState(null);

  const handleNomeChange = (e) => setNomeProduto(e.target.value.toUpperCase());
  const handleValorChange = (e) => setValor(e.target.value);
  const handleImagemLink = (e) => setImagemLink(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne que o navegador atualize quando enviar o form
    if (editando) {
      const listaAtualizada = lista.map((item, idx) => {
        if (idx === idxEditando) {
          item.nome = nomeProduto;
          item.valor = valor;
          item.imagemLink = imagemLink;
        }
        return item;
      });
      setLista(listaAtualizada);
      setEditando(false);
      setIdxEditando(null);
    } else {
      setLista([
        ...lista,
        {
          id: listaProdutos[listaProdutos.length - 1].id + 1,
          nome: nomeProduto,
          valor: valor,
          imagemLink: imagemLink,
        },
      ]);
    }
    setNomeProduto("");
    setValor("");
    setImagemLink("");
    console.log(listaProdutos)
  };
  useEffect(() => {
    listaProdutos = [...lista];
  }, [lista]);
  useEffect(() => {
    if (idxEditando !== null && editando) {
      const item = lista[idxEditando];
      setNomeProduto(item.nome);
      setValor(item.valor);
      setImagemLink(item.imagemLink);
    }
  }, [idxEditando]);

  const deletar = (idxDeletar) => {
      setLista(lista.filter((item, idx) => idx !== idxDeletar))
  }

  return (
    <Container>
      <h1>Cadastrar item</h1>
      <p>Testando</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome do produto:</label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={nomeProduto}
          onChange={handleNomeChange}
          required
        />
        <label htmlFor="valor">Valor do produto:</label>
        <input
          type="text"
          name="valor"
          id="valor"
          value={valor}
          onChange={handleValorChange}
          required
        />
        <label htmlFor="imagemLink">Link da imagem</label>
        <input
          type="text"
          name="imagemLink"
          id="imagemLink"
          value={imagemLink}
          onChange={handleImagemLink}
          required
        />
        <button type="submit">Salvar</button>
      </form>
      <div>
        {lista.map((item, idx) => (
          <div key={idx}>
            Produto: {item.nome} | Valor: {item.valor} | Link da Imagem:{" "}
            {item.imagemLink}{" "}
            <a
              onClick={() => {
                setEditando(true);
                setIdxEditando(idx);
              }}
            >
              <i class="fas fa-edit"></i>
            </a>
            <a
                onClick={() => deletar(idx)}
            >
           <i class="fas fa-trash-alt"></i>
           </a>
          </div>
        ))}
      </div>
    </Container>
  );
};

const listaItensTelaPrincipal = (lista) => {
  return lista.map((item) => (
    <div className="item" key={item.id}>
      <div>
        <li>Produto: {item.nome}</li>
        <img src={item.imagemLink} />
        <li>Valor: R${item.valor}</li>
      </div>
    </div>
  ));
};

const botao = (set, cond, texto) => (
  <Button variant="outline-success" onClick={() => set(cond)}>
    {texto}
  </Button>
);
