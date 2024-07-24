import { ParticleBackground } from "@/components/background/particle-background";
import { FeatureCarousel } from "@/components/login/feature-carousel";
import { LoginForm } from "@/components/login/login-form";

export default function Login() {
  return (
    <main className={`bg-[#f1f3f5] dark:bg-[#050610] min-h-[calc(100vh-56px)]`}>
      <ParticleBackground navbarHeight={"56px"}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 min-h-full ">
          <FeatureCarousel />
          <LoginForm />
        </div>
        {/* <p>Hemlo</p> */}
      </ParticleBackground>
    </main>
  );
}
