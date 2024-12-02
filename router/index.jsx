import { createBrowserRouter } from "react-router-dom";
import Second from "../src/csdnModel/Second";
import Third from "../src/csdnModel/Third";
import App from "../src/App";
import Fabu from "../src/csdnModel/Fabu";
import Layout from "../src/1688Model/Layout";
import Center from "../src/qishimodel/Center";
import My_info from "../src/qishimodel/My_info";
import Desc_info from "../src/qishimodel/Desc_info";
import Think from "../src/qishimodel/Think";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Center></Center>,
        children: [
            {
                path: '/Third',
                element: <Third></Third>
            },
            {
                path: '/Second',
                element: <Second></Second>
            },
        ]
    },
    {
        path: '/Fabu',
        element: <Fabu></Fabu>
    },
    {
        path: '/App',
        element: <App></App>
    },
    {
        path: '/Layout',
        element: <Layout></Layout>
    },
    {
        path: '/Center',
        element: <Center></Center>
    },
    {
        path: '/My_info',
        element: <My_info></My_info>
    },
    {
        path: '/Desc_info',
        element: <Desc_info></Desc_info>
    },
    {
        path: '/Think',
        element: <Think></Think>
    }
])

export default router;