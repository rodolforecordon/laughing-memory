import React, { ReactNode, useReducer } from 'react';
import AccountIcon from '../components/Header/NavIcons/AccountIcon';
import AddIcon from '../components/Header/NavIcons/AddIcon';
import EditIcon from '../components/Header/NavIcons/EditIcon';
import ReturnIcon from '../components/Header/NavIcons/ReturnIcon';

// TYPES DECLARATIONS
type ActiveIcons = [
  ReactNode | null,
  ReactNode | null,
  ReactNode | null
];

type Mode = {
  mode: string;
  bgColor: string;
  path: string;
  navIcons: ActiveIcons;
};

export type IMemoModes = Mode[];

interface NavContextType {
  memoModes: IMemoModes;
  navBarState: NavState;
  handleNavBarState: (modeName: string) => void;
}

interface NavContextProviderProps {
  children: ReactNode;
}

interface NavState {
  navBarColor: string;
  navActiveIcons: ActiveIcons;
}

// CREATE CONTEXT
export const NavContext = React.createContext({} as NavContextType);

// CREATE CONTEXT PROVIDER
export const NavContextProvider = ({
  children,
}: NavContextProviderProps) => {
  const memoModes: IMemoModes = [
    {
      mode: 'Home',
      bgColor: '#FFC7C2',
      path: '/',
      navIcons: [null, null, <AccountIcon />],
    },
    {
      mode: 'Choose/Create a Deck',
      bgColor: '#afafaf',
      path: '/decks',
      navIcons: [<ReturnIcon />, null, <AddIcon />],
    },
    {
      mode: 'Flash Cards',
      bgColor: '#14AE5C',
      path: '/flashcards',
      navIcons: [<ReturnIcon />, null, <EditIcon />],
    },
    {
      mode: 'Letters Out',
      bgColor: '#F24822',
      path: '/lettersout',
      navIcons: [<ReturnIcon />, null, <EditIcon />],
    },
    {
      mode: 'DeckEdition',
      bgColor: '#afafaf',
      path: '/deckedition',
      navIcons: [<ReturnIcon />, null, null],
    },
    //{ mode: 'Mode 3', bgColor: '#0D99FF', path: '/' },
    //{ mode: 'Mode 4', bgColor: '#FFCD29', path: '/' },
  ];

  const [navBarState, dispatchCurrentMode] = useReducer(
    (state: NavState, action: any) => {
      if (action.type === 'CHANGE_NAVBAR_COLOR') {
        return {
          ...state,
          navBarColor: action.payload.mode.bgColor,
          navActiveIcons: action.payload.mode.navIcons,
        };
      }

      return {
        ...state,
      };
    },
    {
      navBarColor: memoModes[0].bgColor,
      navActiveIcons: memoModes[0].navIcons,
    }
  );

  const handleNavBarState = (modeName: string) => {
    const mode: Mode | undefined = memoModes.filter((el) =>
      el.mode.includes(modeName)
    )[0];

    dispatchCurrentMode({
      type: 'CHANGE_NAVBAR_COLOR',
      payload: { mode },
    });
  };

  return (
    <NavContext.Provider
      value={{
        memoModes,
        navBarState,
        handleNavBarState,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
