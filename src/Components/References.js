import "../uni.css";
import "./References.css";

function Refrences()
{
	return(
		<div className="page References flex-c-se-c">
			<h1 className="page-title">References</h1>
			<h2 className="sub-title gray-text">Here are list of blogs and news..</h2>
			<div className="Cards-Wrapper">
				<div className="Card-Cont">
					<p className="text">This is news to be considered</p>
					<a className="btn" href={"#"}>Read More</a>
				</div>
				<div className="Card-Cont">
					<p className="text">This is next news to be considered</p>
					<a className="btn" href={"#"}>Read More</a>
				</div>
			</div>
			<p className="theme-text">This page is under construction. Visit Soon! </p>
    	</div>
	)
}


export default Refrences