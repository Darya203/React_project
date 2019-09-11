import React from 'react';
import Sidebar from './Sidebar';
import StoreContext from '../../../StoreContext';


const SidebarContainer = (props) => {

    return (
        <StoreContext.Consumer>   
             {(store) => {
                let state = store.getState();
                return <Sidebar friends={state.sidebarPage.friends} />
            }}
        </StoreContext.Consumer>
    );
}

export default SidebarContainer;