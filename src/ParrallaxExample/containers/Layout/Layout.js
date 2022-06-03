import React from "react";
import CursorManager from "../../components/CustomCursor";
import CustomCursor from "../../components/CustomCursor";

export default function Layout({ children }) {
  return (
    <CursorManager>
      <>
        <CustomCursor />
        {children}
      </>
    </CursorManager>
  );
}
