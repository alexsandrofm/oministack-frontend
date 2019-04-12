import React, { Component } from 'react';
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import './styles.css';

export default class Main extends Component {
    //Criando estados
    state = {
        newBox: ""
    };

    handleSubmit =  async (e) => {
        e.preventDefault();

        const response = await api.post('boxes', {
            title: this.state.newBox,
        });
        
        //Acessando propriedade
        this.props.history.push(`/box/${response.data._id}`);
    }

    handleInputChange = e => {
        this.setState({ newBox: e.target.value });
    };

    render() { 
        return(
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="" />
                    <input 
                        placeholder="Criar um box" 
                        value={this.state.newBox}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
  }
}
