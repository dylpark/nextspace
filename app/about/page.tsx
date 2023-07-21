import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Bringing people together.',
};

export default async function About() {
    return (
        <main className='flex min-h-screen flex-col p-8 lg:p-24'>
            <h1 className='text-2xl'>About</h1>
            <p className='my-2'>
                We are a social media company that wants to bring people
                together!
            </p>
        </main>
    );
}
