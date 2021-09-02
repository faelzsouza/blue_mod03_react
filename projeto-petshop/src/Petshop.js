import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import "./Petshop.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

export default function Home() {
    const [trocar, setTrocar] = useState(1);
    if (trocar == 1) {
        return (
            <div>
                {LabelBottomNavigation(setTrocar, 2)}
                <TelaPrincipal />
            </div>
        );
    } else if (trocar == 2) {
        return (
            <div>
                {LabelBottomNavigation(setTrocar, 1)}
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
        imagemLink: "https://staticpetz.stoom.com.br/fotos/1596029538936.jpg",
    },
    {
        id: 4,
        nome: "Ração Golden para Cães Adultos Seleção Natural Abóbora",
        valor: "58,90",
        imagemLink: "https://staticpetz.stoom.com.br/fotos/1579639511045.jpg",
    },
    {
        id: 5,
        nome: "Ração Max Cat Para Gatos Adultos Sabores",
        valor: "239,99",
        imagemLink: "https://staticpetz.stoom.com.br/fotos/1571425080348.jpg",
    },
    {
        id: 6,
        nome: "Alimento Roedor Petz Frutas, Legumes e Sementes para Hamster e Gerbil - 300g",
        valor: "26,99",
        imagemLink: "https://staticpetz.stoom.com.br/fotos/1625170057042.jpg",
    },
    {
        id: 7,
        nome: "Casa Ferplast Para Hamsters Kuci",
        valor: "47,99",
        imagemLink: "https://staticpetz.stoom.com.br/fotos/1450458887797.jpg",
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
        imagemLink: "https://staticpetz.stoom.com.br/fotos/1457717382544.jpg",
    },
    {
        id: 10,
        nome: "Coleira Kiltix Grande",
        valor: "88,90",
        imagemLink: "https://staticpetz.stoom.com.br/fotos/1507744134414.jpg",
    },
];

const TelaPrincipal = () => {
    return (
        <Container>
            <Typography variant="h1">
                HappyPet <i class="fas fa-paw"></i>
            </Typography>
            <Typography variant="body1">
                Bem vindo(a) ao petshop que se preocupa com a felicidade e
                bem-estar do seu pet!
            </Typography>
            <div>{ListaItens(listaProdutos)}</div>
            <MidiasRodape />
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

    const handleNomeChange = (e) => setNomeProduto(e.target.value);
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
        console.log(listaProdutos);
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
        setLista(lista.filter((item, idx) => idx !== idxDeletar));
    };

    return (
        <Container>
            <Typography variant="h1">Admin</Typography>
            <Typography variant="body1">
                Área administrativa para cadastro, edição e deleção de produtos
                da loja.
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    name="nome"
                    id="nome"
                    value={nomeProduto}
                    onChange={handleNomeChange}
                    label="Nome do produto"
                    required
                />
                <TextField
                    type="text"
                    name="valor"
                    id="valor"
                    value={valor}
                    onChange={handleValorChange}
                    label="Valor do produto"
                    required
                />
                <TextField
                    type="text"
                    name="imagemLink"
                    id="imagemLink"
                    value={imagemLink}
                    onChange={handleImagemLink}
                    label="URL da imagem"
                    required
                />
                <Button type="submit" variant="contained" color="secondary">
                    Salvar
                </Button>
            </form>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Produto</TableCell>
                            <TableCell>Valor</TableCell>
                            <TableCell>Link da Imagem</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lista.map((item, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{item.nome}</TableCell>
                                <TableCell>{item.valor}</TableCell>
                                <TableCell>{item.imagemLink}</TableCell>
                                <TableCell>
                                    <Tooltip title="Editar">
                                        <a
                                            onClick={() => {
                                                setEditando(true);
                                                setIdxEditando(idx);
                                            }}
                                        >
                                            <i class="fas fa-edit"></i>
                                        </a>
                                    </Tooltip>
                                    <Tooltip title="Excluir">
                                        <a onClick={() => deletar(idx)}>
                                            <i class="fas fa-trash-alt"></i>
                                        </a>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

const ListaItens = (lista) => {
    return lista.map((item) => (
        <Card className="item" key={item.id}>
            <CardContent>
                <Typography>{item.nome}</Typography>
            </CardContent>
            <CardMedia component="img" image={item.imagemLink} />
            <CardContent>
                <Typography align="right">R${item.valor}</Typography>
                <Button variant="contained" color="secondary" align="center">
                    Comprar
                </Button>
            </CardContent>
        </Card>
    ));
};

const useStyles = makeStyles({
    root: {
        width: "100vw",
        fontSize: "2rem",
    },
});

const LabelBottomNavigation = (set) => {
    const classes = useStyles();
    const [value, setValue] = React.useState("Home");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.root}
        >
            <BottomNavigationAction
                label="Home"
                value="Home"
                icon={<i class="fas fa-home"></i>}
                onClick={() => set(1)}
            />
            <BottomNavigationAction
                label="Cadastrar"
                value="Cadastrar"
                icon={<i class="fas fa-plus-circle"></i>}
                onClick={() => set(2)}
            />
        </BottomNavigation>
    );
};

const MidiasRodape = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", width: "100%"}}>
            <div style={{ width: "40%"}}>
                <Typography variant="h5" style={{ marginBottom: "2rem" }}>
                    Visite uma loja parceira:
                </Typography>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1838.939573372324!2d-43.19916856837916!3d-22.806941579006136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99792e8d34d635%3A0x749763704b86b08!2sPetz!5e0!3m2!1spt-BR!2sbr!4v1630618880572!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="315px"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                />
            </div>
            <div style={{ width: "40%"}}>
                <Typography variant="h5" style={{ marginBottom: "2rem" }}>Assista os animais mais engraçados de 2020:</Typography>
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/KQdCKM3_5EY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
};
