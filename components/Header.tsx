import { BookOpen, FilePen } from 'lucide-react';
import Link from 'next/link';

function Header() {
  return (
    <header className='relative p-4 text-center bg-slate-800'>
      <Link href='/'>
        <h1 className='text-6xl font-black pb-3 text-slate-200'>StoryTeller AI for Children</h1>
        <div className='flex space-x-5 text-3xl lg:text-5xl justify-center space-nowrap text-slate-200'>
          <h2>Bringing your stories</h2>
          <div className='relative'>
            <div className='absolute bg-purple-800 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1' />
            <div className='relative'>To life!</div>
          </div>
        </div>
      </Link>

      <div className='absolute -top-5 right-5 flex space-x-2'>
        <Link href='/'>
          <FilePen className='w-8 h-8 lg:w-10 lg:h-10 mx-auto text-purple-800 mt-10 border border-purple-800 p-2 rounded-md hover:opacity-50 cursor-pointer ' />
        </Link>

        <Link href='/stories'>
          <BookOpen className='w-8 h-8 lg:w-10 lg:h-10 mx-auto text-purple-800 mt-10 border border-purple-800 p-2 rounded-md  hover:opacity-50 cursor-pointer' />
        </Link>
      </div>
    </header>
  );
}

export default Header;
