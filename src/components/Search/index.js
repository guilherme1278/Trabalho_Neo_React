import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

class Search extends Component
{

    state = {
        deputados: [],
    }

    componentDidMount()
    {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`/api/v2/deputados`);

        const { docs } = response.data;

        console.log(response.data.dados);
        this.setState({ deputados: response.data.dados });
    }

    render()
    {   
        const {deputados} = this.state;
        
        return(
        <div className="container">
            {
                deputados.map((deputado, k) => (
                    <div className="row" id="card" key={k}>
                        <div className="col-md-3">
                            <img src={`${deputado.urlFoto}`} id="img" />
                        </div>
                        <div className="col-md-7">
                            <p><b>Deputado: </b> { deputado.nome }</p>
                            <p><b>Partido: </b> { deputado.siglaPartido } - { deputado.siglaUf }</p>
                            <p><b>E-mail: </b> <a href={`${deputado.email}`}>{ deputado.email }</a></p>
                            <p><b><a href={`${deputado.uri}`}>Ver Gastos</a></b></p>
                        </div>
                    </div>
                ))
            }
            
        </div>
        );
    }
}

export default Search;
