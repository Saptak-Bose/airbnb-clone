/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      <div
        className="relative my-auto flex h-10 cursor-pointer items-center"
        onClick={() => router.push("/")}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        {session ? (
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
            type="text"
            placeholder={placeholder || "Start your search"}
          />
        ) : (
          <input
            disabled
            className="flex-grow cursor-not-allowed bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
            type="text"
            placeholder="Please sign in to start your search"
          />
        )}

        <MagnifyingGlassIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <Bars3Icon className="h-6 cursor-pointer" />
          {!session ? (
            <UserCircleIcon
              className="h-6 cursor-pointer"
              onClick={() => signIn()}
            />
          ) : (
            <img
              src={session?.user?.image}
              className="h-6 cursor-pointer rounded-full"
              onClick={() => signOut()}
            />
          )}
        </div>
      </div>

      {searchInput && (
        <div className="col-span-3 mx-auto mt-2 flex flex-col rounded-xl border-2 border-gray-200 p-4 shadow-md">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
            className="border-b-[3px] border-gray-400"
          />
          <div className="mb-4 mt-2 flex items-center border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              className="w-12 pl-2 text-lg text-red-400 focus:outline-none"
              type="number"
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button
              className="mx-auto max-w-[225px] flex-grow rounded-xl bg-black py-2 font-semibold text-white shadow-sm transition duration-200 hover:shadow-lg active:scale-90"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              className="mx-auto max-w-[225px] flex-grow rounded-xl bg-[#FD5861] py-2 font-semibold text-white shadow-sm transition duration-200 hover:shadow-lg active:scale-90"
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
