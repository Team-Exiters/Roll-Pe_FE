"use client";

import Back from "@/public/images/icons/icon_arrow_left.svg";
import logo from "@/public/images/logos/logo.korean.png";
import Image from "next/image";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/public/redux/store";
import { RootState } from "@/public/redux/store";
import { setSlide } from "@/public/redux/redux";
import { useRouter } from "next/navigation";
import SlideMenu from "./SlideMenu";
import { useState } from "react";






export 

const HeaderWrapper = styled.header<{ left: boolean }>`
  position: absolute;
  top: 0;
  z-index: 2;

  display: flex;
  justify-content: ${(props) => (props.left ? "flex-start" : "flex-end")};
  width: calc(100% - 2.5rem);
  padding: 1rem 1.25rem;
  background: transparent;
`;

const LogoHeaderWrapper = styled(HeaderWrapper)`
  align-items: center;
  justify-content: space-between;
`;

const MenuButton = styled.button`
  all: unset;
  position: relative;
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;
`;

const BackButton = styled(MenuButton)`
  width: 0.75rem;
  height: 1.25rem;
`;

const LogoButton = styled(MenuButton)`
  width: 3rem;
  height: 1.5rem;
`;
