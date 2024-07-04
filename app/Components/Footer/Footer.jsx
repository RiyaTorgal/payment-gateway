import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 text-zinc-50">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo (2)-min.svg"
            alt="logo"
            width={150}
            height={75}
            className="object-contain"
          />
          <p className="text-base text-zinc-50">
            MVTours&Travels 2024
            <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
            <div className="flex flex-col gap-2 text-base min-w-[170px]">
              <h3 className=" text-xl text-zinc-50">Contact Info</h3>
              <div></div>
              <p className="font-semibold text-lg">Address</p>
                <p className=" mt- text-sm">Ganeshpuri Society Warje Pune 411058</p>
                <p className="font-semibold text-lg">Phone No</p>
                <p className=" mt- text-sm">+91 90960 27300</p>
            </div>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2024 MVTours&Travels. All Rights Reserved</p>

        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" className="">
            Privacy Policy
          </Link>
          <Link href="/" className="">
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
