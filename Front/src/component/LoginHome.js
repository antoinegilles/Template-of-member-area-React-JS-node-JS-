import React from 'react';
import TodoList from './TodoList';

class LoginHome extends React.Component {
    constructor(props){
        super(props);
        this.state={
          items: [],
          arrive:'',
          depart:'',
          pseudo:JSON.parse(localStorage.getItem('data')).pseudo,
          email:JSON.parse(localStorage.getItem('data')).email
        };
        this.handleChangeArrive = this.handleChangeArrive.bind(this);
        this.handleChangeDepart = this.handleChangeDepart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
          arrive:this.state.arrive,
          pseudo:this.state.pseudo,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          depart: '',
          arrive:''
        }));
      }
    

    render() {
      return(
        <div>
        <h3>Trajets disponibles</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          
          <label htmlFor="depart">
            Depart
          </label>
          <input
            id="depart"
            onChange={this.handleChangeDepart}
            value={this.state.depart}
          />
          
          <label htmlFor="arrive">
            Arrivée
          </label>
          <input
            id="arrive"
            onChange={this.handleChangeArrive}
            value={this.state.arrive}
          />

          <button>
            Ajouter #{this.state.items.length + 1}
          </button>
        </form>
      </div>

      
            
      );
    }
  }

export default LoginHome