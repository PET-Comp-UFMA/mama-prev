import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homepage from './src/pages/Homepage';
import Sobre from './src/pages/Sobre';
import Information from './src/pages/Information';
import Doenca from './src/pages/Information/Doenca';
import Risco from './src/pages/Information/Risco';
import Prevencao from './src/pages/Information/Prevencao';
import Birads from './src/pages/Information/Birads';
import Primary from './src/pages/Prevention/Primary';
import Secondary from './src/pages/Prevention/Secondary';
import Diagnostic from './src/pages/Prevention/Secondary/Diagnostic';
import TrackingHighRisk from './src/pages/Prevention/Secondary/TrackingHighRisk';
import TrackingGeneralPopulation from './src/pages/Prevention/Secondary/TrackingGeneralPopulation';
import FirstPage from './src/pages/FirstPage';
import Avaliation from './src/pages/Avaliation';
import Calculator from './src/pages/Calculator/Calculator';
import WillingnessTool from './src/pages/Willingness/WillingnessTool';
import W1 from './src/pages/Willingness/W1';
import W2 from './src/pages/Willingness/W2';
import W3 from './src/pages/Willingness/W3';
import W4 from './src/pages/Willingness/W4';
import W5 from './src/pages/Willingness/W5';
import W6 from './src/pages/Willingness/W6';
import W7 from './src/pages/Willingness/W7';
import WillResult from './src/pages/Willingness/WillResult';
import Q1 from './src/pages/Calculator/Q1';
import Q2 from './src/pages/Calculator/Q2';
import Q3 from './src/pages/Calculator/Q3';
import Q4 from './src/pages/Calculator/Q4';
import Q4sub1 from './src/pages/Calculator/Q4sub1';
import Q4sub2 from './src/pages/Calculator/Q4sub2';
import Q5 from './src/pages/Calculator/Q5';
import Q5sub1 from './src/pages/Calculator/Q5sub1';
import Q5sub2 from './src/pages/Calculator/Q5sub2';
import Q6 from './src/pages/Calculator/Q6';
import Q7 from './src/pages/Calculator/Q7';
import Q8 from './src/pages/Calculator/Q8';
import Results from './src/pages/Calculator/Results';
import ResultsChart from './src/pages/Calculator/ResultsChart';



const navigator = createStackNavigator(
  
  {

  Homepage: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({})
  },
  Sobre: {
    screen: Sobre,
    navigationOptions: ({navigation}) => ({})
  },
  Information: {
    screen: Information,
    navigationOptions: ({navigation}) => ({})
  },
  Doenca: {
    screen: Doenca,
    navigationOptions: ({navigation}) => ({})
  },
  Risco: {
    screen: Risco,
    navigationOptions: ({navigation}) => ({})
  },
  Prevencao: {
    screen: Prevencao,
    navigationOptions: ({navigation}) => ({})
  },
  Birads: {
    screen: Birads,
    navigationOptions: ({navigation}) => ({})
  },
  Primary: {
    screen: Primary,
    navigationOptions: ({navigation}) => ({})
  },
  Secondary: {
    screen: Secondary,
    navigationOptions: ({navigation}) => ({})
  },
  Diagnostic: {
    screen: Diagnostic,
    navigationOptions: ({navigation}) => ({})
  },
  TrackingHighRisk: {
    screen: TrackingHighRisk,
    navigationOptions: ({navigation}) => ({})
  },
  TrackingGeneralPopulation:{
    screen: TrackingGeneralPopulation,
    navigationOptions: ({navigation}) => ({})
  },
  FirstPage: {
    screen: FirstPage,
    navigationOptions: ({navigation}) => ({})
  },
  Avaliation:{
    screen: Avaliation,
    navigationOptions: ({navigation}) => ({})
  },
  Calculator:{
    screen: Calculator,
    navigationOptions: ({navigation}) => ({})
  },
  WillingnessTool:{
    screen: WillingnessTool,
    navigationOptions: ({navigation}) => ({})
  },
  W1: {
    screen: W1,
    navigationOptions: ({navigation}) => ({})
  },
  W2: {
    screen: W2,
    navigationOptions: ({navigation}) => ({})
  },
  W3: {
    screen: W3,
    navigationOptions: ({navigation}) => ({})
  },
  W4: {
    screen: W4,
    navigationOptions: ({navigation}) => ({})
  },
  W5: {
    screen: W5,
    navigationOptions: ({navigation}) => ({})
  },
  W6: {
    screen: W6,
    navigationOptions: ({navigation}) => ({})
  },
  W7: {
    screen: W7,
    navigationOptions: ({navigation}) => ({})
  },
  WillResult: {
    screen: WillResult,
    navigationOptions: ({navigation}) => ({})
  },
  Q1: {
    screen: Q1,
    navigationOptions: ({navigation}) => ({})
  },
  Q2: {
    screen: Q2,
    navigationOptions: ({navigation}) => ({})
  },
  Q3: {
    screen: Q3,
    navigationOptions: ({navigation}) => ({})
  },
  Q4: {
    screen: Q4,
    navigationOptions: ({navigation}) => ({})
  },
  Q4sub1: {
    screen: Q4sub1,
    navigationOptions: ({navigation}) => ({})
  },
  Q4sub2: {
    screen: Q4sub2,
    navigationOptions: ({navigation}) => ({})
  },
  Q5: {
    screen: Q5,
    navigationOptions: ({navigation}) => ({})
  },
  Q5sub1: {
    screen: Q5sub1,
    navigationOptions: ({navigation}) => ({})
  },
  Q5sub2: {
    screen: Q5sub2,
    navigationOptions: ({navigation}) => ({})
  },
  Q6: {
    screen: Q6,
    navigationOptions: ({navigation}) => ({})
  },
  Q7: {
    screen: Q7,
    navigationOptions: ({navigation}) => ({})
  },
  Q8: {
    screen: Q8,
    navigationOptions: ({navigation}) => ({})
  },
  Results: {
    screen: Results,
    navigationOptions: ({navigation}) => ({})
  },
  ResultsChart: {
    screen: ResultsChart,
    navigationOptions: ({navigation}) => ({})
  }
},
{
  initialRouteName: "FirstPage",
  defaultNavigationOptions: {
    title: '',
    headerShown: false,
    // headerStyle:{
    //   backgroundColor: "#00b3fe"
    // }
  }
});


export default createAppContainer(navigator)
