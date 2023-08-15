import Head from "next/head";
import Project from "./singleproject"

export default function Projects() {

  const imgUrl = "http://localhost:3000/api/og?title=hola&emoji=🔥";


  return (
    <section className="flex min-h-full flex-col items-center justify-between ">
      <Head>
        <title>Projects</title>
        <meta property="og:image" content={imgUrl}></meta>
      </Head>
      <Project row={2}/>
      <Project row={3}/>
      <Project row={4}/>
      <Project row={5}/>
    </section>
  );
}
