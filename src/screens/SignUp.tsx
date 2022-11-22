import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";


export function SignUp(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg="gray.700" px={10} pb={6}>
        <Image 
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
        />

        
        <Center my={20}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">Treine sua mente e o seu copor</Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={4} fontFamily="heading">
            Crie sua conta
          </Heading>
        </Center>

        <Center>
        <Input 
          placeholder="Nome"
          />

          <Input 
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          />

          <Input 
          placeholder="Senha"
          secureTextEntry
          />

          <Button title="Criar e acessar" />
        </Center>

        <Button 
          title="Voltar para o login" 
          variant="outline" 
          mt={12}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}