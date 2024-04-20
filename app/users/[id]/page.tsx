import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';

interface Props {
    params: {
        id: string;
    };
}

export async function generateMetadat({ params }: Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
    const user = await prisma.user.findUnique({ where: { id: params.id } });

    const { name, bio, image } = user ?? { name: null, bio: null, image: null };

    return (
        <div className='flex min-h-screen flex-col p-8 lg:p-24'>
            <h1 className='text-2xl'>{name}</h1>
            <img
                width={300}
                src={image ?? '/mememan.webp'}
                alt={name ?? 'user profile picture'}
            />
            <h3 className='text-xl'>Bio</h3>
            <p className='text-body'>{bio}</p>
        </div>
    );
}
