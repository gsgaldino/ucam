import React from 'react';
import LandingPage from '../components/LandingPage';


export default function CIFHomepage(){

  const modulos = () => (
    <React.Fragment>
      <ol>
          <li><strong>Ti e Negócio de Mãos Dadas</strong>
            <ul>
              <li>
                <strong>Módulo certificação ITIL Foundation 1:</strong>
                <p>introdução ao gerenciamento de ti;</p>
              </li>

              <li>
                <strong>Módulo certificação ITIL Foundation 2:</strong>
                <p>estratégias e desenho de serviços;</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>entenda o que é o ITIL e saiba quando usá-lo - blog da alura;</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>concurso público na área de ti: como se preparar? - blog da alura;</p>
              </li>

              <li>
                <strong>Social alura cursos online:</strong>
                <p>alura live - certificações | facebook</p>
              </li>

            </ul>
          </li>

          <li><strong>Conhecendo a Melhoria Contínua Para Alavancar o Negócio</strong>
            <ul>
              <li>
                <strong>Módulo certificação ITIL Foundation 3:</strong>
                <p>transição e operação de serviço;</p>
              </li>

              <li>
                <strong>Módulo certificação ITIL Foundation 4:</strong>
                <p>melhoria contínua de serviço.</p>
              </li>

            </ul>
          </li>
          
        </ol>
    </React.Fragment>
  )

  return (
    <React.Fragment>

      <LandingPage
        titulo="Certificação ITIL Foundation"
        formId="250e0624-0ad5-4154-993f-6ebd071ddf52"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-certificacao-itil-foundation"
        cargaHoraria="50 horas"
        inicio="Agosto/2020"
        modalidade="100% on-line"
        investimento="R$ 630,00"
        objetivoDoCurso="O curso tem como objetivo desenvolver e habilitar o profissional para gerenciar serviços de TI com a estratégia de desenvolvimento da empresa, propondo uma melhora na qualidade do serviço, da infraestrutura e redução dos custos."
        
        paraQuemSeDestina="O curso é voltado para profissionais formados em Tecnologia da Informação, Ciência da computação e Análise de sistemas que já trabalham com isso, mas precisam aprimorar suas habilidades ou profissionais interessados em aprender sobre ITIL."
        modulos={modulos()}
      />

    </React.Fragment>
  )
}





