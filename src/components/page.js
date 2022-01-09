import React from "react";
import './page.css'

import {connect} from "react-redux"

const Page = ({activeModule}) => {
    return (
        <div>
            <h1 className="h1">{activeModule.name}</h1>
            <div className="title">
                {activeModule.dadosSelecao}
            </div>
            <strong className="h1">{activeModule.jogadorNovo}</strong><br></br>
            <div className="novo">
                {activeModule.avatar}
                <div className="text">{activeModule.dadosNovo}</div>
            </div>
            <strong className="h1">{activeModule.JogadorClassico}</strong>
            <div className="novo"><div className="text">{activeModule.dadosClassico}</div>{activeModule.avatar2}</div>
        </div>
    )
}

export default connect(state => ({activeModule: state.activeModule})) (Page)
