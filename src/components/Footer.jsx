import React,{useContext} from "react";
import themeContext from "../context/themecontext";

function Footer() {
  const {theme} = useContext(themeContext);
  return (
    <div>
      <footer class="bg-zinc-200 dark:bg-zinc-950 py-4">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 Stock Analysis App. All rights reserved.</p>
          <p className="text-green-600 backdrop:dark:text-green-500/90">
            Data provided for informational purposes only and not intended for
            trading or investing advice.
          </p>
          <div class="flex justify-center space-x-4 mt-2">
            <a href="https://github.com/Ganesh2904" target="_blank"  className="hover:shadow-lg hover:shadow-cyan-500 rounded-full">
              <img src={theme=="dark"?"src/images/github (1).png":"src/images/github.png"} />
            </a>
            <a href="https://www.linkedin.com/in/ganesh-mankar-98bab6253/" target="_blank"  class="hover:underline" className="hover:shadow-lg hover:shadow-cyan-500 rounded-full">
              <img src={theme=="dark"?"src/images/linkedin (1).png":"src/images/linkedin.png"} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
