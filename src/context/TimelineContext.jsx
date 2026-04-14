'use client'
import { createContext, useState } from 'react';

const TimelineProvider = ({children}) => {
    const [call, setCall] = useState([]);
    const [text, setText] = useState([]);
    const [video, setVideo] = useState([]);

    const data ={
        call, setCall, text
    }
};

export default TimelineProvider;