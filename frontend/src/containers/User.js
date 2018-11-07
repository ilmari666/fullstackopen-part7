import { connect } from 'react-redux';
import User from '../components/User';
import { getUser } from '../actions/users';


const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const users = state.users.users;
    const user = users.find(user => user.id === id);
    return {
      user,
      id
    };
  };
  
  export default connect(
    mapStateToProps,
    { getUser }
  )(User);
  