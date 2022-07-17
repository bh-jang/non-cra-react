import React, { useState } from 'react';

const useTimer = () => {
    const [remainSeconds, setRemainSeconds] = useState(0);

    return { remainSeconds };
};

export default useTimer;