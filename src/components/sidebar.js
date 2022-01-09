import React from "react";
import { connect } from "react-redux";
import './sidebar.css'

function togglerModule(module){
    return{
        type: 'TOGGLE',
        module
    }
}

const Sidebar = ({modules, dispatch}) => (
        <div className="todos">
            {modules.map(module =>(
                <div key={module.id}>
                    <h1 className="h1">{module.name} {module.selecao} <button className="button" onClick={()=>dispatch(togglerModule(module))} >Selecionar</button></h1>
                </div>
            ))}
        </div>
        
    
)
export default connect(state => ({modules: state.modules})) (Sidebar)