import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const WrapAuth = styled.div`
  background-color: #ffffff;
  width: 289px;
  height: 900px;
  padding-top: 32px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
export const BtnMenu = styled.button`
  border: none;
  background-color: transparent;
  margin-bottom: auto;
  cursor: pointer;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 1440px) {
    display: none;
  }
  svg {
    width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 768px) {
    svg {
      width: 34px;
      height: 34px;
    }
  }
`;

export const TitleUser = styled.p`
  color: rgba(52, 52, 52, 0.5);
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`;

export const WrapIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-top: 11px;
  padding-bottom: 18px;
  padding-right: 81px;
  width: 185px;
  height: 40px;
  border-radius: 8px;
  gap: 5px;
  background-color: ${({ active }) => (active ? '#e3f3ff' : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  stroke: ${({ active }) => (active ? '#3e85f3' : '#34343480')};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: '#e3f3ff';
    color: '#3e85f3';
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  svg {
    width: 15px;
    height: 16.67px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    padding-left: 22px;
    padding-top: 18px;
    padding-bottom: 18px;
    padding-right: 96px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ active }) => (active ? '#3e85f3' : 'rgba(52, 52, 52, 0.5)')};
  &:hover {
    color: '#3e85f3';
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const BtnLogout = styled.button`
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;
  width: 141px;
  height: 56px;
  background-color: #3e85f3;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: '#fff';
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #2b78ef;
  }
  svg {
    margin-left: 13px;
    width: 13px;
    height: 13px;
  }
  svg:hover {
    stroke: '#0000';
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const NavWrappText = styled.div`
  margin-bottom: auto;
`;

// ПАНТЕНСИН ДАРНИЦЯ
// МЕФЕТОМИНКА
