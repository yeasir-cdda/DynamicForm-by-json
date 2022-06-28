import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const CustomInput = ({
  label,
  placeholder,
  id,
  type,
  hint,
  error,
  success,
  errorText,
  leftIcon,
  rightIcon,
  name,
  required
}) => {
  // const [input, setInput] = useState('');

  return (
    <FormControl isInvalid={error}>
      <FormLabel>{typeof label === "string" ? label : ""}</FormLabel>
      <InputGroup size={"lg"}>
        {success ? (
          <InputRightElement
            pointerEvents="none"
            children={<AiFillCheckCircle color="Green" fontSize={24} />}
          />
        ) : (
          ""
        )}
        {error ? (
          <InputRightElement
            pointerEvents="none"
            children={<AiFillCloseCircle color="red" fontSize={24} />}
          />
        ) : (
          ""
        )}
        {leftIcon ? (
          <InputLeftElement
            pointerEvents="none"
            children={leftIcon ? leftIcon : ""}
          />
        ) : (
          ""
        )}
        {rightIcon ? (
          <InputRightElement
            pointerEvents="none"
            children={rightIcon ? rightIcon : ""}
          />
        ) : (
          ""
        )}
        <Input
          _focus={{ backgroundColor: "green.100" }}
          _focusVisible={{ borderColor: "green", borderWidth: "2px" }}
          placeholder={typeof placeholder === "string" ? placeholder : ""}
          id={typeof id === "string" ? id : ""}
          required ={required ? true : false}
          name = {typeof name === 'string' ? name : ''}
          type={typeof type === "string" ? type : "text"}
        />
      </InputGroup>

      {!error ? (
        <FormHelperText>{typeof hint === "string" ? hint : ""}</FormHelperText>
      ) : (
        <FormErrorMessage>
          {typeof errorText === "string" ? errorText : "Email is required."}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CustomInput;
