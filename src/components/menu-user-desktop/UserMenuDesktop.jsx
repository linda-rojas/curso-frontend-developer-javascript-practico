import React from "react";

export function UserMenuDesktop() {
    return (
      <div className="absolute right-[2rem]">
          <div className="border border-[var(--very-light-pink)] rounded-[6px] p-[25px] bg-[var(--white)]">
            <ul className="list-none p-0 m-0">
              <li className="text-right font-bold">
                <a href="/" className="text-[var(--back)] no-underline inline-block">My orders</a>
              </li>

              
            </ul>
          </div>
      </div>
    )
}