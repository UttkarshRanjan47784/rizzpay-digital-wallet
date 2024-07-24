"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const features = [
  {
    imageURL:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "One Stop E-Wallet",
    description: "Pay or request money online. All at one place!",
    id: 1,
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1706759755782-62bc9a0b32e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ease of Access",
    description:
      "Perform hassle free transactions with integrated QR code support",
    id: 2,
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1665686377065-08ba896d16fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Contacts & Favourites",
    description:
      "With saved contacts you can connect with your friends and family in an instant. Frequently engage with some people? Favourites will come to your rescue!",
    id: 3,
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1566997560041-002fd549180b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cashbacks & Rewards",
    description:
      "Frequent user of our Rizzpay? We thank you by gifting numerous cashback offers for your future transactions!",
    id: 4,
  },
];

const FeatureCarousel = () => {
  return (
    // outer div
    <div className="hidden col-span-2 h-full lg:flex justify-center items-center p-3 ">
      <Carousel
        className="w-full lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {features.map((feature) => (
            <CarouselItem key={feature.id}>
              <div className="p-1">
                <Card className="border-none">
                  <CardContent className="relative flex aspect-[16/10] items-center justify-center p-6">
                    <div className=" dark:bg-black opacity-80 dark:opacity-20">
                      <Image
                        alt="contact img"
                        src={feature.imageURL}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="absolute  lg:top-2/3 2xl:top-3/4 left-5 lg:max-w-sm xl:max-w-lg 2xl:max-w-2xl">
                      <h1 className="text-3xl font-bold mb-2">
                        {feature.title}
                      </h1>
                      <p className="text-md">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export { FeatureCarousel };
