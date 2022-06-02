import {connect} from "react-redux";
import MyProfile from "./MyProfile";


const mapStateToProps = (state) => {
    console.log("state:::: ", state);
    return {
        users: state.profile.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const MyProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyProfile);

export default MyProfileContainer;