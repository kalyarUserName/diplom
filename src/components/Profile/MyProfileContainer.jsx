import {connect} from "react-redux";
import MyProfile from "./MyProfile";

const mapStateToProps = (state) => {
    return {
        users: state.profile.users,
        notifications: state.profile.notifications
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const MyProfileContainer = connect(mapStateToProps, mapDispatchToProps)(MyProfile);

export default MyProfileContainer;