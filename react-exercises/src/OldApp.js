// import React, { useState } from "react";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { Counter } from "./Counter";
// import { Hello } from "./Hello";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { Welcome } from "./Welcome";
// import { TodoList } from "./TodoList";
// import { Container } from "./Container";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { Sum } from "./Sum";
// import { GithubUser } from "./GithubUser";
// import { GithubUserList } from "./GithubUserList";
// import { CarDetails } from "./CarDetails";
// import { LanguageContext } from "./LanguageContext";

// export function App() {
//     const [language, setLanguage] = useState("en")

//     function handleChangeLanguage(event) {
//         setLanguage(event.target.value)
//     }

//     return (
//         <React.Fragment>
//             <select onChange={handleChangeLanguage}>
//                 <option value="en">English</option>
//                 <option value="it">Italiano</option>
//             </select>
//             <LanguageContext.Provider value={language}>
//                 <Container title="My Destroyed Application">
                    
//                     <div>
//                         <DisplayLanguage />
//                         <Hello />
//                         <Welcome name='John' age={28} />
//                         <Counter />
//                         <ClickCounter />
//                         <ClickTracker />
//                         <InteractiveWelcome />
//                         <Login />
//                         <UncontrolledLogin />
//                         <Sum />
//                         <TodoList render={(stringsArr) => {
//                             return (
//                                 <div>
//                                     <ul>
//                                         {stringsArr.map((string, index) => (
//                                             <li key={string + index}>{string}
//                                                 <button onClick={() => {
//                                                     stringsArr.splice(index, 1);
//                                                     this.setState({
//                                                         stringsArr: stringsArr
//                                                     })
//                                                 }}>Remove String</button>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             )
//                         }} />
//                         <GithubUser username="ndrSaba" />
//                         <GithubUserList />
//                         <CarDetails />
//                     </div>
//                 </Container >
//             </LanguageContext.Provider>
//         </React.Fragment >
//     )
// }