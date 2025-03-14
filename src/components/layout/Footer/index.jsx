import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-4">
      <div className="mx-auto xl:px-24 lg:px-14 sm:px-10 px-6">
        <div className="block md:flex items-center justify-between">
          <div>
            <ul className="flex flex-row space-y-2 gap-2 text-center">
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-blue-700 text-sm"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-blue-700 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-gray-400 hover:text-blue-700 text-sm"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-400">
              Copyright © 2025 <Link to=""> Mitsogo Inc. </Link> All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
