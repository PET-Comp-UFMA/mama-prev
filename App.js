import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
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


const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="Doenca" component={Doenca} />
      <Stack.Screen name="Risco" component={Risco} />
      <Stack.Screen name="Prevencao" component={Prevencao} />
      <Stack.Screen name="Birads" component={Birads} />
      <Stack.Screen name="Primary" component={Primary} />
      <Stack.Screen name="Secondary" component={Secondary} />
      <Stack.Screen name="Diagnostic" component={Diagnostic} />
      <Stack.Screen name="TrackingHighRisk" component={TrackingHighRisk} />
      <Stack.Screen name="TrackingGeneralPopulation" component={TrackingGeneralPopulation} />
      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="Avaliation" component={Avaliation} />
      <Stack.Screen name="Calculator" component={Calculator} />
      <Stack.Screen name="WillingnessTool" component={WillingnessTool} />
      <Stack.Screen name="W1" component={W1} />
      <Stack.Screen name="W2" component={W2} />
      <Stack.Screen name="W3" component={W3} />
      <Stack.Screen name="W4" component={W4} />
      <Stack.Screen name="W5" component={W5} />
      <Stack.Screen name="W6" component={W6} />
      <Stack.Screen name="W7" component={W7} />
      <Stack.Screen name="WillResult" component={WillResult} />
      <Stack.Screen name="Q1" component={Q1} />
      <Stack.Screen name="Q2" component={Q2} />
      <Stack.Screen name="Q3" component={Q3} />
      <Stack.Screen name="Q4" component={Q4} />
      <Stack.Screen name="Q4sub1" component={Q4sub1} />
      <Stack.Screen name="Q4sub2" component={Q4sub2} />
      <Stack.Screen name="Q5" component={Q5} />
      <Stack.Screen name="Q5sub1" component={Q5sub1} />
      <Stack.Screen name="Q5sub2" component={Q5sub2} />
      <Stack.Screen name="Q6" component={Q6} />
      <Stack.Screen name="Q7" component={Q7} />
      <Stack.Screen name="Q8" component={Q8} />
      <Stack.Screen name="Results" component={Results} />
      <Stack.Screen name="ResultsChart" component={ResultsChart} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
