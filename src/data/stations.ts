export type Tier = 'tier1' | 'tier2' | 'tier3';

export interface Station {
  id: number;
  tier: Tier;
  title: string;
  subtitle: string;
  sections: {
    heading: string;
    items: string[];
  }[];
  project: string;
  projectLabel?: string;
  criteria: string;
}

export const stations: Station[] = [
  {
    id: 1,
    tier: 'tier1',
    title: 'Engenharia de Prompts',
    subtitle: 'Base mínima — todas as outras habilidades pressupõem esta',
    sections: [
      {
        heading: 'Caminho de aprendizado',
        items: [
          'Ler os guias gratuitos de prompting da Anthropic e da OpenAI.',
          'Dedicar uma semana reescrevendo seus piores prompts.',
        ],
      },
      {
        heading: 'Técnicas centrais',
        items: [
          'Atribuição de função (dizer ao modelo quem ele é e para quem escreve).',
          'Prompts com poucos exemplos (few-shot).',
          'Raciocínio passo a passo antes de responder.',
          'Estrutura de saída definida.',
        ],
      },
    ],
    project:
      'Assistente de personalização de currículos — usa um prompt bem elaborado para reescrever seu currículo conforme a descrição de vaga inserida.',
    criteria:
      'O assistente reescreve o currículo de forma consistente para diferentes vagas, usando as 4 técnicas acima.',
  },
  {
    id: 2,
    tier: 'tier1',
    title: 'Automação com IA',
    subtitle: 'Maior impacto por esforço — sem programar',
    sections: [
      {
        heading: 'Caminho de aprendizado',
        items: [
          'Escolher o n8n (indicado no roteiro por ser open-source e auto-hospedável).',
          'Seguir um tutorial gratuito no YouTube.',
          'Automatizar uma tarefa real do seu dia a dia — problemas reais ensinam mais rápido que tutoriais.',
        ],
      },
      {
        heading: 'Áreas com retorno mais claro',
        items: [
          'Triagem de e-mails e redação de respostas',
          'Qualificação de leads e atualizações de CRM',
          'Extração de dados de faturas e recibos',
          'Fluxos de reaproveitamento de conteúdo',
        ],
      },
    ],
    project: 'Automação de e-mail que lê mensagens recebidas e envia um resumo diário.',
    criteria: 'A automação roda sem sua intervenção manual.',
  },
  {
    id: 3,
    tier: 'tier1',
    title: 'Usando APIs de IA',
    subtitle: 'Aqui entra o Python básico',
    sections: [
      {
        heading: 'Caminho de aprendizado',
        items: [
          'Aprender Python básico em um curso para iniciantes no YouTube.',
          'Seguir a documentação de início rápido da API Claude ou OpenAI.',
          'Opcional: usar um editor de código de IA (ex.: Cursor) para facilitar.',
        ],
      },
      {
        heading: 'Conceitos essenciais',
        items: [
          'Chaves de API',
          'Prompts do sistema',
          'Parâmetros (temperatura, tokens)',
          'Saídas estruturadas (JSON limpo)',
        ],
      },
    ],
    project:
      'Resumidor de linha de comando que recebe a URL de um artigo e retorna os pontos principais.',
    criteria:
      'Script funcional rodando via terminal (o documento estima menos de uma hora para isso).',
  },
  {
    id: 4,
    tier: 'tier1',
    title: 'Fluxos de Trabalho de IA',
    subtitle: 'De um "truque" para um "sistema"',
    sections: [
      {
        heading: 'Conceito central',
        items: [
          'Encadear várias etapas em um pipeline, cada uma com função específica — em vez de um único prompt sobrecarregado.',
          'Exemplo do texto: extrair afirmações → verificar cada uma → redigir rascunho → reescrever com linguagem da marca.',
        ],
      },
      {
        heading: 'Dois hábitos cruciais',
        items: [
          'Roteamento: entradas fáceis vão para modelo barato, casos difíceis para modelo caro.',
          'Pontos de verificação humana: aprovação humana antes de saídas importantes.',
        ],
      },
      {
        heading: 'Ferramentas',
        items: ['Python com frameworks como LangChain', 'Ou visualmente no n8n (mesma ferramenta da etapa 2)'],
      },
    ],
    project:
      'Pipeline de reaproveitamento que transforma uma postagem de blog em post de LinkedIn, sequência de tweets e resumo de newsletter — cada saída como etapa própria.',
    criteria:
      'Etapas testáveis e depuráveis separadamente (não um prompt único), com o pipeline de reaproveitamento funcional.',
  },
  {
    id: 5,
    tier: 'tier2',
    title: 'Modelos de Código Aberto',
    subtitle: 'Ter o modelo em mãos, não alugado',
    sections: [
      {
        heading: 'O que são',
        items: [
          'Modelos de peso aberto que podem ser baixados e executados por você mesmo: Llama (Meta), DeepSeek, Qwen (Alibaba), Gemma (Google), Mistral.',
          'Conceitos a entender: inferência, contagem de parâmetros e quantização.',
        ],
      },
      {
        heading: 'Por que empresas se importam',
        items: [
          'Privacidade — equipes de saúde, finanças e jurídico muitas vezes não podem enviar dados a uma API externa.',
          'Custo — em alto volume, hospedagem própria pode reduzir significativamente o preço por token.',
        ],
      },
      {
        heading: 'Caminho de aprendizado',
        items: [
          'Instalar o Ollama e rodar um comando para ter um modelo local.',
          'Alternativa com interface amigável: LM Studio.',
          'Navegar pelo Hugging Face, o hub onde quase todos os modelos abertos estão disponíveis.',
        ],
      },
    ],
    project:
      'Assistente de notas totalmente privado que responde perguntas sobre seus arquivos sem que nada saia do seu computador.',
    criteria:
      'Um modelo 8B quantizado rodando localmente, respondendo com base nos seus próprios arquivos, sem chamadas externas.',
  },
  {
    id: 6,
    tier: 'tier2',
    title: 'RAG (Retrieval Augmented Generation)',
    subtitle: 'A habilidade individual mais requisitada no mercado, segundo o texto',
    sections: [
      {
        heading: 'Conceito central',
        items: [
          'Permite que o modelo responda usando conhecimento com o qual nunca foi treinado: documentos da empresa, PDFs, dados recentes.',
          'Em vez de esperar que o modelo tenha memorizado algo, você recupera o texto relevante e o fornece como contexto no momento da pergunta.',
        ],
      },
      {
        heading: 'Dois conceitos que sustentam',
        items: [
          'Embeddings: convertem texto em números que capturam significado.',
          'Banco de dados de vetores (Pinecone, Chroma, Qdrant ou pgvector no Postgres).',
        ],
      },
      {
        heading: 'Pipeline em 4 etapas',
        items: [
          'Dividir documentos em partes (chunking)',
          'Converter cada parte em um embedding',
          'Armazenar os embeddings em um banco de dados vetorial',
          'Recuperar as partes mais relevantes para cada pergunta e passá-las ao modelo',
        ],
      },
      {
        heading: 'O que separa júnior de sênior',
        items: [
          'Estratégia de segmentação (chunking), busca híbrida (palavra-chave + semântica) e reclassificação (reranking) dos resultados.',
        ],
      },
      {
        heading: 'Caminho de aprendizado',
        items: [
          'Construir um pipeline em Python puro antes de usar um framework, para entender cada etapa.',
          'Depois, explorar o LlamaIndex — o framework mais completo em recuperação de documentos.',
        ],
      },
    ],
    project:
      'Assistente de PDF — faça upload de um documento, faça perguntas e obtenha respostas citando a passagem original.',
    criteria:
      'As 4 etapas do pipeline funcionando de ponta a ponta, com respostas ancoradas na passagem original recuperada (não inventadas).',
  },
  {
    id: 7,
    tier: 'tier2',
    title: 'Ajuste Fino (Fine-Tuning)',
    subtitle: 'Mudar o comportamento do modelo, não só o que ele sabe',
    sections: [
      {
        heading: 'Conceito central',
        items: [
          'Treina um modelo existente com seus próprios exemplos, alterando seu comportamento permanentemente: estilo, formato, terminologia de domínio.',
          'Se o RAG dá ao modelo uma biblioteca de referência, o ajuste fino o envia para um campo de treinamento.',
        ],
      },
      {
        heading: 'Quando de fato é necessário',
        items: [
          'Você precisa de estilo ou formato consistente em grande escala.',
          'Você quer um modelo pequeno e barato competindo com um modelo grande em tarefa específica.',
          'Suas instruções (prompts) se tornaram monstros incontroláveis.',
        ],
      },
      {
        heading: 'Técnica e ferramentas',
        items: [
          'LoRA (e sua variante econômica em memória, QLoRA): treina um pequeno adaptador sobre um modelo congelado.',
          'Poucas centenas a alguns milhares de exemplos de qualidade + GPU alugada + algumas horas.',
          'Ferramentas: Hugging Face TRL, Axolotl, Unsloth, GPUs alugadas via Google Colab ou RunPod.',
        ],
      },
    ],
    project:
      'Ajustar um pequeno modelo Llama ou Qwen com 500 amostras da sua própria escrita, até que ele escreva com a sua voz.',
    criteria:
      'O modelo ajustado reproduz de forma consistente seu estilo/voz nas saídas, usando LoRA/QLoRA sobre um modelo aberto.',
  },
  {
    id: 8,
    tier: 'tier2',
    title: 'Agentes de IA',
    subtitle: 'De responder para agir',
    sections: [
      {
        heading: 'Conceito central',
        items: [
          'Um agente é um modelo em loop com ferramentas: você define um objetivo, ele decide ações, observa resultados e continua até concluir.',
          'Um fluxo de trabalho segue sua receita; um agente recebe a cozinha e é instruído a preparar o jantar.',
          'Ferramentas são funções que o modelo pode chamar: pesquisar na web, consultar banco de dados, enviar e-mail, executar código.',
        ],
      },
      {
        heading: 'MCP (Model Context Protocol)',
        items: [
          'Padrão aberto que permite que qualquer agente se conecte a qualquer ferramenta sem código de integração personalizado.',
          'Downloads do SDK cresceram de ~2 milhões para 97 milhões por mês em dezesseis meses.',
        ],
      },
      {
        heading: 'Alerta do texto',
        items: [
          'Agentes falham de maneiras criativas; a maioria dos "agentes" em produção são fluxos de trabalho limitados. Saber quando não usar um agente faz parte da habilidade.',
        ],
      },
      {
        heading: 'Caminho de aprendizado',
        items: [
          'Construir primeiro um loop de agente básico em Python (modelo, ferramentas, loop — cerca de 100 linhas).',
          'Depois escolher um framework: LangGraph (controle), CrewAI (velocidade) ou SDK de Agentes Claude (integração profunda com MCP).',
        ],
      },
    ],
    project:
      'Agente de pesquisa que recebe um tópico, pesquisa na web, lê fontes e escreve um relatório citado.',
    criteria:
      'O loop básico (modelo + ferramentas + observação + continuação) funciona sem lógica "mágica" escondida em um framework.',
  },
  {
    id: 9,
    tier: 'tier3',
    title: 'Sistemas Multiagentes',
    subtitle: 'Equipes de especialistas em vez de um generalista sobrecarregado',
    sections: [
      {
        heading: 'Conceito central',
        items: [
          'Divide o trabalho entre agentes especializados: um planejador decompõe a tarefa, um pesquisador coleta informações, um redator elabora o rascunho, um revisor faz a crítica.',
        ],
      },
      {
        heading: 'Padrões de coordenação',
        items: [
          'Supervisor: um agente delega o trabalho e reúne os resultados.',
          'Pipeline: o trabalho flui em linha, cada agente transformando-o.',
          'Debate: os agentes criticam o trabalho uns dos outros para detectar erros.',
        ],
      },
      {
        heading: 'Protocolo A2A',
        items: [
          'Junto ao MCP (para ferramentas), o protocolo A2A (agente para agente) está emergindo como padrão para agentes que delegam tarefas entre equipes e até empresas.',
        ],
      },
      {
        heading: 'Alerta do texto',
        items: [
          'Cada agente adicional aumenta custo, latência e falhas. Regra prática da indústria: use o menor número possível de agentes que funcionem.',
        ],
      },
      {
        heading: 'Ferramentas',
        items: ['CrewAI para protótipos rápidos baseados em funções.', 'LangGraph para controle preciso.'],
      },
    ],
    project:
      'Estúdio de conteúdo com três agentes (pesquisador, redator, editor) produzindo um artigo finalizado a partir de um briefing de uma linha.',
    criteria:
      'Os três agentes têm papéis e contextos bem definidos, coordenados por um dos padrões (supervisor, pipeline ou debate).',
  },
  {
    id: 10,
    tier: 'tier3',
    title: 'Avaliação LLM',
    subtitle: 'Habilidade pouco glamorosa, entre as mais raras e bem recompensadas',
    sections: [
      {
        heading: 'Conceito central',
        items: [
          'Mede se um sistema de IA é realmente bom e se a última alteração o melhorou ou piorou — como um teste unitário para um mundo onde a mesma entrada pode gerar saídas diferentes.',
        ],
      },
      {
        heading: 'Fluxo de trabalho',
        items: [
          'Construir um conjunto de dados com casos de teste realistas.',
          'Definir o que seria uma boa resposta para cada caso.',
          'Executar cada alteração no conjunto de dados e comparar as pontuações.',
        ],
      },
      {
        heading: 'Como pontuar',
        items: [
          'Verificações de código (JSON válido? citação real?), revisão humana e avaliação por um LLM segundo uma rubrica.',
        ],
      },
      {
        heading: 'Caminho de aprendizado',
        items: [
          'Escrever 30 casos de teste para qualquer projeto desta trilha.',
          'Avaliar as saídas manualmente primeiro.',
          'Depois automatizar com um avaliador LLM e comparar os resultados.',
          'Explorar LangSmith, Langfuse (open source) ou DeepEval.',
        ],
      },
    ],
    project:
      'Conjunto completo de avaliações para o assistente de PDF (etapa 6), medindo precisão e verificando se as respostas permanecem fiéis à fonte recuperada.',
    criteria:
      'Você consegue provar, com números, se uma alteração no sistema melhorou ou piorou o resultado — não apenas "parece funcionar".',
  },
  {
    id: 11,
    tier: 'tier3',
    title: 'Implantação do LLM',
    subtitle: 'De "funciona no meu laptop" para "funciona para mil usuários"',
    sections: [
      {
        heading: 'Conceito central',
        items: ['Transforma o projeto em um serviço ativo: um endpoint de API, um aplicativo web, algo com uma URL.'],
      },
      {
        heading: 'Dois caminhos',
        items: [
          'Simples: encapsular uma API de modelo hospedada em seu próprio backend (FastAPI é o padrão em Python), adicionar autenticação e limitação de taxa.',
          'Avançado: servir um modelo de código aberto por conta própria usando vLLM.',
        ],
      },
      {
        heading: 'Detalhes que separam amador de profissional',
        items: [
          'Respostas em fluxo contínuo (streaming), soluções alternativas para interrupções do provedor, limites de custo por usuário.',
        ],
      },
      {
        heading: 'Ferramentas',
        items: ['FastAPI, Docker, vLLM, plataformas em nuvem como Railway ou AWS, Streamlit para interfaces rápidas.'],
      },
    ],
    project:
      'Implantar o assistente de PDF avaliado (etapas 6 e 10) como um aplicativo web público, com login e limite de uso.',
    criteria:
      'O aplicativo está acessível publicamente por uma URL, com autenticação e algum limite de uso — não apenas rodando localmente.',
  },
  {
    id: 12,
    tier: 'tier3',
    title: 'LLMOps',
    subtitle: 'Operar de forma lucrativa por anos, não só abrir o restaurante',
    sections: [
      {
        heading: 'Conceito central',
        items: ['Engloba tudo o que é necessário para operar sistemas de IA em produção ao longo do tempo.'],
      },
      {
        heading: 'Cinco frentes do dia a dia',
        items: [
          'Rastreamento: cada solicitação é registrada para reproduzir exatamente o que o modelo viu e fez.',
          'Painéis: custo, latência e taxas de erro monitorados continuamente.',
          'Avaliação online: amostra do tráfego ao vivo pontuada automaticamente (conecta-se diretamente à etapa 10).',
          'Versionamento de prompts: prompts tratados como código.',
          'Proteções (guardrails): filtros de entrada e saída e, com agentes, autorização para chamadas de ferramentas.',
        ],
      },
      {
        heading: 'Ferramentas',
        items: ['Langfuse ou LangSmith para rastreamento e monitoramento, Helicone para visibilidade de custos, além de Docker e CI/CD básico.'],
      },
    ],
    project:
      'Dar ao aplicativo implantado (etapa 11) todos os recursos de produção: rastreamento em cada solicitação, painel de custos, avaliações automatizadas em tráfego real e um alerta quando a qualidade cair.',
    projectLabel: 'Projeto final',
    criteria:
      'As cinco frentes (rastreamento, painéis, avaliação online, versionamento de prompts, proteções) estão implementadas e conectadas ao mesmo aplicativo.',
  },
];

export const groupDividerLabels: Record<Tier, string> = {
  tier1: 'Etapas 1–4 · o mínimo do escritório',
  tier2: 'Etapas 5–8 · você se torna um construtor',
  tier3: 'Etapas 9–12 · quem as empresas mais disputam',
};

export const tierLegend: { tier: Tier; range: string; description: string }[] = [
  { tier: 'tier1', range: '1–4', description: 'torna você o mais capacitado do escritório' },
  { tier: 'tier2', range: '5–8', description: 'torna você um construtor' },
  { tier: 'tier3', range: '9–12', description: 'torna você quem as empresas mais lutam para contratar' },
];
