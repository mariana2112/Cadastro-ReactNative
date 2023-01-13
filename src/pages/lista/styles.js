import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#bf6363',
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
    marginLeft: 10,
  },
  botao: {
    backgroundColor: '#7a0505',
    alignSelf: 'flex-end',
    borderRadius: 10,
    width: 115,
    marginRight: 18,
    bottom: 5,
    height: 30,
  },
  icon: {
    marginLeft: 83,
    bottom: 23,
  },
});
export default Styles;
