import Header from "@components/Header";
import Button from "@components/ui/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <>
      <Header />
      <div className="container space-x-4 pt-20">
        <Button icon={<PlusIcon />} variant="primary">
          Primary
        </Button>
        <Button icon={<PlusIcon />} variant="secondary">
          Secondary
        </Button>
        <Button icon={<PlusIcon />} variant="dark">
          Darkendary
        </Button>
        <Button icon={<PlusIcon />} variant="light">
          Lightendary
        </Button>
      </div>
      <div className="container flex items-center space-x-4 pt-4">
        <Button isLoading icon={<PlusIcon />} variant="primary">
          Primary
        </Button>
        <Button isLoading icon={<PlusIcon />} variant="secondary">
          Secondary
        </Button>
        <Button isLoading icon={<PlusIcon />} variant="dark">
          Darkendary
        </Button>
        <Button isLoading icon={<PlusIcon />} variant="light">
          Lightendary
        </Button>
      </div>
    </>
  );
};

export default NotFound;
