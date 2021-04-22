import AppView from "../views/AppView.js";
import {Container} from "flux/utils";
import React from "react";
import PhoneStore from "../data/PhoneStore.js";
import Actions from "../data/Actions.js";
 
class AppContainer extends React.Component 
{ 
    static getStores() { 
        return [PhoneStore]; 
    } 
    static calculateState(prevState) { 
        return { 
            phones: PhoneStore.getState(),
            onAddItem: Actions.addItem,
            onRemoveItem: Actions.removeItem,
            onEditItem: Actions.editItem,
            onCheckItem: Actions.checkItem


        };
    }
    render() { 
        return <AppView phones={this.state.phones} 
                        onRemoveItem={this.state.onRemoveItem}
                        onAddItem={this.state.onAddItem}
                        onEditItem={this.state.onEditItem}/>;
    } 
} 
export default Container.create(AppContainer);