import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container">
      <Link className="button" to="/products">
        Next Page
      </Link>
    </div>
  );
}
