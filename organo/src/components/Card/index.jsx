import './index.css'

export default function Card(props) {
    return(
        <div className='card'>
            <div className='card-header' style={{backgroundColor: props.primaryColor}}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='card-footer'>
                <h4>{props.name}</h4>
                <h5>{props.post}</h5>
            </div>
        </div>
    )
}