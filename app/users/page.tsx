import UserCard from '@/components/UserCard';
import { prisma } from '@/lib/prisma';

export default async function Users() {
    const users = await prisma.user.findMany();

    return (
        <main className='flex min-h-screen flex-col p-8 lg:p-24'>
            <div className='grid grid-cols-4 gap-5'>
                {users.map((user) => {
                    return (
                        <UserCard
                            key={user.id}
                            {...user}
                        />
                    );
                })}
            </div>
        </main>
    );
}
