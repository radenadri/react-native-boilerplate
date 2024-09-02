import React, {useState} from 'react';

import { useColorScheme } from 'nativewind';

import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Center } from '@/components/ui/center';
import { Button, ButtonText } from '@/components/ui/button';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <SafeAreaView>
      <Center className="w-full h-full dark:bg-primary-500">
        <Box className="justify-center">
          <VStack space="sm" reversed={false}>
            <Heading className="text-center dark:text-white">RN + Gluestack</Heading>
            <Text className="mt-4 text-center dark:text-white">
              Count: {count}
            </Text>
            <Button className="mt-4 bg-primary-600 dark:bg-secondary-500" onPress={increment}>
              <ButtonText>Increment</ButtonText>
            </Button>
            <Button className="mt-4 bg-primary-600 dark:bg-secondary-500" onPress={toggleColorScheme}>
              <ButtonText>{colorScheme === 'dark' ? '🌞 light' : '🌝 dark'}</ButtonText>
            </Button>
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
  );
};

export default CounterScreen;
