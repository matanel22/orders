import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { MenuItem } from "./MenuItem";

const managementMenuItems = [
  {
    title: "משתמשים",
    address: "users",
  },
  {
    title: "ימי עמדה",
    address: "positiondays",
  },
  {
    title: "לקוחות",
    address: "customers",
  },
  {
    title: "שלבים למדור",
    address: "levels",
  },
  {
    title: "הוצאות אחרות",
    address: "expenses",
  },
  {
    title: "שעות עבודה",
    address: "hours",
  },
  {
    title: "מספרי דרישה",
    address: "numbers",
  },
  {
    title: "ארכיון",
    address: "archive",
  },
  {
    title: "מדורים",
    address: "departments",
  },
];

export const ManagementMenu = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const [active, setActive] = useState("");

  const changeActive = (address: any) => {
    if (address !== active) {
      setActive(address);
    }
  };

  useEffect(() => {
    const n = location.pathname.lastIndexOf("/");
    var address = location.pathname.substring(n + 1);
    if (!address) {
      setActive(managementMenuItems[0].address);
    } else {
      setActive(address);
    }
  }, []);

  useEffect(() => {
    if (active) {
      navigate("/main/managementInterface/" + active);
    }
  }, [active]);

  return (
    <MenuWrapper>
      {managementMenuItems.map(({ address, title }) => {
        return (
          <MenuItem
            key={address}
            active={address === active}
            address={address}
            title={title}
            changeActive={changeActive}
          />
        );
      })}
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  min-width: 260px;
  height: 100%;
  box-sizing: border-box;
  background-color: #dddddd;
  border-left: 2px solid #ff0000;
  padding: 0 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
