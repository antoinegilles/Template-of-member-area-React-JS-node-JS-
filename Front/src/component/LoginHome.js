import React from 'react';
import TodoList from './TodoList';
import Materialize from "materialize-css";

class LoginHome extends React.Component {
    constructor(props){
        super(props);
        this.state={
          items: [],
          depart:'',
          pseudo:'',
          dateDepart:"",
          lieuDepart:"",
          lieuArrive:""
        };
        this.handleChangeArrive = this.handleChangeArrive.bind(this);
        this.handleChangeDepart = this.handleChangeDepart.bind(this);
        this.handleChangeLieuDepart = this.handleChangeLieuDepart.bind(this);
        this.handleChangeLieuArrive = this.handleChangeLieuArrive.bind(this);
        this.handleChangeDateDepart = this.handleChangeDateDepart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       }

       componentDidMount(){

        const { history } = this.props;
         
        if(!localStorage.getItem("data")){
          history.push('/connexion');
         }else{
           this.setState({pseudo : JSON.parse(localStorage.getItem("data")).pseudo})
           console.log(this.state.pseudo)
         }
       }
       
       handleChangeDateDepart(e) {
        this.setState({ dateDepart: e.target.value });
      }
      handleChangeLieuDepart(e) {
        this.setState({ lieuDepart: e.target.value });
      }
      handleChangeLieuArrive(e) {
        this.setState({ lieuArrive: e.target.value });
      }
       handleChangeDepart(e) {
        this.setState({ depart: e.target.value });
      }
      handleChangeArrive(e) {
        this.setState({ arrive: e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        if (!this.state.depart.length) {
          return;
        }
        const newItem = {
          depart:this.state.depart,
          dateDepart:this.state.dateDepart,
          pseudo:this.state.pseudo,
          lieuArrive:this.state.lieuArrive,
          lieuDepart:this.state.depart,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          depart: '',
          arrive:''
        }));
      }

      test(){
            Materialize.Datepicker.init();
      }
      
    render() {
      return(
    <div>
        <div class="container">
            <div className="row">
                <div className="col-sm"></div>
                 <div class="col-sm">
                    <div class="card">
                        <span class="card-title">Proposer un trajet</span>
                        <div class="card-content"> 

                            <div className="row">
                                    <div className="input-field col s6">
                                        <input id="dateDepart" value={this.state.dateDepart} onChange={this.handleChangeDateDepart} type="date"/>
                                        <label className="active" htmlfor="dateDepart">Date du départ</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input id="depart" value={this.state.depart} onChange={this.handleChangeDepart} type="time"/>
                                        <label className="active" htmlfor="depart"> Heure de départ</label>
                                    </div>
                            </div>
                            <div className="row">    
                                    <div className="input-field col s6">
                                        <input id="lieuDepart" value={this.state.lieuDepart} onChange={this.handleChangeLieuDepart} type="text"/>
                                        <label className="active" htmlfor="lieuDepart">Lieu de départ</label>
                                    </div>
                                    
                                    <div className="input-field col s6">
                                        <input id="lieuArrive" value={this.state.lieuArrive} onChange={this.handleChangeLieuArrive} type="text"/>
                                        <label className="active" htmlfor="lieuArrive">Lieu d'arrivée</label>
                                    </div>
                            </div>    

                        </div>
                        <div class="card-action">
                            <button type="submit" onClick={this.handleSubmit}>Valider</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm" ></div>
            </div>
        </div>

        <input type="text" class="datepicker"  onClick={this.test}/>
        <h3>Trajets disponibles</h3>
        <TodoList items={this.state.items} />

    </div>

      
            
      );
    }
  }

export default LoginHome