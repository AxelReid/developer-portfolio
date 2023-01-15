"use client";

import type { FormEvent } from "react";
import Input from "@components/Input";
import TextArea from "@components/TextArea";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const Form = () => {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submit} className="flex flex-auto flex-col space-y-8">
      <Input required type="text" placeholder="Enter your name" label="Name" />
      <Input
        required
        type="email"
        placeholder="Enter your email"
        label="Email"
      />
      <TextArea
        required
        label="Project"
        placeholder="Write your project"
        className="h-[245px]"
      />
      <button className="btn btn-dark flex w-fit items-center space-x-3 rounded-2xl py-6 px-8 font-medium">
        <span className="whitespace-nowrap">Send Message</span>
        <PaperAirplaneIcon className="w-6 -translate-y-1 -rotate-45" />
      </button>
    </form>
  );
};

export default Form;
