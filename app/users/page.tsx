import UserCard from '@/components/UserCard';
import { prisma } from '@/lib/prisma';

export default async function Users() {
    const users = await prisma.user.findMany();

    return (
        <>
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
        </>
    );
}
