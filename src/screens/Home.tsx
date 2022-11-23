import { ExeciseCard } from "@components/ExeciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList, Heading, HStack, Text, VStack } from "native-base";
import { useState } from "react";


export function Home(){
  const [groups, setGroups] = useState(["cotas", "perna", "ombro", "braço", "peito"]);
  const [groupSelected, setGroupSelected] = useState('costa');

  return(
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Group 
              name={item}
              isActive={groupSelected === item}
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{px:4}}
          my={10}
          maxH={10}
        />
      </HStack>

      <VStack flex={1} px={4}>
        <HStack justifyContent="space-between" marginBottom={5}>
          <Heading color="gray.200" fontSize="md"> 
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            4
          </Text>
        </HStack>

        <ExeciseCard />
      </VStack>
    </VStack>
  )
}