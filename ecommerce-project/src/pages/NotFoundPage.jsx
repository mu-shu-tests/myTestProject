import Header from "../components/Header";
import "../pages/NotFoundPage.css";
function NotFound({cart}) {
  return (
    <>
      <title>Not Found</title>
      <Header cart={cart} />

      <div className="not-found-page">
        <div className="not-found-content">
          <div className="error-number">404</div>

          <div className="box-icon">📦</div>

          <h1>Oops! Page not found</h1>

          <p>
            The page you're looking for doesn't exist
            <br />
            or has been moved.
          </p>

          <div className="divider"></div>

          <a href="/" className="home-button">
            🏠 &nbsp; Back to home
          </a>

          <a href="javascript:history.back()" className="go-back">
            ← &nbsp; Go back
          </a>
        </div>
      </div>
    </>
  );
}

export default NotFound;
