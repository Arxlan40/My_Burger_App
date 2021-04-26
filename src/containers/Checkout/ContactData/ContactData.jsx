import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";
import axios from "../../../Axios";
import Input from "../../../components/UI/Input/Input";
class ContactData extends Component {
  state = {
    orderFrom: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "Text",
          placeholder: "Your Name",
        },
        value: "",
      },

      street: {
        elementType: "input",
        elementConfig: {
          type: "Text",
          placeholder: "Your street",
        },
        value: "",
      },

      country: {
        elementType: "input",
        elementConfig: {
          type: "Text",
          placeholder: "country",
        },
        value: "",
      },

      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
      },

      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "fastest" },
            { value: "fastest", displayValue: "fastest" },
          ],
        },
        value: "",
      },
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true });

    const formData = {};
    for (let key in this.state.orderFrom) {
      formData[key] = this.state.orderFrom[key].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderdata: formData,
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  changeHandler = (event, identifier) => {
    const updatedfrom = {
      ...this.state.orderFrom,
    };
    const updatedformelement = {
      ...updatedfrom[identifier],
    };

    updatedformelement.value = event.target.value;

    updatedfrom[identifier] = updatedformelement;
    this.setState({ orderFrom: updatedfrom });
  };

  render() {
    const formElmentArray = [];
    for (let key in this.state.orderFrom) {
      formElmentArray.push({
        id: key,
        config: this.state.orderFrom[key],
      });
    }
    let form = (
        <form onSubmit={this.orderHandler}>
            {formElmentArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    change={(event) => this.changeHandler(event, formElement.id)} />
            ))}
            <Button btntype="Success">ORDER</Button>
        </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
