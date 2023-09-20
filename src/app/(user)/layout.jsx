import MainLayout from "@/components/organism/MainLayout";

export const metadata = {
    title: "Brand || Home",
  };
  
const layoutAppPages = ({ children }) => {
    return (
      <>
          <MainLayout>
          {children}
          </MainLayout>
        
      </>
    );
  };
  
  export default layoutAppPages;
  