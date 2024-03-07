import { BrowserRouter } from "react-router-dom"
import Loginn from "./components/functional components/form/registrationForm/login"
import Controolled from "./components/functional components/form/registrationForm/registration"
// import UseEffectEx3 from "./components/functional components/hooks/useEffect/useEffectEx3"
import WidthEx from "./components/functional components/hooks/useEffect/useEffectEx6"
import Resource from "./components/functional components/hooks/useEffect/useeffectEx1"
import Image from "./components/functional components/image"
import Profile, { Formss, Imggg, Lisst, Pic, RulesOfJsx } from "./components/functional components/jsx/Jsx"
import Table from "./components/functional components/table"
import PostRoute from "./components/navigation/postRoutes"
import HomeScreen from "./pages/home-screen"
import Header from "./components/header/navbar"
import NavigationStack from "./components/navigation/navigation"
// import NavigationStack from "./navigation/navigation" 

function App(){
  return(
    <div>
      <NavigationStack></NavigationStack>


      {/* <BrowserRouter>
      <PostRoute></PostRoute>
      </BrowserRouter>
      <Header></Header> */}
    </div>
      )
}
export default App