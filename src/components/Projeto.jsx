import { useEffect, useState, useRef } from "react";
import "./projeto.scss";

function Projeto({ img, titulo, desc, alt, link }) {
    const item = useRef(null);
    const [isClick, setClick] = useState(false);

    useEffect(() => {
        const itemHeader = item.current.querySelector(".projetos__item-header");

        itemHeader.addEventListener("mousedown", (e) => {
            const left = Number.parseFloat(item.current.style.left) || 0;
            const top = Number.parseFloat(item.current.style.top) || 0;
            const posX = e.clientX;
            const posY = e.clientY;
            item.current.style.zIndex = 6;
            item.current.style.transition = "none";
            setClick(true);

            const start = (ev) => {
                item.current.style.left = ev.clientX - (posX - left) + "px";
                item.current.style.top = ev.clientY - (posY - top) + "px";
            };

            const end = (ev) => {
                setClick(false);
                item.current.style.zIndex = 5;
                item.current.style.transition = "all 0.4s ease";

                if (ev.clientY <= 0) item.current.style.top = "0px";
                if (e.clientX - e.offsetX / 1.1 < 0)
                    item.current.style.left = "0px";
                if (
                    ev.clientX + item.current.clientWidth / 1.5 >
                    window.screen.width
                )
                    item.current.style.left = "0px";

                document.removeEventListener("mousemove", start);
                document.removeEventListener("mouseup", end);
            };

            document.addEventListener("mousemove", start);
            document.addEventListener("mouseup", end);
        });
        item.current.addEventListener("click", (e) => {
            if (e.target !== itemHeader && !isClick) {
                window.open(link, "_blank");
            }
        });
    }, []);
    return (
        <div className="projetos__item" ref={item}>
            <div className="projetos__item-header">
                <div className="projetos__item-header--vermelho"></div>
                <div className="projetos__item-header--amarelo"></div>
                <div className="projetos__item-header--verde"></div>
            </div>
            <div className="projetos__item-body">
                <img src={img} alt={alt} />
            </div>
            <div className="projetos__item-footer">
                <p className="projetos__item-titulo">{titulo}</p>
                <p className="projetos__item-desc">{desc}</p>
            </div>
        </div>
    );
}

export default Projeto;
