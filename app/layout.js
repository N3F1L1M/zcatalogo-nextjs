
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-wrap border-red-700 border-2" >
         
       

        <header className="w-screen  border-amber-400 border-2">
          
            <Navbar /> 
            
              </header>

      

             <main className="w-screen flex flex-wrap border-amber-700 border-2"> 
              <Sidebar />
        
        
                        {children}

            </main>

       

        <footer className="w-screen border-b-red-500 border-2">Pie de página</footer>

      </body>
    </html>
  );
}
