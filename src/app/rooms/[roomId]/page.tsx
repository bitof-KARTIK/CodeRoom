import { GetRoom } from "@/data-access/rooms";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge"
import { TagsList } from "@/components/tags-list";
import { splitTags } from "@/lib/utils";
import { CodeRoomVideo } from "./video-player";
import { unstable_noStore } from "next/cache";

const RoomPage = async (props: { params: { roomId: string } }) => {

    const roomId = props.params.roomId;
    unstable_noStore();

    const room = await GetRoom(roomId);

    if (!room) {
        notFound();
        return;
    }
    return (
        <div className="grid grid-cols-4 min-h-screen">
            <div className="col-span-3 p-4 pr-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                    <CodeRoomVideo room={room} />
                </div>
            </div>
            <div className="col-span-1 p-4 pl-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
                    <h1 className="text-base">{room.name}</h1>
                    {room.githubRepo && (
                        <Link
                            href={room.githubRepo}
                            className="flex items-center gap-2 text-center text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubIcon />
                            Github Repository
                        </Link>
                    )}
                    <p className="text-base text-gray-600">{room.description}</p>
                    <TagsList tags={splitTags(room.tags)} />

                </div>
            </div>
        </div>
    );
};

export default RoomPage;
