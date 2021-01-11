import './index.css';
import PFTest from '../PFTest'

function HelloWorld (props) {
    console.log(props); 
    return (
        <div>
            <h1>Look {props.HWname}, my very first component, yeah!</h1>
            <p>Monday at last!</p>
            <p>You seem like a decent {props.hprofession}</p>
            <PFTest name={props.name} setName={props.setName} handleSubmit={props.handleSubmit} profession={props.profession} setProfession={props.setProfession}/>
        </div>
    )
}


export default HelloWorld;