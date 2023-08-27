import Link from 'next/link';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/">Search</Link>
        </li>
        <li>
          <Link href="/transactions">Transactions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
