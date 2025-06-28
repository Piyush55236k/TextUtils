import React from 'react';

function Footer() {
  const footerStyle = {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "10px",
    marginTop: "auto"
  };

  return (
    <footer className="footer" style={footerStyle}>
      <p className="m-0">&copy; All Rights Reserved | TextUtils.com</p>
    </footer>
  );
}

export default Footer;
