import React from "react";
import { useRouter } from "next/router";
import LoginForm from "@/components/Forms/LoginForm";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

type LayoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {

  const router = useRouter();

  return (
      <main>
        { router.pathname !== '/' ?
            <div>
                <NavBar />
                {children}
                <Footer />
            </div>
            : <div>
          <LoginForm />
        </div> }
      </main>
  )
}

export default Layout;