
import { getFriend } from "@/lib/getFrnd";
import { ArrowLeft, Mail, Calendar, Target, Clock, Pause, Archive, Trash2, Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FriendsDetails = async ({ params }) => {
    const friends = getFriend();
    const { id } = await params;
    const friend = friends.find(friend => friend.id == id);
    console.log(friend);

    if (!friend) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-2xl font-bold">Friend not found.</p>
      </div>
    );
  }

    const statCards = [
        { label: "Days Since Contact", value: friend.days_since_contact, icon: Clock, suffix: " days" },
        { label: "Goal", value: friend.goal, icon: Target, suffix: " days" },
        { label: "Next Due Date", value: friend.next_due_date, icon: Calendar, suffix: "" },
    ];

   

    return (
        <section className="w-11/12 mx-auto">
            <Link href={'/'}>
                <button className="flex gap-1 my-4 text-md font-bold items-center">
                    <ArrowLeft className="h-4 w-4" />Back
                </button>
            </Link>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] mb-9">
                {/* Left Column */}
                <div className="space-y-6">
                    <div className="rounded-xl border border-base-200  bg-base-200 p-6">
                        <div className="flex flex-col items-center text-center">
                            <Image
                                src={friend.picture}
                                alt={friend.name}
                                height={200} width={200}
                                className="h-24 w-24 rounded-full object-cover ring-4 ring-primary/20"
                            />
                            <h1 className="mt-4  text-2xl font-bold text-white">{friend.name}</h1>
                            <div className="mt-2">
                                <div className={`badge mt-1.5 ${friend.status === 'on-track' ? 'badge-success' :
                                    friend.status === 'almost due' ? 'badge-warning' : 'badge-error'}`}>
                                    {friend.status === 'on-track' ? 'On Track' :
                                        friend.status === 'almost due' ? 'Due Soon' : 'Overdue'}
                                </div>
                            </div>
                            <div className="mt-3 flex flex-wrap justify-center gap-2">
                                {friend.tags.map((tag) => (
                                    <span key={tag} className="rounded-full bg-gray-600 text-white px-3 py-1 text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{friend.bio}</p>
                            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                {friend.email}
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col items-center gap-2">
                            <button className="flex btn btn-wide items-center justify-center gap-1.5 rounded-lg bg-neutral px-3 py-2.5 text-xs font-medium text-white transition-colors ">
                                <Pause className="h-3.5 w-3.5" /> Snooze
                            </button>
                            <button className="flex btn btn-wide items-center justify-center gap-1.5 rounded-lg bg-neutral px-3 py-2.5 text-xs font-medium text-white transition-colors "> <Archive className="h-3.5 w-3.5" /> Archive
                            </button>
                            <button className="flex items-center justify-center gap-1.5 rounded-lg btn-wide btn btn-soft btn-error">
                                <Trash2 className="h-3.5 w-3.5" /> Delete
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        {statCards.map(({ label, value, icon: Icon, suffix }) => (
                            <div key={label} className="rounded-xl bg-base-200 p-4 text-center">
                                <Icon className="mx-auto h-5 w-5 text-primary" />
                                <p className="mt-2 font-heading text-xl font-bold text-white">
                                    {value}{suffix}
                                </p>
                                <p className="text-xs">{label}</p>
                            </div>
                        ))}
                    </div>
                    {/* Relationship Goal */}
                    <div className="rounded-xl bg-base-200 p-6">
                        <div className="flex items-center justify-between">
                            <h2 className="font-heading text-lg font-semibold text-foreground">Relationship Goal</h2>
                            <button className="flex items-center gap-1.5 rounded-lg btn px-3 py-1.5 text-xs font-medium ">
                                <Edit className="h-3.5 w-3.5" /> Edit
                            </button>
                        </div>
                        <p className="mt-3 text-muted-foreground">
                            Stay in touch every <span className="font-semibold text-primary">{friend.goal} days</span>
                        </p>
                    </div>
                    {/* Quick Check-In */}

                </div>
            </div>
        </section>
    );
};

export default FriendsDetails;