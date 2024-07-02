import DashboardMenu from "@/components/dashboard-menu";
import React from "react";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
	return (
		<>
			<DashboardMenu />
			<Container className="flex-grow-1">{children}</Container>
		</>
	);
};

export default Layout;
