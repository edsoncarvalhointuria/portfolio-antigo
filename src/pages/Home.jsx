import { useEffect, useState, useRef } from "react";
import Projeto from "../components/Projeto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./home.scss";

const projetos = [
    {
        img: "./fakeReservaReact.png",
        alt: "Imagem Site FakeReserva",
        titulo: "FakeReserva - React",
        desc: "Projeto de ecommerce baseado no site da Reserva, feito com React.",
        link: "https://edsoncarvalhointuria.github.io/FakeReservaReact/",
    },
    {
        img: "./FakePinterest.png",
        alt: "Imagem Site FakePinterest",
        titulo: "FakePinterest - Flask",
        desc: "Este projeto é uma simulação simplificada do Pinterest.",
        link: "https://edsoncarvalhointuria.pythonanywhere.com/",
    },
    {
        img: "./StreamlitAcoes.png",
        alt: "Imagem Site Dashboard Streamlit",
        titulo: "Projeto Dashboard - Streamlit",
        desc: "Projeto que simula um site interno para monitoramento de preços de ações.",
        link: "https://projeto-acoes.streamlit.app/",
    },

    {
        img: "./FakeReservaDjango.png",
        alt: "Imagem Site FakeReserva Python",
        titulo: "Projeto FakeReserva - Django",
        desc: "Projeto de ecommerce baseado no site da Reserva, feito com Django.",
        link: "https://fakereserva.onrender.com",
    },
    {
        img: "./streamlit_dashboard.png",
        alt: "Imagem Dashboard Empresarial",
        titulo: "Dashboard Empresarial - Streamlit",
        desc: "Projeto de site interno para uma empresa fictícia, com sistema de login e gráficos interativos.",
        link: "https://dashboard-st.streamlit.app/",
    },
    {
        img: "./fakeflix.png",
        alt: "Imagem Site FakeFlix",
        titulo: "Projeto FakeFlix - Django",
        desc: "Este projeto é uma simulação simplificada do Netflix.",
        link: "https://fakeflix-8j7x.onrender.com",
    },
    {
        img: "./sitecomunidade.png",
        alt: "Imagem Site Comunidade",
        titulo: "Projeto Comunidade - Flask",
        desc: "Simulação de blog onde os usuários podem postar, editar e visualizar conteúdo.",
        link: "https://sitecomunidade-556i.onrender.com/",
    },

    {
        img: "./ciencia_de_dados.png",
        alt: "Imagem projeto ciência de dados",
        titulo: "Projeto Ciência de Dados - Python",
        desc: "Modelo de previsão de preços para diários de imóveis no RJ.",
        link: "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/8b7368cb49708ba0c332e95c5bc1059b8b6e69c0/Projeto%20Ciencia%20de%20Dados",
    },
    {
        img: "./kivy.jpg",
        alt: "Imagem projeto aplicativo kivy",
        titulo: "Projeto Mobile Kivy - Kivy",
        desc: "Este projeto tem como objetivo criar um aplicativo mobile utilizando Kivy.",
        link: "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/8b7368cb49708ba0c332e95c5bc1059b8b6e69c0/Projeto%20Aplicativo%20Kivy",
    },
    {
        img: "./estoque.png",
        alt: "Imagem projeto Tkinter",
        titulo: "Projeto Interfaces - Tkinter",
        desc: "Projeto de interfaces com Tkinter, incluindo dois exemplos práticos.",
        link: "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/8b7368cb49708ba0c332e95c5bc1059b8b6e69c0/Projeto%20Tkinter",
    },
    {
        img: "./automacao_web.png",
        alt: "Imagem projeto Automação Web",
        titulo: "Projeto Web Scraping - Selenium",
        desc: "Projeto que compara fornecedores no GoogleShop e Buscapé por preço.",
        link: "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/8b7368cb49708ba0c332e95c5bc1059b8b6e69c0/Projeto%20automacao%20web",
    },
    {
        img: "./automacao_de_indicadores.png",
        alt: "Imagem projeto Automação de Indicadores",
        titulo: "Projeto Automação - Pandas",
        desc: "Simulação da análise e envio automatizado de indicadores de uma rede fictícia com 25 lojas.",
        link: "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/8b7368cb49708ba0c332e95c5bc1059b8b6e69c0/Projeto%20de%20automacao",
    },
    {
        img: "./projeto_furia.png",
        alt: "Imagem projeto Site Desafio Furia Esports",
        titulo: "Projeto Furia Esports - Streamlit",
        desc: "Site interativo feito com Streamlit para o desafio de verão da Furia Esports.",
        link: "https://projeto-furia.streamlit.app/",
    },
    {
        img: "./conquistaconstrucoes.png",
        alt: "Imagem projeto Site Conquista Construções",
        titulo: "Projeto Conquista Construções - Flask",
        desc: "Site comercial para a Conquista Construções, desenvolvido gratuitamente.",
        link: "https://conquistaconstrucoes.onrender.com/",
    },
    {
        img: "./dialog_flow_bot.png",
        alt: "Imagem projeto Site Chatbot",
        titulo: "Projeto Chatbot - Streamlit",
        desc: "Projeto explorando o Dialogflow na criação de um chatbot para uma lanchonete fictícia.",
        link: "https://dialog-flow-bot.streamlit.app/",
    },
];

function Home() {
    const $sobre = useRef(null);
    const [isVisible, setVisible] = useState(false);
    const callbackObserver = (entries, observe) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setVisible(true);
            observe.unobserve(entry.target);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackObserver, {
            threshold: 0.5,
        });
        if ($sobre.current) observer.observe($sobre.current);
    }, []);

    return (
        <main>
            <section className="hero">
                <h1 className="hero__h1">
                    {"Edson Carvalho Inturia".split("").map((v, i) => (
                        <span
                            style={{ animationDelay: i * 0.06 + "s" }}
                            key={i}
                        >
                            {v === " " ? "\u00A0" : v}
                        </span>
                    ))}
                </h1>
                <h2 className="hero__subtitulo">
                    {"Transformando ideias em código.".split("").map((v, i) => (
                        <span
                            style={{ animationDelay: i * 0.05 + "s" }}
                            key={i}
                        >
                            {v === " " ? "\u00A0" : v}
                        </span>
                    ))}
                </h2>
                <button
                    className="hero__botao"
                    onClick={(e) => document.body.classList.toggle("pj")}
                >
                    Ver Projetos
                </button>
            </section>

            <section className={`sobre ${isVisible && "open"}`} ref={$sobre}>
                <div className="sobre__container">
                    <img
                        className="sobre__aviao"
                        src="./aviao.png"
                        alt="Imagem Avião"
                    />
                    <img
                        className="sobre__img"
                        src="./minhaFoto.jpg"
                        alt="Imagem Edson Carvalho"
                    />

                    <div className="sobre__div">
                        <h2 className="sobre__titulo">Sobre Mim</h2>
                        <img
                            className="sobre__img mobile"
                            src="/minhaFoto.jpg"
                            alt="Imagem Edson Carvalho"
                        />
                        <p className="sobre__paragrafo">
                            Olá! Sou Edson Carvalho Inturia, estudante de
                            Análise e Desenvolvimento de Sistemas, apaixonado
                            por tecnologia e automação. Atualmente, estou no 3º
                            semestre do curso e desenvolvo projetos utilizando
                            Python, React, Node.js, JavaScript, SQL e HTML/CSS.
                        </p>
                        <p className="sobre__paragrafo">
                            Minha jornada tem sido impulsionada pela busca
                            constante por aprendizado e pela aplicação prática
                            do que estudo. Desenvolvi projetos fullstack
                            utilizando diferentes tecnologias, incluindo React
                            no frontend com JavaScript no backend, e também
                            projetos onde utilizei Python tanto para a interface
                            quanto para a lógica do servidor. Essas experiências
                            me proporcionaram uma visão ampla sobre
                            desenvolvimento web. Além disso, tenho experiência
                            com automação de processos usando Selenium, análise
                            de dados com Pandas e visualização com Matplotlib e
                            Plotly. Gosto de explorar APIs e integrar diferentes
                            tecnologias para criar soluções eficientes e
                            impactantes.
                        </p>
                        <p className="sobre__paragrafo">
                            Estou sempre acompanhando tendências do setor e
                            refinando minhas habilidades. Se você busca alguém
                            para trocar ideias ou construir algo inovador, vamos
                            conversar! 🚀
                        </p>
                    </div>
                </div>
            </section>

            <section className="fim"></section>

            <aside
                className="projetos__fechar"
                onClick={(e) => document.body.classList.remove("pj")}
            >
                <FontAwesomeIcon icon={faCircleXmark} />
            </aside>

            <div className="projetos">
                <div className="projetos__grid">
                    {projetos.map((v, i) => (
                        <Projeto {...v} key={i} />
                    ))}
                </div>
            </div>

            <aside className="contato open">
                <FontAwesomeIcon
                    className="contato__imagem plus"
                    icon={faPlus}
                    onClick={(e) =>
                        e.currentTarget.parentElement.classList.toggle("open")
                    }
                />
                <div className="contato__container">
                    <a
                        target="_blank"
                        href="https://github.com/edsoncarvalhointuria"
                    >
                        <FontAwesomeIcon
                            className="contato__imagem"
                            icon={faGithub}
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://br.linkedin.com/in/edson-carvalho-inturia-1442a0129"
                    >
                        <FontAwesomeIcon
                            className="contato__imagem"
                            icon={faLinkedin}
                        />
                    </a>
                </div>
            </aside>
        </main>
    );
}

export default Home;
