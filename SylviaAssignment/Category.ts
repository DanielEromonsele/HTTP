import http, { IncomingMessage, ServerResponse } from "http";
import axios from "axios";


interface iMessage {
  message: string;
  success: boolean;
  data: null|{}|{}[];
}

const port: number = 2007;

const Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.setHeader("Content-Type", "application/json");

    let response: iMessage = {
      message: "Failed to get request made",
      success: false,
      data: null,
    };
    let status = 404;

    let Container = "";

    req
      .on("data", (chunk) => {
        Container += chunk;
      })
      .on("end", async () => {
        const { method, url } = req;

        if (method === "GET") {
          const First = url?.split("/")[1];
          const Second = First?.toString();

          const fakeStore = await axios.get("http://fakestoreapi.com/products");

          const fakeStoreData = fakeStore.data;

          let check = fakeStoreData.some((el: any) => el.category === Second);
          if (check === true) {
            const FakeStoreCategory = fakeStoreData.filter(
              (el:any) => el.category === Second
            );

            response.success = true;
            response.data = FakeStoreCategory;
            response.message = "Category successfully uploaded.";
            res.write(JSON.stringify({ response, status }));
            res.end();
          } else {
            res.write(JSON.stringify({ response, status }));
            res.end();
          }
        }
      });
  }
);

Server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});