import React, { FC, useEffect } from "react";

import Navbar from "../../../components/NavBar";
import FAQ from "../../../components/LHDFAQ";
import Schedule from "../../../components/Schedule";
import Footer from "../../../components/Footer";
import useWindowDimensions from "../../../components/WindowDimensions"

import "./styles.scss";

const LearnDay: FC = (): JSX.Element => {
    const { width } = useWindowDimensions();

    useEffect(() => {
        const cnv: any = document.querySelector(`canvas`);
        const ctx: any = cnv?.getContext(`2d`);
        let cw: any, ch: any, cx: any, cy: any;

        function init() {
            if (cnv) {
                cw = cnv.width = window.innerWidth * 2;
                ch = cnv.height = cw;
                cx = cw / 2;
                cy = ch / 2;
            }
        }

        init();

        window.addEventListener(`resize`, init);

        const cfg = {
            bgFillColor: "rgba(255, 255, 251, .01)",
            dirsCount: 6, // hexagons = 6
            stepsToTurn: 40,
            dotSize: 8,
            dotCount: 600,
            dotVelocity: 4,
            distance: 140,
        };

        const drawRect = (color, x, y, w, h, shadowColor, shadowBlur) => {
            if (ctx) {
                ctx.shadowColor = shadowColor || "black";
                ctx.shadowBlur = shadowBlur;
                ctx.fillStyle = color;
                ctx.fillRect(x, y, w, h);
            }
        };

        class Dot {
            pos: { x: number; y: number };
            dir: number;
            step: number;

            constructor() {
                this.pos = { x: cx, y: cy };
                this.dir = ((Math.random() * 3) | 0) * 2;
                this.step = 0;
            }

            redrawDot() {
                let color = "#f9c74f";
                let size = cfg.dotSize;
                let blur = 0;
                let x = this.pos.x - size / 2;
                let y = this.pos.y - size / 2;

                drawRect(color, x, y, size, size, color, blur);
            }

            moveDot() {
                this.step++;
                this.pos.x += dirstList[this.dir].x * cfg.dotVelocity;
                this.pos.y += dirstList[this.dir].y * cfg.dotVelocity;
            }

            changeDir() {
                if (this.step % cfg.stepsToTurn === 0) {
                    this.dir =
                        Math.random() > 0.5
                            ? (this.dir + 1) % cfg.dirsCount
                            : (this.dir + cfg.dirsCount - 1) % cfg.dirsCount;
                }
            }

            killDot(id) {
                let percent = Math.exp(this.step / cfg.distance) * Math.random();

                if (percent > 100) {
                    dotList.splice(id, 1);
                }
            }
        }

        const dirstList: Array<{ x: number; y: number }> = [];

        function createDirs() {
            for (let i = 0; i < 360; i += 360 / cfg.dirsCount) {
                let x = Math.cos((i * Math.PI) / 180);
                let y = Math.sin((i * Math.PI) / 180);
                dirstList.push({ x: x, y: y });
            }
        }

        createDirs();

        let dotList: Array<Dot> = [];
        function addDot() {
            if (dotList.length < cfg.dotCount && Math.random() > 0.8) {
                dotList.push(new Dot());
            }
        }

        function refreshDots() {
            dotList.forEach((i, id) => {
                i.moveDot();
                i.redrawDot();
                i.changeDir();
                i.killDot(id);
            });
        }

        function loop() {
            drawRect(cfg.bgFillColor, 0, 0, cw, ch, 0, 0);
            addDot();
            refreshDots();

            requestAnimationFrame(loop);
        }

        loop();
    }, []);
    return (
        <main className="LearnDay">
            <Navbar />
            <section className="LearnDay__title">
                <div className="LearnDay__title__texts">
                    <div className="LearnDay__title__texts__main-text">Hacktually II</div>
                    <div className="LearnDay__title__texts__sub-text">Local Hack Day: Learn</div>
                    <div className="LearnDay__title__texts__paragraph">
                        Learn to tackle new skills, explore different realms of technology, and champion exciting
                        projects in a workshop, hybrid event hosted by HackMerced on <strong>November 13, 2021.</strong>
                    </div>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://hackmerced2021.typeform.com/locallearnday"
                    >
                        <button className="LHD__button">Register</button>
                    </a>
                </div>
                {width > 1200 ? <canvas className="LearnDay__title__honeycomb"></canvas> : null}
            </section>
            <Schedule />
            <FAQ />
            <Footer />
        </main>
    );
};

export default LearnDay;
