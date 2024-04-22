"use client";
import Counter from "@/components/Counter/Counter";
import { useState } from "react";

const Page = () => {
  console.log("hellow");

  return (
    <div>
      <h2 className="text-4xl text-center">Welcome to next js</h2>
      <Counter></Counter>
    </div>
  );
};

export default Page;
