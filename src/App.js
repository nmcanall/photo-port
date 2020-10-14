import React, {useState} from 'react';
// import './App.css';
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {

  const [categories] = useState([
    {
      name: "commercial",
      description: "Photos of grocery stores, food trucks, and other commercial projects"
    },
    {
      name: "portraits",
      description: "Portraits of people in my life"
    },
    {
      name: "food",
      description: "Delicious delicacies"
    },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature"
    }
  ]);

  // Create React Hook to cycle through the categories in the array above
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // React hook to determine if the contact button in the Nav bar is selected (conditional render the form)
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}  
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* If contact is selected, display form, otherwise, display gallery and about */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
