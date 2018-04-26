import React from 'react'


class ContactItem extends React.Component {

    deleteItem(number) {
        this.props.deleted(number);
    }
    
    editItem(number) {
        this.props.edited(number);
    }

    render() {
        return (
            <div>
                Name: {this.props.contact.name}
                <br />
                Number: {this.props.contact.number}
                <br />
                email: {this.props.contact.email}
                <br />
                Address: {this.props.contact.address}
                <br />
                City: {this.props.contact.city}
                <br />
                State: {this.props.contact.state}
                <br />
                Zip Code: {this.props.contact.postal}
                <br />
                <input type="button" value='Delete' onClick={this.deleteItem.bind(this, this.props.contact.number)} />
                <input type="button" value='Edit' onClick={this.editItem.bind(this, this.props.contact.number)} />
                <br /><br />
            </div>
        );
    }

}

export default ContactItem;