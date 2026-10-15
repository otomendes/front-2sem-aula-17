import { useState } from "react";
import type { Tema } from "./types/types";
import { Layout } from "./components/Layout";

  

export default function App() {

  const [tema] = useState<Tema>('light');

  return (
    <div>
      <Layout tema={tema}/>
    </div>
  )
}



// export default function App() {

//   const [tema, setTema] = useState<Tema>('light');

//   return (
//     <div>
//       <Cabecalho />
//       <Outlet />
//       <Rodape />
//     </div>
//   )
// }
