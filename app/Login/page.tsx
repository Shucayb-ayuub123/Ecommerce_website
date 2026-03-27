"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema } from "../Type";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon, InfoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type user = z.infer<typeof schema>;

const Page = () => {
  const [Alerts, setAlert] = useState<string>("");
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<user>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [Alerts]);
  const SubmitForm: SubmitHandler<user> = async (data) => {
    try {
      const response = await axios.post("/api/Auth/Login", data, {
        withCredentials: true, // ✅ IMPORTANT for cookies
      });

      const role = response.data.role;
        console.log(role)
      if (role == "guest") {
        return  router.push("/guest");
      }

      if (role == "Admin") {
        return router.push("/Admin");
      }
    } catch (error: any) {
      setAlert(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center px-5">
      <div className="w-12/12 lg:w-5/12 md:w-7/12 sm:w-9/12 bg-white p-10 rounded-lg">
        <div className="w-full">
          <h1 className="text-4xl font-semibold">Login account</h1>
        </div>
        <form className="mt-3" onSubmit={handleSubmit(SubmitForm)}>
          {/* Email */}
          <div className="w-full mb-4 flex flex-col space-y-2">
            <label className="text-md font-semibold">Email</label>
            <Input
              className="h-10 border-2"
              {...register("Email")}
              type="text"
              placeholder="Email"
            />
            {errors.Email && (
              <p className="text-red-400 font-semibold">
                {errors.Email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="w-full mb-4 flex flex-col space-y-2">
            <label className="text-md font-semibold">Password</label>
            <Input
              className="h-10 border-2"
              {...register("password")}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-400 font-semibold">
                {errors.password.message}
              </p>
            )}

            <Link
              href={"/forgetPass"}
              className="font-semibold text-gray-400 hover:underline"
            >
              Forget password
            </Link>
          </div>

          {/* Button */}
          <div className="w-full mb-4 flex justify-center items-center flex-col">
            <Button
              className="w-30 font-semibold text-lg h-10"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Login"}
            </Button>

            <div className="w-full justify-center items-center gap-1 flex mt-3">
              <span className="text-gray-600 font-medium">
                Don't have account?
              </span>
              <Link href={"/Singup"} className="font-semibold hover:underline">
                Signup
              </Link>
            </div>
          </div>
        </form>
        <div
          className={`absolute right-2 top-20 transition-opacity duration-500 ${
            Alerts ? "opacity-100" : "opacity-0"
          }`}
        >
          {Alerts && (
            <Alert className="p-2 w-57 flex items-center gap-2">
              <InfoIcon size={35} color="red" />

              <AlertTitle className={`font-semibold text-red-600 text-md`}>
                {Alerts}
              </AlertTitle>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
