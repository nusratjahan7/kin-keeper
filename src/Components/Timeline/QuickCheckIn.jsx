'use client'
import { Phone, MessageSquare, Video } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function QuickCheckIn({ friendName, friendId }) {


    function handleClick(type) {
        const newEntry = {
            id: Date.now(),
            type: type,
            friendId: friendId,
            friendName: friendName,
            title: `${type} with ${friendName}`,
            date: new Date().toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric'
            }),
            time: new Date().toLocaleTimeString('en-US', {
                hour: '2-digit', minute: '2-digit'
            }),
        }
        const existing = JSON.parse(localStorage.getItem('timeline') || '[]')

        const updated = [newEntry, ...existing]

        localStorage.setItem('timeline', JSON.stringify(updated))

        toast.success(
      <div className="flex items-center gap-2">
        <span>{type} with {friendName} logged</span>
      </div>,
      {
       position: "top-center",       
        autoClose: 1000,          
        hideProgressBar: false,      
        closeOnClick: false,
        pauseOnHover: true, 
        draggable: true,      
        progress: undefined,    
        theme: "dark",           
      }
    );
    }

    const buttons = [
        { type: 'Call', Icon: Phone, text: 'text-green-700' },
        { type: 'Text', Icon: MessageSquare, text: 'text-blue-700' },
        { type: 'Video', Icon: Video, text: 'text-purple-700' },
    ]

    return (
        <>
            <div className="rounded-xl bg-base-200 p-6">
                <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Quick Check-In
                </h2>

                <div className="grid grid-cols-3 gap-3">
                    {buttons.map(({ type, Icon, text }) => (
                        <button
                            key={type}
                            onClick={() => handleClick(type)}
                            className="flex flex-col bg-base-100 items-center gap-2 py-4 rounded-xl active:scale-95 transition-all duration-150 cursor-pointer"
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center`}>
                                <Icon className={`h-5 w-5 ${text}`} strokeWidth={1.8} />
                            </div>
                            <span className="text-xs text-gray-400">{type}</span>
                        </button>
                    ))}
                </div>
                <ToastContainer />
            </div>
        </>
    )
}