import Assets from "public";
import Image from "next/image";
import { AspectRatio, Container, Typography, YoutubeVideo } from "ui";
import { getTributes } from "utils";

const texts = [
  "A Universidade Federal de Alagoas completa 60 anos. Uma história que está enraizada na vida do povo alagoano. Comemoramos esta data com a certeza de que seguimos cumprindo o nosso dever institucional de fazer a diferença para o nosso povo. A medida da grandeza de uma instituição está em seu potencial de transformar realidades e este potencial desenvolvemos, ao longo das últimas seis décadas, com maestria.",
  "Colocamos nossos valores na formação de cada estudante que ingressa nos nossos cursos e trabalhamos exaustivamente para sermos motivo de orgulho para nossa gente. Olhar para Alagoas é perceber que existe um pedacinho da Ufal em cada lugar: estamos presente no saber que nossos egressos levam ao exercer suas profissões em cada canto dos 102 municípios do nosso estado e por que não dizer do nosso país. Mas nossa importância ultrapassa os muros da Universidade e vai além dos profissionais que colocamos no mercado de trabalho. Somos Alagoas.",
  "Somos Alagoas. Somos a arte fomentada pelos nossos equipamentos culturais, somos as pesquisas que dão respostas pelas quais nossa sociedade anseia, somos os projetos de extensão que alteram a realidade do nosso entorno, somos a saúde das pessoas de quem cuidamos no nosso Hospital Universitário. Somos as vidas que ajudamos a mudar, a transformar pela educação. Somos as pessoas assistidas pela Universidade Federal de Alagoas. Somos histórias, somos memórias, somos raízes!",
];

export default function Home() {
  const homageVideo = getTributes()[1];

  return (
    <>
      <Container>
        <Typography variant="h2" color="text" state="focused" gutterBottom>
          Uma história enraizada na vida do povo alagoano
        </Typography>
        {texts.map((text, index) => (
          <Typography
            key={text}
            variant="p"
            color="text"
            gutterBottom={index < 2}
          >
            {text}
          </Typography>
        ))}
      </Container>
      <div className="relative my-4 md:my-6 xl:my-8">
        <Image
          layout="fill"
          className="absolute"
          src={Assets.homageBg}
          alt="Plano de fundo da introdução"
        />
        <Container>
          <AspectRatio ratio="16x9">
            <YoutubeVideo {...homageVideo} />
          </AspectRatio>
        </Container>
      </div>
    </>
  );
}
