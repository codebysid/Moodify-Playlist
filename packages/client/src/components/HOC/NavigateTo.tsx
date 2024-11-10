import { ComponentType, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IwithHomeNavigation {
  children?: ReactNode;
  route?: string;
  href?: string;
}

const withNavigate = <P extends Object>(WrappedComponent: ComponentType<P>) => {
  function withNavigation(props: P & IwithHomeNavigation) {
    const navigate = useNavigate();
    const handleHomeNavigation = () => {
      console.log("to home");
      const { route, href } = props;
      if (route) navigate(route);
      if (href) window.open(href, "_blank");
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
