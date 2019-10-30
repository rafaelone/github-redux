import React from 'react';
import { connect} from 'react-redux'
import * as userActions from './store/actions/index'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault()
    const val = document.querySelector('input').value
    this.props.onSearch(val)
  }

  render(){
    const { user } = this.props
    console.log(user)
    return (
      <div className="container">
        <h1>GitHub Api</h1>
        <div className="form-control">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input type="text" id="username" placeholder="Username"/>
            </div>
            <div className="form-group">
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
        {user.name && (
          <div className="user">
            <img src={user.avatar_url} alt={user.name}/>
            <span>{user.name}</span>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  onSearch: (username) => dispatch(userActions.searchUser(username))
})
  

export default connect(mapStateToProps, mapDispatchToProps)(App);
