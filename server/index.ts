import express from "express";
import next from "next";
import bodyParser from "body-parser";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import showRoutes from "./routes/index";
import authMiddleware from "./middlewares/auth.middleware";

// protect from csrf attack. more here https://en.wikipedia.org/wiki/Cross-site_request_forgery
const csrfMiddleware = csrf({ cookie: true });

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    const PORT = process.env.PORT || 3000;

    server.use(bodyParser.json());
    server.use(cookieParser());
    server.use(csrfMiddleware);

    server.all("*", (req, res, next) => {
        // @ts-ignore
        res.cookie("XSRF-Token", req.csrfToken());
        next();
    });

    server.use((_, res, next) => {
      res.set({ Tk: '!' })
      next()
    })
    server.use("/api", showRoutes());

    server.get("*", async (req, res) => {
      await authMiddleware(req, res);
      return handle(req, res);
    });

    server.listen(PORT, () => {
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch((ex: any) => {
    console.error(ex.stack);
    process.exit(1);
  });
