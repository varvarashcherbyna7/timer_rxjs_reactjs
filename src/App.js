import React from "react";
import "./App.sass";
import {useEffect, useState} from "react";
import {interval, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

function App() {
    const [timer, setTimer] = useState(0);
    const [status, setStatus] = useState("reset");

    useEffect(() => {
        const oversubscribe$ = new Subject();
        interval(700)
            .pipe(takeUntil(oversubscribe$))
            .subscribe(() => {
                if (status === "start") {
                    setTimer(val => val + 1000);
                }
            });
        return () => oversubscribe$.next();
    }, [status]);

    const start = () => {
        setStatus("start");
    };

    const stop = () => {
        setStatus("stop");
        setTimer(0);
    };

    const reset = () => {
        setStatus("reset");
        setTimer(0)
    };

    const wait = () => {
        setStatus("wait");
    };

    return (
        <div className="container">
            <div className="time"> {new Date(timer).toISOString().slice(11, 19)}</div>
            <div className="buttonsContainer">
                <button className="btn startBtn" onClick={start}>start</button>
                <button className="btn waitBtn" onClick={wait}>Wait</button>
                <button className="btn stopBtn" onClick={stop}>stop</button>
                <button className="btn resetBtn" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default App;
