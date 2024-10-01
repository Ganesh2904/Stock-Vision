import React from "react";

function Footer() {
  return (
    <div>
      <footer class="bg-zinc-100 dark:bg-zinc-950 py-4">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 Stock Analysis App. All rights reserved.</p>
          <p className="text-green-600 backdrop:dark:text-green-500/90">
            Data provided for informational purposes only and not intended for
            trading or investing advice.
          </p>
          <div class="flex justify-center space-x-4 mt-2">
            <a href="https://github.com/Ganesh2904" target="_blank" class="hover:underline">
              Github
            </a>
            <a href="https://www.linkedin.com/in/ganesh-mankar-98bab6253/" target="_blank"  class="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
