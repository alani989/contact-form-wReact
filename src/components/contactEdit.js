import React from 'react';

class ContactEdit extends React.Component {

    constructor() {
        super();
        this.state = {
            editedContact: {},
            hidden: true
        }
    }

    edited(e) {
        e.preventDefault();
        if (this.refs.name.value === '') {
            alert('Contact name cannot be empty')
        } else {
            this.setState({
                editedContact: {
                    name: this.refs.name.value,
                    number: this.refs.number.value,
                    email: this.refs.email.value,
                    address: this.refs.address.value,
                    city: this.refs.city.value,
                    state: this.refs.state.value,
                    postal: this.refs.postal.value,
                }
            },
                function () {
                    this.props.editedContact(this.state.editedContact)
                }
            );
        }
    }

    render() {

        return (
            <div>
                <form onSubmit={this.edited.bind(this)}>
                    <div>Name:
                        <input type='text' ref='name' placeholder={this.props.contact.name} />
                    </div>
                    <div>Number:
                        <input type='text' ref='number' placeholder={this.props.contact.number} />
                    </div>
                    <div>Email:
                        <input type='text' ref='email' placeholder={this.props.contact.email} />
                    </div>
                    <div>Address:
                        <input type='text' ref='address' placeholder={this.props.contact.address} />
                    </div>
                    <div>City:
                        <input type='text' ref='city' placeholder={this.props.contact.city} />
                    </div>
                    <div>State:
                        <input type='text' ref='state' placeholder={this.props.contact.state} />
                    </div>
                    <div>Zip Code:
                        <input type='text' ref='postal' placeholder={this.props.contact.postal} />
                    </div>
                    <div>
                        <input type='submit' value='Save Changes' />
                    </div>
                </form>
            </div>
        );
    }

}

export default ContactEdit;