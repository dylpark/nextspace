import Link from 'next/link';
import Image from 'next/image';

const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Users', href: '/users' },
];

export default function NavMenu() {
    return (
        <nav
            className={
                'flex bg-white-100 text-tertiary h-[70px] justify-between items-center px-8 lg:px-24'
            }
        >
            <Link href={'/'}>
                <Image
                    src='/logo.svg'
                    width={50}
                    height={50}
                    alt='NextSpace Logo'
                />
            </Link>
            <div className={'h-[70px] flex items-center gap-4'}>
                {navigation.map((item) => (
                    <Link
                        className={
                            'transition ease-in-out delay-150 hover:text-primary'
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
