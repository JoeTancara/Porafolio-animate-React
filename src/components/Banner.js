import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    //   const [index, setIndex] = useState(1);
    //const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const toRotate = ["Servicio Técnico de Computadoras", "Asesoria Academica", "Desarrolo de Software"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            // setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            //setIndex(1);
            setDelta(500);
        } else {
            //setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Bienvenido al Mundo de la Tecnologia</span>
                                    <h1>{`"TECNOLOGIC WORLD"`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Servicio Técnico de Computadoras", "Asesoria Academica", "Desarrolo de Software"]'><span className="wrap">{text}</span></span></h1>
                                    <p>"Somos tu aliado en el mundo digital, ofreciendo un completo Servicio Técnico de Computadoras para asegurar el óptimo funcionamiento de tus dispositivos. Además, brindamos Asesoría Académica especializada para potenciar tu aprendizaje y desarrollo. Nuestra pasión por la innovación se refleja en nuestro servicio de Desarrollo de Software, donde creamos soluciones personalizadas para tus necesidades. En nuestro centro, fusionamos la excelencia técnica con el conocimiento académico, proporcionando un enfoque integral que impulsa tu éxito en el ámbito tecnológico y educativo. ¡Confía en nosotros para llevar tu visión a nuevas alturas!"</p>
                                    <button onClick={() => console.log('connect')}>Contactanos <ArrowRightCircle size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> 
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}