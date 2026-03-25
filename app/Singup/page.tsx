"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema } from "../Type";
import axios from "axios";

type user = z.infer<typeof schema>;
const page = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<user>({
    resolver: zodResolver(schema),
  });

  const SubmitForm: SubmitHandler<user> = async (data) => {
    try {
      const respone = await axios.post("/api/Auth/Signup", data);
       alert(respone.data.message)
    } catch (error:any) {
      alert(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 flex  justify-center items-center px-5 ">
      <div className=" w-12/12 lg:w-5/12 md:w-7/12 sm:w-9/12 bg-white p-10 rounded-lg ">
        <div className="w-full">
          <h1 className="text-4xl font-semibold">Create account</h1>
        </div>
        <form action="" className="mt-3" onSubmit={handleSubmit(SubmitForm)}>
          <div className="w-full mb-4 flex flex-col space-y-2">
            <label htmlFor="" className="text-md font-semibold">
              username
            </label>
            <Input
              {...register("username")}
              className="h-10 border-2"
              type="text"
              placeholder="username"
            />
            {errors.username && (
              <p className="text-red-400 font-semibold">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="w-full mb-4 flex flex-col space-y-2">
            <label htmlFor="" className="text-md font-semibold">
              Email
            </label>
            <Input
              {...register("Email")}
              className="h-10 border-2"
              type="text"
              placeholder="Email"
            />
            {errors.Email && (
              <p className="text-red-400 font-semibold">
                {errors.Email.message}
              </p>
            )}
          </div>
          <div className="w-full mb-4 flex flex-col space-y-2">
            <label htmlFor="" className="text-md font-semibold">
              password
            </label>
            <Input
              {...register("password")}
              className="h-10 border-2"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-400 font-semibold">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="w-full mb-4 flex justify-center items-center flex-col">
            <Button
              className="w-30 font-semibold text-lg h-10"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "loading..." : "Signup"}
            </Button>
            <div className="w-full justify-center items-center gap-1 flex mt-3">
              <span className="text-gray-600 font-medium">
                You have already account?{" "}
              </span>
              <Link href={"/Login"} className="font-semibold hover:underline">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
