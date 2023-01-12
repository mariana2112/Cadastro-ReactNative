import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {useRoute} from '@react-navigation/native';
import React from 'react';
const DATA = [
  {
    id: '1',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU',
    title: 'Gabriela Silva',
    idade: '17',
    cpf: '222',
  },

  {
    id: '2',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU',
    title: 'Maria Eduarda',
    idade: '17',
    cpf: '444',
  },
  {
    id: '3',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU',
    title: 'Mariana Rove',
    idade: '17',
    cpf: '111',
  },

  {
    id: '4',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU',
    title: 'João Pedro',
    idade: '17',
    cpf: '333',
  },
];

export default function Lista() {
  const route = useRoute();

  DATA.push({
    id: Math.random(0, 100),
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU',
    title: 'João Pedro',
    title: route.params.title,
    idade: route.params.idade,
    cpf: route.params.cpf,
  });

  const Item = ({data}) => (
    <View style={Styles.item}>
      <Image source={{uri: data.imagem}} style={Styles.img} />
      <View style={Styles.texto}>
        <Text style={Styles.title}>Nome:{data.title}</Text>
        <Text style={Styles.title}>Idade:{data.idade}</Text>
        <Text style={Styles.title}>Cpf:{data.cpf}</Text>
      </View>
    </View>
  );

  const renderItem = ({item}) => <Item data={item} />;
  console.log(route.params);

  return (
    <View style={Styles.container}>
      <FlatList
        style={Styles.container}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={Styles.botao}>
        <Text style={Styles.texto}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}
