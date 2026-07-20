const Footer = (props)=>{         //props rule
    console.log('props',props)
    const {projectname} = props
    return(
        
        <div className="footer">
          <p>
            copyright2026{projectname}
          </p>
        </div>
    )
}
export default Footer