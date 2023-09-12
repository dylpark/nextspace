'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
    const { data: session, status } = useSession();
    console.log(session, status);

    if (status === 'loading') {
        return <>...</>;
    }

    if (status === 'authenticated') {
        return (
            <Link href={`/dashboard`}>
                <Image
                    src={session.user?.image ?? '/mememan.webp'}
                    width={32}
                    height={32}
                    alt='Your Name'
                />
            </Link>
        );
    }

    return (
        <button
            className='transition ease-in-out delay-150 hover:text-primary'
            onClick={() => signIn()}
        >
            Sign in
        </button>
    );
}

export function SignOutButton() {
    return (
        <button
            className='transition ease-in-out delay-150 hover:text-primary'
            onClick={() => signOut()}
        >
            Sign out
        </button>
    );
}
