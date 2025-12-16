import Link from "next/link";

export default function ProductList() {
  const number = 100;
  return (
    <>
      <h1>Lista</h1>
      <Link href="/productos/1">Prod 1</Link>
      <Link href="/productos/2">Prod 2</Link>
      <Link href={`/producto/3`}>Prod 3</Link>
    </>
  );
}