import SideNavigation from "@/components/SideNavigation";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen">
      <SideNavigation />
      <div className="ml-10 w-full">{children}</div>
    </div>
  );
}

export default Layout;
