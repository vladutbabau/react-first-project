import React from 'react';
import './UserAddForm.css';

class UserAddForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email:'',
            isGoldClient: false
        }
    }

    handleNameChange(event){
        const inputValue = event.target.value;
        this.setState({name: inputValue});
    }

    handleEmailChange(event){
        const inputValue = event.target.value;
        this.setState({email: inputValue});
    }

    handleIsGoldClientChange(event){
        const inputValue = event.target.checked;
        this.setState({isGoldClient: inputValue})
    }
    

    render(){
        const {name, email, isGoldClient} = this.state;
        const {updateUsersList} = this.props;
        return (
                <form 
                onSubmit={(event) => updateUsersList(event, name, email, isGoldClient)} 
                className='user-add-form' >
                    <h2>Adauga un utilizator nou</h2>

                    <label htmlFor="name">Nume:</label>
                    <input 
                    type="text" 
                    name='name' 
                    id = 'name' 
                    value={this.state.name} 
                    onChange={(e)=>{this.handleNameChange(e)}}
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    name='email' 
                    id='email' 
                    value={this.state.email} 
                    onChange={(e)=>{this.handleEmailChange(e)}} 
                    />

                    <label htmlFor="gold-client">E client gold?</label>
                    <input 
                    type="checkbox" 
                    id='gold-client'
                    checked={this.state.isGoldClient}
                    onChange={(e)=>{this.handleIsGoldClientChange(e)}}
                    />

                    <input type="submit" value="Adauga user" />
                </form>

            
        )

    }
}

export default UserAddForm;