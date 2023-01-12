import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#8FBC8F',
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    margin: 20,
    flexDirection: 'row',
    borderRadius: 10,
  },
  title: {
    color: 'black',
    fontSize: 18,
  },
  img: {
    width: 60,
    height: 60,
    marginRight: 10,
    alignSelf: 'center',
  },
  texto: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#A52A2A',
    alignSelf: 'flex-end',
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    marginRight: 18,
    bottom: 5,
  },
});
export default Styles;
