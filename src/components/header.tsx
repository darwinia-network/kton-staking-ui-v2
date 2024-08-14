'use client';
import Image from 'next/image';
import Link from 'next/link';

import ConnectButton from '@/components/connect-button';
import { useAppAutoConnect } from '@/hooks/useAppAutoConnect';

const Header = () => {
  useAppAutoConnect();
  return (
    <header className="h-12 w-full md:h-[3.5rem]">
      <div className="mx-auto flex h-full w-full items-center justify-between px-8">
        <Link href="/" title="darwinia" className="hidden md:inline ">
          <Image
            src={'/images/common/ktonDaoV2.png'}
            alt="ktonDaoV2 logo"
            priority
            width={154}
            height={18}
            className="h-[18px] w-[154px] shrink-0"
          />
        </Link>
        <ConnectButton />
      </div>
    </header>
  );
};
export default Header;
