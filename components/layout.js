import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="select-none bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
