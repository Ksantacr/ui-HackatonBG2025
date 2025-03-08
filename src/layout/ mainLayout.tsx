import { ReactNode } from "react";

import ResponsiveAppBar from '../components/header';

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <ResponsiveAppBar />
      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
