import './Card.css'
const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-title'>
                <h3>{props.name}</h3>
                <div className='card-type'>{props.type}</div>
            </div>
            <div className="card=body">
                <div>
            <img src={props.image} alt='Bulbasaur'/>
            </div><div>
                {props.description}
                </div>
            </div>
        </div>
    )
}
export default Card