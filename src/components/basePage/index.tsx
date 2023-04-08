import { ReactNode } from "react";
import Copyright from "../copyright";
import Footer from "../footer";
import Header from "../header";
import { Organization, StyledBasePage } from "./style";

interface IPropsBasePage {
  children: ReactNode;
}

const BasePage = (props: IPropsBasePage) => {
  return (
    <Organization>
      <div>
        <Header />
      </div>
      <StyledBasePage>
        <div className="organization__page">{props.children}</div>

        <div className="organization">
          <Footer />
          <Copyright />
        </div>
      </StyledBasePage>
    </Organization>
  );
};

export default BasePage;
