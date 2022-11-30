import "./Header.css";

export default function Header() {
  return (
    <header style={{padding: "5px"}}>
      <div className="d-flex align-items-center justify-content-between content pl-5 pr-5">
        <div className="d-flex align-items-center">
          <img src="logo.svg" alt="" className="logo" color="white" />
          <p className="header-title m-0 ml-1" style={{color: "white", fontWeight: 450}}>Rylang</p>
        </div>
        <div className="navbar">
          <ul style={{listStyle: "none", padding: 0}} className="d-flex align-items-center navbar m-0">
            <li className="list">Home</li>
            <li className="list">Download</li>
            <li className="list">About</li>
          </ul>
        </div>
        <p className="list always-active m-0">Get Started</p>
      </div>
    </header>
  );
}