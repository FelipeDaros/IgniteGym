import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Center, Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";


export function History(){
  const [exercises, setExercises] = useState([]);
  return(
    <VStack flex={1}>
      <ScreenHeader title="Histórico de execícios"/>
      <SectionList 
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={[].length === 0 && {flex: 1, justifyContent: "center"}}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há execícios registrados ainda.{"\n"}
            Vamos fazer execícios hoje ?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}