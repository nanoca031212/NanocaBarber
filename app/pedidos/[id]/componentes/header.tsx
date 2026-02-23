import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <div className="relativo -z-10">
      <Image
        src="/back.png"
        alt="banner barber"
        width={0}
        height={0}
        className="h-auto w-full"
        sizes="100vw"
      />

      <Link href="/">
        <Button
          className=" h-10 w-10 absolute top-4 left-4 rounded-full "
          variant={"outline"}
        >
          <ArrowLeftIcon />
        </Button>
      </Link>
    </div>
  );
};

export default header;
