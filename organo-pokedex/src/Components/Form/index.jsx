import Button from '../Button';
import Inputs from '../Inputs';
import './Form-module.css'

const Form = () =>{
    return(
        <section className='form'>
            <form>
            <h2>Registre seu Pokémon abaixo</h2>
                <Inputs/>
                <Button />
            </form>
        </section>
    )
}

export default Form;