import { ExeciseCard } from "@components/ExeciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { FlatList, Heading, HStack, Text, VStack } from "native-base";
import { useState } from "react";


export function Home(){
  const [groups, setGroups] = useState(["costa", "perna", "ombro", "braço", "peito"]);
  const [exercises, setExercises] = useState(["Peito 45", "Agachamento livre", "Elevação lateral", "Rosca", "Crucifixo"]);
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [groupSelected, setGroupSelected] = useState('costa');

  function handleOpenExerciseDetails(){
    navigation.navigate("exercise");
  }

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
              isActive={String(groupSelected).toUpperCase() === String(item).toUpperCase()}
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{px:4}}
          my={10}
          maxH={10}
          minH={10}
        />
      </HStack>

      <VStack flex={1} px={4}>
        <HStack justifyContent="space-between" marginBottom={5}>
          <Heading color="gray.200" fontSize="md"> 
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList 
          data={exercises}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <ExeciseCard onPress={handleOpenExerciseDetails}/>
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 10 }}
        />
      </VStack>
    </VStack>
  )
}