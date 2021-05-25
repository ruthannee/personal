import React from "react";
// import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { Button } from '@material-ui/core';
import './ContractForm.scss';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      content: '',
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  disableFields(){
    document.getElementById('submit').disabled = true;
  }

  sendMessage(event) {
    event.preventDefault();

    if (this.state.name === (null || '') || this.state.email === (null || '') || 
        this.state.content === (null || '')) {
      toast.warning('Preencha todos os campos', {
        autoClose:4000, 
        position: toast.POSITION.TOP_CENTER})
      return false;
    }

    var onlyLetters = new RegExp(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/g);
    if (!onlyLetters.test(this.state.name)) {
      toast.warning('Caractere(s) inválido(s) no campo NOME.', {
        autoClose:4000, 
        position: toast.POSITION.TOP_CENTER})
      return false;
    }

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(this.state.email)) {
      toast.warning('E-mail inválido', {
        autoClose:4000, 
        position: toast.POSITION.TOP_CENTER})
      return false;
    }

    this.disableFields();

    // const templateParams = {
    //   from_name: this.state.name + " (" + this.state.email + ")",
    //   to_name: 'Anne',
    //   content: this.state.content
    // };

    // const env = process.env || {}
    // emailjs.send(env.REACT_APP_EMAIL_SERVICE_ID, env.REACT_APP_EMAIL_TEMPLATE_ID, templateParams, env.REACT_APP_EMAIL_USER_ID)
    //   .then(function (response) {
    //     toast.success("Mensagem enviada com sucesso!", {
    //       position: toast.POSITION.TOP_CENTER
    //     });
    //     console.log("SUCESSO!", response.status, response.text);
    //       return true;
    //   },
    //     function (err) {
    //       toast.error('Não foi possível enviar a sua mensagem.', {
    //         autoClose:4000,  
    //         position: toast.POSITION.TOP_CENTER
    //     });
    //       return false;
    //     }
    //   );

    this.setState({
      name: "",
      email: "",
      content: ""
    });
        toast.success("Mensagem enviada com sucesso!", {
          position: toast.POSITION.TOP_CENTER
        });
  }

  render() {
    return (
      <div className="contact">
        <form
          className="ui form"
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <div className="row">
            <div className="field">
              <div className="label">
                <label>Nome *</label>
              </div>
                <input
                  id="name"
                  name="name"
                  className="input"
                  type="text"
                  onChange={this.handleInputChange.bind(this)}
                  required
                  value={this.state.name}
                  rows={1}
                />
            </div>
            <div className="field">
              <div className="label">
                <label>E-mail *</label>
              </div>
                <input
                  id="email"
                  name="email"
                  className="input"
                  type="text"
                  onChange={this.handleInputChange.bind(this)}
                  required
                  value={this.state.email}
                  //error={this.state.errors.email}
                  rows={1}
                />
              </div>
          </div>

          <div className="row">
            <div className="field">
              <div className="label">
                <label>Mensagem *</label>
              </div>
              <textarea
                id="content"
                name="content"
                className="input"
                type="text"
                onChange={this.handleInputChange.bind(this)}
                required
                value={this.state.content}
                rows={4}
              />
            </div>
          </div>

          <div className="row">

            <div className="field" style={{textAlign: 'right'}}>
              <ToastContainer />
              <Button id='submit'
                name='submit'
                type='submit' 
                variant="outlined"
                onClick={this.sendMessage.bind(this)}>Enviar</Button>
            </div>

          </div>

        </form>
      </div>
    );
  };

}