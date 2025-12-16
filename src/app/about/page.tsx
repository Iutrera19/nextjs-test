export const metadata = {
  title: "About the pageee",
}

export default async function About() {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve("Intentional delay")
    }, 2000)
  })
  console.log("Testing server component")
  return <h1>Prueba about {new Date().toLocaleTimeString()}</h1>
}