import React, { useState, useEffect } from "react";
export default function Home(){
    const [trocar, setTrocar] = useState(1);
    if(trocar == 1){
        return (
            <div>
            <TelaPrincipal />
            <button onClick={() => setTrocar(2)}>Cadastrar item</button>
            </div>
            )
    } else if(trocar == 2){
        return (
            <div>
            <TelaCadastro />
            <button onClick={() => setTrocar(1)}>Voltar</button>
            </div>
            )
    }
}

const listaProdutos = [
    {
        nome: 'Ração Golden Special Sabor Frango e Carne para Cães Adultos',
        valor: '120,00',
        imagemLink: 'https://staticpetz.stoom.com.br/fotos/1614090145261.jpg'
    },
    {
        nome: 'Ração GranPlus Choice para Gatos Adultos Sabor Frango e Carne 10,1kg',
        valor: '118,00',
        imagemLink: 'https://staticpetz.stoom.com.br/fotos/1603901892437.jpg'
    }
]


function TelaPrincipal(){
    const [lista, setLista] = useState(listaProdutos)
    return (
    <div>
        <h1>PetShop</h1>
        <p>Bem vindo(a)</p>
        <ul>
            { lista.map(item => (
                <div>
                <li>Produto: {item.nome}</li>
                <img src={item.imagemLink}/>
                <li>Valor: R${item.valor}</li>
                </div>
                )
                )
            }
        </ul>
    </div>
    )
}

const handleSubmit = (e) => e.preventDefault();

function TelaCadastro(){
    return(
    <div>
        <h1>Cadastrar item</h1>
        <p>Testando</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor='nome'>Nome do produto:</label>
            <input type='text' name='nome' id='nome'/>
            <label htmlFor='valor'>Valor do produto:</label>
            <input type='text' name='valor' id='valor'/>
            <button type='submit'>Salvar</button>
        </form>
    </div>
    )
}