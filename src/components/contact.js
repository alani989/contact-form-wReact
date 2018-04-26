import React from 'react';
import ContactItem from './contactItem';
import ContactAdd from './contactAdd';
import ContactEdit from './contactEdit'
import ToggleDisplay from 'react-toggle-display';

class Contact extends React.Component {

    constructor() {
        super();
        this.state = {
            contacts: [],
            oneContact: [],
            contactIndex: '',
            show: false
        }
    }

    handleAddContact(contact) {
        let newContacts = this.state.contacts;
        newContacts.push(contact);
        this.setState({ contacts: newContacts });
    }

    handleDeleteContact(number) {
        let newContacts = this.state.contacts;
        let index = newContacts.findIndex(x => x.number === number)
        newContacts.splice(index, 1)
        this.setState({ contacts: newContacts });
    };

    handleEditContant(number) {
        let newContacts = this.state.contacts;
        let index = newContacts.findIndex(x => x.number === number)
        let contact = newContacts[index];
        this.setState({ oneContact: contact, contactIndex: index, show: !this.state.show })
    };

    contactUpdated(contact) {
        let index = this.state.contactIndex;
        let newContacts = this.state.contacts;
        newContacts.splice(index, 1, contact)
        this.setState({ contacts: newContacts, show: false });
    }

    render() {
        let contactItem;
        contactItem = this.state.contacts.map(contact => {
            return (
                <ContactItem
                    key={contact.number}
                    contact={contact}
                    deleted={this.handleDeleteContact.bind(this)}
                    edited={this.handleEditContant.bind(this)}
                />
            );
        })
        return (
            <div>
                <div>
                    New Contact:
                    <ContactAdd
                        newContact={this.handleAddContact.bind(this)} />
                </div>
                <br />
                <div>
                    {contactItem}
                </div>
                <ToggleDisplay show={this.state.show}>
                    <div>
                        Edit Contact:
                        <ContactEdit
                            contact={this.state.oneContact}
                            editedContact={this.contactUpdated.bind(this)} />
                    </div>
                </ToggleDisplay>
                <br />
            </div>
        )
    }
}

export default Contact;