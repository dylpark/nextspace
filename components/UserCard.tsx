import Link from 'next/link';

interface Props {
    id: string;
    name: string | null;
    age: number | null;
    image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
    return (
        <div className='bg-white-100 p-5 rounded-md border w-full h-full'>
            <img
                src={image ?? '/mememan.webp'}
                alt={`${name}'s profile`}
                className='w-[150px] h-[120px] object-cover mb-2'
            />
            <div className='px-2 py-0 text-tertiary'>
                <h3>
                    <Link href={`/users/${id}`}>{name}</Link>
                </h3>
                <p>Age: {age}</p>
            </div>
        </div>
    );
}
