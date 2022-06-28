import { Box, Button, Spinner } from "@chakra-ui/react";
import { AiFillCheckCircle } from "react-icons/ai";

const CustomBtn = ({
  loading,
  loadingText,
  done,
  text,
  leftIcon,
  rightIcon,
  disabled,
  type
}) => {
  return (
    <>
      {/* normal button  */}
      {typeof done === "undefined" && (
        <Button
          disabled={disabled ? true : false}
          leftIcon={leftIcon ? leftIcon : false}
          rightIcon={rightIcon ? rightIcon : false}
          isLoading={loading ? true : false}
          spinner={
            <>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="white"
                color="#2FDD92"
                size="lg"
              />
              <Box
                position={"absolute"}
                top="12px"
                left={"12px"}
                as="span"
                h={"8px"}
                w={"8px"}
                bg="white"
              ></Box>
            </>
          }
          _disabled={{
            backgroundColor: "#6F798B",
            opacity: ".6",
            cursor: "not-allowed",
          }}
          textTransform="capitalize"
          loadingText={typeof loadingText === 'string' ? loadingText : 'Submitting'}
          fontWeight="normal"
          height="40px"
          width="117px"
          fontSize="14px"
          color="white"
          bgColor="#00885C"
          _hover={{ backgroundColor: "#005B3E" }}
          _active={{ backgroundColor: "#21D233" }}
          type={typeof type === 'string' ? type : 'button'}
        >
          {typeof text === "string" ? text : "Submit"}
        </Button>
      )}
      {/* done button  */}
      {done && (
        <Button
          textTransform="capitalize"
          leftIcon={<AiFillCheckCircle fontSize={"30px"} />}
          fontWeight="normal"
          height="45px"
          width="134px"
          fontSize="15px"
          color="white"
          bgColor="#8EC03F"
          _hover={{ backgroundColor: "#8EC03F" }}
          _active={{ backgroundColor: "#577823" }}
        >
          {typeof text === "string" ? text : "Done"}
        </Button>
      )}
    </>
  );
};

export default CustomBtn;
