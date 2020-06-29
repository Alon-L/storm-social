import { faChevronDown, faChevronUp } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

export interface NavbarDropdownProps {
  name: string;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = (
  props: PropsWithChildren<NavbarDropdownProps>,
) => {
  const { name, children } = props;

  const [active, setActive] = useState(false);

  return (
    <div className="relative">
      <OutsideClickHandler onOutsideClick={() => setActive(false)}>
        <button
          type="button"
          onClick={() => {
            setActive(!active);
          }}
          className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out font-semibold uppercase"
        >
          {name}{' '}
          <FontAwesomeIcon
            className="ml-2"
            icon={active ? faChevronUp : faChevronDown}
          />
        </button>
      </OutsideClickHandler>
      <div
        className={`shadow-md
         rounded-lg absolute bg-white transform translate-y-2 z-50 ${
           !active && 'hidden'
         }`}
      >
        {children}
      </div>
    </div>
  );
};

export default NavbarDropdown;
