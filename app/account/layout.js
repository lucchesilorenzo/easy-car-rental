import SideNavigation from "@/components/SideNavigation";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-[auto_1fr] lg:grid-cols-[300px_1fr] min-h-screen">
      <SideNavigation />
      <div className="ml-10">{children}</div>
    </div>
  );
}

export default Layout;
