import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './styles';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';
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
  const [list, setList] = useState(DATA);

  DATA.push({
    id: Math.random(0, 100),
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&usqp=CAU',
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

  function RemoveElement() {
    console.log('remover');

    let aux = JSON.parse(JSON.stringify(list));

    aux.pop();
    setList(aux);
  }

  return (
    <View style={Styles.container}>
      <FlatList
        style={Styles.container}
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={Styles.botao} onPress={() => RemoveElement()}>
        <Text style={Styles.texto}>Deletar</Text>
        <Icon name="delete" size={20} color="white" style={Styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
