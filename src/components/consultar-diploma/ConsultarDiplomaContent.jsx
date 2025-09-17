import { useState } from 'react';

const ConsultarDiplomaContent = () => {
  const [formData, setFormData] = useState({
    cpf: '',
    nome: '',
    dataNascimento: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados para consulta:', formData);
  };

  return (
    <section className="page-section">
      <div className="container">
        <h1>Consultar Diploma</h1>

        <div className="consulta-intro">
          <p>Utilize o sistema abaixo para consultar a autenticidade de diplomas emitidos pela FAFIH. Esta ferramenta permite verificar se um diploma foi realmente emitido por nossa instituição.</p>
        </div>

        <div className="content-section">
          <h2>Como Consultar</h2>
          <p>Para realizar a consulta, preencha todos os campos obrigatórios abaixo com as informações exatas que constam no diploma. Certifique-se de que os dados estão corretos para garantir a precisão da consulta.</p>
        </div>

        <div className="consulta-form-container">
          <h2>Formulário de Consulta</h2>
          <form className="consulta-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cpf">CPF do Diplomado *</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleInputChange}
                placeholder="000.000.000-00"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nome">Nome Completo do Diplomado *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Digite o nome completo conforme consta no diploma"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dataNascimento">Data de Nascimento *</label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="checkbox-container">
              <input type="checkbox" id="termos" name="termos" required />
              <label htmlFor="termos">
                Declaro que as informações fornecidas são verdadeiras e estou ciente de que o uso indevido deste sistema pode caracterizar falsidade ideológica.
              </label>
            </div>

            <button type="submit" className="btn-submit">Consultar Diploma</button>
          </form>
        </div>

        <div className="content-section">
          <h2>Informações Importantes</h2>

          <h3>Sobre a Consulta</h3>
          <ul>
            <li>A consulta é gratuita e pode ser realizada a qualquer momento</li>
            <li>Os dados fornecidos devem ser exatamente iguais aos que constam no diploma</li>
            <li>A consulta retorna apenas informações sobre a validade do documento</li>
            <li>Em caso de dúvidas, entre em contato com nossa secretaria acadêmica</li>
          </ul>

          <h3>Proteção de Dados</h3>
          <p>Todas as informações fornecidas são tratadas com confidencialidade e utilizadas exclusivamente para fins de verificação da autenticidade do diploma. Os dados não são armazenados após a consulta e são protegidos de acordo com a Lei Geral de Proteção de Dados (LGPD).</p>

          <h3>Documentos Válidos</h3>
          <p>Este sistema consulta apenas diplomas de cursos de graduação, pós-graduação e extensão emitidos pela FAFIH - Faculdade de Artes, Filosofia e do Imaginário Humano a partir do ano de sua criação.</p>
        </div>

        <div className="content-section">
          <h2>Dúvidas ou Problemas?</h2>
          <p>Se você encontrou algum problema durante a consulta ou tem dúvidas sobre o processo, entre em contato conosco:</p>

          <div className="contact-info">
            <div className="contact-item-info">
              <strong>E-mail:</strong> secretaria@fafih.edu.br
            </div>
            <div className="contact-item-info">
              <strong>Telefone:</strong> (11) 3456-7890
            </div>
            <div className="contact-item-info">
              <strong>Horário:</strong> Segunda a sexta, das 8h às 18h
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Orientações Gerais</h2>

          <h3>Para Empregadores</h3>
          <p>Empregadores podem utilizar este sistema para verificar a autenticidade de diplomas apresentados por candidatos ou funcionários. A consulta é rápida e confiável.</p>

          <h3>Para Estudantes e Egressos</h3>
          <p>Estudantes e egressos podem utilizar este sistema para verificar se seus diplomas estão devidamente registrados em nosso sistema. Em caso de inconsistências, procure imediatamente nossa secretaria acadêmica.</p>

          <h3>Validade Legal</h3>
          <p>Os diplomas emitidos pela FAFIH têm validade nacional e seguem todas as normas estabelecidas pelo Ministério da Educação (MEC). Nossa instituição é devidamente credenciada e todos os cursos são reconhecidos pelos órgãos competentes.</p>
        </div>
      </div>
    </section>
  );
};

export default ConsultarDiplomaContent;