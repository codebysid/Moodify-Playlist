import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";

export default function ErrorBoundary() {
  let error = useRouteError();
  const navigate = useNavigate();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return (
    <div>
      Get back to home
      <Button onClick={() => navigate("/")}>Home</Button>
    </div>
  );
}
