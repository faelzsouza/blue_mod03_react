import logo from "./logo.svg";
import "./App.css";
import React from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filmes: [
                {
                    id: 1,
                    titulo: "As Branquelas",
                    linkImagem:
                        "http://br.web.img3.acsta.net/medias/nmedia/18/97/52/82/20534159.jpg",
                },
                {
                    id: 2,
                    titulo: "Vovozona",
                    linkImagem:
                        "http://1.bp.blogspot.com/-VVXh6jtrHjA/UAjha-z-3hI/AAAAAAAACEU/yLbkiZWam88/s1600/A.VovoZona.DVDRIP.Xvid.Dublado.JPG",
                },
                {
                    id: 3,
                    titulo: "Crepúsculo",
                    linkImagem:
                        "https://pelisflix.li/wp-content/uploads/2020/06/doBL002Frm4ts7ABkc15ekpKVGW.jpg",
                },
                {
                    id: 4,
                    titulo: "Amanhecer",
                    linkImagem:
                        "http://4.bp.blogspot.com/-8aOe9IuT67g/TzKBD1OmL8I/AAAAAAAAI74/YxWhh5JEPAM/w1200-h630-p-k-no-nu/Amanhecer+(Poster+Cinema).jpg",
                },
                {
                    id: 5,
                    titulo: "Jogos Vorazes: Em Chamas",
                    linkImagem:
                        "https://3.bp.blogspot.com/-k3RzqbAhGz0/VHksvRxeh1I/AAAAAAAABaQ/RHkmT1R4KSk/s1600/21047331_201310071632457.jpg",
                },
                {
                    id: 6,
                    titulo: "Titanic",
                    linkImagem:
                        "https://2.bp.blogspot.com/-HvX7NG_1o9Y/T3NVzbLjydI/AAAAAAAAJRE/iGi3x0he6k8/s640/Titanic+3D-Camp+B-1.jpg",
                },
            ],
        };
    }
    render() {
        const { filmes } = this.state;
        {
            filmes.sort((a, b) => (a.titulo > b.titulo ? 1 : -1));
        }
        return (
            <div className="Container">
                <h1>Lista de Filmes:</h1>
                <ul>
                    {filmes.map((f) => (
                        <li key={f.id}>
                            <h3>{f.titulo}</h3>
                            <img
                                src={f.linkImagem}
                                alt={"Capa do filme " + f.nome}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
