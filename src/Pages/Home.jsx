import Chaep1 from "../SVGS/Style=Default.svg"
import Chaep2 from "../SVGS/Logo.svg"
import Chaep3 from "../SVGS/shape-circle.svg"
import myImage from "../icons/photo_2023-09-01_14-58-12.jpg"

export default function Home() {
return (
<div className="containerFromCOmp" style={{ minHeight: "calc(100vh - 100px)" }}>
<div className="homeContent">
<div className='textContent'>
<h1 className="homeTitle">my name: ashraf-mohamed,</h1><span className="jopTitle">i-am a front-end developer</span>
<p className="description">i am make crafts responsive websites where technologies meet creativity</p>
<button><a href="../SVGS/inside-api-product-mindset.pdf" download={'lala'} className="cvBTN">download cv</a></button>
</div>
<div className=''>
<img src={myImage} alt="i`am" className="portfolioImage" />
<img src={Chaep1} alt="chaip" style={{position: 'absolute', width: '90px', height:'90px', bottom: '150px', left: '50px'}} />
<img src={Chaep2} alt="chaip" style={{position: 'absolute', width: '200px', height:'200px', bottom: '150px', right: '50px', zIndex:'6'}} />
<img src={Chaep3} alt="Chaep3" style={{position: 'absolute', right: '10px', top:'100px', width:'500px', zIndex:'4'}} />
</div>
</div>
</div>
)
}
