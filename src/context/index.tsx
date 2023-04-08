import { ReactNode } from "react";
import { AuthAdminProvider } from "./admin.context";
import { AuthProvider } from "./auth.context";
import { BagProvider } from "./bag.context";
import { MenuProvider } from "./menu.context";
import { ModalProvider } from "./modal.context";
import { RequestProvider } from "./request.context";

interface IProvider {
  children: ReactNode;
}

export const Providers = ({ children }: IProvider) => (
  <AuthAdminProvider>
    <MenuProvider>
      <RequestProvider>
        <ModalProvider>
          <AuthProvider>
            <BagProvider>{children}</BagProvider>
          </AuthProvider>
        </ModalProvider>
      </RequestProvider>
    </MenuProvider>
  </AuthAdminProvider>
);
