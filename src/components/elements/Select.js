import { Select } from "@chakra-ui/react";
const CustomSelect
 = () => {
  return (
    <Select placeholder="Select option" required>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};

export default CustomSelect;
