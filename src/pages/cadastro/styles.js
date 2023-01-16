import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#bf6363',
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    fontFamily: 'serif',
    color: '#fff',
  },
  textcard: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'system-ui',
  },
  card: {
    backgroundColor: 'white',
    width: 300,
    height: 300,
    elevation: 100,
    margin: 40,
    opacity: 0.6,
    borderRadius: 12,
  },
  input: {
    height: 35,
    width: 200,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderRadius: 7,
  },
  botao: {
    marginTop: 40,
    backgroundColor: '#edb211',
    alignSelf: 'center',
    borderRadius: 20,
    width: 100,
    alignItems: 'center',
  },

  texto: {
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    width: 100,
    height: 25,
  },
  area: {
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
    marginTop: 10,
  },
  br: {
    color: '#edb211',
  },
});
export default Styles;
