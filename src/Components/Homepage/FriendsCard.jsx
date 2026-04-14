import { getFriend } from "@/lib/getFrnd";
import { Calendar } from "lucide-react";
import Image from "next/image";

const FriendsCard = () => {
    const friends = getFriend();
    return (
        <div className="w-11/12 mx-auto my-8">
            <div>
                <h2 className="text-2xl font-bold text-white">Friends</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5">
                {
                    friends.map(friend => (
                        <div key={friend.id} className="flex flex-col items-center justify-center gap-1 bg-base-200 p-4 rounded-2xl">
                            <div>
                                <Image src={friend.picture} height={100} width={100} alt={friend.name} className="rounded-full ring-2 ring-base-300 group-hover:ring-neutral transition-all" />
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <h3 className=" font-semibold">{friend.name}</h3>
                               
                            </div>
                            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="h-3.5 w-3.5" />
                                <span>{friend.days_since_contact} days ago</span>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                                {friend.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-gray-600 px-2.5 py-1 text-xs text-white font-medium "
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                             <div className={`badge mt-1.5 ${friend.status === 'on-track' ? 'badge-success' :
                                    friend.status === 'almost due' ? 'badge-warning' : 'badge-error'}`}>
                                    {friend.status === 'on-track' ? 'On Track' :
                                        friend.status === 'almost due' ? 'Due Soon' : 'Overdue'}
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FriendsCard;