import Footer from "@/components/Shared/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
