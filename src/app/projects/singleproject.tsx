import { BsGithub, BsCodeSlash } from "react-icons/bs";
import Carousel from "../../components/carousel/carousel";

interface SheetData {
  name: string;
  description: string;
  pics: any[];
  techStack: string[];
  workingLink: string;
  githubLink: string;
}

interface ProjectProps {
  row: number;
}

export const fetchData = async (row: number) => {
  const response = await fetch(
    //https://benjaminriderelli.vercel.app
    `https://benjaminriderelli.vercel.app/api/getprojectbyid?id=${row}`
  );
  const data = await response.json();
  return data.body.data.values[0];
};

export default async function Project({ row }: ProjectProps) {
  const res = await fetchData(row);

  const [name, description, pics, techStackArr, workingLink, githubLink] = res;

  const testData: SheetData = {
    name,
    description,
    pics: JSON.parse(pics) ?? [],
    techStack: JSON.parse(techStackArr) ?? [],
    workingLink,
    githubLink,
  };

  const techStack = testData.techStack.map((tech: string) => (
    <li key={tech}>
      <p className="text-lg">{tech}</p>
    </li>
  ));

  return (
    <>
      <section
        className={`flex flex-col ${
          row % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        } h-full w-full border-b-2 border-light-text-color dark:border-dark-text-color`}
      >
        <div className="flex items-center  bg-light-bg-color dark:bg-dark-bg-color w-full min-h-screen lg:w-3/4">
          <Carousel autoSlide={false} autoSlideInterval={3000}>
            {testData.pics.map((image) => {
              return (
                <img
                  style={{ objectFit: "cover" }}
                  className="object-fit h-screen min-w-[800px]  md:min-w-full w-full"
                  key={image}
                  alt="project image"
                  src={image}
                />
              );
            })}
          </Carousel>
        </div>

        <div
          className={`flex flex-col w-full min-h-screen lg:w-1/2 bg-light-bg-color dark:bg-dark-bg-color ${
            row % 2 == 0 ? "lg:border-l-2" : "lg:border-r-2"
          } border-light-text-color dark:border-dark-text-color text-light-text-color dark:text-dark-text-color`}
        >
          <div className="flex flex-col lg:flex-row lg:border-b-2 border-light-text-color dark:border-dark-text-color h-full lg:h-1/4 w-full">
            <div className="flex pt-8 lg:pt-0 items-center justify-center w-full lg:w-3/4  border-t-2 lg:border-r-2 lg:border-t-0  border-light-text-color dark:border-dark-text-color pl-8">
              <h2 className="text-4xl">{testData.name}</h2>
            </div>
            <ul className="flex flex-col md:flex-row lg:flex-col justify-center p-8 gap-2">
              {techStack}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-8 h-full w-full p-8 ">
            <p className="w-full h-full text-xl">{testData.description}</p>
            <div className="flex gap-16">
              <span className="flex gap-4 items-center cursor-pointer">
                <BsCodeSlash />
                <a target="_blank" href={testData.workingLink}>
                  Live Link
                </a>
              </span>
              <span className="flex gap-4 items-center cursor-pointer">
                <BsGithub />
                <a target="_blank" href={testData.githubLink}>
                  Github Link
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
