import Sidebar from './Sidebar';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        sidebarPage: state.sidebarPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{ dispatch };
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;