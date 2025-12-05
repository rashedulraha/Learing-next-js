import Link from "next/link";
import React from "react";
import Container from "../Responsive/Container";

const Navbar = () => {
  return (
    <Container>
      <div className="flex items-center gap-6">
        <Link href={"/home"}>Home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/contact"}>contact</Link>
      </div>
    </Container>
  );
};

export default Navbar;
