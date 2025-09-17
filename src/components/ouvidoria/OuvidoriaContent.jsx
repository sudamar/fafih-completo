import { useState } from 'react';
import styles from './OuvidoriaContent.module.css';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Sua manifestação foi enviada com sucesso! Retornaremos em até 10 dias úteis.');
  };

  return (
    <section className="page-section">
      <div className="container">
        <h1>Ouvidoria FAFIH</h1>

        <div className="conheca-intro">
          <p>A Ouvidoria da FAFIH é um canal de comunicação direta entre a comunidade acadêmica e a instituição. Aqui você pode registrar elogios, sugestões, reclamações ou denúncias de forma segura e confidencial.</p>
        </div>

        <div className={styles.ouvidoriaContent}>
          <div className={styles.ouvidoriaInfo}>
            <div className={styles.infoCard}>
              <h2>O que é a Ouvidoria?</h2>
              <p>A Ouvidoria é um órgão independente que tem como função receber, analisar e encaminhar manifestações da comunidade acadêmica, promovendo a melhoria contínua dos serviços prestados pela FAFIH.</p>
            </div>

            <div className={styles.infoCard}>
              <h2>Tipos de Manifestação</h2>
              <ul>
                <li><strong>Elogio:</strong> Reconhecimento por serviços bem prestados</li>
                <li><strong>Sugestão:</strong> Propostas para melhoria dos serviços</li>
                <li><strong>Reclamação:</strong> Insatisfação com serviços ou atendimento</li>
                <li><strong>Denúncia:</strong> Irregularidades ou violações de direitos</li>
                <li><strong>Solicitação:</strong> Pedidos de informações ou esclarecimentos</li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h2>Nossos Compromissos</h2>
              <ul>
                <li>Resposta em até <strong>10 dias úteis</strong></li>
                <li>Confidencialidade e sigilo garantidos</li>
                <li>Tratamento imparcial e transparente</li>
                <li>Acompanhamento até a resolução</li>
              </ul>
            </div>
          </div>

          <div className={styles.ouvidoriaForm}>
            <h2>Registre sua Manifestação</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="identificacao">Tipo de Identificação:</label>
                  <select
                    id="identificacao"
                    name="identificacao"
                    value={formData.identificacao}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="identificado">Identificado</option>
                    <option value="anonimo">Anônimo</option>
                  </select>
                </div>
              </div>

              {formData.identificacao === 'identificado' && (
                <>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="nome">Nome Completo: *</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">E-mail: *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="telefone">Telefone:</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="vinculo">Vínculo com a FAFIH:</label>
                      <select
                        id="vinculo"
                        name="vinculo"
                        value={formData.vinculo}
                        onChange={handleInputChange}
                      >
                        <option value="">Selecione...</option>
                        <option value="aluno">Aluno</option>
                        <option value="professor">Professor</option>
                        <option value="funcionario">Funcionário</option>
                        <option value="ex-aluno">Ex-aluno</option>
                        <option value="comunidade">Comunidade Externa</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="tipoManifestacao">Tipo de Manifestação: *</label>
                  <select
                    id="tipoManifestacao"
                    name="tipoManifestacao"
                    value={formData.tipoManifestacao}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="elogio">Elogio</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="denuncia">Denúncia</option>
                    <option value="solicitacao">Solicitação de Informação</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="assunto">Assunto: *</label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    placeholder="Resuma o assunto da sua manifestação"
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="mensagem">Mensagem: *</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Descreva detalhadamente sua manifestação..."
                    rows="6"
                    required
                  ></textarea>
                </div>
              </div>

              <div className={styles.formActions}>
                <button type="submit" className={styles.btnSubmit}>
                  Enviar Manifestação
                </button>
                <button type="button" className={styles.btnReset} onClick={() => setFormData({
                  nome: '',
                  email: '',
                  telefone: '',
                  vinculo: '',
                  tipoManifestacao: '',
                  assunto: '',
                  mensagem: '',
                  identificacao: 'identificado'
                })}>
                  Limpar Formulário
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className={styles.ouvidoriaContact}>
          <h2>Outros Canais de Contato</h2>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <h3>Telefone</h3>
              <p>(11) 3807-2041</p>
            </div>
            <div className={styles.contactItem}>
              <h3>E-mail</h3>
              <p>ouvidoria@fafih.edu.br</p>
            </div>
            <div className={styles.contactItem}>
              <h3>Horário de Atendimento</h3>
              <p>Segunda a Sexta<br/>das 8h às 18h</p>
            </div>
          </div>
        </div>

        <div className="page-actions">
          <a href="/" className="btn-page-action btn-secondary">Voltar</a>
        </div>
      </div>
    </section>
  );
};

export default OuvidoriaContent;