import { useState } from 'react';

const OuvidoriaContent = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    vinculo: '',
    tipoManifestacao: '',
    assunto: '',
    mensagem: '',
    identificacao: 'identificado'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Formulário enviado:', formData);
      setSubmitSuccess(true);
      setTimeout(() => {
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          vinculo: '',
          tipoManifestacao: '',
          assunto: '',
          mensagem: '',
          identificacao: 'identificado'
        });
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Ocorreu um erro ao enviar sua manifestação. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="page-section">
      <div className="container">
        <div className="ouvidoria-intro">
          <p>A Ouvidoria da FAFIH é um canal de comunicação direta entre a comunidade acadêmica e a instituição. Aqui você pode registrar elogios, sugestões, reclamações ou denúncias de forma segura e confidencial.</p>
        </div>

        <div className="ouvidoria-grid">
          <div className="ouvidoria-info-cards">
            <div className="info-card">
              <h3>O que é a Ouvidoria?</h3>
              <p>Um órgão independente que recebe, analisa e encaminha manifestações, promovendo a melhoria contínua dos serviços da FAFIH.</p>
            </div>
            <div className="info-card">
              <h3>Nossos Compromissos</h3>
              <ul>
                <li>Resposta em até <strong>10 dias úteis</strong></li>
                <li>Confidencialidade e sigilo garantidos</li>
                <li>Tratamento imparcial e transparente</li>
                <li>Acompanhamento até a resolução</li>
              </ul>
            </div>
          </div>

          <div className="ouvidoria-form-container">
            <h2>Registre sua Manifestação</h2>
            {submitSuccess && (
              <div className="success-message">
                <p>Sua manifestação foi enviada com sucesso! Retornaremos em até 10 dias úteis.</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="ouvidoria-form">
              <div className="form-group">
                <label>Tipo de Identificação</label>
                <div className="radio-group">
                  <label><input type="radio" name="identificacao" value="identificado" checked={formData.identificacao === 'identificado'} onChange={handleInputChange} /> Identificado</label>
                  <label><input type="radio" name="identificacao" value="anonimo" checked={formData.identificacao === 'anonimo'} onChange={handleInputChange} /> Anônimo</label>
                </div>
              </div>

              {formData.identificacao === 'identificado' && (
                <>
                  <div className="form-group">
                    <label htmlFor="nome">Nome Completo *</label>
                    <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleInputChange} placeholder="(XX) XXXXX-XXXX" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="vinculo">Vínculo com a FAFIH</label>
                    <select id="vinculo" name="vinculo" value={formData.vinculo} onChange={handleInputChange}>
                      <option value="">Selecione...</option>
                      <option value="aluno">Aluno</option>
                      <option value="professor">Professor</option>
                      <option value="funcionario">Funcionário</option>
                      <option value="ex-aluno">Ex-aluno</option>
                      <option value="comunidade">Comunidade Externa</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </>
              )}

              <div className="form-group">
                <label htmlFor="tipoManifestacao">Tipo de Manifestação *</label>
                <select id="tipoManifestacao" name="tipoManifestacao" value={formData.tipoManifestacao} onChange={handleInputChange} required>
                  <option value="">Selecione...</option>
                  <option value="elogio">Elogio</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="denuncia">Denúncia</option>
                  <option value="solicitacao">Solicitação de Informação</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="assunto">Assunto *</label>
                <input type="text" id="assunto" name="assunto" value={formData.assunto} onChange={handleInputChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleInputChange} rows="5" required></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Manifestação'}
              </button>
            </form>
          </div>
        </div>

        <div className="ouvidoria-contato">
          <h2>Outros Canais de Contato</h2>
          <div className="contato-grid">
            <div className="contato-item">
              <h3>Telefone</h3>
              <p>(11) 3807-2041</p>
            </div>
            <div className="contato-item">
              <h3>E-mail</h3>
              <p>ouvidoria@fafih.edu.br</p>
            </div>
            <div className="contato-item">
              <h3>Atendimento Presencial</h3>
              <p>Segunda a Sexta, das 8h às 18h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OuvidoriaContent;
