import { BsGithub, BsCodeSlash } from "react-icons/bs";
import Carousel from "../../../components/carousel/carousel";

interface SheetData {
  name: string;
  description: string;
  pics: any[];
  techStack: string[];
  workingLink: string;
  githubLink: string;
}

interface ProjectProps {
  params: { id: string };
}

export const revalidate = 60;

export const fetchData = async (row: number | undefined) => {
  let finalData: string[];
  try {
    const response = await fetch(
      `https://benjaminriderelli.vercel.app/api/getprojectbyid?id=${row}`,
      {
        next: { revalidate: 0 },
      }
    );
    const data = await response.json();
    finalData = data.body.data.values[0];
  } catch (e) {
    console.log(e);
    finalData = [
      "data not found x_x",
      "There has been a problem with our server",
      JSON.stringify([]),
      JSON.stringify([]),
      "",
      "",
    ];
  }

  return finalData;
};

export default async function Project({ params }: ProjectProps) {
  const row = Number(params.id);
  const res = await fetchData(row);

  const [name, description, pics, techStackArr, workingLink, githubLink] = res;
  const data: SheetData = {
    name,
    description,
    pics: JSON.parse(pics) ?? [],
    techStack: JSON.parse(techStackArr) ?? [],
    workingLink,
    githubLink,
  };

  const techStack = data.techStack.map((tech: string) => (
    <li key={tech}>
      <p className="text-lg">{tech}</p>
    </li>
  ));

  return (
    <section
      className={`flex flex-col items-center justify-center min-h-full w-screen border-b-2 border-light-text-color dark:border-dark-text-color bg-light-bg-color dark:bg-dark-bg-color md:p-4`}
    >
      <div
        className={`flex flex-col grow w-full lg:w-3/4 lg:h-full bg-light-bg-color dark:bg-dark-bg-color border-light-text-color dark:border-dark-text-color text-light-text-color dark:text-dark-text-color border-2 pb-4`}
      >
        <div className="flex flex-col lg:flex-row lg:border-b-2 border-light-text-color dark:border-dark-text-color h-full lg:h-1/4 w-ful">
          <div className="flex pt-8 lg:pt-0 items-center justify-center w-full lg:w-3/4  border-t-2 lg:border-r-2 lg:border-t-0  border-light-text-color dark:border-dark-text-color pl-8">
            <h2 className="text-4xl">{data.name}</h2>
          </div>
          <ul className="flex flex-col md:flex-row lg:flex-col justify-center p-8 gap-2">
            {techStack}
          </ul>
        </div>

        <div className="flex flex-col items-centerjustify-between gap-8 h-full w-full p-8 ">
          <p className="w-full h-full text-xl">{data.description}</p>
          <div className="flex gap-16">
            <span className="flex gap-4 items-center cursor-pointer">
              <BsCodeSlash />
              <a target="_blank" href={data.workingLink}>
                Live Link
              </a>
            </span>
            <span className="flex gap-4 items-center cursor-pointer">
              <BsGithub />
              <a target="_blank" href={data.githubLink}>
                Github Link
              </a>
            </span>
          </div>
        </div>
        <div className="flex w-full lg:w-3/5 justify-self-center self-center border-2 border-light-text-color">
          <Carousel autoSlide={false} autoSlideInterval={3000}>
            {data.pics.map((image) => {
              return (
                <img
                  style={{ objectFit: "contain" }}
                  key={image}
                  alt="project image"
                  src={image}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
