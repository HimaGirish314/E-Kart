import {createContext} from "react";

export const appContext=createContext()

// const Context=({children})=>{
//     const [busket,setBusket]=useState([])
//     return (
//         <appContext.Provider value={{busket,setBusket}}>
//             {children}
//         </appContext.Provider>
//     )
// }
// export default Context