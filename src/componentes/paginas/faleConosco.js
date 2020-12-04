import React from 'react';

export default class FaleConosco extends React.Component{
    render(){
        return(
            
            <div className = "container-fluid text-white bg-secondary">
            <h2>Contato</h2>
            <hr/>
            <center>
            
            <br/><br/>
            
            <h2>Atendimento via e-mail</h2>
            <p>Entre em contato conosco através de nosso formulário. O preenchimento é muito prático e lhe responderemos rapidamente! </p>
            <br/>
        
            <div id="area">
            <form id="formulario" autoComplete="off">
                <fieldset/>
                <h4>Nome completo: </h4>
                <input type="text" style={{width: "400px"}}/>
                <h4>E-mail:</h4>
                <input type="text" style={{width: "400px"}}/>
                <h4>Mensagem: </h4>
                <textarea style={{width: "400px"}}></textarea>
                <input type="submit" value="Enviar"/>
            </form>
            </div>
            </center>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>
            </div>
          
           
        );
    }
}