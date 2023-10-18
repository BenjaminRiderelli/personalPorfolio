
const url = process.env.BASE_URL ?? "http://localhost:3000"

export const fetchData = async (row: number) => {
    const response = await fetch(
      `${url}/api/getprojectbyid?id=${row}`,
      {
        next: { revalidate: 0 },
      }
    );
    const data = await response.json();
    const finalData = data.body.data
      ? data.body.data.values[0]
      : [
          "data not found x_x",
          "There has been a problem with our server",
          JSON.stringify([]),
          JSON.stringify([]),
          "",
          "",
        ];
  
    return finalData;
  };