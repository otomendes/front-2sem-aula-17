import Cabecalho from "./components/Cabecalho";
import { Outlet } from "react-router";
import Rodape from "./components/Rodape";

  

export default function App() {


  return (
    <div className="container">
          <Cabecalho/>
            <Outlet/>
          <Rodape/>
    </div>
  )
}



//  export default function App() {
// 
//   const [tema, setTema] = useState<Tema>('light');
// 
//  return (
//      <div>
//        <Cabecalho />
//        <Outlet />
//        <Rodape />
//      </div>
//    )
//  }
