import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import UserPage from "./pages/userPage/UserPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import CountPage from "./pages/countPage/CountPage";
import MenuPage from "./pages/menuPage/MenuPage";
import PostPage from "./pages/postPage/PostPage";
import AboutUs from "./pages/aboutUs/AboutUs";
import FormPage from "./pages/formPage/FormPage";
import GroupPage from "./pages/groupPage/GroupPage";

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
        {/*<MainPage userOne={user}/>*/}
        {/*<UserPage userOne={user}/>*/}
      {/*<AboutPage title="About" description={descriptionObj}/>*/}
      {/*  <h2>Contacts page</h2>*/}
      {/*  <ContactsPage/>*/}
      {/*  <h2>Portfolio page</h2>*/}
      {/*  <PortfolioPage/>*/}
        {/*<CountPage/>*/}
      {/*  <MenuPage/>*/}
      {/*  <PostPage/>*/}
      {/*  <h2>About Us</h2>*/}
      {/*  <AboutUs/>*/}
        <FormPage/>
        {/*<GroupPage/>*/}
    </div>
  );
}

export default App;
