const ProjectsCard = (props) => {
    return (
                <div className="box">
                    <img className="projectImage" src={props.img} alt={props.title} />
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h3 style={{marginBottom: '10px'}} className={'project-title'}> {props.title} </h3>
                        <div className={'icons'}>
                            <div style={{display: 'flex', gap: '3px'}}>{props.reactIcon}{props.HTMlicon}{props.cssicon}{props.jsicon}{props.bs}</div>
                        </div>
                    </div>
                    <div className="btnsInfo">
                         <a href={props.src} target={"_blank"}>src code</a>
                         <a href={props.live} target={"_blank"}>live</a>
                    </div>
                </div>
    )
}
export default ProjectsCard;