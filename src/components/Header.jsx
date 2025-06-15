import logoImg from "../assets/investment-Calculator-logo.png";
export default function Header() {
  return (
    <div id="header">
      <img src={logoImg} alt="investment-logo-img"></img>
      <h1>Your Investment Calculator</h1>
    </div>
  );
}
