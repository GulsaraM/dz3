import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import UserPage from "./pages/userPage/UserPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

function App() {
    const descriptionObj = {
        name: "Sara",
        body: "hi"
    }

    const user = {
        name: "Anna",
        age: 19
    }

  return (
    <div className="App">
        <MainPage userOne={user}/>
        <UserPage userOne={user}/>
      {/*<AboutPage title="About" description={descriptionObj}/>*/}
        <ContactsPage/>
    </div>
  );
}

export default App;
