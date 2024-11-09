import { ComponentType, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IwithHomeNavigation {
  children?: ReactNode;
  route: string;
}

const withNavigate = <P extends Object>(WrappedComponent: ComponentType<P>) => {
  function withNavigation(props: P & IwithHomeNavigation) {
    const navigate = useNavigate();
    const handleHomeNavigation = () => {
      console.log("to home");
      navigate(props.route);
    };

    return (
      <WrappedComponent {...props} onClick={handleHomeNavigation}>
        {props.children}
      </WrappedComponent>
    );
  }
  return withNavigation;
};

export default withNavigate;
