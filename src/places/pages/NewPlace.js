import React, { useCallback, useReducer } from "react";
import "./NewPlace.css";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/util/Validators";
import Button from "../../shared/components/FormElements/Button";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        }
      }

      return {
        ...state,
        input: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const InputHandler = useCallback(
    (id, value, isValid) => {
      dispatch({
        type: "INPUT_CHANGE",
        value: value,
        isValid: isValid,
        inputId: id,
      });
    },
    [dispatch]
  );

  return (
    <form className='place-form'>
      <Input
        id='title'
        element='input '
        type='text'
        label='Title'
        validator={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={InputHandler}
      />
      <Input
        id='description'
        element='textarea '
        label='Description'
        validator={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid descripton (at least 5 characters)'
        onInput={InputHandler}
      />
      <Button type='submit' disabled={!formState.isValid}>
        Add Place
      </Button>
    </form>
  );
};

export default NewPlace;
