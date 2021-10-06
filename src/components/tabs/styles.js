import styled, { css, keyframes } from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  background: #042a45;
  border-radius: 10px;
  margin: 30px auto;
  padding: 0 5px;
`;

export const StylizedTab = styled.button`
  font-family: "Dank Mono", ui-monospace, monospace;
  color: #fff;
  width: 100%;
  padding: 10px 0px;
  margin: 5px 0px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  ${(p) =>
    p.active &&
    css`
      color: #fff;
      font-weight: bold;
      background: #084e81;
      border-radius: 5px;
      border-top: 1px solid #0997ff;
    `}
  ${(p) => !p.active && p.inactiveStyle}
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 1rem;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const TabsHolder = styled.div`
  display: flex;
`;

export const inactiveTab = {
  opacity: 0.65,
};
