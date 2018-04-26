import React from 'react';

class ContactAdd extends React.Component {

    constructor() {
        super();
        this.state = {
            contact: {}
        }
    }

    addContact(e) {
        e.preventDefault();
        if (this.refs.name.value === '') {
            alert('Contact name cannot be empty')
        } else {
            this.setState({
                contact: {
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
                    this.props.newContact(this.state.contact)
                    this.refs.name.value = ""
                    this.refs.number.value = ""
                    this.refs.email.value = ""
                    this.refs.address.value = ""
                    this.refs.city.value = ""
                    this.refs.state.value = ""
                    this.refs.postal.value = ""
                }
            );
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.addContact.bind(this)}>
                    <div>Name:
                        <input type='text' ref='name' />
                    </div>
                    <div>Number:
                        <input type='text' ref='number' />
                    </div>
                    <div>Email:
                        <input type='text' ref='email' />
                    </div>
                    <div>Address:
                        <input type='text' ref='address' />
                    </div>
                    <div>City:
                        <input type='text' ref='city' />
                    </div>
                    <div>State:
                        <input type='text' ref='state' />
                    </div>
                    <div>Zip Code:
                        <input type='text' ref='postal' />
                    </div>
                    <div>
                        <input type='submit' value='Add' />
                    </div>
                </form>
            </div>
        );
    }

} //end class

export default ContactAdd;