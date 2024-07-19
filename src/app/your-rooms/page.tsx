import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserRoomcard } from "./user-room-card";
import { unstable_noStore } from "next/cache";
import { GetUserRooms } from "@/data-access/rooms";
import Image from "next/image";
export default async function YourRoomsPage() {
    unstable_noStore();
    const rooms = await GetUserRooms();
    return (
        <main className="min-h-screen p-16">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl">Your Rooms</h1>

                <Button asChild>
                    <Link href="/create-room">Create a Room</Link>
                </Button>

            </div>
            <div className="grid grid-cols-3 gap-4">
                {rooms.map((room) => {
                    return <UserRoomcard key={room.id} room={room} />
                })}
            </div>

            {rooms.length === 0 && (
                <div className="flex justify-center items-center flex-col gap-10 mt-29">
                    <Image src="nodata.svg" alt="no data" height={200} width={200} />
                    <h2 className="text-xl">
                        You have not created any rooms yet, create one by clicking the button above
                    </h2>
                </div>
            )}
        </main>
    );
}
