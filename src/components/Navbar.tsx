import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  height: 70px;
  width: 100%;
  background: purple;
  padding: 1rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  padding: 1rem;
`;
const Navbar: FC = () => {
  return (
    <Nav>
      <NavLink to="/">Задания</NavLink>
      <div>
        <NavLink to="/number">Номерация</NavLink>
        <NavLink to="/todo">Тодушка</NavLink>
        <NavLink to="/api">API данный</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;
