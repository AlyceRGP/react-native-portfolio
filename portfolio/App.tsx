import React, { useState, useEffect } from 'react';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, AvatarFallbackText, AvatarImage } from "@/components/ui/avatar";
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Center } from '@/components/ui/center';
import { Icon, ExternalLinkIcon, MoonIcon, SunIcon } from '@/components/ui/icon';
import { Link, LinkText } from '@/components/ui/link';
import { Card } from '@/components/ui/card';
import { Divider } from '@/components/ui/divider';
import { Image } from '@/components/ui/image';
import { FlatList } from 'react-native';
import { Switch, View } from 'react-native';

const data = [
  { id: '1', title: 'Portfolio Web Page', content: 'A web page that includes a navigation bar, a projects section, and a contact form. Made with HTML, CSS, JavaScript, and Bootstrap.' },
  { id: '2', title: 'React Portfolio', content: 'A single page web application with three sections: About Me, Projects, and Contact Me. Made with React.' },
  { id: '3', title: 'To-do App', content: 'A simple to-do list application where users can add, edit, and remove tasks, and mark them as complete. Made with React' },
  { id: '4', title: 'Inventory Management System', content: 'Users can add item, update item (either quantity or price), remove item, display items by category, etc. Made with React.' },
  { id: '5', title: 'Alabank', content: 'A web-based banking system that allows users to manage their accounts, perform transactions, and track balances online. Made with React.' },
];

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const renderItem = ({ item }: { item: { id: string, title: string, content: string } }) => (
    <Box key={item.id}>
      <Card className='my-4 mx-12 items-center' variant="filled">
        <Heading>{item.title}</Heading>
        <Text className='text-center'>{item.content}</Text>
      </Card>
    </Box>
  );

  const ListHeader = () => (
    <>
      <Box 
      className="top-0 right-0 left-0 py-3 px-10 shadow-xl z-10 flex-row justify-between items-center"
      style={{
        backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
      }}
    >
      <Heading size="lg">My Portfolio</Heading>

      <View className="flex-row items-center space-x-4">
        <Icon as={SunIcon} className="w-6 h-6" />
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
        <Icon as={MoonIcon} className="w-6 h-6" />
      </View>
    </Box>

      <Box className="p-6 m-3">
        <Box className="flex-row">
          <Avatar size="xl" className="mr-4">
            <AvatarFallbackText>Alyce Panganiban</AvatarFallbackText>
            <AvatarImage source={require('./assets/photo.png')} />
          </Avatar>

          <VStack>
            <Heading size="xl" className="mb-1 mt-3 ">Alyce Panganiban</Heading>
            <Text size="md">alyce_roselle_panganiban@dlsl.edu.ph</Text>
          </VStack>
        </Box>

        <Center className='mt-3'>
          <Text className='text-center text-lg'>Alyce is a 3rd Year Computer Science student at
            De La Salle Lipa. She has developed many projects as a student and is currently learning React
            Native for her Mobile Development course.</Text>
          <Link href='https://github.com/AlyceRGP' className='mt-7 flex-row items-center'>
            <Icon as={ExternalLinkIcon} className="text-typography-500 m-2 w-6 h-6 stroke-emerald-700" />
            <LinkText className='text-emerald-700 text-lg'>github.com/AlyceRGP</LinkText>
          </Link>
        </Center>
      </Box>

      <Divider className='w-[80%] h-[0.5%] self-center flex' />

      <Box className="p-6 my-3 mx-12 items-center">
        <Heading size='xl'>Skills</Heading>
        <Box className="mt-4 mb-1 flex-row">
          <VStack className="items-center pr-5">
            <Image source={require('./assets/html.png')} alt="html"/>
            <Text size="md">HTML</Text>
          </VStack>
          <VStack className="items-center pr-5">
            <Image source={require('./assets/react.png')} alt="react"/>
            <Text size="md">React</Text>
          </VStack>
          <VStack className="items-center">
            <Image source={require('./assets/css.png')} alt="css"/>
            <Text size="md">CSS</Text>
          </VStack>
        </Box>
      </Box>

      <Divider className='w-[80%] h-[0.5%] self-center flex' />

      <Heading size='xl' className='mt-7 self-center'>Projects</Heading>
    </>
  );

  return (
    <GluestackUIProvider mode={theme}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
        }}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={ListHeader}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
