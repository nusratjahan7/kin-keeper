import { getApps, getFriend } from "@/lib/getFrnd";
import { Plus } from "lucide-react";

const Banner = () => {
    const friends = getFriend();
    const onTrackCount = friends.filter(friend => friend.status === "on-track").length;
    const needAttentionCount = friends.filter(friend => friend.status === "overdue" || friend.days_since_contact > 15).length;
    const interactionsThisMonthCount = friends.filter(friend => friend.days_since_contact <= 30).length;

    return (
        <div>
            <div className="flex flex-col items-center gap-4 text-center my-6 w-11/12 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Friends to keep close in your life</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className="btn btn-neutral flex gap-1.5 items-center justify-center"><Plus /> Add a Friend</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-11/12 mb-5 mx-auto items-center">
                <div className="text-center bg-[#302d2d] py-3 px-2 rounded-2xl">
                    <h2 className="text-3xl font-bold text-white">{friends.length}</h2>
                    <p>Total Friends</p>
                </div>
                <div className="text-center  bg-[#302d2d] py-3 px-2 rounded-2xl">
                    <h2 className="text-3xl font-bold text-white">{onTrackCount}</h2>
                    <p>On Track</p>
                </div>
                <div className="text-center bg-[#302d2d] py-3 px-2 rounded-2xl">
                    <h2 className="text-3xl font-bold text-white">{needAttentionCount}</h2>
                    <p>Need Attention</p>
                </div>
                <div className="text-center bg-[#302d2d] py-3 px-2 rounded-2xl">
                    <h2 className="text-3xl font-bold text-white">{interactionsThisMonthCount}</h2>
                    <p>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;