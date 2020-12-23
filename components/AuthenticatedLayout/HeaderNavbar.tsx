import Link from 'next/link';
import { firebaseClient } from '../../auth/firebaseClient';

const NavbarItem = ({ to, children }) => {
  return (
    <li className="mr-3 hover:bg-purple-700">
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default function HeaderNavbar({ user }) {
  const handleLogout = async () => {
    try {
      await firebaseClient.auth().signOut();
      window.location.href = '/';
    } catch (error) {
      console.log(error);
    }
  }
  return (<div className="flex justify-between">
    <ul className="flex flex-row list-none">
      <NavbarItem to="/">Home</NavbarItem>
      <NavbarItem to="/players">Players</NavbarItem>

    </ul>
    {user && (
      <button
        onClick={handleLogout}
      >
        Sign out
      </button>
    )}
  </div>
  );
}
