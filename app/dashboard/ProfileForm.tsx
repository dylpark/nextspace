"use client";

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await res.json();
  };

  return (
    <div>
      <h2 className="text-xl pb-6">Edit Your Profile</h2>
      <form onSubmit={updateUser} className="flex flex-col gap-4 justify-start">
        <label htmlFor="name">Name</label>
        <input
          className="text-secondary p-2 rounded-xl"
          type="text"
          name="name"
          defaultValue={user?.name ?? ""}
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          className="text-secondary p-2 rounded-xl"
          name="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ""}
        ></textarea>
        <label htmlFor="age">Age</label>
        <input
          className="text-secondary p-2 rounded-xl"
          type="text"
          name="age"
          defaultValue={user?.age ?? 0}
        />
        <label htmlFor="image">Profile Image URL</label>
        <input
          className="text-secondary p-2 rounded-xl"
          type="text"
          name="image"
          defaultValue={user?.image ?? ""}
        />

        <button
          className="transition-colors ease-in-out delay-150 hover:text-primary"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}
