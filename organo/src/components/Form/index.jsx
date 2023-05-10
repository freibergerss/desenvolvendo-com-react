import { useState } from 'react'
import Button from '../Button'
import Inputs from '../Inputs'
import OptionsInput from '../OptionsInput'
import './index.css'

export default function Form(props) {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');


    const Save = (event) => {
        event.preventDefault();
        props.registeredEmployee({
            name,
            post,
            image,
            team
        })

        setName('');
        setPost('');
        setImage('');
        setTeam('');
        
        alert("Informações salvas!") 
    }

    return (
        <section className="form">
            <form onSubmit={Save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Inputs 
                    label="Nome" 
                    placeholder='Digite o seu nome' 
                    required={true} 
                    content={name} 
                    changedContent={content => setName(content)}
                />
                <Inputs 
                    label="Cargo" 
                    placeholder='Digite o seu cargo' 
                    required={true}
                    content={post}
                    changedContent={content => setPost(content)}
                />
                <Inputs 
                    label="Imagem" 
                    placeholder='Digite o endereço da imagem' 
                    required={false}
                    content={image}
                    changedContent={content => setImage(content)}
                />
                <OptionsInput 
                    label="Time" 
                    itens={props.teams} 
                    required={true}
                    content={team}
                    changedContent={content => setTeam(content)}
                    />
                <Button text="Criar Card"/>
            </form>
        </section>
    )
}