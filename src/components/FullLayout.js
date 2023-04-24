import React from "react";
import Header from "./Header";
import NavLinks from "./NavLinks";
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";
import Footer from "./Footer";

function FullLayout() {
    return (
        <main>
            <div className="">
                <Header />
                <NavLinks />
                <div className="contentArea">
                    <Container>
                        <Outlet />
                    </Container>
                </div>
                <Footer />
            </div>



        </main>
    )
}
export default FullLayout;