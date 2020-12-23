import Link from 'next/link';
import HeaderNavbar from './HeaderNavbar';

export default function Header({ user }) {
  return (
    <div className="px-10 py-5 text-white bg-blue-800">
      <HeaderNavbar user={user} />
    </div>
  );
}
