import React, { Component } from 'react';
import { AppContext } from './AppContext';

const ContactRows = () => (
    <AppContext.Consumer>
        {context => {
            console.log('>>>>', context);
            return context.contacts.map(c => {
                return (
                    <tr key={Math.random()}>
                        <td>
                            <a href="" onClick={(e) => {
                                e.preventDefault();
                                context.deleteContact(c.email)
                            }}><span className="glyphicon glyphicon-trash"></span></a>
                            &nbsp;&nbsp;&nbsp;
                    {c.name}</td>
                        <td>{c.email}</td>
                        <td>{c.phone}</td>
                    </tr>
                )
            })
        }}
    </AppContext.Consumer>
);

const ContactList = () => (
    <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>name</th>
                <th>Email id</th>
                <th>Phone number</th>
            </tr>
        </thead>
        <tbody>
            <ContactRows />
        </tbody>
    </table>
);
export default ContactList;