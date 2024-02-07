import React from "react";
import { Divider } from '@nextui-org/divider';

export const Banner = () => {
  return (
    <div className="sm:text-lg text-xs font-mono">
        <div className="md:grid banner grid-rows-1 grid-cols-8 bg-gradient-to-l from-transparent to-green-600">
            <div className="px-3 md:col-start-2 col-span-2">
                <p className="">An official and HTTPS secured site of Cameron Squire.</p>
            </div>
        </div>
        <Divider orientation="horizontal"/>

    </div>
  );
};