import React, { useState, useEffect } from "react";
export default function Home(){
    const [trocar, setTrocar] = useState(1);
    if(trocar == 1){
        return (
            <div>
            {botao(setTrocar, 2, <i class="fas fa-plus-circle"></i>)}
            <TelaPrincipal />
            </div>
            )
    } else if(trocar == 2){
        return (
            <div>
            <TelaCadastro />
            {botao(setTrocar, 1, 'Voltar')}
            </div>
            )
    }
}

const listaProdutos = [
    {   
        id: 1,
        nome: 'Ração Golden Special Sabor Frango e Carne para Cães Adultos',
        valor: '120,00',
        imagemLink: 'https://staticpetz.stoom.com.br/fotos/1614090145261.jpg'
    },
    {
        id: 2,
        nome: 'Ração GranPlus Choice para Gatos Adultos Sabor Frango e Carne 10,1kg',
        valor: '118,00',
        imagemLink: 'https://staticpetz.stoom.com.br/fotos/1603901892437.jpg'
    }
]


const TelaPrincipal = () => {
    return (
    <div>
        <h1>PetShop</h1>
        <p>Bem vindo(a)</p>
        <ul>
            { listaItens(listaProdutos) }
        </ul>
    </div>
    )
}



const TelaCadastro = () => {
    const [lista, setLista] = useState(listaProdutos)
    const [nomeProduto, setNomeProduto] = useState('')
    const [valor, setValor] = useState('')
    const [imagemLink, setImagemLink] = useState('')

    const handleNomeChange = (e) => setNomeProduto(e.target.value.toUpperCase())
    const handleValorChange = (e) => setValor(e.target.value)
    const handleImagemLink = (e) => setImagemLink(e.target.value)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLista(
            lista.push({
                id: lista[lista.length - 1].id + 1,
                nome: nomeProduto,
                valor: valor,
                imagemLink: imagemLink
            })
        )
        console.log(lista[lista.length - 1].id + 1)
    }
    return(
    <div>
        <h1>Cadastrar item</h1>
        <p>Testando</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor='nome'>Nome do produto:</label>
            <input type='text' name='nome' id='nome' value={nomeProduto} onChange={handleNomeChange} required />
            <label htmlFor='valor'>Valor do produto:</label>
            <input type='text' name='valor' id='valor' value={valor} onChange={handleValorChange} required />
            <label htmlFor='imagemLink'>Link da imagem</label>
            <input type='text' name='imagemLink' id='imagemLink' value={imagemLink} onChange={handleImagemLink} required />
            <button type='submit'>Salvar</button>
        </form>
    </div>
    )
}

const listaItens = (lista) => {
    return lista.map(item => (
        <div className="item" key={item.id}>
            <div>
            <li>Produto: {item.nome}</li>
            <img src={item.imagemLink}/>
            <li>Valor: R${item.valor}</li>
            </div>
            <div>
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>
            </div>
        </div>
        )
    )
}

const botao = (set, cond, texto) => <button onClick={() => set(cond)}>{texto}</button>