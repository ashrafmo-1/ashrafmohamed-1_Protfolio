import myImage from "../../assets/image/cv.jpg";

const InfoAndSocila = () => {
    return(
        <div className="informationAndSocial" style={{zIndex: '99'}}>
            <h3 className={'headering'}>my name is'</h3>
            <h2>ashraf mohamed..</h2>
            <h4 style={{marginBottom: '15px'}}>front end developer</h4>
            <img src={myImage} alt="i`am" className="portfolioImage" style={{borderRadius:"50%"}} />
        </div>
    )
}

export default InfoAndSocila;