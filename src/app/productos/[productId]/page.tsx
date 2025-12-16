import { Metadata } from "next";

export async function generateStaticParams() {
  return [{id:"1"},{id:"2"},{id:"3"}]
}

type Props = {
  params: Promise <{ productId: string }>
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product ${id}`,
  }
}

export default async function ProductData({
  params
}: Props) {
  return (
    <>
      <h1>DATOOS</h1>
    </>
  );
}