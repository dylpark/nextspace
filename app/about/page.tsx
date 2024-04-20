import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Bringing people together.',
};

export default async function About() {
    return (
        <>
            <h1 className='text-2xl'>About</h1>
            <p className='my-2'>
                We are a social media company that wants to bring people
                together!
            </p>
        </>
    );
}
