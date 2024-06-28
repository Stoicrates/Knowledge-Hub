import { useState } from "react";
import viteLogo from "/vite.svg";
import Button from "./components/Button";
import Link from "./components/Link";
import Card from "./components/Card";
import * as Icons from "./components/Icons";
import Categories from "./components/Categories";
import ProductLogo from "./components/ProductLogo";
import Comet from "./components/Comet";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  const brandid = [
    {
      label: "Chat with GPT",
      icon: <Icons.ChatDots />,
      redirectLink:
        "https://chatgpt.com/g/g-lrBqoSTJU-enigma-camp-knowledge-hubinator",
    },
    {
      label: "Download",
      icon: <Icons.Download />,
      redirectLink: "/download/Enigma Camp’s Brand Identity.pdf",
    },
    {
      label: "Link",
      icon: <Icons.Link45Deg />,
      redirectLink:
        "https://www.canva.com/design/DAF7P45zHvE/A7CKao-LslL3QofondMstA/view?utm_content=DAF7P45zHvE&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    },
  ];
  const prodknowledge = [
    {
      label: "Chat with GPT",
      icon: <Icons.ChatDots />,
      redirectLink:
        "https://chatgpt.com/g/g-lrBqoSTJU-enigma-camp-knowledge-hubinator",
    },
    {
      label: "Download",
      icon: <Icons.Download />,
      redirectLink: "/download/Product Knowledge.pdf",
    },
    {
      label: "Link",
      icon: <Icons.Link45Deg />,
      redirectLink:
        "https://www.canva.com/design/DAGDyYhW4Ng/2X41jlawzd3dpl6liPXapQ/view?utm_content=DAGDyYhW4Ng&utm_campaign=designshare&utm_medium=link&utm_source=editor",
    },
  ];
  const compro = [
    {
      label: "Chat with GPT",
      icon: <Icons.ChatDots />,
      redirectLink:
        "https://chatgpt.com/g/g-lrBqoSTJU-enigma-camp-knowledge-hubinator",
    },
    {
      label: "Download",
      icon: <Icons.Download />,
      redirectLink: "/download/ENIGMACAMP-PITCHDECK-v8.2.pdf",
    },
  ];
  // const workflow = [
  //   {
  //     label: "Download",
  //     icon: <Icons.Download />,
  //     redirectLink: "https://www.google.com/",
  //   },
  //   {
  //     label: "Link",
  //     icon: <Icons.Link45Deg />,
  //     redirectLink: "https://www.duckduckgo.com/",
  //   },
  // ];

  const arya = [
    {
      label: "Chat",
      icon: <Icons.ChatDots />,
      redirectLink: "https://api.whatsapp.com/send?phone=6289659305633",
    },
    {
      label: "Linkedin",
      icon: <Icons.Link45Deg />,
      redirectLink: "https://www.linkedin.com/in/arya-saca-881409209/",
    },
  ];
  const caca = [
    {
      label: "Chat",
      icon: <Icons.ChatDots />,
      redirectLink: "https://api.whatsapp.com/send?phone=6281297882146",
    },
    {
      label: "Linkedin",
      icon: <Icons.Link45Deg />,
      redirectLink: "https://www.linkedin.com/in/saraska-lango-165708211/",
    },
  ];

  return (
    <div>
      <div className="p-8 bg-neutral-800 scroll-smooth">
        <div className="relative flex flex-col gap-20 max-w-7xl mx-auto text-neutral-50 z-20">
          <ProductLogo />
          <div className="flex flex-col gap-4 max-w-6xl">
            <h1 className="text-5xl font-bold">
              Hi<br></br>Welcome to the Product Team Knowledge Hub!
            </h1>
            <p>
              Here the product team aims to gather and update anything related
              to the programs, services, tools, and product of Enigma Camp. Feel
              free to browse and share with others.
            </p>
          </div>
          <div className="contentgroup">
            <Categories cat="Tools" />

            <div className="grid md:grid-cols-3 gap-4">
              <Card title="Enigma Camp's Company Profile" links={compro}></Card>
              <Card title="Brand Identity" links={brandid}></Card>
              <Card title="Product Knowledge" links={prodknowledge}></Card>
              {/* <Card
                title="Design Thinking - Enigma Camp's Workflow"
                links={workflow}
              ></Card> */}
            </div>
          </div>

          <div className="contentgroup">
            <Categories cat="Get to Know" />

            <div className="grid md:grid-cols-3 gap-4">
              <Card title="Arya Saca" links={arya}></Card>
              <Card title="Saraska Lango" links={caca}></Card>
            </div>
          </div>
        </div>
        <Comet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
