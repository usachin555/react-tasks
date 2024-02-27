import Items from "./components/classComponents/axios/items";
import Empinfo from "./components/classComponents/designation/tabledesignation";
import DomManipulation from "./components/classComponents/lifeCycle/mounting/dom";
import UpdatingPhase from "./components/classComponents/lifeCycle/updating/stateUpdation";
import Products from "./components/classComponents/products/products";
import YoutubeButton from "./components/classComponents/youtubeButton/youtubeButton";
import ProductsApi from "./components/functional components/axios/products";
import Image from "./components/functional components/image";
import Profile, { Formss, Imggg, Lisst, Pic, RulesOfJsx } from "./components/functional components/jsx/Jsx";
import Table from "./components/functional components/table";

function App(){
  return(
    <div>
      {/* <UpdatingPhase></UpdatingPhase> */}
      <Products></Products>
   </div>
      )
}
export default App;