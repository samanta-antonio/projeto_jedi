import React from 'react';

export default class FaleConosco extends React.Component{

    constructor(props){
        super(props);
        this.state = {mensagem:[]}
       this.enviarMensagem =  this.enviarMensagens.bind(this);
    }

    async componentDidMount(){
        const resposta = await fetch ("http://localhost/projetos/React/react/teste/src/backend/Bancodedados/php/pegarMensagens.php");
        const json = await resposta.json();
        this.setState({mensagem: json});
       
    }
    async enviarMensagens(elemento){
        elemento.preventDefault();
        const url = "http://localhost/projetos/React/react/teste/src/backend/Bancodedados/php/enviarMensagens.php";
        const dado = new FormData(elemento.target);
        const cabecalho = {
            method: 'POST',
            body: dado,
        }
        await fetch (url,cabecalho);
        await document.getElementById("formulario").reset();
        await alert ("Mensagem Enviada");
        
    }
    render(){
        console.log(this.state.listaUser);
        return(
            
            <div className = "container-fluid text-dark bg-secondary">
            <h2>Contato</h2>
            <hr/>
            <center>
            
            <br/><br/>
            
            <h2>Atendimento via e-mail</h2>
            <p>Entre em contato conosco através de nosso formulário. O preenchimento é muito prático e lhe responderemos rapidamente! </p>
            <br/>
        
            <div id="area">
            <form id="formulario" autoComplete="off" onSubmit = {this.enviarMensagens}>
                <fieldset/>
                <h4>Nome completo: </h4>
                <input type="text" name="nome" style={{width: "400px"}}/>
                <h4>E-mail:</h4>
                <input type="text" name="email" style={{width: "400px"}}/>
                <h4>Mensagem: </h4>
                <textarea name="mensagem" style={{width: "400px"}}></textarea>
                <input type="submit" value="Enviar"/>
            </form>

            <div className= "container-fluid">
                    <div className="row">
                        <div className="col">
                            <h3>Comentários de nossos clientes:</h3>
                                 <div  className=  "list-group">
                                {this.state.mensagem.map(msg=>(
                                    <div className = "list-group-item text-primary">
                                    <h5>{msg.nome}</h5>
                                    <p>{msg.msg}</p>
                                    </div>
                                   ))}

                                </div>
                        </div>
                
                    </div>
                 
            </div> 
           
            </div>
            </center>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>   
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>  
            <br/><br/><br/><br/><br/><br/><br/><br/><br/> 
            
            
             <hr/>
            </div>
          
           
        );
    }
}