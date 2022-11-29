import { Box, Center, Heading, HStack, Icon, Image, ScrollView, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";
import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionsSvg from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export function Exercice(){
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return(
    <VStack flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack px={8} bg="gray.600" pt={12}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon 
              as={Feather}
              name="arrow-left"
              color="green.500"
              size={6}
            />
          </TouchableOpacity>
          <HStack 
            justifyContent="space-between" 
            mt={4} 
            mb={8} 
            alignItems="center"
          >
            <Heading color="gray.100" fontSize="lg" flexShrink={1}>
              Puxada frontal
            </Heading>
            <HStack alignItems="center">
              <BodySvg />
              <Text color="gray.200" ml={1} textTransform="capitalize">
                Costas
              </Text>
            </HStack>
          </HStack>
        </VStack>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{uri: "data:image/jpeg;base64,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"}}
            alt="Exercicio"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />
          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml="2">3 Séries</Text>
              </HStack>
              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml="2">12 Repetições</Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado"/>
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}