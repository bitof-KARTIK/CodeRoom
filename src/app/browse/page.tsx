import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GetRooms } from "@/data-access/rooms";
import { Roomcard } from "./room-card";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import { SearchBar } from "./SearchBar";


export default async function Home({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}
) {
  unstable_noStore();
  const rooms = await GetRooms(searchParams.search);
  return (
    <main className="min-h-screen p-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl">Find Code Rooms</h1>

        <Button asChild>
          <Link href="/create-room">Create a Room</Link>
        </Button>

      </div>
      <div className="mb-10">
        <SearchBar />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => {
          return <Roomcard key={room.id} room={room} />
        })}
      </div>

      {rooms.length ===0 &&(
        <div className="flex justify-center items-center flex-col gap-10 mt-29">
          <Image src="nodata.svg" alt="no data" height={200} width={200}/>
          <h2 className="text-xl">
            No rooms found, create one by clicking the button above
          </h2>
        </div>
      )}
    </main>
  );
}
