import Card from '../Card';
import './index.css';

export default function Team(props) {
    return(
        props.collaborators.length > 0 ?
            <section className='team' style={{backgroundColor: props.secondaryColor}}>
                <h3 style={{borderColor: props.primaryColor}}>{props.teamName}</h3>
                <div className='collaborators'>
                    {props.collaborators.map(collaborator => <Card
                    key={collaborator.name} 
                    name={collaborator.name} 
                    post={collaborator.post} 
                    image={collaborator.image}
                    primaryColor={props.primaryColor}
                    />)}
                </div>
            </section>
        : ''
    )
}