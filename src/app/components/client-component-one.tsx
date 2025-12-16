"use client"

import { ClientComponentTwo } from "./client-component-two";
import { useState } from "react";

export const ClientComponentOne = ({children}: {
  children: React.ReactNode
}) => {
  const [name, setName] = useState("Initial value");
  return (
  <>
    <h1>Client Component one</h1>
    {children}
  </>
  )
}