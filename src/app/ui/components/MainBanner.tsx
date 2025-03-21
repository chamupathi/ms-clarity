export default function MainBanner() {
    return ( <div className="flex flex-col md:flex-row bg-[#003366ad]/90 p-6 md:p-10
      rounded-lg shadow-lg 
      ">
            <div className="flex flex-col flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-left uppercase">Lorum ipsum dolor sit amet...</h1>
                <h1 className="text-3xl md:text-4xl font-bold text-white text-left uppercase">Lorum ipsum!!</h1>
            </div>

            <p className="text-sm md:text-lg text-white text-left mt-2 leading-relaxed flex-1">
                Lorem ipsum dolor sit amet, <span className="font-bold text-[#ff9933]">consectetur adipiscing </span> elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation <span className="font-bold text-[#ff9933]">ullamco</span> laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint <span className="font-bold text-[#ff9933]">occaecat cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
} 