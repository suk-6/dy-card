import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Link from "next/link";

const StyleHeader = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: lightslategrey;
`;

const StyleTitle = styled.div`
  margin-left: 1rem;
  font-size: 1.4rem;
  font-family: NanumSquareBold;
`;

const Menu = styled.div`
  margin-right: 1rem;
  text-decoration: none;
`;

const Header = () => {
  return (
    <StyleHeader>
      <StyleTitle>
        <h3>DY-Card</h3>
      </StyleTitle>
      <Menu>
        <Link href="/login" style={{ color: "black", textDecoration: "none" }}>
          로그인
        </Link>
      </Menu>
    </StyleHeader>
  );
};

export default Header;
