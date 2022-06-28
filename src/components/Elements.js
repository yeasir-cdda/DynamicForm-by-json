import { Checkbox, Link, Select } from "@chakra-ui/react";
import { useContext } from "react";
import CustomInput from "../components/elements/CustomInput";
import { formContext } from "../FormContext";
import CustomSelect from "./elements/Select";
const Elements = ({ field }) => {

  const {
    field_id,
    field_label,
    field_mandatory,
    field_placeholder,
    field_type,
    field_value,
    field_options,
    
  } = field;
  switch (field_type) {
    case "select":
      return (
        <>
          <label
            style={{
              fontWeight: "600",
              marginBottom: "10px",
              display: "block",
            }}
            htmlFor={field_id}
          >
            {field_label}
          </label>
          <Select
            id={field_id}
            required={field_mandatory}
            placeholder="Please select One"
          >
            {field_options.map((option, i) => (
              <option key={i} value={option.option_label}>
                {option.option_label}
              </option>
            ))}
          </Select>
        </>
      );
    case "checkbox":
      return (
        <Checkbox
          id={field_id}
          required={field_mandatory}
          display={"block"}
          mb="10px"
          defaultChecked={field_value}
        >
          {field_label}
        </Checkbox>
      );

    default:
      return (
        <CustomInput
          // register={register}
          //{...register("test")}
          name={field_id}
          id={field_id}
          label={field_label}
          required={field_mandatory}
          placeholder={field_placeholder}
          type={field_type}
        />
      );
  }
};

export default Elements;
