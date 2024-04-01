import { Heading, Stack, StackProps, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  title: string;
  description: string;
};

export const EmptyMessage: FC<Props & StackProps> = ({
  title,
  description,
  ...props
}) => {
  return (
    <Stack
      {...props}
      p="4"
      spacing="2"
      textAlign="center"
      align="center"
      justify="center"
    >
      <Heading size="lg">{title}</Heading>
      <Text fontSize="lg" color="gray.500">
        {description}
      </Text>
    </Stack>
  );
};
