import React from "react";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      email: "",
      content: "",
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  sendMessage(event) {
    event.preventDefault();
    // if (!this.validateMail()) {
    //   return;
    // }

  const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: 'Anne',
      content: this.state.content
  };

  const env = process.env || {}
  emailjs.send(env.REACT_APP_EMAIL_SERVICE_ID, env.REACT_APP_EMAIL_TEMPLATE_ID, templateParams, env.REACT_APP_EMAIL_USER_ID)
          .then(function(response) {
          toast.success("Sua mensagem foi enviada!", {
            position: toast.POSITION.TOP_CENTER
          });
          console.log("SUCESSO!", response.status, response.text);
        },
        function(err) {
          toast.error("Não foi possível enviar a sua mensagem.");
        }
      );

    this.setState({
      name: "",
      email: "",
      content: ""
    });
  }

  render() {
    return (
      <div>
        <form
          className="ui form"
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <textarea
            id="name"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Seu nome"
            required
            value={this.state.name}
            style={{ width: "100%" }}
            rows={1}
          />
          <br />
          <textarea
            id="email"
            name="email"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Seu e-mail"
            required
            value={this.state.email}
            // error={this.state.errors.email}
            style={{ width: "100%" }}
            rows={1}
          />
          <br />
          <textarea
            id="content"
            name="content"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Mensagem"
            required
            value={this.state.content}
            style={{ width: "100%", height: "250px" }}
          />
          <br />
          <input
            type="button"
            value="Enviar mensagem!"
            className="ui button"
            style={{
              fontFamily: "Amatic SC",
              fontSize: "20px",
              color: "blue"
            }}
            onClick={this.sendMessage.bind(this)}
          />
        </form>
      </div>
    );
  };

}