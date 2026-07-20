const MainContent = ({projectname,studentCount})=>{
    // console.log('props',props)
    // const {projectname} = props
    // const {studentCount} = props
    return(
        <div className="main">
          <div className="page-content">
            <span>
              stdent count -- {studentCount}
            </span>
            <h1>main content</h1>
            <p>{projectname}</p>
          </div>
        </div>
    )
}
export default MainContent