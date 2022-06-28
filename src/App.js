import CustomBtn from "../src/components/CustomBtn";
import CustomInput from "./components/elements/CustomInput";
import formElement from "./formElement.json";
import {
  Checkbox,
  Container,
  FormLabel,
  Link,
  Select,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Elements from "./components/Elements";
import { useForm } from "react-hook-form";
function App() {


  const [elements, setElements] = useState({});
  useEffect(() => {
    setElements(formElement[0]);
  }, []);
  const { register, handleSubmit, } = useForm();
  const onSubmit = data => console.log(data);
  const { page_label, fields } = elements;
  return (
    <Container mt="10" maxW={"5xl"}>
     
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text fontSize={"3xl"} fontWeight="semibold">
          {page_label}
        </Text>
        {
        fields ?  fields.map((field, i)=><Elements register={register} key={i} field={field}/>) : null
      }
        {/* <CustomInput
          required
          name="name"
          label={"Name"}
          placeholder={"Enter your name"}
        />
        <CustomInput
          required
          type={"email"}
          name="email"
          label={"Email"}
          hint="We'll never share your Email."
          placeholder={"Enter your Email"}
        />
       

        <CustomInput
          required
          type={"number"}
          name="number"
          label={"Phone Number"}
          hint="We'll never share your Cell Number."
          placeholder={"Enter your Number"}
        />
        <Checkbox required display={"block"} mb="10px" defaultChecked>
          I'am agree to the <Link href="">Terms & Conditions</Link>
        </Checkbox> */}
        <CustomBtn type={"submit"} />
      </form>
    </Container>
  );
}

export default App;
