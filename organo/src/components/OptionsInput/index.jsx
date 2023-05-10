import './index.css'

export default function OptionsInput(props) {
    return(
        <div className="options-input">
            <label>{props.label}</label>
            <select 
            onChange={event => props.changedContent(event.target.value)} 
            required={props.required} 
            value={props.value}
            >
                <option value="" >Selecione uma opção...</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}