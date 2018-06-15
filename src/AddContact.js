import React, { Component } from 'react';
import { AppContext } from './AppContext';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onChangeHandler(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <AppContext.Consumer>
                {
                    context => {
                        return (<div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="name">Name</label>
                                <input className="form-control" id="name"
                                    name="name" onChange={this.onChangeHandler.bind(this)}
                                    value={this.state.name}
                                    type="text" />
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="name">Email</label>
                                <input className="form-control" id="email"
                                    name="email" onChange={this.onChangeHandler.bind(this)}
                                    value={this.state.email}
                                    type="text" />
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="name">Phone</label>
                                <input className="form-control" id="phone"
                                    name="phone" onChange={this.onChangeHandler.bind(this)}
                                    value={this.state.phone}
                                    type="text" />
                            </div>
                            <button className="btn btn-default" onClick={() => {
                                context.addContact(this.state);
                                this.setState({ name: '', email: '', phone: '' })
                            }} >Add to my 😎 phonebook 📗</button>
                        </div>)
                    }
                }
            </AppContext.Consumer>
        )
    }
}

export default AddContact;