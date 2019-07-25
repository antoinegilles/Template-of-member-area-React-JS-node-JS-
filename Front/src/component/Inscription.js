import React from 'react';
import axios from 'axios';

class Inscription extends React.Component {
    constructor(props){
        super(props);
        this.state={
          pseudo:null,
          email:null,
          password:null
        };
       }
       
       handleChangePseudo = (event) => {
          this.setState({pseudo: event.target.value});
        }
        handleChangePassword =(event) => {
          this.setState({password: event.target.value});
        }
        handleChangeEmail = (event) => {
          this.setState({email: event.target.value});
        }
        handleSubmit = () => {
          const { history } = this.props;

          if(this.state.email != null,this.state.pseudo != null,this.state.password != null){
            //console.log(this.state.email + this.state.pseudo + this.state.password)
            axios.post('http://localhost:8080/user/create', {
              pseudo: this.state.pseudo,
              email: this.state.email,
              password: this.state.password
            })
              const user = {pseudo: this.state.pseudo, email: this.state.email, password: this.state.password}
              localStorage.setItem('data', JSON.stringify(user));
              history.push('/loginhome');
          }else{
            alert("remplis tout les champs ;)")
          }
        }

    render() {
      return(
            <div className="row">
              <form onSubmit={this.handleSubmit}>
                  <div className="input-field col s3">
                      <input value={this.state.pseudo} onChange={this.handleChangePseudo} type="text"/>
                      <label className="active" htmlfor="pseudo">Pseudo</label>
                  </div>
                  <div className="input-field col s3">
                      <input type="email" value={this.state.email} onChange={(e) => this.handleChangeEmail(e)} />
                      <label className="active" htmlfor="mail">e-mail</label>
                  </div>
                  <div className="input-field col s3">
                      <input type="password" value={this.state.password} onChange={(e) => this.handleChangePassword(e)} />
                      <label className="active" htmlfor="mdp">Mot de Passe</label>
                  </div>
                 <button className="btn waves-effect waves-light blue accent-2" type="submit">Valider</button>
              </form>
            </div>

      );
    }
  }

export default Inscription