import './index.css'

export default function Inputs(props) {

    const script = (event) => {
        props.changedContent(event.target.value)
    }

    return(
        <div className='inputs'>
            <label>{props.label}</label>
            <input 
                value={props.content} 
                onChange={script} 
                required={props.required} 
                placeholder={props.placeholder}
            />
        </div>
    )

}