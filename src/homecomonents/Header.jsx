import React from "react";

export function Header() {
  const bannerAnimation = {
    backgroundImage:
      "linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5)",
    backgroundSize: "600%",
    WebkitAnimation: "anime 16s linear infinite",
    animation: "anime 16s linear infinite",
  };

  const bannerWrapperAnimation = {
    animation: "appear 5s ease-in-out",
    overflow: "hidden",
    width: "100%",
  };

  const buttonStyles = {
    color: "white",
    transition: "all 0.2s ease-in-out",
    letterSpacing: "0.05em",
    fontWeight: 500,
    outline: "none",
    overflow: "hidden",
    display: "flex",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  };

  const headerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundImage: "linear-gradient(to right, #1e293b, #0f172a)", // Matches the Home page gradient
    color: "white",
    height: "60px",
  };

  const logoStyles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginRight: "20px", // Adds gap between the logo and the banner
  };

  const logoImageStyles = {
    height: "50px", // Adjusted size
    width: "50px", // Adjusted size
    objectFit: "contain",
    border: "2px solid #22c55e", // Green-400 border
    borderRadius: "50%", // Makes the border circular
  };

  return (
    <>
      <header style={headerStyles}>
        {/* Logo Section */}
        <div style={logoStyles}>
          <img src="/logo1.jpg" alt="Logo" style={logoImageStyles} />
        </div>

        {/* Banner Section */}
        <div style={bannerWrapperAnimation}>
          <div style={bannerAnimation}>
            <a
              style={buttonStyles}
              href="https://codewithsubhadip.vercel.app"
              className="text-xs sm:text-base"
            >
              Want a crazy good website? Let&apos;s Discuss!
            </a>
          </div>
        </div>
      </header>

      <style>{`
            @keyframes anime {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
    
            @keyframes appear {
              0% {
                height: 0px;
              }
              80% {
                height: 0px;
              }
              100% {
                height: 40px;
              }
            }
          `}</style>
    </>
  );
}

export default Header;
