import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">CRICKET LIFE</span>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80.jpg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=940"
        alt=""
      />
    </div>
  );
}
