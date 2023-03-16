import {
  CloudArrowUpIcon,
  ServerIcon,
  ComputerDesktopIcon,
  CheckIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import lappy from "../assets/lappy.png";
import { Breadcrumbs } from "@material-tailwind/react";

const features = [
  {
    name: "Fixing And Repairing Computers And Laptops .",
    description:
      "We diagnose and fix any issues; broken screen, malfunctioning hardware, or a virus infection.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Installing And Upgrading Existing Computer Softwares .",
    description:
      "We also offer upgrades to boost performance(Memory increase or installing a faster hard drive).",
    icon: CloudArrowUpIcon,
  },

  {
    name: "Laptop Accessories .",
    description:
      "we sell a wide range of accessories, including chargers, cases, and external drives.",
    icon: ServerIcon,
  },
];

export default function Laptops() {
  return (
    <div className="overflow-hidden bg-white text-left  w-full pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <div className="pb-5">
              <Breadcrumbs >
                <a href="#Laptops">Laptops</a>
                <a href="#Mobiles" className="opacity-60">Phones</a>
                <a href="#Contact" className="opacity-60">Contact Us</a>                
              </Breadcrumbs>
              </div>

              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Edge Techworld Laptops & Computers
              </h2>
              <p className="mt-2 text-3xl font-bold  tracking-tight text-gray-900 sm:text-4xl">
                Quality Repair & Upgrade
                <br /> + Accessory Services
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                we're dedicated to providing quality solutions for all your
                laptop and computer needs.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="pt-10">
              <span className="sm:ml-3 pr-10 ">
                <Link to="/Repair">
                  <button
                    type="button"
                    className="inline-flex items-center  rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <WrenchScrewdriverIcon
                      className="-ml-0.5 mr-1.5 h-5 w-5"
                      aria-hidden="true"
                    />
                    Repair Laptop
                  </button>
                </Link>
              </span>
              <span className="sm:ml-3">
                <Link to="/Buy">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <ShoppingCartIcon
                      className="-ml-0.5 mr-1.5 h-5 w-5"
                      aria-hidden="true"
                    />
                    Buy Laptop
                  </button>
                </Link>
              </span>
            </div>
          </div>
          <img
            src={lappy}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>

      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
