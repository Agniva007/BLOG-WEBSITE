import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">something worth reading...</span> */}
        <span className="headerTitleLg">Blog<b style={{"color" : "#FE0B43"}}>G</b>ers</span>
      </div>
      <img 
        className="headerImg" 
        src="./assets/headerImg.jpg" 
        alt="" 
      />
    </div>
  );
}
