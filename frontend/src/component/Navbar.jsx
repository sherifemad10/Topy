
import React from "react";
import Logo from "../assets/logo.ico";

import {
  HouseIcon,
  LayoutDashboardIcon,
  PlusIcon,
  SettingsIcon,
  LogOutIcon,
} from "@animateicons/react/lucide";
import { Link, NavLink } from "react-router";

const navItems = [
  {
    name: "Home",
    icon: HouseIcon,
  },
  {
    name: "All Products",
    icon: LayoutDashboardIcon,
  },
  {
    name: "Add Product",
    icon: PlusIcon,
  },
];

const Navbar = () => {
  return (
    <>
      {/* ==== DESKTOP SIDEBAR ===== */}
      <aside
        className="
          hidden md:flex
          fixed left-0 top-0
          z-50
          h-screen
          w-[280px]
          flex-col
          bg-[#1a2237]
          text-amber-50
          p-5
          shadow-xl
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-2 py-3">
          <figure
            className="
              flex h-10 w-10
              items-center justify-center
              overflow-hidden
              rounded-full
              border-2 border-amber-50
              bg-white
            "
          >
            <img
              src={Logo}
              alt="Topy Logo"
              className="h-full w-full object-cover"
            />
          </figure>

          <h1 className="text-3xl font-bold tracking-tight">
            Topy
          </h1>
        </div>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-amber-100/20" />

        {/* Navigation */}
        <nav className="w-full">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink to={item.name === "All Products" ? "/products" : item.name === "Add Product" ? "/addproduct" : "/"} key={item.name}>
                <li>
                  
                  <button
                    type="button"
                    className="
                      group
                      flex w-full
                      items-center gap-3
                      rounded-lg
                      px-3 py-3
                      text-left
                      text-sm font-semibold
                      transition-all duration-200
                      hover:bg-white/10
                      hover:translate-x-1
                    "
                  >
                    <Icon
                      size={20}
                      color="#f45b48"
                      duration={1}
                    />

                    <span>{item.name}</span>
                  </button>
                </li>
                </NavLink>
              );
            })}
          </ul>
        </nav>

        {/* Bottom User Area */}
        <div className="mt-auto w-full">
          {/* User */}
          <div
            className="
              mb-4
              flex items-center gap-3
              rounded-xl
              bg-white/5
              p-3
            "
          >
            <div
              className="
                flex h-10 w-10
                shrink-0
                items-center justify-center
                rounded-full
                border-2 border-amber-50
                bg-amber-500
              "
            >
              <span className="font-bold text-md">
                S
              </span>
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs text-white/40">
                sherif@gmail.com
              </p>

              <h2 className="truncate text-sm font-bold">
                Sherif Emad
              </h2>
            </div>
          </div>

          {/* Logout */}
<button
  class="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
>
  <div
    class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
  >
    <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
      <path
        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
      ></path>
    </svg>
  </div>
  <div
    class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
  >
    Logout
  </div>
</button>

        </div>
      </aside>

      {/* ================= MOBILE NAVBAR ================= */}
      <nav
        className="
          fixed
          bottom-3
          left-3
          right-3
          z-50

          flex
          items-center
          justify-around

          rounded-2xl
          border border-gray-200
          bg-white/90
          px-2 py-2

          shadow-xl
          backdrop-blur-lg

          md:hidden
        "
      >
        {/* Home */}
        <NavLink to='/'>
        <button
          type="button"
          className="
            group
            flex
            h-12 w-12
            items-center
            justify-center
            rounded-xl
            transition-all
            hover:bg-blue-50
            active:scale-95
          "
          aria-label="Home"
        >
          <HouseIcon
            size={21}
            color="#f45b48"
            duration={1}
            className="transition-transform group-hover:scale-110"
          />
        </button>
        </NavLink>

        {/* All Products */}
        <NavLink to='/products'>
        <button
          type="button"
          className="
            group
            flex
            h-12 w-12
            items-center
            justify-center
            rounded-xl
            transition-all
            hover:bg-blue-50
            active:scale-95
          "
          aria-label="All Products"
        >
          <LayoutDashboardIcon
            size={21}
            color="#f45b48"
            duration={1}
            className="transition-transform group-hover:scale-110"
          />
        </button>
        </NavLink>

        {/* Add Product */}
        <NavLink to='/addproduct'>
        <button
          type="button"
          className="
            flex
            h-14 w-14
            -translate-y-3
            items-center
            justify-center

            rounded-full
            bg-[#f45b48]

            shadow-lg
            shadow-[#f45b48]/30

            transition-all
            hover:scale-105
            active:scale-95
          "
          aria-label="Add Product"
        >
          <PlusIcon
            size={25}
            color="#ffffff"
            duration={1}
          />
        </button>
        </NavLink>

        {/* Settings */}
        <button
          type="button"
          className="
            group
            flex
            h-12 w-12
            items-center
            justify-center
            rounded-xl
            transition-all
            hover:bg-blue-50
            active:scale-95
          "
          aria-label="Settings"
        >
          <SettingsIcon
            size={21}
            color="#f45b48"
            duration={1}
            className="transition-transform group-hover:rotate-45"
          />
        </button>

        {/* Logout */}
        <button
          type="button"
          className="
            group
            flex
            h-12 w-12
            items-center
            justify-center
            rounded-xl
            transition-all
            hover:bg-red-50
            active:scale-95
          "
          aria-label="Logout"
        >
          <LogOutIcon
            size={21}
            color="#ef4444"
            duration={1}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </nav>
    </>
  );
};

export default Navbar;

