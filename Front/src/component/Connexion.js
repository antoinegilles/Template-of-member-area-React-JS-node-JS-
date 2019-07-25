import React from 'react';
import axios from 'axios';

class Connexion extends React.Component {
    constructor(props){
        super(props);
        this.state={
          pseudo:null,
          password:null
        };
       }

       
       handleSubmit = () => {
          const { history } = this.props;
          var pseudo = this.state.pseudo

          if(this.state.pseudo != null,this.state.password != null){
            
            axios.post('http://localhost:8080/user/login', {
              pseudo:this.state.pseudo,
              password:this.state.password
            })
            .then(function (response) {
              if(response.status === 200){
                                
                localStorage.setItem('data',JSON.stringify({pseudo: pseudo}));
                //console.log(localStorage.getItem("data"))
                history.push('/loginhome');
              }else{

                alert("Identifiants / mot de passe incorrect incorrect")
              }
            })
            .catch(function (error) {

              console.log(error);
              alert("Identifiants / mot de passe incorrect incorrect")
            });
          }else{

            alert("remplissez tout les champs ;)")
          }
        }

        handleChangePseudo = (event) => {
          this.setState({pseudo: event.target.value});
        }
        handleChangePassword =(event) => {
          this.setState({password: event.target.value});
        }
        
         
    render() {
      return(
        <div class="container">
            <div className="row">
                <div className="col-sm"></div>
                 <div class="col-sm">
                    <div class="card">
                        <span class="card-title">Connexion</span>
                        <div class="card-content">
                            <div className="input-field">
                            <input value={this.state.pseudo} onChange={this.handleChangePseudo} type="text"/>
                            <label className="active" htmlfor="pseudo">Pseudo</label>
                            </div> 
                            <div className="input-field">
                            <input type="text" value={this.state.password} onChange={(e) => this.handleChangePassword(e)}/>
                            <label className="active" htmlfor="mdp">Mot de Passe</label>
                            </div>
                        </div>
                        <div class="card-action">
                            <button className="btn waves-effect waves-light blue accent-2" type="submit" onClick={() => this.handleSubmit()}>Valider</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm" ></div>
            </div>
        </div>

           
           
      );
    }
  }

export default Connexion