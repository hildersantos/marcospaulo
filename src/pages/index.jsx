import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';

// Components
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle, Subtitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';

import avatar from '../images/avatar.jpg';
import manleisanteoni from '../images/manlei-santeoni.jpeg';
import livromp from '../images/livro-mp.jpg';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Olá, <br /> sou Marcos Paulo.
        </BigTitle>
        <Subtitle>
          Sou um designer de Salvador - BA e me interesso por desenvolvimento
          web.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projetos</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Manlei Santeoni"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            img={manleisanteoni}
          >
            Marca criada para o professor de inglês Manlei Santeoni.
            <br />
            Os elementos escolhidos foram baseados na sabedoria (coruja),
            meditação (posição da lótus) e livro (conhecimento).
          </ProjectCard>

          <ProjectCard
            title="Livro - De Aluno a Professor"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #8A2387 0%, #E94057 100%)"
            img={livromp}
          >
            Design de capa e contracapa do livro "De Aluno a Professor", do
            professor de inglês Manlei Santeoni.
          </ProjectCard>
          {/* <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard> */}
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Sobre</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Marcos Paulo" />
          <AboutSub>
            Crio conceitos gráficos há 2 anos. Por isso, me interesso por design
            gráfico e de interação, e meu objetivo é transmitir boas
            experiências com o meu trabalho.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Minha história com o design começa em 2017, com a criação de{' '}
          <em>flyers</em> para divulgação dos produtos de uma loja de
          eletrônicos que trabalhava. A partir daí não parei mais: procurei me
          aprofundar em Corel Draw/Illustrator e nos conceitos de design (como
          tipografia, cores, etc).
          <br />
          Continuo estudando e aprendendo mais a cada dia e atualmente tenho me
          interessado por desenvolvimento web e na criação de experiências de
          usuário únicas.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Entre em contato</Title>
          <ContactText>
            Me mande um <a href="mailto:plizNoSp4m@domain.tld">email</a> ou me
            encontre no{' '}
            <a href="https://twitter.com/marcospaulompbs">Twitter</a>.
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 por Marcos Paulo Bispo. Tema por{' '}
          <a href="https://www.lekoarts.de" target="_blank" rel="nofollow">
            LekoArts
          </a>
          .
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
