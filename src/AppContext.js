import React, { Component, createContext } from 'react';

export const AppContext = createContext();

export class AppProvider extends Component {
    state = {
        contacts: [
            {
                name: 'Vinod',
                email: 'vinod@vinod.co',
                phone: '9731424784'
            },
            {
                name: 'Shyam',
                email: 'shyam@example.com',
                phone: '7731424784'
            },
            {
                name: 'John Doe',
                email: 'johndoe@example.com',
                phone: '8731424784'
            }
        ],
        addContact: contact => this.setState({ contacts: [...this.state.contacts, contact] }),
        deleteContact: email => {
            let contacts = [...this.state.contacts];
            let index = contacts.findIndex(c => c.email == email);
            contacts.splice(index, 1);
            this.setState({ contacts });
        }
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}