import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import './Progress.css'


gsap.registerPlugin(ScrollTrigger);

export default function InfiniteDiv() {
    let onceRef = useRef(false)


    // console.log('work');

    useEffect(() => {
        // console.log('bad');

        if (onceRef.current) return;
        // console.log('working');

// console.log(document.body);
        const container = document.querySelector(".container");
        const colors = [
            "#FF4D80",
            "#FF3E41",
            "#DF367C",
            "#883955",
            "#4C3549",
            "#88498F",
            "#423E3B",
        ];

        let panelCreated = false;
        let panelNum = 3;

        const createPanel = (index) => {
            const section = document.createElement("section");
            const h1 = document.createElement("h1");
            container.appendChild(section);
            section.appendChild(h1);
            h1.innerHTML = `Panel ${index}`;
            gsap.set(section, {
                backgroundColor: colors[gsap.utils.random(0, colors.length - 1, 1)],
                className: `panel-${index}`
            });
        };

        // ScrollTrigger.create({
        //     trigger: document.body,
        //     start: "top top",
        //     end: "bottom bottom",
        //     markers:true,
        //     onUpdate: (self) => {
        //         console.log('self', self);
        //         let progress = self.progress.toFixed(2);
        //         if (progress >= 0.9 && self.direction === 1) {
        //             createPanel(panelNum++);
        //             ScrollTrigger.refresh();
        //         }
        //     },
        // });


        ScrollTrigger.create({
            scroller:".container",
            trigger: '.panel-2',
            start: "top center",
            end: "bottom bottom",
            markers:true,
            // animation: gsap.to(".panel-2", {background: "red"}),
            onUpdate: (self) => {
                console.log('self', self);
                let progress = self.progress.toFixed(2);
                console.log('progress', progress);

                if (progress >= 0.9 && self.direction === 1) {
                    createPanel(panelNum++);
                    ScrollTrigger.refresh();
                }
            },
        });

        onceRef.current = true;
        // return () =>         onceRef.current= true;



    }, [])
    return (
        <>
            <main className="container">
                <section className="panel-1">
                    <h1>Panel 1</h1>
                </section>
                <section className="panel-2">
                    <h1>Panel 2</h1>
                </section>
            </main>
        </>
    )
}