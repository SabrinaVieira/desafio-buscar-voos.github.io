import React from 'react';
import './Field.css'

interface Ivoo {
    nome?: String;
    aeroporto?: String;
    cidade: String;
}

export default function FieldGo() {
    

    async function getAeroportos() {// função getAeroportos pega a lista de obj aeroportos da api e joga em voos
        const response = await fetch('https://api-voadora.dev.tegra.com.br/flight/companies');
        console.log(response);
        const voos = await response.json();

        return voos;
    }
debugger
    const [voos, newState] = React.useState(ch);//const usestates guarda um arrey de obj//recebe "change" como param inicial //e recebe a lista de

    function filtraAeroporto(ch: Ivoo) {//realiza a comparação do digitado com a api

//'voo' é um registro por vez que esta vindo da mapeação
        const aero = voos.map () => {
            if(ch.cidade === voos.cidade) {
                return voos.name;
            } else {
                return "nao encontrado"
            }
        };
        return aero;
        newState(aero);
    }

    return(
        <form className="formulario">
            {voos.map((ch)
                return (

                    <div className="ui fluid search selection dropdown">
                        <input type="text" className="input-field" placeholder="To" onChange={() => filtraAeroporto(ch.cidade)}>
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item" data-value="af">{ch.cidade}</div>
                        </div>
                            
                        </input>
                    </div>
                )
            )}
            
           
            <i className="fas fa-plane fa-rotate-270"/>
        </form>
    )

}