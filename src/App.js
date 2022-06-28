import CustomBtn from "../src/components/CustomBtn";
import CustomInput from "./components/CustomInput";
import {
  Checkbox,
  Container,
  FormLabel,
  Link,
  Select,
  Text,
} from "@chakra-ui/react";
function App() {
  return (
    <Container mt="10" maxW={"5xl"}>
      <form>
        <Text fontSize={"3xl"} fontWeight="semibold">
          Job application form
        </Text>
        <CustomInput
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
        <Select placeholder="Select option"
        required
        >
          
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

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
        </Checkbox>
        <CustomBtn type={"submit"} />
      </form>
    </Container>
  );
}

export default App;
