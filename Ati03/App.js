import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

export default function App() {
  const { control, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const enviarFormulario = (dados) => {
    console.log(dados);
  };

  return (
    <View style={styles.areaPrincipal}>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            label="Nome"
            mode="outlined"
            error={errors.nome ? true : false}
            onChangeText={(texto) => field.onChange(texto)}
          />
        )}
        name="nome"
        rules={{ required: 'Campo obrigatório' }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            label="Email"
            mode="outlined"
            error={errors.email ? true : false}
            onChangeText={(texto) => field.onChange(texto)}
          />
        )}
        name="email"
        rules={{
          required: 'Campo obrigatório',
        }}
        defaultValue=""
      />

      <Button
        mode="contained"
        onPress={handleSubmit(enviarFormulario)}
        style={styles.botao}
      >
        Enviar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  areaPrincipal: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  botao: {
    marginTop: 16,
  },
});