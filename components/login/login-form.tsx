"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { OTPInput } from "./otp-input";
import { ThirdPartyAuth } from "./third-party-auth";
import ShineBorder from "../magicui/shine-border";
import { useEffect, useState } from "react";
import ErrorMessage from "./error-message";

const correctCredentials = {
  email: "okok@mail.com",
  password: "hehe",
  otp: "123456",
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOTP] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidOTP, setIsValidOTP] = useState(true);
  const [loginStatus, setLoginStatus] = useState(0);
  // 0= waiting to check mail + pswd
  // 1= waiting to check otp
  // 2= correct otp => login

  useEffect(() => {
    setIsValidOTP(true);
  }, [otp]);

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (loginStatus === 0) {
      // check email + password
      console.log("Entered: " + email, password);
      if (
        email === correctCredentials.email &&
        password === correctCredentials.password
      )
        setLoginStatus(1);
      else {
        console.log("setting flase");
        setIsValidEmail(email !== correctCredentials.email ? false : true);
        setIsValidPassword(
          password !== correctCredentials.password ? false : true
        );
      }
    } else {
      // check otp
      console.log("OTP Entered: " + otp);
      if (otp === correctCredentials.otp) {
        setIsValidOTP(true);
        alert("correct otp");
      } else setIsValidOTP(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-full ">
      {/* make the card relative, if using particles as bg or using shineborder */}
      {/* <ShineBorder className=" p-0" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}> */}
      <Card className="relative w-[330px] sm:w-[350px]">
        <CardHeader>
          <CardTitle className="text-lg md:text-2xl">Login</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Enter your credentials to login securely.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {loginStatus == 0 ? (
                <>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="text-xs md:text-sm" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your registered email"
                      className={`text-xs md:text-sm ${
                        !isValidEmail ? "border-red-500" : ""
                      }`}
                      value={email}
                      onChange={handleEmail}
                      required
                    />
                    {!isValidEmail ? (
                      <ErrorMessage message="Enter a valid email" />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label className="text-xs md:text-sm" htmlFor="password">
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className={`text-xs md:text-sm ${
                        !isValidPassword ? "border-red-500" : ""
                      }`}
                      value={password}
                      onChange={handlePassword}
                      required
                    />
                    {!isValidPassword ? (
                      <ErrorMessage message="Password must contain..." />
                    ) : (
                      ""
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="otp" className="text-xs md:text-sm">
                      We&apos;ve sent an OTP to <strong>{email}</strong>
                    </Label>
                    <OTPInput otp={otp} setOTP={setOTP} />
                  </div>
                  {!isValidOTP ? (
                    <ErrorMessage message="Incorrect OTP. Check again!" />
                  ) : (
                    ""
                  )}
                </>
              )}
              <Button type="submit" className="w-full" onClick={handleLogin}>
                {loginStatus === 0 ? "Login" : "Verify OTP"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-between">
          <div className="border-t-2 mt-4 w-full flex flex-col justify-center items-center ">
            <span className="relative -top-3 text-sm px-1 ">OR</span>
          </div>
          <div className=" gap-7 w-full flex flex-col justify-center items-center">
            <ThirdPartyAuth />
            <p className="text-sm">
              New here?{" "}
              <Link href="/signup" className="text-blue-700">
                Sign up
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
      {/* </ShineBorder> */}
    </div>
  );
};

export { LoginForm };
