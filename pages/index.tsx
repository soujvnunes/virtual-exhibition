import { Button, Typography } from "ui";

const texts = [
  "A Universidade Federal de Alagoas completa 60 anos. Uma história que está enraizada na vida do povo alagoano. Comemoramos esta data com a certeza de que seguimos cumprindo o nosso dever institucional de fazer a diferença para o nosso povo. A medida da grandeza de uma instituição está em seu potencial de transformar realidades e este potencial desenvolvemos, ao longo das últimas seis décadas, com maestria.",
  "Colocamos nossos valores na formação de cada estudante que ingressa nos nossos cursos e trabalhamos exaustivamente para sermos motivo de orgulho para nossa gente. Olhar para Alagoas é perceber que existe um pedacinho da Ufal em cada lugar: estamos presente no saber que nossos egressos levam ao exercer suas profissões em cada canto dos 102 municípios do nosso estado e por que não dizer do nosso país. Mas nossa importância ultrapassa os muros da Universidade e vai além dos profissionais que colocamos no mercado de trabalho. Somos Alagoas.",
  "Somos Alagoas. Somos a arte fomentada pelos nossos equipamentos culturais, somos as pesquisas que dão respostas pelas quais nossa sociedade anseia, somos os projetos de extensão que alteram a realidade do nosso entorno, somos a saúde das pessoas de quem cuidamos no nosso Hospital Universitário. Somos as vidas que ajudamos a mudar, a transformar pela educação. Somos as pessoas assistidas pela Universidade Federal de Alagoas. Somos histórias, somos memórias, somos raízes!",
];

export default function Home() {
  return (
    <>
      <Typography variant="h2" color="text" state="focused">
        Uma história enraizada na vida do povo alagoano
      </Typography>
      
      {texts.map((text) => (
        <Typography key={text} variant="p" color="text">
          {text}
        </Typography>
      ))}
    </>
  );
}
