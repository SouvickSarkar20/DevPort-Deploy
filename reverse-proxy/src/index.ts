import express, { Request, Response } from "express";
import httpProxy, { ProxyReqCallback } from "http-proxy";

const app = express();
const PORT = 8000

const BASE_PATH = "https://devport-deploy.s3.ap-south-1.amazonaws.com/__outputs"

const proxy = httpProxy.createProxy();

app.use((req: Request, res: Response) => {
    const hostname = req.hostname;
    const subdomain = hostname.split(".")[0]

    const resolveTo = `${BASE_PATH}/${subdomain}`;
    proxy.web(req, res, { target: resolveTo, changeOrigin: true });
})