import Image from "next/image";
import { useRouter } from "next/navigation";
import add from "../../assets/add.svg";
import home from "../../assets/home.svg";
import profile from "../../assets/profile.svg";

export function BottomBar() {
  const router = useRouter();

  return (
    <div
      className={
        "fixed bottom-0 left-1/2 transform -translate-x-1/2  w-4/5 h-24 flex space-x-4 justify-center gap-20 content-center"
      }
    >
      <button>
        <Image
          src={home}
          className="w-8 h-8 hover:bg-sky-1 rounded-lg px-0.5"
          alt=""
          onClick={() => router.push("/home")}
        />
      </button>

      <button>
        <Image
          src={add}
          className="w-8 h-8 hover:bg-sky-1 rounded-lg px-0.5"
          alt=""
          onClick={() => router.push("/create-workout")}
        />
      </button>

      <button>
        <Image
          src={profile}
          className="w-8 h-8 hover:bg-sky-1 rounded-lg px-0.5"
          alt=""
        />
      </button>
    </div>
  );
}
