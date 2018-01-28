import React, {Component} from "react";
import Field from "./field";

class ContactForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                firstName: "",
                lastName: "",
                phone: "",
                email: ""
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }
    handleInputChange(event){
        const {value, name} = event.target;
        const {form} = this.state;

        form[name] = value;

        this.setState({
            form: {...form}
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.add(this.state.form);
        console.log("handle submit:", this.state.form);
    }
    reset(){
        this.setState({
            form: {
                firstName: "",
                lastName: "",
                phone: "",
                email: ""
            }
        });
    }
    render(){
        const {firstName, lastName, phone, email} = this.state.form;
        return (
            <form onSubmit={this.handleSubmit}>
                <Field onChange={this.handleInputChange} value={firstName} name="firstName" type="text" label="FirstName"/>
                <Field onChange={this.handleInputChange} value={lastName} name="lastName" type="text" label="LastName"/>
                <Field onChange={this.handleInputChange} value={phone} name="phone" type="tel" label="Phone Number"/>
                <Field onChange={this.handleInputChange} value={email} name="email" type="email" label="Email"/>
                <button>Add Contact</button>
                <button type="button" onClick={this.reset}>Clear Form</button>
            </form>
        )
    }
}

export default ContactForm;
