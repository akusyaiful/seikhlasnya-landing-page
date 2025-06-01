import {
  Flex,
  Portal,
  Select,
  Spinner,
  Text,
  useSelectContext,
} from "@chakra-ui/react";
import Image from "next/image";

const SelectValue = ({ placeholder }) => {
  const select = useSelectContext();
  const items = select.selectedItems;

  if (!select?.selectedItems?.[0]) {
    return <Select.ValueText placeholder={placeholder} />;
  }
  return (
    <Select.ValueText alignItems="center" placeholder={placeholder}>
      <Flex gap={2} alignItems="center" justifyContent={"center"}>
        {items?.[0]?.image && (
          <Flex
            bg="brand.white"
            h="20px"
            px={2}
            alignItems="center"
            borderRadius={6}
          >
            <Image
              alt={items?.[0]?.label}
              src={items?.[0]?.image}
              width={40}
              height={30}
            />
          </Flex>
        )}

        <Text fontWeight={"medium"}>{items?.[0]?.label}</Text>
      </Flex>
    </Select.ValueText>
  );
};

export const SimpleSelect = ({
  collection,
  disabled,
  isLoading,
  placeholder,
  width,
  ...props
}) => {
  return (
    <Select.Root
      collection={collection}
      disabled={disabled || isLoading}
      size="md"
      {...props}
    >
      <Select.HiddenSelect />
      <Select.Control width={width}>
        <Select.Trigger borderRadius={8} py={2}>
          <SelectValue placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          {isLoading && (
            <Spinner borderWidth="1.5px" color="fg.muted" size="xs" />
          )}
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
    </Select.Root>
  );
};
