import FollowButton from "../../../components/FollowButton/FollowButton";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image, id } = user ?? {};

  return (
    <>
      <h1 className="text-2xl">{name}</h1>
      <img
        width={300}
        src={image ?? "/mememan.webp"}
        alt={name ?? "user profile picture"}
      />
      <h3 className="text-xl">Bio</h3>
      <p className="text-body">{bio}</p>

      <FollowButton targetUserId={params.id} />
    </>
  );
}
