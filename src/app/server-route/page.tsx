import { serverSideFunction } from "../../utils/server-utils"
import { clientSideFunction } from "@/utils/client-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  return <h1>Server Route {result}</h1>
}