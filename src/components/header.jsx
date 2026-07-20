const Header =({projectname})=>{    //distractoring on the fly
    // console.log('props',props)
    // const {projectname} = props
    return(
        <div className="header">
          <span>
            {projectname}
          </span>
          <div>
            <ul className="menu">
              <li>home</li>
              <li>about</li>
            </ul>
          </div>
        </div>
    )
}
export default Header