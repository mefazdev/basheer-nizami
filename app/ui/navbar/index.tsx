"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { clsx } from "clsx";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
// import MobNav from "./MobNav";

export default function Navbar() {
  const [collapse, setCollapse] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const [changeNav, setChangeNav] = useState(false);

  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const changeNavBar = () => {
    if (window.scrollY >= 5) {
      setChangeNav(true);
    }
    if (window.scrollY < 5) {
      setChangeNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBar);
  });

  return (
    <div>
      <div
        className={clsx(
          "hidden lg:grid fixed px-4 lg:px-0 left-0 w-full m-auto z-50 transition ease-linear duration-200",
          {
            "top-0    ": navScroll,
            "top-5": !navScroll,
          }
        )}
      >
        <div
          className={clsx(
            "transition  ease-linear duration-200 flex justify-between",
            {
              "bg-black/60 backdrop-blur-lg px-14 bg-opacity-95  py-1":
                navScroll,
              "bg-black/10 backdrop-blur-md md:w-full w-11/12 xl:w-10/12 px-8   mx-auto rounded":
                !navScroll,
            }
          )}
        >
          <div className=" flex w-full justify-between items-center py-1 ">
            <div className="flex gap-2">
              {/* <div className="bg-white p-0.5 rounded-md">
                <div className=" h-11 w-14 relative rounded">
                  <Link passHref href="/">
                    <Image
                      src={"/images/name-4.png"}
                      className="rounded"
                      alt=""
                      layout="fill"
                    />
                  </Link>
                </div>
              </div> */}
              <div className=" h-14 w-38 relative rounded mt-1">
                <Link passHref href="/">
                  <Image src={"/images/name-4.png"} alt="" layout="fill" />
                </Link>
              </div>
            </div>

            <span className="lg:hidden">
              <Menu id="menu__icon" onClick={() => setCollapse(!collapse)} />
            </span>
          </div>

          <div className="text-white col-span-2 hidden  lg:flex justify-end  relative  font-montserrat ">
            <div className="flex gap-3 items-center">
              <Link passHref href="/">
                <span className="group">
                  <h3
                    className={
                      pathname == "/" ? " cursor-pointer" : "  cursor-pointer"
                    }
                  >
                    HOME
                  </h3>

                  <div
                    className={
                      pathname === "/"
                        ? "bg-secondary rounded-full h-0.5    group-hover:block"
                        : "bg-secondary rounded-full  h-0.5   hidden   group-hover:block"
                    }
                  ></div>
                </span>
              </Link>

              <Link passHref href="/Newses">
                <span className="group">
                  <h3
                    className={
                      pathname == "/Newses"
                        ? " cursor-pointer"
                        : "  cursor-pointer"
                    }
                  >
                    ARTICLES
                  </h3>

                  <div
                    className={
                      pathname === "/Newses"
                        ? "bg-secondary rounded-full h-0.5     group-hover:block"
                        : "bg-secondary rounded-full h-0.5   hidden   group-hover:block"
                    }
                  ></div>
                </span>
              </Link>

              {/* News */}
              <Link passHref href="/Newses">
                <span className="group">
                  <h3
                    className={
                      pathname == "/Newses"
                        ? " cursor-pointer"
                        : "  cursor-pointer"
                    }
                  >
                    UPDATES
                  </h3>

                  <div
                    className={
                      pathname === "/Newses"
                        ? "bg-secondary rounded-full h-0.5     group-hover:block"
                        : "bg-secondary rounded-full h-0.5   hidden   group-hover:block"
                    }
                  ></div>
                </span>
              </Link>
              <Link passHref href="/Contact">
                <span className="group">
                  <h3
                    className={
                      pathname == "/Contact"
                        ? " cursor-pointer"
                        : "  cursor-pointer"
                    }
                  >
                    PUBLICATIONS
                  </h3>

                  <div
                    className={
                      pathname === "/Contact"
                        ? "bg-secondary rounded-full h-0.5     group-hover:block"
                        : "bg-secondary rounded-full h-0.5   hidden   group-hover:block"
                    }
                  ></div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <MobNav /> */}
    </div>
  );
}
