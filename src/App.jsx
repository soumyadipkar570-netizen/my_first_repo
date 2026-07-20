
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MainContent from "./components/mainContent";
export const demo = 5
const App = () => {
  const studentCount =50;
  const projectname = "student portal project"

  return (
    // <div className = 'flexdiv'>
    //   <div className = 'child'>A
    //   </div>
    //    <div className = 'child'>B
    //   </div>
    //   <div className = 'child'>C
    //   </div>

    // </div>
    // <>
    // <div className="parent">
    //   <div className="child">child1</div>
    //   <div className="child">child2</div>

    // </div>
    // </>
    <>
      <div className="fullpage">
        <Header projectname = {projectname}/>
        <MainContent studentCount= {studentCount} projectname = {projectname}/>
        
        <Footer projectname = {projectname}/>
        
        
      </div>
    </>
  )
}
export default App;
