import React from "react";
import { Link } from "react-router-dom";

export function UserMenuDesktop() {
    return (
      <div className="absolute right-[2rem]">
          <div className="border border-[var(--very-light-pink)] rounded-[6px] p-[25px] bg-[var(--white)]">
            <ul className="list-none p-0 m-0">
              <li className="text-right font-bold select-none">
                <Link to="/orders" className="text-[var(--black)] no-underline inline-block">
                  My orders
                </Link>
              </li>

              
            </ul>
          </div>
      </div>
    )
}