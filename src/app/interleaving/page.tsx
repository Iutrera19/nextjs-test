import { ServerComponentOne } from "../components/server-component-one";
import { ClientComponentOne } from "../components/client-component-one";
import { Server } from "http";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>
      <ClientComponentOne>
        <ServerComponentOne/>  
      </ClientComponentOne>
    </>
  )
}