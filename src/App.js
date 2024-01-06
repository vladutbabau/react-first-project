import './App.css';
import React from 'react';
import UserAddForm from './components/UserAddForm';
import UserList from './components/UserList';
import PostList from './components/PostList';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      background: 'white',
      color: 'black',
      showUsers: false,
      users: [],
      showPosts: false,
      posts: []
    };
  }
  componentDidMount(){
    //AICI TREBUIE PUSE CERERILE DE LA SERVER 
    //CARE TREBUIESC FACUTE O SINGURA DATA
    //pentru ca asta sa mearga trebuie sa fie sters tot users, adica users = []
  }
  

  fetchUsers() { 
    //FETCH PENTRU USERS
    //------------------
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const filteredUsersJson = json.filter(user => user.id < 4)
      
      filteredUsersJson.forEach((user) => {
        user.isGoldClient = false;
      })
      
      this.setState({users:filteredUsersJson, showUsers: true});
    })
  }

  fetchPosts() { 
    //FETCH PENTRU POSTS
    //-------------------
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const filteredPostsJson = json.filter(post => post.id < 4)
      
      this.setState({posts:filteredPostsJson, showPosts: true});
    })
  }

  handleBackgroundChange(event){
    // console.log(event.target.value);
    const userBackground = event.target.value; 
    this.setState({background: userBackground});
  }

  handleTextColorChange(event){
    // console.log(event.target.value);
    const userText = event.target.value; 
    this.setState({color: userText});

  }

  getMaxId(users){
    let maxId=0;

    users.forEach(user => {
      if (user.id > maxId){
        maxId = user.id;
      }
    });

    return maxId;
  }

  updateUsersList(event, name, email, isGoldClient){
    // this.setState({users:[
       //DACA IN PARAMETRII LUI setState vedeti this.state => GRESIT
    //   ...this.state.users,
    //   user
    //DACA setState PRIMESTE O FUNCTIE CA PARAMETRU
    //FUNCTIA RESPECTIVA PRIMESTE LA RANDUL EI CA PARAMETRU VALOAREA PRECEDENTA A STARII
    event.preventDefault();
    this.setState(prevState => {
        return {
          users:[
            ...prevState.users,
            {
              id: this.getMaxId(prevState.users) + 1,
              name,
              email,
              isGoldClient
            }
          ]
        }
      });
  }
  

  render() {
    return (
      <div className='App' style={{background: this.state.background, color: this.state.color}}>
        <UserAddForm updateUsersList={(event, name, email, isGoldClient) => this.updateUsersList(event, name, email, isGoldClient)}/>
        <h1>Lista utilizatori:</h1>
        <button onClick={()=>this.fetchUsers()}>Afiseaza userii</button>
        {
          (this.state.showUsers || this.state.background !== '#000000') 
                &&  <UserList users={this.state.users} />
        }
        <h1>Lista posturi</h1>
        <button onClick={()=>this.fetchPosts()}>Afiseaza posturile</button>
        {
          this.state.showPosts 
                && <PostList posts={this.state.posts} />
        }
        <h2>Schimba culoarea fundalului:</h2>
        <input type='color' onChange={(e) => this.handleBackgroundChange(e)}/>
        <h2>Schimba culoarea textului:</h2>
        <input type='color' onChange={(e) => this.handleTextColorChange(e)} />
        
        </div>
    );
  }
}

export default App;
