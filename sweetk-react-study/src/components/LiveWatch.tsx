import { useState, useEffect } from "react";

/**
 * @description LiveWatch 컴포넌트
 */
function LiveWatch() {
    // state
    const [date, setDate] = useState<Date>(new Date());
    const [keyword, setKeyword] = useState<string>("");

    // event

    // watch
    // 상태변경을 방지하기 위함
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // clean-up
        return () => {
            clearInterval(timer);
        };
    }, []);

    // init
    useEffect(() => {}, []);

    // search
    useEffect(() => {}, []);

    //view
    return (
        <>
            <h1>{date.toString()}</h1>
        </>
    );
}

export default LiveWatch;
