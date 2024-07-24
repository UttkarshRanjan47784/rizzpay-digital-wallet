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

const LoginForm = () => {
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
              <div className="flex flex-col space-y-1.5">
                <Label className="text-xs md:text-sm" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your registered email"
                  className="text-xs md:text-sm"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="otp" className="text-xs md:text-sm">
                  OTP
                </Label>
                <OTPInput />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-between">
          <Button className="w-full">Login</Button>
          <div className="border-t-2 mt-6 w-full flex flex-col justify-center items-center ">
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
