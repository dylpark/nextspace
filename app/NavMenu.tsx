import Link from 'next/link';
import Image from 'next/image';

const navigation = [
    { name: 'About', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Users', href: '/users' },
];

export default function NavMenu() {
    return (
        <nav
            className={
                'flex bg-white text-gray-800 font-bold h-[70px] justify-between items-center px-8'
            }
        >
            <Link href={'/'}>
                <Image
                    src='/next.svg' // Route of the image file
                    width={216}
                    height={30}
                    alt='NextSpace Logo'
                />
            </Link>
            <div className={'h-[70px] flex items-center gap-4'}>
                {navigation.map((item) => (
                    <Link
                        className={
                            'transition ease-in-out delay-150 hover:text-gray-400'
                        }
                        href={item.href}
                        key={item.name}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
